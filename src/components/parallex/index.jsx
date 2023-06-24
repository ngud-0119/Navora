
import React, { useState } from 'react';
import { Img } from 'components';

const Parallax = () => {
  const [xPosition, setXPosition] = useState(0);

  const handleMouseMove = (e) => {
    const width = window.innerWidth;
    const mouseX = e.clientX;

    const x = (mouseX / width) * 100;

    setXPosition(x);
  };

  return (
    <div className="parallax" onMouseMove={handleMouseMove}>
      <div className="parallax-layer" style={{ transform: `translateX(${xPosition}px)` }}>
      <Img
            className=" h-[701px]  w-[346.22px] mt-[11.06px] ml-[2.01px] object-cover "
            src="images/img_iphone12pro.png"
            alt="iphone12pro_One"
        />
        {/* content for the first layer */}
      </div>
      <div className="parallax-layer" style={{ transform: `translateX(${xPosition / 2}px)` }}>
      <Img
            className=" h-[701px]  w-[346.22px] mt-[11.06px] ml-[2.01px] object-cover "
            src="images/img_iphone12pro.png"
            alt="iphone12pro_One"
        />
        {/* content for the second layer */}
      </div>
      <div className="parallax-layer" style={{ transform: `translateX(${xPosition / 4}px)` }}>
      <Img
            className=" h-[701px]  w-[346.22px] mt-[11.06px] ml-[2.01px] object-cover "
            src="images/img_iphone12pro.png"
            alt="iphone12pro_One"
        />
        {/* content for the third layer */}
      </div>
    </div>
  );
};

export default Parallax;