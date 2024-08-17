import React from 'react';
import './App.css';
import career from "./career.jpg";
import comp from "./comp.jpg";
import computer from "./computer.jpg";

const Hello = () => {
  return (


<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={career} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={comp} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={computer} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    
    



  );
};

export default Hello;