import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>    
            </div>
            <div className="descriptionbox-description">
                <p>“A stylish, comfortable, and versatile piece, crafted from high-quality, breathable fabric. Designed for everyday wear, offering a perfect fit and ease of movement for all ages.”</p>
                <p>"Welcome to our e-commerce store, where we bring you a wide range of quality products at the best prices. Shop with ease, explore detailed product displays, and enjoy a smooth and secure checkout experience designed to make online shopping simple and reliable."</p>
            </div>
        </div>
    )
} 
export default DescriptionBox