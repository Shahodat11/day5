import React from 'react'
import '../apii/apii.css'
import gaz from '../images/Gaz.png'
import bluetooth from '../images/blueteeth.png'
import notebook from '../images/notebook.png'
import galaxy from '../images/galaxy.png'
import watch from '../images/watch.png'
import HomeAppllancess from '../homeAppllancess/HomeAppllancess'
import img from '../images/bc-image.avif'
import TVimg from '../images/TV-img.webp'
import Appimg from '../images/appliances-img.webp'
import sustainabilityImg from '../images/sustainability-img.webp'

function Apii() {
 const data = [
  {
    id: 1,
    title: "New Berpoke Ranges",
    img: `${gaz}`,
    price: "Get up to $700 off",
  },
  {
    id: 2,
    title: "CANON EOS DSLR Camera",
    img: `${bluetooth}`,
    price: "Get up to $50 instant trade-in credit.",
  },
  {
    id: 3,
    title: "Galaxy Book4 Ultra",
    img: `${notebook}`,
    price: "Get $500 off and more",
  },
  {
    id: 4,
    title: "Galaxy Tab S9 Series",
    img: `${galaxy}`,
    price: "Get up to $800 instant trade-in credit",
  },
  {
    id: 5,
    title: "Jr. Zoom Soccer Cleats",
    img: "https://i.postimg.cc/YCQX1dHv/img-7.png",
    price: "Get $150 off and more",
  },
  {
    id: 6,
    title: "GP11 Shooter USB Gamepad",
    img: `${watch}`,
    price: "Get up to $80 and up to $250",
  },
];
let mapCard = data?.map((products) => (
  <div className="products__card" key={products.id}>
    <div className="card-hero-img">
      <img src={products.img} alt="product-img" />
    </div>
    <h2>{products.title}</h2>
    <h6>{products.price}</h6>
  </div>
));
let text = "Mobile & Computing"
let title = "Galaxy S24 Ultra"
let price = "Get up to $750 trade-in credit and $75 instant Samsung Credit with participating carriers."
let btn = "Buy now"
  return (
    <>
        <div className="container">
      <div className="nav-link5">

        <div className="nav9">
          <div className="cards">
            <mapCar/>
          </div>
        </div>
      </div>
      <div className="cards-products">
        {mapCard}
      </div>
    </div>
    <HomeAppllancess 
    btn = {btn}
    price = {price}
    title = {title}
    nav = {text}
    url = {img}/>
    <HomeAppllancess 
    btn = {btn}
    price = {"Buy the Frame, get a Customizable Bezel on us."}
    title = {"Buy. Bezel. Beauty."}
    nav = {"TV & Audio"}
    url = {TVimg}/>
    <HomeAppllancess 
    btn = {"Pre-order"}
    price = {"New Bespoke Al Appliances"}
    title = {"Buy. Bezel. Beauty."}
    nav = {"Home Appliances"}
    url = {Appimg}/>
    <HomeAppllancess 
    btn = {"Learn more"}
    price = {"Get refurbished Certified Re-Newed smartphone with the features"}
    title = {"New phone, less waste"}
    nav = {"Sustainability"}
    url = {sustainabilityImg}/>
    </>
  )
}

export default Apii