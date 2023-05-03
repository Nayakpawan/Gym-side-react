import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';
import bulk from '../../images/Bulk.jpg';
const ProductDetails = () => {
  return (
    <>
        <section style={{backgroundColor:"#eee"}}>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-4">
        <div class="card" style={{borderRadius:"15px"}}>
          <div class="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src={bulk} id='img' class="img-fluid"
              alt="Laptop" />
            <a href="#!">
              <div class="mask"></div>
            </a>
          </div>
          <div class="card-body pb-0">
            <div class="d-flex justify-content-between">
              <div>
                <p><a href="#!" class="text-dark">Muss Gainar</a></p>
                <p class="small text-muted">Power</p>
              </div>
              <div>
                <div class="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <p class="small text-muted">Rated 4.0/5</p>
              </div>
            </div>
          </div>
          <hr class="my-0" />
          <div class="card-body pb-0">
            <div class="d-flex justify-content-between">
              <p><a href="#!" class="text-dark">$999</a></p>
              <p class="text-dark">#### 8787</p>
            </div>
            <p class="small text-muted">VISA Platinum</p>
          </div>
          <hr class="my-0" />
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
              <Link to={"/Products"} class="text-dark fw-bold">Cancel</Link>
              <Link to={"/Payment"} type="button" class="btn btn-primary">Buy now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default ProductDetails