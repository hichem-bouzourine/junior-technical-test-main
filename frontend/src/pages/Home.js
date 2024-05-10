import React from 'react'
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

Modal.setAppElement('#root');

const Mainpage = () => {
    const navigate = useNavigate();

    const handleAddProduct = () => {
        navigate('/product/create');
    }

  return (
    <div>
        <div className="app-header">
            <div className="app-title">Mes produits</div>
            <button className='product-add-button' onClick={handleAddProduct}>Ajouter un produit</button>
        </div>

        <div className="app-content">
            Afficher la liste des produits
        </div>

        <Modal>
            <div>Use ProductForm Component</div>
        </Modal>
    </div>
  )
}

export default Mainpage