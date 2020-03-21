import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import all from './Pages/Main/index';
import product from './Pages/Product/index';

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component= {all}/>
            <Route path="/products/:id" component= {product} />
        </Switch>
    </BrowserRouter>
)

export default Rotas;