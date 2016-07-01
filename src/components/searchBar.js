import React, { Component } from 'react';

class SearchBar extends Component {
  //only class based functions have state
  constructor(props){
    super(props);
    this.state = {term:''};
  }
  //render function must return jsx
  render() {
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(search) {
    this.setState({term: search});
    this.props.onSearchTermChange(search);
  }
}

export default SearchBar;
