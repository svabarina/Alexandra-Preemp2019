import React from 'react';
import './Sidebar.css';


const Sidebar = (props) => {
    const categories = Object.keys(props.categories);
    const subcategs = Object.values(props.categories);
    return (
        <div className="sidebar-container">
            <span style={{float:'right', marginBottom: "10px"}}>{'All categories'}</span>
            {categories.map((category, index) => {
                category.subcategs.map((subcateg, index2) => {
                return (
                <div>
                <button key={index} className="button-category-name">{category}</button>
                <button key={index2} className="button-subcategs-name">{subcateg}</button>
                </div>
                )}
                )}
            )}
        </div>
    )
}


// ideas.map(val => {
//     val.premises.map(x => {
//     });
// });

export default Sidebar;
