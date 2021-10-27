import React, { useEffect, useState } from 'react';

// in this component I will populate the list and

function List() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return <div></div>;
}

export default List;
