import './ProductCard.css'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {
    const navigate = useNavigate();
    return (
            <div className='product-card-wrapper' key={product?._id}>
                <div className='product-main-infos'>
                    <div className='product-name'>{product.name}</div>
                    <div className='product-price'>{product.price}</div>
                    </div>
                <div className='product-secondary-infos'>
                    <div className='product-description'>{product.description}</div>
                    <img className='product-imageUrl' src={product.imageUrl} alt='imageUrl'/>
                </div>
                
                <div className='product-action-buttons'>
                    <button className='product-details-button' onClick={() => navigate(`product/${product?._id}`)}>Voir le détail</button>
                </div>
            </div>
    )

}

export default ProductCard;
