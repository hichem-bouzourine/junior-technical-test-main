import './ProductCard.css'
import Grid from '@mui/material/Grid';


const ProductCard = ({product}) => {
    console.log(product)
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
                    <button className='product-details-button' onClick={() => console.log('product-details-button')}>Voir le détail</button>
                </div>
            </div>
    )

}

export default ProductCard;
