import React from 'react';

import card1 from '../img/cat-card/card1.jpg';
import card2 from '../img/cat-card/card2.jpg';
import card3 from '../img/cat-card/card3.jpg';

const CategoryCards = () => {
  return (
    <section className="category-cards product spad">
        <div className="container">
                <div class="section-title">
                    <h4>Shop our popular category</h4>
                </div>
        </div>
        <div className="category-cards container">
            <div className="card" style={{ width: "18rem" }}>
                <img
                src={card1}
                className="card-img-top"
                alt="..."
                />
                <div className="card-body">
                <h5 className="card-title me-auto">Card title</h5>
                </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
                <img src={card2} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title me-auto">Card title</h5>
                </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
                <img
                src={card3}
                className="card-img-top"
                alt="..."
                />
                <div className="card-body">
                <h5 className="card-title me-auto">Card title</h5>
                </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
                <img src={card2} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title me-auto">Card title</h5>
                </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
                <img
                src={card3}
                className="card-img-top"
                alt="..."
                />
                <div className="card-body">
                <h5 className="card-title me-auto">Card title</h5>
                </div>
            </div>
            </div>
        
    </section>

  );
};

export default CategoryCards;