import React from 'react';
import { FaSearch } from "react-icons/fa";
import  './SearchBar.css';


const SearchBar = () => {
  return (
    <div className="site_header">
      <div className="site_header_search">
          <div className="page_width">
             <form action="" className="site_header_search_form">
                <button type='submit' className="text_link">
                <FaSearch  className="icon"/>
                <span className="icon_fallback_text">Search</span>
                </button>
                <input type="search" name='q' placeholder='Search our Store' className="site_header__search_input" />
             </form>
             <button type='button' id='SearchClose' className="text_link_site_header__search_btn"></button>
          </div>
      </div>
    </div>
  )
}

export default SearchBar
