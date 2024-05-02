import React from 'react';
import ht1 from '../img/trend/ht-1.jpg';
import ht2 from '../img/trend/ht-2.jpg';
import ht3 from '../img/trend/ht-3.jpg';
import f1 from '../img/trend/f-1.jpg';
import f2 from '../img/trend/f-2.jpg';
import f3 from '../img/trend/f-3.jpg';
import bs1 from '../img/trend/bs-1.jpg';
import bs2 from '../img/trend/bs-2.jpg';
import bs3 from '../img/trend/bs-3.jpg';

const TrendSection = () => {
  return (
    <section className="trend spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-6">
        <div className="trend__content">
          <div className="section-title">
            <h4>Hot Trend</h4>
          </div>
          <div className="trend__item">
            <div className="trend__item__pic">
              <img src={ht1} alt="" />
            </div>
            <div className="trend__item__text">
              <h6>Chain bucket bag</h6>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="product__price">$ 59.0</div>
            </div>
          </div>
          <div className="trend__item">
            <div className="trend__item__pic">
              <img src={ht2} alt="" />
            </div>
            <div className="trend__item__text">
              <h6>Pendant earrings</h6>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="product__price">$ 59.0</div>
            </div>
          </div>
          <div className="trend__item">
            <div className="trend__item__pic">
              <img src={ht3} alt="" />
            </div>
            <div className="trend__item__text">
              <h6>Cotton T-Shirt</h6>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="product__price">$ 59.0</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
        <div className="trend__content">
          <div className="section-title">
            <h4>Best seller</h4>
          </div>
          <div className="trend__item">
            <div className="trend__item__pic">
              <img src={bs1} alt="" />
            </div>
            <div className="trend__item__text">
              <h6>Cotton T-Shirt</h6>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="product__price">$ 59.0</div>
            </div>
          </div>
          <div className="trend__item">
            <div className="trend__item__pic">
              <img src={bs2} alt="" />
            </div>
            <div className="trend__item__text">
              <h6>
                Zip-pockets pebbled tote <br />
                briefcase
              </h6>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="product__price">$ 59.0</div>
            </div>
          </div>
          <div className="trend__item">
            <div className="trend__item__pic">
              <img src={bs3} alt="" />
            </div>
            <div className="trend__item__text">
              <h6>Round leather bag</h6>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="product__price">$ 59.0</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6">
        <div className="trend__content">
          <div className="section-title">
            <h4>Feature</h4>
          </div>
          <div className="trend__item">
            <div className="trend__item__pic">
              <img src={f1} alt="" />
            </div>
            <div className="trend__item__text">
              <h6>Bow wrap skirt</h6>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="product__price">$ 59.0</div>
            </div>
          </div>
          <div className="trend__item">
            <div className="trend__item__pic">
              <img src={f2} alt="" />
            </div>
            <div className="trend__item__text">
              <h6>Metallic earrings</h6>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="product__price">$ 59.0</div>
            </div>
          </div>
          <div className="trend__item">
            <div className="trend__item__pic">
              <img src={f3} alt="" />
            </div>
            <div className="trend__item__text">
              <h6>Flap cross-body bag</h6>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <div className="product__price">$ 59.0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default TrendSection;