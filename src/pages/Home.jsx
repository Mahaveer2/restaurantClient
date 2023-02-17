import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <section id="hero" className="hero d-flex flex-column justify-content-center align-items-center" >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 text-center">
          <h2><span>Coisine Roo</span> Create a professional looking food image for your restaurant</h2>
          <Link to="/create" className="btn-get-started">Get Started</Link>
        </div>
      </div>
    </div>
  </section>{/* End Hero Section */}
  <main id="main"  >
    {/* ======= Gallery Section ======= */}
    <section id="gallery" className="gallery">
      <div className="container-fluid">
        <div className="row gy-4 justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="gallery-item h-100">
              <img src="src/assets/img/gallery/gallery-1.jpg" className="img-fluid" alt="" />
              <div className="gallery-links d-flex align-items-center justify-content-center">
                <a href="src/assets/img/gallery/gallery-1.jpg" title="Gallery 1" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>
                <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg" /></a>
              </div>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="gallery-item h-100">
              <img src="src/assets/img/gallery/gallery-2.jpg" className="img-fluid" alt="" />
              <div className="gallery-links d-flex align-items-center justify-content-center">
                <a href="src/assets/img/gallery/gallery-2.jpg" title="Gallery 2" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>
                <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg" /></a>
              </div>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="gallery-item h-100">
              <img src="src/assets/img/gallery/gallery-3.jpg" className="img-fluid" alt="" />
              <div className="gallery-links d-flex align-items-center justify-content-center">
                <a href="src/assets/img/gallery/gallery-3.jpg" title="Gallery 3" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>
                <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg" /></a>
              </div>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="gallery-item h-100">
              <img src="src/assets/img/gallery/gallery-4.jpg" className="img-fluid" alt="" />
              <div className="gallery-links d-flex align-items-center justify-content-center">
                <a href="src/assets/img/gallery/gallery-4.jpg" title="Gallery 4" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>
                <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg" /></a>
              </div>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="gallery-item h-100">
              <img src="src/assets/img/gallery/gallery-5.jpg" className="img-fluid" alt="" />
              <div className="gallery-links d-flex align-items-center justify-content-center">
                <a href="src/assets/img/gallery/gallery-5.jpg" title="Gallery 5" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>
                <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg" /></a>
              </div>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="gallery-item h-100">
              <img src="src/assets/img/gallery/gallery-6.jpg" className="img-fluid" alt="" />
              <div className="gallery-links d-flex align-items-center justify-content-center">
                <a href="src/assets/img/gallery/gallery-6.jpg" title="Gallery 6" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>
                <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg" /></a>
              </div>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="gallery-item h-100">
              <img src="src/assets/img/gallery/gallery-7.jpg" className="img-fluid" alt="" />
              <div className="gallery-links d-flex align-items-center justify-content-center">
                <a href="src/assets/img/gallery/gallery-7.jpg" title="Gallery 7" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>
                <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg" /></a>
              </div>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="gallery-item h-100">
              <img src="src/assets/img/gallery/gallery-8.jpg" className="img-fluid" alt="" />
              <div className="gallery-links d-flex align-items-center justify-content-center">
                <a href="src/assets/img/gallery/gallery-8.jpg" title="Gallery 8" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>
                <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg" /></a>
              </div>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="gallery-item h-100">
              <img src="src/assets/img/gallery/gallery-9.jpg" className="img-fluid" alt="" />
              <div className="gallery-links d-flex align-items-center justify-content-center">
                <a href="src/assets/img/gallery/gallery-9.jpg" title="Gallery 9" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>
                <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg" /></a>
              </div>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="gallery-item h-100">
              <img src="src/assets/img/gallery/gallery-10.jpg" className="img-fluid" alt="" />
              <div className="gallery-links d-flex align-items-center justify-content-center">
                <a href="src/assets/img/gallery/gallery-10.jpg" title="Gallery 10" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>
                <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg" /></a>
              </div>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="gallery-item h-100">
              <img src="src/assets/img/gallery/gallery-11.jpg" className="img-fluid" alt="" />
              <div className="gallery-links d-flex align-items-center justify-content-center">
                <a href="src/assets/img/gallery/gallery-11.jpg" title="Gallery 11" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>
                <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg" /></a>
              </div>
            </div>
          </div>{/* End Gallery Item */}
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="gallery-item h-100">
              <img src="src/assets/img/gallery/gallery-12.jpg" className="img-fluid" alt="" />
              <div className="gallery-links d-flex align-items-center justify-content-center">
                <a href="assets/img/gallery/gallery-12.jpg" title="Gallery 12" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>
                <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg" /></a>
              </div>
            </div>
          </div>{/* End Gallery Item */}
          
        </div>
      </div>
    </section>{/* End Gallery Section */}
  </main>{/* End #main */}
  <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
    </div>
  )
}

export default Home