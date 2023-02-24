import React, { Component } from "react";

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: "",
            qty: "",
            price: "",
            productsList: []
        };
    }

    componentDidMount() {
        console.log("componetDidMount called");
        fetch("http://localhost:3000/products")
            .then(res => res.json())
            .then(f => this.setState({ productsList: f }));
    }
    viewSpecifiProduct(id) {

        fetch("http://localhost:3000/products/" + id)
            .then((res) => res.json())
            .then((p) => {

                if (id === p.id) {
                    this.setState({ id: p.id });
                    this.setState({ name: p.name });
                    this.setState({ qty: p.qty });
                    this.setState({ price: p.price })


                } else {
                    alert("No proper id selected")
                }
            })
    }
    updateProduct(id) {
        alert(id)
        let reqOptions = {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "name": this.state.name,
                "qty": this.state.qty,
                "price": this.state.price
            })
        };

        fetch("http://localhost:3000/products/" + id, reqOptions)
            .then(resp => resp.json())
            .then(window.location.reload())
    }

    deleteProduct(id) {
        fetch("http://localhost:3000/products/" + id, { method: "DELETE" })
            .then(window.location.reload())
    }
    render() {
        return (
            <div className='container'>
                <div className="card m-3">
                    <div className='card-header'>
                        <p className="h3 text-center">List of Products</p>
                    </div>
                    <div className='card-body'>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                    <th colSpan={2}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.productsList.map((data, key) =>
                                    <tr key={key}>
                                        <th>{data.id}</th>
                                        <th>{data.name}</th>
                                        <th>{data.qty}</th>
                                        <th>{data.price}</th>
                                        <th>
                                            {/* onClick={() => this.updateProduct(data.id)} */}
                                            <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => this.viewSpecifiProduct(data.id)}>Update</button> &nbsp; &nbsp;
                                            <button className="btn btn-danger" onClick={() => this.deleteProduct(data.id)}>Delete</button>


                                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Update Product</h1>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <form>
                                                                <label className="form-label" for="productid">Product Id</label>
                                                                <input type="text" id="productid" className="form-control" value={this.state.id} readOnly placeholder="Product Id" ></input><br />
                                                                <label className="form-label">Product Name</label>
                                                                <input type="text" className="form-control" value={this.state.name} placeholder="Product Name" onChange={(e) => this.setState({ name: e.target.value })}></input><br />
                                                                <label className="form-label">QTY</label>
                                                                <input type="text" className="form-control" value={this.state.qty} placeholder="QTY" onChange={(e) => this.setState({ qty: e.target.value })}></input><br />
                                                                <label className="form-label">Price</label>
                                                                <input type="text" className="form-control" value={this.state.price} placeholder="Price" onChange={(e) => this.setState({ price: e.target.value })}></input><br />
                                                                {/* <button className="btn btn-primary" onClick={(e) => this.createProduct(e)}>Submit</button> */}
                                                            </form>
                                                        </div>

                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            <button type="button" class="btn btn-primary" onClick={() => this.updateProduct(this.state.id)}>Save changes</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </th>
                                    </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}
export default ProductList;