import React from "react"
import styled from "styled-components"
import { FaAngleUp } from "react-icons/fa"

const ButtonToTop = () => {
  // const topButton = document.getElementById("top-button")
  // window.onscroll = function() {
  //   scrollAppearFunction()
  // }

  // function scrollAppearFunction() {
  //   if (
  //     document.body.scrollTop > 600 ||
  //     document.documentElement.scrollTop > 600
  //   ) {
  //     topButton.style.display = "block"
  //   } else {
  //     topButton.style.display = "none"
  //   }
  // }

  const scrollSmooth = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div>
      <ButtonToTopWrapper onClick={scrollSmooth}>
        <FaAngleUp id="top-button" />
      </ButtonToTopWrapper>
    </div>
  )
}

export default ButtonToTop

const ButtonToTopWrapper = styled.a`
  #top-button {
    //display: none;
    background: #415498;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
  position: fixed;
  width: 1rem;
  height: 1rem;
  bottom: 2.5rem;
  right: 2.5rem;
  -webkit-transform: translateZ(0);
  z-index: 10;
  text-decoration: none;
  text-align: center;
  line-height: 1rem;
  font-size: 3rem;
  color: #f3f3f3;
  opacity: 0.5;

  @media screen and (max-width: 1024px) {
    #top-button {
      display: none;
      background: #415498;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }
    position: fixed;
    width: 1rem;
    height: 1rem;
    bottom: 1.5rem;
    right: 1.5rem;
    -webkit-transform: translateZ(0);
    z-index: 10;
    text-decoration: none;
    text-align: center;
    line-height: 1rem;
    font-size: 2rem;
    color: #f3f3f3;
    opacity: 0.5;
  }
  @media screen and (max-width: 835px) {
    #top-button {
      display: none;
      background: #415498;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }
    position: fixed;
    width: 1rem;
    height: 1rem;
    bottom: 1.5rem;
    right: 1.5rem;
    -webkit-transform: translateZ(0);
    z-index: 10;
    text-decoration: none;
    text-align: center;
    line-height: 1rem;
    font-size: 2rem;
    color: #f3f3f3;
    opacity: 0.5;
  }
  @media screen and (max-width: 768px) {
    #top-button {
      display: none;
      background: #415498;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }
    position: fixed;
    width: 1rem;
    height: 1rem;
    bottom: 1.5rem;
    right: 1.2rem;
    -webkit-transform: translateZ(0);
    z-index: 10;
    text-decoration: none;
    text-align: center;
    line-height: 1rem;
    font-size: 2rem;
    color: #f3f3f3;
    opacity: 0.5;
  }
`
