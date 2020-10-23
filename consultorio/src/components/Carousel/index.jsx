import React from "react";
import img from "../../asset/smile1.jpg";

const Carousel = ()=>{
    return (
      <>
      <h1>Carousel</h1>
       <div>
          <img src={img} />
          <img src={img} />
          <img src={img} />
      </div> 
      </>
    )

}

export default Carousel;