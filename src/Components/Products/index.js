import React from 'react'
import './style.css'
import Bulk from '../images/Bulk.jpg';
import pro from '../images/pro.jpg';
import Dr from '../images/Dr.jpg';
import Muss from '../images/Muscle.jpg';
import Netural from '../images/Nutural.jpg';
import Weight from '../images/Weight gain.jpg';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
const Products = () => {
  return (
    <>
    <section class="products">
		<h2>Our Products</h2>
		<div class="all-products">
			<div class="product">
				<img src={Netural}/>
				<div class="product-info">
					<h4 class="product-title">Weight Gainar
					</h4>
					<p class="product-price">$129</p>
					<Link class="product-btn" href="#">Buy Now</Link>

				</div>
			</div>
			<div class="product">
				<img src={Weight}/>
				<div class="product-info">
					<h4 class="product-title">Weight Gainar
					</h4>
					<p class="product-price">$299</p>
					<Link class="product-btn" href="#">Buy Now</Link>

				</div>
			</div>
			<div class="product">
				<img src={Dr}/>
				<div class="product-info">
					<h4 class="product-title">Weight Gainar
					</h4>
					<p class="product-price">$999</p>
					<Link class="product-btn" href="#">Buy Now</Link>

				</div>
			</div>
			<div class="product">
				<img src={pro}/>
				<div class="product-info">
					<h4 class="product-title">Weight Gainar
						</h4>
					<p class="product-price">$629*</p>
					<Link class="product-btn" href="#">Buy Now</Link>

				</div>
			</div>
		</div>
	</section>
    <section >
  <div class="text-center container py-5">
    <h4 class="mt-4 mb-5"><strong>Bestsellers Product</strong></h4>

    <div class="row">
      <div class="col-lg-4 col-md-12 mb-4">
        <div class="card">
          <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src={Bulk}
              class="w-100" />
            <Link href="#!">
              <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5><span class="badge bg-primary ms-2">New</span></h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div class="mask"></div>
              </div>
            </Link>
          </div>
          
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <p class="small"><Link href="#!" class="text-muted">Bulk Muss Gainar</Link></p>
              <p class="small text-danger"><s>$1099</s></p>
            </div>

            <div class="d-flex justify-content-between mb-3">
              <h5 class="mb-0">Muss Gainar</h5>
              <h5 class="text-dark mb-0">$999</h5>
            </div>

            <div class="d-flex justify-content-between mb-2">
              <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
              <div class="ms-auto text-warning">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
            </div>
             <Link to={"/ProductDetails"} className='btn btn-primary'>View</Link>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card">
          <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src={Dr} class="w-100" />
            <Link href="#!">
              <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5><span class="badge bg-success ms-2">Eco</span></h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div class="mask" ></div>
              </div>
            </Link>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <p class="small"><Link href="#!" class="text-muted">Laptops</Link></p>
              <p class="small text-danger"><s>$1099</s></p>
            </div>

            <div class="d-flex justify-content-between mb-3">
              <h5 class="mb-0">Body Muss gainar</h5>
              <h5 class="text-dark mb-0">$999</h5>
            </div>

            <div class="d-flex justify-content-between mb-2">
              <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
              <div class="ms-auto text-warning">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
            </div>
             <button className='btn btn-primary'>View</button>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card">
          <div class="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
            <img src={Netural} class="w-100" />
            <Link href="#!">
              <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5><span class="badge bg-danger ms-2">-10%</span></h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div class="mask"></div>
              </div>
            </Link>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <p class="small"><Link href="#!" class="text-muted">Laptops</Link></p>
              <p class="small text-danger"><s>$1099</s></p>
            </div>

            <div class="d-flex justify-content-between mb-3">
              <h5 class="mb-0">Body Muss gainar</h5>
              <h5 class="text-dark mb-0">$999</h5>
            </div>

            <div class="d-flex justify-content-between mb-2">
              <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
              <div class="ms-auto text-warning">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
            </div>
             <button className='btn btn-primary'>View</button>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4 col-md-12 mb-4">
        <div class="card">
          <div class="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
            <img src={Weight} class="w-100" />
            <Link href="#!">
              <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5>
                    <span class="badge bg-success ms-2">Eco</span><span
                      class="badge bg-danger ms-2">-10%</span>
                  </h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div class="mask"></div>
              </div>
            </Link>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <p class="small"><Link href="#!" class="text-muted">Laptops</Link></p>
              <p class="small text-danger"><s>$1099</s></p>
            </div>

            <div class="d-flex justify-content-between mb-3">
              <h5 class="mb-0">Body Muss gainar</h5>
              <h5 class="text-dark mb-0">$999</h5>
            </div>

            <div class="d-flex justify-content-between mb-2">
              <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
              <div class="ms-auto text-warning">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
            </div>
             <button className='btn btn-primary'>View</button>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card">
          <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src={Muss}   class="w-100" />
            <Link href="#!">
            <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5>
                    <span class="badge bg-primary ms-2">New</span><span
                      class="badge bg-success ms-2">Eco</span><span class="badge bg-danger ms-2">-10%</span>
                  </h5>
                </div>
              </div>
              <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100"></div>
              </div>
              <div class="hover-overlay">
                <div class="mask" ></div>
              </div>
            </Link>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <p class="small"><Link href="#!" class="text-muted">Laptops</Link></p>
              <p class="small text-danger"><s>$1099</s></p>
            </div>

            <div class="d-flex justify-content-between mb-3">
              <h5 class="mb-0">Body Muss gainar</h5>
              <h5 class="text-dark mb-0">$999</h5>
            </div>

            <div class="d-flex justify-content-between mb-2">
              <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
              <div class="ms-auto text-warning">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
            </div>
             <button className='btn btn-primary'>View</button>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card">
          <div class="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
            <img src={pro} class="w-100" />
            <Link href="#!">
              <div class="mask">
                <div class="d-flex justify-content-start align-items-end h-100">
                  <h5>
                    <span class="badge bg-primary ms-2">New</span><span
                      class="badge bg-success ms-2">Eco</span><span class="badge bg-danger ms-2">-10%</span>
                  </h5>
                </div>
              </div>
              <div class="hover-overlay">
                <div class="mask"></div>
              </div>
            </Link>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <p class="small"><Link href="#!" class="text-muted">Laptops</Link></p>
              
              <p class="small text-danger"><s>$1099</s></p>
            </div>

            <div class="d-flex justify-content-between mb-3">
              <h5 class="mb-0">Body Muss gainar</h5>
              <h5 class="text-dark mb-0">$999</h5>
            </div>

            <div class="d-flex justify-content-between mb-2">
              <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
              <div class="ms-auto text-warning">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
            </div>
             <button className='btn btn-primary'>View</button>
          </div>    
        </div>
      </div>
    </div>
  </div>
</section>
<h1 className='text-center '> Today Offers</h1>
        <section style={{backgroundColor:"#eee"}}>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12 col-lg-4 mb-2 mb-lg-0">
        <div class="card">
          <div class="d-flex justify-content-between p-3">
            <p class="lead mb-0">Today's Combo Offer</p>
            <div
              class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
              style={{width: "35px;" ,height: "35px;"}}>
              <p class="text-white mb-0 small">x4</p>
            </div>
          </div>
          <img src={Dr} class="card-img-top" alt="Laptop" />
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <p class="small"><Link href="#!" class="text-muted">Dr. Mussals Gain</Link></p>
              <p class="small text-danger"><s>$1099</s></p>
            </div>

            <div class="d-flex justify-content-between mb-3">
              <h5 class="mb-0">Mussuls Gain</h5>
              <h5 class="text-dark mb-0">$999</h5>
            </div>

            <div class="d-flex justify-content-between mb-2">
              <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
              <div class="ms-auto text-warning">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
            </div>
             <button className='btn btn-primary'>View</button>
          </div>
         
        </div>
      </div>
      <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
        <div class="card">
          <div class="d-flex justify-content-between p-3">
            <p class="lead mb-0">Today's Combo Offer</p>
            <div
              class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
              style={{width: "35px;", height:" 35px;"}}>
              <p class="text-white mb-0 small">x2</p>
            </div>
          </div>
          <img src={pro}     class="card-img-top" alt="Laptop" />
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <p class="small"><Link href="#!" class="text-muted">Musulas</Link></p>
              <p class="small text-danger"><s>$1199</s></p>
            </div>

            <div class="d-flex justify-content-between mb-3">
              <h5 class="mb-0">Body Power</h5>
              <h5 class="text-dark mb-0">$1099</h5>
            </div>

            <div class="d-flex justify-content-between mb-2">
              <p class="text-muted mb-0">Available: <span class="fw-bold">7</span></p>
              <div class="ms-auto text-warning">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
            </div>
            <button className='btn btn-primary'>View</button>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
        <div class="card">
          <div class="d-flex justify-content-between p-3">
            <p class="lead mb-0">Today's Combo Offer</p>
            <div
              class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
              style={{width: "35px", height: "35px"}}>
              <p class="text-white mb-0 small">x3</p>
            </div>
          </div>
          <img src={Muss}
            class="card-img-top" alt="Gaming Laptop" />
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <p class="small"><Link href="#!" class="text-muted">Power</Link></p>
              <p class="small text-danger"><s>$1399</s></p>
            </div>

            <div class="d-flex justify-content-between mb-3">
              <h5 class="mb-0">Power Gainer</h5>
              <h5 class="text-dark mb-0">$1299</h5>
            </div>

            <div class="d-flex justify-content-between mb-2">
              <p class="text-muted mb-0">Available: <span class="fw-bold">5</span></p>
              <div class="ms-auto text-warning">
                <i class="fa fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
            </div>
            <button className='btn btn-primary'>View</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>
<Footer/>
  </>
  )
}

export default Products;