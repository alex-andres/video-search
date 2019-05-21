import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <form className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            name="search query"
            placeholder="Search for a Video"
            onChange={this.onInputChange}
            value={this.state.term}
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;
