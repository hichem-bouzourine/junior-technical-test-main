import React from 'react';
import Modal from 'react-modal';

import './App.css';

Modal.setAppElement('#root');

const App = () => {
  return (
    <div className="app">
        
         <div className="app-header">
            <div className="app-title">Mes produits</div>
            <button className='product-add-button' onClick={() => console.log('soulOpenModal')}>Ajouter un produit</button>
        </div>

        <div className="app-content">
            Afficher la liste des produits
        </div>

        <Modal>
            <div>Use ProductForm Component</div>
        </Modal>
    </div>
  );
}

export default App;
