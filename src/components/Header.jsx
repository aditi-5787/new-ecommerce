// Header.js
import React from 'react';
import logo from '../assets/logo.png';


const Header = () => {
  return (
    <>
<header class="header">
<div class="container-fluid">
      <div class="row">
                <div class="col-xl-3 col-lg-2">
                    <div class="header__logo">
                        <a href="/"><img src={logo} alt="Logo" style={{ width: '100px', marginRight: '10px' }} /></a>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-7">
                    <nav class="header__menu">
                        <ul>
                            <li class="active"><a href="/">Home</a></li>
                            <li><a href="#">Women's</a></li>
                            <li><a href="#">Men's</a></li>
                            <li><a href="/shop">Shop</a></li>
                            <li><a href="#">Pages</a>
                                <ul class="dropdown">
                                    <li><a href="/product-details">Product Details</a></li>
                                    <li><a href="/cart">Shop Cart</a></li>
                                    <li><a href="/checkout">Checkout</a></li>
                                    <li><a href="/blog-details">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="./blog.html">Blog</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-3">
                    <div class="header__right">
                        <div class="header__right__auth">
                            <a href="#">Login</a>
                            <a href="#">Register</a>
                        </div>
                        <ul class="header__right__widget">
                            <li><span class="icon_search search-switch"></span></li>
                            <li><a href="#"><span class="icon_heart_alt"></span>
                                <div class="tip">2</div>
                            </a></li>
                            <li><a href="#"><span class="icon_bag_alt"></span>
                                <div class="tip">2</div>
                            </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
  );
};

export default Header;
