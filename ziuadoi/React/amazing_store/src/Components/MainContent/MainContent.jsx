import React from 'react';
import './MainContent.css';
import Sidebar from '../Sidebar/Sidebar';


class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: {
                FACE:   ['Creams & gels', 'Patches', 'Emulsions', 'Toners', 'Face cleansing', 'Makeup removal', 'Scrubs', 'Peeling', 'Masks'],
                BODY:   [],
                FOOT:   [],
                HANDS:  [],
                HAIR:   [],
                MAKEUP: [],
            }
        }
    }

    render() {
        return(
            <>
                <div>MainContent</div>
                <Sidebar
                categories={this.state.categories} 
                disabled = {false}
                hidden={false}
                title={"All categories"}
                />
            </>

            )
    }
}







export default MainContent;