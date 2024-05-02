// ProductList.js
import React from 'react';
import category1 from '../img/categories/category-1.jpg'
import category2 from '../img/categories/category-2.jpg'
import category3 from '../img/categories/category-3.jpg'
import category4 from '../img/categories/category-4.jpg'
import category5 from '../img/categories/category-5.jpg'

const ProductList = () => {
  const divStyle1 = {
    backgroundImage: `url(${category1})`
  };
  const divStyle2 = {
    backgroundImage: `url(${category2})`
  };
  const divStyle3 = {
    backgroundImage: `url(${category3})`
  };
  const divStyle4 = {
    backgroundImage: `url(${category4})`
  };
  const divStyle5 = {
    backgroundImage: `url(${category5})`
  };
  return (
    <section className="categories">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-6 p-0">
        <div
          className="categories__item categories__large__item set-bg"
          style={divStyle1}
        >
          <div className="categories__text">
            <h1>Women’s fashion</h1>
            <p>
              Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
              incidid-unt labore edolore magna aliquapendisse ultrices gravida.
            </p>
            <a href="#">Shop now</a>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 p-0">
            <div
              className="categories__item set-bg"
              style={divStyle2}
              >
              <div className="categories__text">
                <h4>Men’s fashion</h4>
                <p>358 items</p>
                <a href="#">Shop now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 p-0">
            <div
              className="categories__item set-bg"
              style={divStyle3}
              >
              <div className="categories__text">
                <h4>Kid’s fashion</h4>
                <p>273 items</p>
                <a href="#">Shop now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 p-0">
            <div
              className="categories__item set-bg"
              style={divStyle4}
              >
              <div className="categories__text">
                <h4>Cosmetics</h4>
                <p>159 items</p>
                <a href="#">Shop now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 p-0">
            <div
              className="categories__item set-bg"
              style={divStyle5}
              >
              <div className="categories__text">
                <h4>Accessories</h4>
                <p>792 items</p>
                <a href="#">Shop now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default ProductList;
