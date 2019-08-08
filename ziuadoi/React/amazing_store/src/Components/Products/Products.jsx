import React from 'react'
import './Products.css'
class Products extends React.Component {
    state = {
        products: []
    }
    componentWillMount = async () => {
        const response = await fetch('/products');
        const rawData = await response.json();
        const products = rawData.data;
        console.log(products)
        this.setState({ products })
    }
    render() {
        // console.log(this.state.contacts);
        debugger;
        return (
            <div id="products">
                {this.state.products && this.state.products.map((prod, index) =>
                    <div key={index} className="product" id="prod1">
                        <img src={`/img/${prod.img}`} alt="body cream" className="product-img" />
                        <h4>{prod.name}</h4>
                        <span className="price">{prod.price}</span>
                    </div>
                )}
            </div>
        )
    }
}
export default Products