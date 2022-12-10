import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import {
  SliderContainer,
  SlideImage,
  Next,
  Prev,
  DotsContainer,
  Dot
} from "./SliderStyle";

const images = [
    "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"
  ];

const Slider = () => {

  const [current, setCurrent] = useState<number>(0);
  const [timer, setTimer] = useState<number>();

  useEffect( () => {
    const timer = setTimeout(() => {
      next();
    }, 5000);
    return () => clearTimeout(timer);
  }, [current])

  const getImages = (urls: string[]) => {
    return urls.map( (url, index) => {
      return <SlideImage key={index} src={url} />
    })
  }

  const getDots = (urls: string[]) => {
    return urls.map( (url, index) => {
      return <Dot key={index} onClick={ () => setSlide(index)} />
    })
  }

  const setSlide = (pos: number) => {
    setCurrent(pos);
  }

  const next = () => {
    if(current < images.length - 1){
      setCurrent(current + 1);
    }else{
      setCurrent(0);
    }
  }

  const prev = () => {
    if(current > 0){
      setCurrent(current - 1);
    }else{
      setCurrent(images.length - 1);
    }
  }

  return (
    <SliderContainer>
      <SlideImage src={images[current]} />
      {/* {getImages(images)} */}
      <Next onClick={() => next()}>
          {"‣"}
      </Next>
      <Prev onClick={() => prev()}>
          {"‣"}
      </Prev>
      <DotsContainer>
        {getDots(images)}
      </DotsContainer>
    </SliderContainer>
  );
};

export default Slider;
