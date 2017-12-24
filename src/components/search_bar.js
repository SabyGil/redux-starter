import React, { Component } from 'react';
//const Component = React.Component;

class SearchBar extends React.Component {
  constructor(){
    super();
      this.state = {
        term: ''
      }
      // this.onInputChange = this.onInputChange.bind(this);
  }
  // onInputChange(term){
  //   this.setState({
  //     term: event.target.value
  //   });
  //   this.props.onSearchTermChange(term);
  // }
  // <input onChange={(event) => this.onInputChange(event)}
  // value={this.state.term} />

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render(){

    return (
      <div className="search-bar">
        <input onChange={(event) => this.onInputChange(event.target.value)}
        value={this.state.term}
        />
      </div>
    );
  }

}

export default SearchBar;
