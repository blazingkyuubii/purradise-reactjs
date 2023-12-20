import './ProductCard.css'

export default function ProductCard({isFeatured, prod}){
    
    const defaultStyle = {
        padding: '10%',
        border: '1px solid rgb(221, 220, 220)',
        textAlign: 'center',   
    }

    const featuredStyle = {
        backgroundColor: '#d64105'
    }

    const cardStyle = isFeatured ? {...defaultStyle, ...featuredStyle} : defaultStyle

    return(
        <div className="product-card-container" style={cardStyle}>
            <img className="product-image" src={prod.prodImg} alt="product"/>
            <p>{prod.prodName}</p>
            <p>₱ {prod.prodPrice}</p>
            <button>Add to Cart</button>
        </div>
    )
}