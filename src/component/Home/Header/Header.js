import React from 'react';
import './Header.css'
import sofa from '../../../images/Sofa 2.png'
import lamp from '../../../images/Lamp 0.png'
const Header = () => {
    return (
        <div className="row header">
            <div  className="col-md-4 mt-5">
                <h1>Furniture that <br /> everyone <br /> Loves </h1>
                <p >We have 5000+ Review and our customers trust on our Furniture and Quality Products</p>
                <button className="button">Buy Now </button> {' '}
                <button className="button">Explore </button>
            </div>
            <div className="col-md-8 image-main-div">
                <img className="image-fluid image-sofa" src={sofa} alt="" />
                <img className="image-div image-fluid" src={lamp} alt="" />
            </div>
        </div>
    );
};

export default Header;