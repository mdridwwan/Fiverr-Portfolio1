import React from 'react';
import { Link } from 'react-router-dom';
import "./PricingCard.css";

const PricingCard = () => {
    return (
        <div className="pricing">
            <div className="card-container">
                <div className="card">
                    <h3>- Basic -</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 100</p>
                    <p>- 3 Days -</p>
                    <p>- 3 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive -</p>
                    <Link to="/contact" className='btn'>Purchase now</Link>
                </div>

                <div className="card">
                    <h3>- Premium -</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 100</p>
                    <p>- 2 Days -</p>
                    <p>- 6 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive -</p>
                    <Link to="/contact" className='btn'>Purchase now</Link>
                </div>

                <div className="card">
                    <h3>- Business -</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 100</p>
                    <p>- 5 Days -</p>
                    <p>- 9 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive -</p>
                    <Link to="/contact" className='btn'>Purchase now</Link>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;