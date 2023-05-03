import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import logo from '../images/gym-logo-fotor-bg-remover-20230420114614.png';
import gif from '../images/icons8-pullups.gif';
import Deadlift from '../images/icons8-deadlift.gif'
 import Aboutimg from '../images/gym-About-transformed.jpeg'
import Footer from '../Footer';
import image from '../images/coursehighlights.png'
// import Register from '../Register';

const Navbar = () => {
  const [nav,setnav] = useState(false);

  const changeBackground =()=>{
    if (window.scollY >= 50){
      setnav(true);
    }else{
      setnav(false);
    }
  }
  window.addEventListener('scroll',changeBackground);
  return (
    <>
    <div id="main"></div>
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="#" className='logo'>
        <img src={logo} alt=""/>
      </Link>
      <input type="checkbox" className='menu-btn' id='menu-btn' />
      <label className='menu-icon' for="menu-btn">
        <span className='nav-icon'></span>
      </label>
     
      <ul className="menu">
        <li><Link to='#'>Home</Link></li>
        <li><Link to='#'>About</Link></li>
        <li><Link to={"/Products"}>Product</Link></li>
        <li><Link to='#'>Contect</Link></li>
        <li><Link to={"/Register"}  className='btn btn-danger'>Ragister</Link></li>
        {/* <button className='btn btn-danger ms-5'>Register</button> */}
      </ul>
   
    </nav>
    <div>
    <section id="header" class="jumbotron text-center text-white">
     <h1 class="display-3">Stay Strong</h1> 
     <p class="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p> 
 <Link to={"/Register"} class="btn btn-primary rounded-pill btn1">
     Join Now
     </Link>
</section>

	<section id="about">
		<div class="container my-5 py-5">
  
			<div class="row" style={{margin: "91px 0px"}}>
      {/* <h1 className='text-center text-white'>About Us</h1>  */}
      {/* <hr id='centerhr' style={{ border:' 1px solid red'}}/> */}
					<div class="col-md-6">
						<img src={Aboutimg} class="w-75 mt-5 ml-5" style={{width:"100%",height:"100%"}} id='imageround'/>
					</div>
						<div class="col-md-6 mt-5" id='fontsize'>
							<h3 class="fs-5 mb-0 text-white text-center font-weight-bold">About Gym</h3> <hr  style={{ border:' 1px solid red'}}/>
              <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Error perferendis ab quos corrupti? Asperiores atque distinctio nobis, laudantium quis excepturi debitis delectus libero voluptates numquam est iusto soluta consequatur aliquid!</p>
              <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Error perferendis ab quos corrupti? Asperiores atque distinctio nobis, laudantium quis excepturi debitis delectus libero voluptates numquam est iusto soluta consequatur aliquid!</p>

              <button className='btn btn-danger rounded-pill px-4 py-2'>Read More</button>
              <button className='btn btn-danger rounded-pill px-4 py-2 ms-2'>Join Us</button>

        </div>
			</div>
		</div>
	</section>
</div>
{/* ----------------------------------------------------- */}
<div id="content"> 
<div class="row my-3 py-4 m-5 p-5">
<h3 class="text-center mb-5 text-info" style={{fontFamily:"Rubik", fontSize:50}}>Our Activity</h3> <hr  className='mb-5' style={{ border:' 1px solid red'}} />
  <div class="col-sm-3" id='cardspace'>
  
    <div class="card bg-info">
      <div class="card-body text-center">
        <h5 class="card-title">Dumble</h5>
       
        <img src="https://img.icons8.com/arcade/64/null/dumbbell.png"/>
        <p class="card-text text-white">With supporting text below as button natural lead-in to additional content.</p>
        <button href="#" class="btn btn-danger">Read More</button>
      </div>
    </div>
  </div>
  <div class="col-sm-3" id='cardspace'>
    <div class="card">
      <div class="card-body text-center">
        <h5 class="card-title">Weight lifting</h5>
        <img src={Deadlift} alt="" style={{width:70,height:68}}/>
        {/* <img src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/null/external-gym-fitness-and-gym-xnimrodx-lineal-color-xnimrodx-5.png"/> */}
        <p class="card-text">With supporting text below as button natural lead-in to additional content.</p>
        <button href="#" class="btn btn-danger">Read More</button>
      </div>
    </div>
  </div>
  <div class="col-sm-3" id='cardspace'>
    <div class="card bg-info">
      <div class="card-body text-center">
        <h5 class="card-title text-white">Back Banch</h5>
           <img src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/null/external-gym-fitness-and-gym-xnimrodx-lineal-color-xnimrodx-5.png"/>
        <p class="card-text text-white">With supporting text below as button natural lead-in to additional content.</p>
        <button href="#" class="btn btn-danger">Read More</button>
      </div>
    </div>
  </div>
  <div class="col-sm-3" id='cardspace'>
    <div class="card">
      <div class="card-body text-center">
        <h5 class="card-title">Pull Up</h5>
        <img src={gif} alt="" style={{width:70,height:68}} />
        {/* <img className=''  src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-gym-fitness-and-healthy-living-flaticons-flat-flat-icons.png"/> */}
        <p class="card-text">With supporting text below as button natural lead-in to additional content.</p>
        <button href="#" class="btn btn-danger">Read More</button>
      </div>
    </div>
  </div>
</div>
</div>
{/* ------------------------------------contect Page-------------------------- */}
<section id='contect'>

		<div class="container my-5 py-5 ">
    
			<div class="row">
      <h1 className='text-center'>Contect Us</h1> <hr className='hrcenter' style={{ border:' 1px solid red'}}/>
      <div class="col-md-6 mt-5">
							{/* <h3 class="fs-5 mb-0  text-center "></h3> <hr/> */}
              <form>
              <div class="form-group">
    <label for="exampleInputPassword1">Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter your name"/>
  </div>   
  <div class="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>
  <button type="submit" class="btn btn-danger mt-4">Submit</button>
</form>
        </div>
					<div class="col-md-6">
						<img src={image} class="w-75 mt-5 ml-5" />
           
					</div>
						
			</div>
		</div>
	</section>
  <Footer/>
</>
  )
}

export default Navbar