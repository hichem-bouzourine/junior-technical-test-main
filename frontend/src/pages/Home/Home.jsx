import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../Components/ProductCard/ProductCard';
import {getProducts} from '../../services/ProductService'
import Grid from '@mui/material/Grid';

import './Home.css'

Modal.setAppElement('#root');

const Mainpage = () => {
    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getProducts().then((response) => {
            setProducts(response.data);
        })
    }, [])    

    const handleAddProduct = () => {
        navigate('/product/create');
    }

  return (
    <div>
        <div className="home-header">
                <div className="app-title">Mes produits</div>
                <button className='product-add-button' onClick={handleAddProduct}>Ajouter un produit</button>
            
        </div>

        <div className="home-content">
            <h1>Afficher la liste des produits</h1>
            <Grid container spacing={3}>
                {products.map((product) => {                        
                    return <ProductCard product={product} />
                })}
            </Grid>
        </div>

        <Modal>
            <div>Use ProductForm Component</div>
        </Modal>
    </div>
  )
}

export default Mainpage