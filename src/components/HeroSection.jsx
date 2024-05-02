import React from 'react';
import banner from '../img/banner/banner-4.png';

const BannerSection = () => {
  return (
    <section className="">
        <div class="container-fluid" style={{ padding: "0" }}>
                    <img
                        src={banner}
                        className="hero-img-top"
                        alt="..."
                        style={{ width: "100%" , height: "300px"}}
                        />
            </div>
    </section>

  );
};

export default BannerSection;