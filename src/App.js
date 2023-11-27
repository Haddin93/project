import React from 'react';
import './style.css';





function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
          <div className="w-100 d-flex justify-content-around mr-5">
            <div>
              <i className="fa-solid fa-home text-light contact-info mr-3"></i>
              <a href="" className="navbar-sm-brand text-light text-decoration-none
            contact-info mr-3">
                NO:156, K.M.H Plaza, Gandhi bazar,Gingee-604202.
              </a>
              <i className="fa-solid fa-phone contact-info mr-3 text-light"></i>
              <a href="" className="navbar-sm-brand text-white text-decoration-none
            contact-info">
                Help:+ 8526626636,+ 9087595454
              </a>
            </div>
            <div className='w-40 d-flex justify-content-between'>
              <a href="" className="text-white ">
                <i className="fa-brands fa-twitter mr-3"></i></a>
              <a href="" className="text-white ">
                <i className="fa-brands fa-facebook mr-3"></i></a>
              <a href="" className="text-white ">
                <i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </nav>




      <nav className="navbar navbar-expand-lg navbar-light fixed-top mr-5">
        <div className="container-fluid">
          <img src="../images/logos.png" className='m-2' width="4.5%" />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../images/Accessories.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Any Kind of Computer Accessories</h5>
              <p>Enhance your computing experience with a wide range of high-quality accessories.</p>
              <p><a href="#">More Info</a></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../images/datarecovery.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Fast & Quick Fix</h5>
              <p>Just send valuable laptop, PC, MAC, Mobile,Gaming Device or Smartphone and we'll take care of it.</p>
              <p><a href="#">More Info</a></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../images/laptop.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Computer & Laptop Sales And Services</h5>
              <p>We Offer a Wide Range Of Computer And laptop,Repair And Sales And Services.</p>
              <p><a href="#">More Info</a></p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>


      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="card bg-light h-100 d-flex p-4 flex-column text-black">
              <img src="../images/notebook.jpg" alt="" />
              <div className="card-body text-center">
                <h5 className="card-title">Laptops</h5><br />
                <a href="#" className="btn mt-auto btn-outline-primary">ENQUIRY</a>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card bg-light h-100 d-flex p-4 flex-column text-black">
              <img src="../images/monitor.jpeg" alt="" />
              <div className="card-body text-center">
                <h5 className="card-title">Monitor</h5>
                <a href="#" className="btn mt-auto btn-outline-primary">ENQUIRY</a>
              </div>
            </div>
          </div>


          <div className="col-3">
            <div className="card bg-light h-100 d-flex p-4 flex-column text-black">
              <img src="../images/printer.jpg" alt="" />
              <div className="card-body text-center">
                <h5 className="card-title">Printer</h5>
                <br /><br /><br /><br />
                <a href="#" className="btn mt-auto btn-outline-primary">ENQUIRY</a>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card bg-light h-100 d-flex p-4 flex-column text-black">
              <img src="../images/camera.jpg" alt="" />
              <div className="card-body text-center">
                <h5 className="card-title">Camera</h5><br /><br /><br />
                <a href="#" className="btn mt-auto btn-outline-primary">ENQUIRY</a>
              </div>
            </div>
          </div>
        </div>
      </div>






























      <div className="section-header text-center pb-5 pt-4 text-dark">
        <h2>WHY CHOOSE US</h2>
        <p>Some Of Our Features</p>
      </div>

      <div className="container-fluid">
        <div className="row ml-5">
          <div className="col-3">
            <img src="../images/feature-icon.png" width="40px" />
            <h6>WE ARE FAST</h6>
            <p>Qualified Workers Lorem Ipsum is simply dummy text of the printing</p>
          </div>
          <div className='col-3'>
            <img src="../images/feature-icon.png" width="40px" />
            <h6>NO FIX, NO FEE</h6>
            <p>Repair on Demand Lorem Ipsum is simply dummy text of the printing</p>
          </div>
          <div className='col-3'>
            <img src='../images/feature-icon.png' width="40px" />
            <h6>30 DAYS WARRANTY</h6>
            <p>Guaranteed Service Lorem Ipsum is simply dummy text of the printing</p>
          </div>
          <div className='col-3'>
            <img src='../images/feature-icon.png' width="40px" />
            <h6>EXPERT STAFF</h6>
            <p>Available Anytime Lorem Ipsum is simply dummy text of the printing</p>
          </div>
        </div>
      </div>
      <img src='../images/service process.jpg' className="d-block w-100" alt="" />

      <div className="section-header text-center pb-5 pt-4 text-dark">
        <h2>OUR PRODUCTS</h2>
        <p>Some Of Our Features</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div class="card">
              <img src="../images/img/computer.jpeg" class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title text-center">COMPUTERS</h5>
                <p class="card-text">Accessories</p>
                <a href="#" class="btn mt-auto btn-primary text-center">ENQUIRY</a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div class="card">
              <img src="../images/img/laptop.jpg" class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title text-center">LAPTOP</h5>
                <p class="card-text">Accessories</p>
                <a href="#" class="btn mt-auto btn-primary text-center">ENQUIRY</a>
              </div>
            </div>
          </div>


          <div className="col-md-3">
            <div class="card">
              <img src="../images/img/monitors.jpg" class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title text-center">MONITORS</h5>
                <p class="card-text">Accessories</p>
                <a href="#" class="btn mt-auto btn-primary text-center">ENQUIRY</a>
              </div>
            </div>
          </div>


          <div className="col-md-3">
            <div class="card">
              <img src="../images/img/Printers.jpg" class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title text-center">PRINTERS</h5><br /><br /><br />
                <p class="card-text">Accessories</p>
                <a href="#" class="btn mt-auto btn-primary text-center">ENQUIRY</a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div class="card">
              <img src="../images/img/Cabinet.jpg" class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title text-center">CABINET</h5>
                <p class="card-text">Accessories</p>
                <a href="#" class="btn mt-auto btn-primary text-center">ENQUIRY</a>
              </div>
            </div>
          </div>


          <div className="col-md-3">
            <div class="card">
              <img src="../images/img/ups.jpg" class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title text-center">UPS</h5>
                <p class="card-text">Accessories</p>
                <a href="#" class="btn mt-auto btn-primary text-center">ENQUIRY</a>
              </div>
            </div>
          </div>



          <div className="col-md-3">
            <div class="card">
              <img src="../images/img/keyboard.jpg" class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title text-center">KEYBOARD</h5>
                <p class="card-text">Accessories</p>
                <a href="#" class="btn mt-auto btn-primary text-center">ENQUIRY</a>
              </div>
            </div>
          </div>


          <div className="col-md-3">
            <div class="card">
              <img src="../images/img/mouse.jpg" class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title text-center">MOUSE</h5>
                <p class="card-text">Accessories</p>
                <a href="#" class="btn mt-auto btn-primary text-center">ENQUIRY</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-header text-center pb-5 pt-4">
        <button type="button" className="btn btn-info text-white">VIEW ALL SERVICES</button>
      </div>

      <div className='container-fluid bg-info'>
        <div className='row ml-5'>
          <div className='col-3'>
            <h6>HAPPY CLIENT</h6>
            <h1>3720</h1>
          </div>
          <div className='col-3'>
            <h6>FINISHED PROJECTS</h6>
            <h1>4170</h1>
          </div>
          <div className='col-3'>
            <h6>COMPUTER SERVICED</h6>
            <h1>2730</h1>
          </div>
          <div className='col-3'>
            <h6>MOBILE SERVICED</h6>
            <h1>1510</h1>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>


      <div className="section-header text-center pb-5 pt-4 text-dark">
        <h2>WHAT PEOPLE SAY</h2>
        <p>Real customers reviews</p>
      </div>

      <div className="container-fluid">
        <div className="row ml-5">
          <div className="col-4">
            <h5>Great customer support</h5>
            <div className="tt-rating">
              <i className="tt-star fa fa-star" aria-hidden="true" />
              <i className="tt-star fa fa-star" aria-hidden="true" />
              <i className="tt-star fa fa-star" aria-hidden="true" />
              <i className="tt-star fa fa-star" aria-hidden="true" />
              <i className="tt-star fa fa-star" aria-hidden="true" />
            </div>
            <p>
              Thanks John, I was really pleased with Profix’s service. Would definitely recommend you and have alredy given out some of your business cards that were left with me. All the best for future succes.
            </p>
            <img src='../images/Merry Smith.png' />
            <h6>Merry Smith</h6>
            <p>CFO,InfoTech</p>
          </div>

          <div className="col-4">
            <h5>Flexible Services</h5>
            <div className="tt-rating">
              <i className="tt-star fa fa-star" aria-hidden="true" />
              <i className="tt-star fa fa-star" aria-hidden="true" />
              <i className="tt-star fa fa-star" aria-hidden="true" />
              <i className="tt-star fa fa-star" aria-hidden="true" />
              <i className="tt-star fa fa-star" aria-hidden="true" />
            </div>
            <p>Profix did great job with fixing my laptop for a good price. I recommend any body with laptop problems, they will give you excellent service to all his customers.</p>
            <img src='../images/Michale John.png' />
            <h6>Michale John</h6>
            <p>Co-Founder,InfoLabs</p>
          </div>

          <div className="col-4">
            <h5>Excellent Team</h5>
            <div className="tt-rating">
              <i className="tt-star fa fa-star" aria-hidden="true" />
              <i className="tt-star fa fa-star" aria-hidden="true" />
              <i className="tt-star fa fa-star" aria-hidden="true" />
              <i className="tt-star fa fa-star" aria-hidden="true" />
              <i className="tt-star fa fa-star" aria-hidden="true" />
            </div>
            <p>Keep up the excellent work. Thank you so much for your help. This is simply unbelievable!</p>
            <img src='../images/Michale John2.png' />
            <h6>Michale John</h6>
            <p>Co-Founder,InfoLabs</p>
          </div>
        </div>
      </div>
      <br></br>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="row">
                <div className="col-md-8 bg-primary">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.8776566541706!2d79.41437337419364!3d12.256557630153248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53350d2481d821%3A0xb565b6cfbeb70106!2sGandhi%20Bazaar%2C%20Tamil%20Nadu%20604202!5e0!3m2!1sen!2sin!4v1696674730679!5m2!1sen!2sin" width="90%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="col-md-4 bg-primary text-white"><br /><br />
                  <form>
                    <div className="form-group mr-2">
                      <h5>CONTACT US</h5>
                      <i class="fa-solid fa-location-dot mr-2"></i>
                      NO:156, K.M.H Plaza, Gandhi bazar,Gingee-604202.<br />
                      <i class="fa-solid fa-phone-flip mr-2"></i>
                      + 8526626636,+ 9087595454 <br />
                      <i class="fa-solid fa-envelope mr-2"></i>
                      hameedcomputers@yahoo.com
                    </div>
                    <br /><br />
                    <h5>OPENING HOURS</h5>
                    Monday-Saturday <br />10:00 - 18:00
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid bg-info text-black">
        <div className="row ml-5">
          <div className="col-3 ml-5">
            <h5>Request free consultation</h5>
            <h7>Get answers and advice from people you want it from.</h7>
          </div>

          <div className="col-3">
          </div>
          <div className="col-3">
          </div>
        </div>
      </div>


      <div className='container-fluid text-center bg-dark'>
        <div className='row py-5 text-white'>
          <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
            <img src='../images/logos.png' className='logo' width='15%' /><br /><br />
            <p>We have started chain of stores at 2012 with a belief and a passion: that everybody should have easy access to the best technology in our locality.</p>
          </div>
          <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
            <h5 className='text-primary'>ADDITIONAL LINKS</h5><br />
            <p>Home</p>
            <p>About us</p>
            <p>Services</p>
            <p>Products</p>
            <p>Contact us</p>
          </div>
          <div className='col-md-3 col-lg-2 col-xl-2 me-auto mt-3'>
            <h5 className='text-primary'>SERVICES</h5><br />
            <p>Laptop</p>
            <p>Monitor</p>
            <p>Printer</p>
            <p>CCTV Camera</p>
            <p>Network</p>
          </div>
          <div className='col-md-4 col-lg-3 col-xl-3 me-auto mt-3'>
            <h5 className='text-primary'>SOCIALS</h5><br />
            <i class="fa-brands fa-instagram mr-3"></i>
            <i class="fa-brands fa-facebook mr-3"></i>
            <i class="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>


















































    </>
  );
}

export default App;
