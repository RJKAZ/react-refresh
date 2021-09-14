import React from 'react';

// create a function that loads content from the Open Libary API.
// This will use the browsers fetch() api to get data from a server and return a JavaScript Primise that resolves with the servers response

const baseUrl = 'http://openlibrary.org';

export function searchBooks(query) {
  const url = new URL(baseUrl + '/search.json');
  url.searchParams.append('title', query);

  return fetch(url).then((response) => response.json());
}

const Search = () => {
  // this first line calls React.useState() to obtain a stateful variable. useState() retruns an array with two entries
  const [results, setResults] = React.useState(0);

  const handleSearch = (event) => {
    searchBooks(event.target.value).then((response) => {
      setResults(response.docs);
    });
  };

  const resultList = (results || []).map((book) => (
    <tr key={book.key}>
      <td>{book.title}</td>
      <td>{book.author_name && book.author_name.join(', ')}</td>
      <td>{book.first_publish_year}</td>
    </tr>
  ));

  return (
    <div>
      <div className='search-input'>
        <input onChange={handleSearch} type='text' placeholder='Search' />
      </div>
      <h1 className='h1'>Search Results</h1>
      <div className='books'>
        <table>
          <thread>
            <tr>
              <th className='title-col'>Title</th>
              <th className='author-col'>Author</th>
              <th className='year-col'>Pub Year</th>
            </tr>
          </thread>
          <tbody>{resultList}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Search;
// left off at starting the authentification
// https://developer.okta.com/blog/2020/08/26/react-hooks
