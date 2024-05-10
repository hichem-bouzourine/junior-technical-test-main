import React, { useEffect, useState } from 'react'
import "./Product.css"

import {getProduct, deleteProduct} from '../../services/ProductService'
import { useParams } from 'react-router-dom'

const Product = () => {
  const [product, setProduct] = useState(null)

  let { id } = useParams();

  useEffect(() => {
    getProduct(id).then((response) => {
      setProduct(response.data)
    })
  }, [])

  const handleDeletion = () => {
    deleteProduct(id).then(() => {
      window.location.href = "/"
    })
  }

  return (
    // product details to enable modify and delete
    <div className="product">
      <div className="product__info">
        <p className="info__name">{product?.name}</p>
        <p className="info__description">{product?.description}</p>
        <p className="info__price">{product?.price} $</p>
        <div>
          <img src={product?.imageUrl} alt="img url" />
        </div>
      </div>
      <div className="product__buttons">
        <button className="buttons__modify">Modify</button>
        <button className="buttons__delete" onClick={handleDeletion}>Delete</button>
      </div>
    </div>
  )
}

export default Product