import React, { Component } from "react";

class CreateProduct extends Component {
    state = {
        id: "",
        name: "",
        qty: "",
        price: ""
    }
    createProduct(e) {
        e.preventDefault();
        const reqOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "id": this.state.id,
                "name": this.state.name,
                "qty": this.state.qty,
                "price": this.state.price

            })
        };
        fetch("http://localhost:3000/products", reqOptions)
            .then(resp => resp.json())
            .then(() => window.location.reload())
    }
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className='card-header'>
                        <p className="h3 text-center">Add Product</p>
                    </div>
                    <div className="card-body">
                        <form>
                            {/* <label className="form-label" for="productid">Product Id</label> */}
                            <input type="text" id="productid" className="form-control" placeholder="Product Id" defaultvalue={this.state.id} onChange={(e) => this.setState({ id: e.target.value })}></input><br />
                            {/* <label className="form-label">Product Name</label> */}
                            <input type="text" className="form-control" placeholder="Product Name" defaultvalue={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}></input><br />
                            {/* <label className="form-label">Product Qty</label> */}
                            <input type="text" className="form-control" placeholder="QTY" defaultvalue={this.state.qty} onChange={(e) => this.setState({ qty: e.target.value })}></input><br />
                            {/* <label className="form-label">Product Price</label> */}
                            <input type="text" className="form-control" placeholder="Product Price" defaultvalue={this.state.price} onChange={(e) => this.setState({ price: e.target.value })}></input><br />
                            <button className="btn btn-primary" onClick={(e) => this.createProduct(e)}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreateProduct;