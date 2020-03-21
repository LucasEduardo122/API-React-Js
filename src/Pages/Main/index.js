import React, { Component } from 'react';
import api from '../../Services/api';
import { Link } from 'react-router-dom';

export default class Main extends Component {
    state = {
        products: [],
    }

    componentDidMount() {
        this.loadProduct();
    }

    loadProduct = async () => {
        const response = await api.get('/products');

        this.setState({ products: response.data.docs });
    }

    render() {
        const { products } = this.state;

        return (
            <div className="list-products">
                {products.map(dados => (
                    <article key={dados._id}>
                        <h2>{dados.title}</h2>
                        <p>{dados.description}</p>
                        <Link to={`/products/${dados._id}`}>Acessar</Link>
                    </article>
                ))}
            </div>
        )
    }
}