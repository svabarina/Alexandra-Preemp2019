import React from 'react';
import './Searchbar.css';


class Searchbar extends React.Component {
    render () {
        return <div className="searchBar">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search products by SKU or name" />
    </div>
    }
}




export default Searchbar;