import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    //setting up state
    this.state = {
      userInput: '',
      list: [],
    };
  }

  // Set a user input value
  updateInput(value) {
    this.setState({
      userInput: value,
    });
  }

  // add item if user input is not empty

  addItem() {
    if (this.state.userInput !== '') {
      const userInput = {
        // add a random id which is used to delete
        id: Math.random(),

        // add a user value to list
        value: this.state.userInput,
      };

      // update list
      const list = [...this.state.list];
      list.push(userInput);

      // reset state
      this.setState({
        list,
        userInput: '',
      });
    }
  }

  // function to delete item from list use id to delete

  deleteItem(key) {
    const list = [...this.state.list];

    // filter values and leave value which we need to delete

    const updateList = list.filter((item) => item.id !== key);

    //update list in state
    this.setState({
      list: updateList,
    });
  }

  render() {
    return (
      <>
        <h1>Class Based To Do List</h1>
        <hr />
        <div>
          <input
            type='text'
            placeholder='add item . . . '
            value={this.state.userInput}
            onChange={(item) => this.updateInput(item.target.value)}
          />
          <input type='button' onClick={() => this.addItem()} value='ADD' />
        </div>
        <div>
          <ul>
            {/* map over and print items*/}
            {this.state.list.map((item) => {
              return (
                <li key={item.id} onClick={() => this.deleteItem(item.id)}>
                  {item.value}
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
