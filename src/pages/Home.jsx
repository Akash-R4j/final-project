import React from 'react'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

export default function Home() {
  return (
    <>
      {/* <!-- start banner Area --> */}
      <section className="banner-area">
        <div className="container">
          <div className="row fullscreen align-items-center justify-content-start" style={{
            height: "739px"
          }}>
            <div className="col-lg-12">
              <OwlCarousel items="1">
                <div className="row align-items-center d-flex">
                  <div className="col-lg-5 col-md-6">
                    <div className="banner-content">
                      <h1>Nike New <br />Collection!</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                      <div className="add-bag d-flex align-items-center">
                        <a className="add-btn" href=""><span className="lnr lnr-cross"></span></a>
                        <span className="add-text text-uppercase">Add to Bag</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="banner-img">
                      <img className="img-fluid" src="assets/img/banner/banner-img.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="row single-slide align-items-center d-flex">
                  <div className="col-lg-5 col-md-6">
                    <div className="banner-content">
                      <h1>Nike New <br />Collection!</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                      <div className="add-bag d-flex align-items-center">
                        <a className="add-btn" href=""><span className="lnr lnr-cross"></span></a>
                        <span className="add-text text-uppercase">Add to Bag</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="banner-img">
                      <img className="img-fluid" src="assets/img/banner/banner-img.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="row single-slide align-items-center d-flex">
                  <div className="col-lg-5 col-md-6">
                    <div className="banner-content">
                      <h1>Nike New <br />Collection!</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                      <div className="add-bag d-flex align-items-center">
                        <a className="add-btn" href=""><span className="lnr lnr-cross"></span></a>
                        <span className="add-text text-uppercase">Add to Bag</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="banner-img">
                      <img className="img-fluid" src="assets/img/banner/banner-img.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="row single-slide align-items-center d-flex">
                  <div className="col-lg-5 col-md-6">
                    <div className="banner-content">
                      <h1>Nike New <br />Collection!</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                      <div className="add-bag d-flex align-items-center">
                        <a className="add-btn" href=""><span className="lnr lnr-cross"></span></a>
                        <span className="add-text text-uppercase">Add to Bag</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="banner-img">
                      <img className="img-fluid" src="assets/img/banner/banner-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End banner Area --> */}

      {/* <!-- start features Area --> */}
      <section className="features-area section_gap">
        <div className="container">
          <div className="row features-inner">
            {/* <!-- single features --> */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features">
                <div className="f-icon">
                  <img src="assets/img/features/f-icon1.png" alt="" />
                </div>
                <h6>Free Delivery</h6>
                <p>Free Shipping on all order</p>
              </div>
            </div>
            {/* <!-- single features --> */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features">
                <div className="f-icon">
                  <img src="assets/img/features/f-icon2.png" alt="" />
                </div>
                <h6>Return Policy</h6>
                <p>Free Shipping on all order</p>
              </div>
            </div>
            {/* <!-- single features --> */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features">
                <div className="f-icon">
                  <img src="assets/img/features/f-icon3.png" alt="" />
                </div>
                <h6>24/7 Support</h6>
                <p>Free Shipping on all order</p>
              </div>
            </div>
            {/* <!-- single features --> */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features">
                <div className="f-icon">
                  <img src="assets/img/features/f-icon4.png" alt="" />
                </div>
                <h6>Secure Payment</h6>
                <p>Free Shipping on all order</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end features Area --> */}

      {/* <!-- Start category Area --> */}
      <section className="category-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div className="row">
                <div className="col-lg-8 col-md-8">
                  <div className="single-deal">
                    <div className="overlay"></div>
                    <img className="img-fluid w-100" src="assets/img/category/c1.jpg" alt="" />
                    <a href="assets/img/category/c1.jpg" className="img-pop-up" target="_blank">
                      <div className="deal-details">
                        <h6 className="deal-title">Sneaker for Sports</h6>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="single-deal">
                    <div className="overlay"></div>
                    <img className="img-fluid w-100" src="assets/img/category/c2.jpg" alt="" />
                    <a href="assets/img/category/c2.jpg" className="img-pop-up" target="_blank">
                      <div className="deal-details">
                        <h6 className="deal-title">Sneaker for Sports</h6>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="single-deal">
                    <div className="overlay"></div>
                    <img className="img-fluid w-100" src="assets/img/category/c3.jpg" alt="" />
                    <a href="assets/img/category/c3.jpg" className="img-pop-up" target="_blank">
                      <div className="deal-details">
                        <h6 className="deal-title">Product for Couple</h6>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-8 col-md-8">
                  <div className="single-deal">
                    <div className="overlay"></div>
                    <img className="img-fluid w-100" src="assets/img/category/c4.jpg" alt="" />
                    <a href="assets/img/category/c4.jpg" className="img-pop-up" target="_blank">
                      <div className="deal-details">
                        <h6 className="deal-title">Sneaker for Sports</h6>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-deal">
                <div className="overlay"></div>
                <img className="img-fluid w-100" src="assets/img/category/c5.jpg" alt="" />
                <a href="assets/img/category/c5.jpg" className="img-pop-up" target="_blank">
                  <div className="deal-details">
                    <h6 className="deal-title">Sneaker for Sports</h6>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End category Area --> */}

      {/* <!-- start product Area --> */}
      <section className="active-product-area section_gap">
        <OwlCarousel items="1">
          {/* <!-- single product slide --> */}
          <div className="single-product-slider">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                  <div className="section-title">
                    <h1>Latest Products</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore
                      magna aliqua.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* <!-- single product --> */}
                <div className="col-lg-3 col-md-6">
                  <div className="single-product">
                    <img className="img-fluid" src="assets/img/product/p1.jpg" alt="" />
                    <div className="product-details">
                      <h6>addidas New Hammer sole
                        for Sports person</h6>
                      <div className="price">
                        <h6>$150.00</h6>
                        <h6 className="l-through">$210.00</h6>
                      </div>
                      <div className="prd-bottom">

                        <a href="" className="social-info">
                          <span className="ti-bag"></span>
                          <p className="hover-text">add to bag</p>
                        </a>
                        <a href="" className="social-info">
                          <span className="lnr lnr-heart"></span>
                          <p className="hover-text">Wishlist</p>
                        </a>
                        <a href="" className="social-info">
                          <span className="lnr lnr-sync"></span>
                          <p className="hover-text">compare</p>
                        </a>
                        <a href="" className="social-info">
                          <span className="lnr lnr-move"></span>
                          <p className="hover-text">view more</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- single product --> */}
                <div className="col-lg-3 col-md-6">
                  <div className="single-product">
                    <img className="img-fluid" src="assets/img/product/p2.jpg" alt="" />
                    <div className="product-details">
                      <h6>addidas New Hammer sole
                        for Sports person</h6>
                      <div className="price">
                        <h6>$150.00</h6>
                        <h6 className="l-through">$210.00</h6>
                      </div>
                      <div className="prd-bottom">

                        <a href="" className="social-info">
                          <span className="ti-bag"></span>
                          <p className="hover-text">add to bag</p>
                        </a>
                        <a href="" className="social-info">
                          <span className="lnr lnr-heart"></span>
                          <p className="hover-text">Wishlist</p>
                        </a>
                        <a href="" className="social-info">
                          <span className="lnr lnr-sync"></span>
                          <p className="hover-text">compare</p>
                        </a>
                        <a href="" className="social-info">
                          <span className="lnr lnr-move"></span>
                          <p className="hover-text">view more</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- single product --> */}
                <div className="col-lg-3 col-md-6">
                  <div className="single-product">
                    <img className="img-fluid" src="assets/img/product/p3.jpg" alt="" />
                    <div className="product-details">
                      <h6>addidas New Hammer sole
                        for Sports person</h6>
                      <div className="price">
                        <h6>$150.00</h6>
                        <h6 className="l-through">$210.00</h6>
                      </div>
                      <div className="prd-bottom">
                        <a href="" className="social-info">
                          <span className="ti-bag"></span>
                          <p className="hover-text">add to bag</p>
                        </a>
                        <a href="" className="social-info">
                          <span className="lnr lnr-heart"></span>
                          <p className="hover-text">Wishlist</p>
                        </a>
                        <a href="" className="social-info">
                          <span className="lnr lnr-sync"></span>
                          <p className="hover-text">compare</p>
                        </a>
                        <a href="" className="social-info">
                          <span className="lnr lnr-move"></span>
                          <p className="hover-text">view more</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- single product --> */}
                <div className="col-lg-3 col-md-6">
                  <div className="single-product">
                    <img className="img-fluid" src="assets/img/product/p4.jpg" alt="" />
                    <div className="product-details">
                      <h6>addidas New Hammer sole
                        for Sports person</h6>
                      <div className="price">
                        <h6>$150.00</h6>
                        <h6 className="l-through">$210.00</h6>
                      </div>
                      <div className="prd-bottom">

                        <a href="" className="social-info">
                          <span className="ti-bag"></span>
                          <p className="hover-text">add to bag</p>
                        </a>
                        <a href="" className="social-info">
                          <span className="lnr lnr-heart"></span>
                          <p className="hover-text">Wishlist</p>
                        </a>
                        <a href="" className="social-info">
                          <span className="lnr lnr-sync"></span>
                          <p className="hover-text">compare</p>
                        </a>
                        <a href="" className="social-info">
                          <span className="lnr lnr-move"></span>
                          <p className="hover-text">view more</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- single product --> */}
                <div className="col-lg-3 col-md-6">
                  <div className="single-product">
                    <img className="img-fluid" src="assets/img/product/p5.jpg" alt="" />
                    <div className="product-details">
                      <h6>addidas New Hammer sole
                        for Sports person</h6>
                      <div className="price">
                        <h6>$150.00</h6>
                        <h6 className="l-through">$210.00</h6>
                      </div>
                      <div className="prd-bottom">

                        <a href="" className="social-info">
                          <span className="ti-bag"></span>
                          <p className="hover-text">add to bag</p>
                        </a>
                        <a href="" className="social-info">
                          <span className="lnr lnr-heart"></span>
                          <p className="hover-text">Wishlist</p>
                        </a>
                        <a href="" className="social-info">
                          <span className="lnr lnr-sync"></span>
                          <p className="hover-text">compare</p>
                        </a>
                        <a href="" className="social-info">
                          <span className="lnr lnr-move"></span>
                          <p className="hover-text">view more</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- single product --> */}
                <div className="col-lg-3 col-md-6">
                  <div className="single-product">
                    <img className="img-fluid" src="assets/img/product/p6.jpg" alt="" />
                    <div className="product-details">
                      <h6>addidas New Hammer sole
                        for Sports person</h6>
                      <div className="price">
                        <h6>$150.00</h6>
                        <h6 className="l-through">$210.00</h6>
                      </div>
                      <div className="prd-bottom">

                        <a href="" className="social-info">
                          <span className="ti-bag"></span>
                          <p className="hover-text">add to bag</p>
                        </a>
                        <a href="" className="social-info">
                          <span className="lnr lnr-heart"></span>
                          <p className="hover-text">Wishlist</p>
                        </a>
                        <a href="" className="social-info">
                          <span className="lnr lnr-sync"></span>
                          <p className="hover-text">compare</p>
                        </a>
                        <a href="" className="social-info">
                          <span className="lnr lnr-move"></span>
                          <p className="hover-text">view more</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- single product --> */}
                <div className="col-lg-3 col-md-6">
                  <div className="single-product">
                    <img className="img-fluid" src="assets/img/product/p7.jpg" alt="" />
                    <div className="product-details">
                      <h6>addidas New Hammer sole
                        for Sports person</h6>
                      <div className="price">
                        <h6>$150.00</h6>
                        <h6 className="l-through">$210.00</h6>
                      </div>
                      <div className="prd-bottom">

                        <a href="" className="social-info">
                          <span className="ti-bag"></span>
                          <p className="hover-text">add to bag</p>
                        </a>
                        <a href="" className="social-info">
                          <span className="lnr lnr-heart"></span>
                          <p className="hover-text">Wishlist</p>
                        </a>
                        <a href="" className="social-info">
                          <span className="lnr lnr-sync"></span>
                          <p className="hover-text">compare</p>
                        </a>
                        <a href="" className="social-info">
                          <span className="lnr lnr-move"></span>
                          <p className="hover-text">view more</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- single product --> */}
                <div className="col-lg-3 col-md-6">
                  <div className="single-product">
                    <img className="img-fluid" src="assets/img/product/p8.jpg" alt="" />
                    <div className="product-details">
                      <h6>addidas New Hammer sole
                        for Sports person</h6>
                      <div className="price">
                        <h6>$150.00</h6>
                        <h6 className="l-through">$210.00</h6>
                      </div>
                      <div className="prd-bottom">

                        <a href="" className="social-info">
                          <span className="ti-bag"></span>
                          <p className="hover-text">add to bag</p>
                        </a>
                        <a href="" className="social-info">
                          <span className="lnr lnr-heart"></span>
                          <p className="hover-text">Wishlist</p>
                        </a>
                        <a href="" className="social-info">
                          <span className="lnr lnr-sync"></span>
                          <p className="hover-text">compare</p>
                        </a>
                        <a href="" className="social-info">
                          <span className="lnr lnr-move"></span>
                          <p className="hover-text">view more</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>

      </section>
      {/* <!-- end product Area --> */}
    </>
  )
}
