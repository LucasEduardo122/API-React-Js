import React, { Component } from 'react';
import api from '../../Services/api';

export default class Product extends Component {
    state = {
        product: [],
    }

    componentDidMount() {
        this.loadProduct();
    }

    loadProduct = async () => {
        const { id } = this.props.match.params;
        const Acsa = await api.get(`/products/${id}`);
        const array = [];

        array.push(Acsa.data);
        
        this.setState({ product: array });
    }

    render() {
        const { product } = this.state;

        return (
            <div className="product-information">
                {product.map(dado => (
                    <article key={dado._id}>
                        <h2>{dado.title}</h2>
                        <p>{dado.createdAt}</p>
                    </article>
                ))}
            </div>
        )
    }
}