import React from 'react';
import './Details.css'
import chair from '../../../images/Chair 2.png'
import tree1 from '../../../images/Tree 1.png'
import tree2 from '../../../images/Tree 2.png'
const Details = () => {
    return (
        <div className="row details">
            <div className="col-md-3">
                <h3>Why we are best in our town</h3>
                <p className="text-secondary mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis tempore quaerat dolor ipsum laboriosam illo ea nisi, modi accusamus. Consequatur accusamus cum qui provident facere.</p>
               
            </div>
            <div className="col-md-3">
                <img className="details-img" src={chair} alt="" />
                <p className="text-secondary">White Chair With Metal</p>
                <h5>$35</h5>
            </div>
            <div className="col-md-3">
                <img className="details-img" src={tree1} alt="" />
                <p className="text-secondary">Tree with Top</p>
                <h5>$35</h5>
            </div>
            <div className="col-md-3">
                <img className="details-img" src={tree2} alt="" />
                <p className="text-secondary">Tree With Wooden Rack</p>
                <h5>$35</h5>
            </div>
        </div>
    );
};

export default Details;