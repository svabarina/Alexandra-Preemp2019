import React from 'react';
import './Sidebar.css';


// class Sidebar extends React.Component {
//     render () {
//         console.log(this.props);
//         return null;
//     }
// }

const Sidebar = (props) => {
    const categories = Object.keys(props.categories);
    return (
        <div className="sidebar-container">
            {categories.map((category, index) => {
                return <button key={index} className="button-category-name">{category}</button>
            })}
        </div>
    )
}



export default Sidebar;