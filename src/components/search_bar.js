"use strict";

import React, { Component } from 'react';

// functional component NO STATE
// const SearchBar = () =>{
//   return <input />
// };

// class component that gets components defined in React
// good for components that need multiple functionality
// has state object
class SearchBar extends Component {
  // initialize state
  constructor(props){
    super(props);

    this.state = { term: ''};
  }

    // onChange is react defined event
  render(){
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }

  // event handler
  // onInputChange(event){
  //   this.setState({ term: event.target.value });
  // }
}

// was in render/return
// // Value of the input: {this.state.term}

export default SearchBar;
