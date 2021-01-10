import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileSearh: false
    }
    this.ref = React.createRef();
    this.activeSearch = this.activeMobileSearch.bind(this);
    this.deactivateSeach = this.deactiveMobileSearch.bind(this);
  }

  activeMobileSearch() {
    this.setState({mobileSearh: true})
  }
  
  deactiveMobileSearch() {
    this.setState({mobileSearh: false});
    this.ref.current.value = "";
    this.props.handleResetSearch();
  }

  render() {
    return (
      <div className="search">
        <a className="mobile-search"
          onClick={this.activeSearch}
         href="#"
        >
          <img src="https://res.cloudinary.com/sivadass/image/upload/v1494756966/icons/search-green.png" alt="Search" />
        </a>
        <form 
          action="#"
          method="get" 
          className={this.state.mobileSearh ? "search-form active" : "search-form"}
        >
          <a className="back-button" 
            href="#"
            onClick={this.deactivateSeach}
          >
            <img src="https://res.cloudinary.com/sivadass/image/upload/v1494756030/icons/back.png" alt="Back" />
          </a>
          <input
            ref={this.ref}
            type="search"
            placeholder="Search for Vegetables and Fruits"
            className="search-keyword"
            onChange={this.props.handleSearch}
          />
          <button type="submit" className="search-button"></button>
        </form>
      </div>
    );
  }
}

export default Search;