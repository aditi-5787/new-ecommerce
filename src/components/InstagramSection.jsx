import React from 'react';
import insta1 from '../img/instagram/insta-1.jpg';
import insta2 from '../img/instagram/insta-2.jpg';
import insta3 from '../img/instagram/insta-3.jpg';
import insta4 from '../img/instagram/insta-4.jpg';
import insta5 from '../img/instagram/insta-5.jpg';
import insta6 from '../img/instagram/insta-6.jpg';

const InstagramSection = () => {
  const divStyle1 = { backgroundImage: `url(${insta1})`};
  const divStyle2 = { backgroundImage: `url(${insta2})`};
  const divStyle3 = { backgroundImage: `url(${insta3})`};
  const divStyle4 = { backgroundImage: `url(${insta4})`};
  const divStyle5 = { backgroundImage: `url(${insta5})`};
  const divStyle6 = { backgroundImage: `url(${insta6})`};

  return (
    <div className="instagram">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-2 col-md-4 col-sm-4 p-0">
        <div
          className="instagram__item set-bg"
          style={divStyle1}
        >
          <div className="instagram__text">
            <i className="fa fa-instagram" />
            <a href="#">@ ashion_shop</a>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-4 p-0">
        <div
          className="instagram__item set-bg"
          style={divStyle2}
        >
          <div className="instagram__text">
            <i className="fa fa-instagram" />
            <a href="#">@ ashion_shop</a>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-4 p-0">
        <div
          className="instagram__item set-bg"
          style={divStyle3}
        >
          <div className="instagram__text">
            <i className="fa fa-instagram" />
            <a href="#">@ ashion_shop</a>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-4 p-0">
        <div
          className="instagram__item set-bg"
          style={divStyle4}
        >
          <div className="instagram__text">
            <i className="fa fa-instagram" />
            <a href="#">@ ashion_shop</a>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-4 p-0">
        <div
          className="instagram__item set-bg"
          style={divStyle5}
        >
          <div className="instagram__text">
            <i className="fa fa-instagram" />
            <a href="#">@ ashion_shop</a>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-4 p-0">
        <div
          className="instagram__item set-bg"
          style={divStyle6}
        >
          <div className="instagram__text">
            <i className="fa fa-instagram" />
            <a href="#">@ ashion_shop</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default InstagramSection;