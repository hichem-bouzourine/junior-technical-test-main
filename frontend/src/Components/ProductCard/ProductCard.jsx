import './ProductCard.css'

const ProductCard = () => {
    return (
        <div className='product-card-wrapper'>
            <div className='product-main-infos'>
                <div className='product-name'>{"name"}</div>
                <div className='product-price'>{"price"}</div>
                </div>
            <div className='product-secondary-infos'>
                <div className='product-description'>{"description"}</div>
                <img className='product-imageUrl' src={"imageUrl"} alt='imageUrl'/>
            </div>
            
            <div className='product-action-buttons'>
                <button className='product-details-button' onClick={() => console.log('product-details-button')}>Voir le détail</button>
            </div>

        </div>
    )

}

export default ProductCard;
