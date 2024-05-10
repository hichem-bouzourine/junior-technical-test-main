import './ProductForm.css'
import LocalAxios from "../../services/httpService"
import axios from 'axios'
import { useState } from 'react'

const ProductForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const cloud_name = "dbe9ttry0"
    
    
    const saveImageFromForm = (e) => {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        formData.append("upload_preset", "qyuhmlaq")
        axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData).then((res) => {
            setImage(res.data.secure_url)
        }).catch((err) => {
            console.log(err)
        })
    }
        
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name, description, price, image)
        await LocalAxios.post('/products', {
            name: name,
            description: description,
            price: price,
            imageUrl: image
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className='container'>
            <form className='product-form' onSubmit={handleSubmit}>
                <div className='product-form-title'>Ajouter un produit</div>
                <div className='product-form-input'>
                    <label>Nom du produit</label>
                    <input type='text' placeholder='Nom du produit' value={name} onChange={(e) => {setName(e.target.value);}} />
                </div>
                <div className='product-form-input'>
                    <label>Description du produit</label>
                    <textarea placeholder='Description du produit' value={description} onChange={(e) => {setDescription(e.target.value);}}></textarea>
                </div>
                <div className='product-form-input'>
                    <label>Prix du produit</label>
                    <input type='number' placeholder='Prix du produit' value={price} onChange={(e) => {setPrice(e.target.value);}} />
                </div>
                <div className='product-form-input'>
                    <label>Image du produit</label>
                    <input type='file' onChange={saveImageFromForm} />
                </div>
                <div className='product-form-input'>
                    <button type='submit'>Ajouter</button>
                </div>
            </form>
        </div>
    )

}

export default ProductForm;
