import './EditProduct.css'
import LocalAxios from "../../../services/httpService"
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const EditProduct = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(true)

    const cloud_name = "dbe9ttry0"
    
    let { id } = useParams();


    useEffect(() => {
        LocalAxios.get(`/products/${id}`).then((res) => {
            setName(res.data.name)
            setDescription(res.data.description)
            setPrice(res.data.price)
            setImage(res.data.imageUrl)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const saveImageFromForm = (e) => {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        formData.append("upload_preset", "qyuhmlaq")
        axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData).then((res) => {
            setImage(res.data.secure_url)
        }).catch((err) => {
            console.log(err)
        })
        setDisabled(false)
    }
        
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name, description, price, image)
        await LocalAxios.put(`/products/${id}`, {
            name: name,
            description: description,
            price: price,
            imageUrl: image
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
        
        navigate('/')
    }

    return (
        <div className='container'>
            <form className='product-form' onSubmit={handleSubmit}>
                <div className='product-form-title'>Modifier un produit</div>
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
                    <button type='submit' disabled={disabled}>Modifier</button>
                </div>
            </form>
        </div>
    )

}

export default EditProduct;
