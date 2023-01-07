import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";



function Hero() {
  return (
    <Container>
      <Wrap>

        <HeroSec>
            <h1>THE Metamoth Project</h1>
            <p>A crypto blockchain NFT based gaming environment where a community can come together and learn the environment values of the moths & butterfly’s worth to this planet while playing games and earning crypto.</p>
            <img src='./images/logo2.png' />
        </HeroSec>
            
           
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 70vh;
    background: linear-gradient(180deg, #0000002A 0%, #000000 104%), url('/images/bg.png');
    background-size: cover;
    display: flex;
    justify-content: center;
`

const Wrap = styled.div`
    width: 95%;
    overflow: hidden;


`
const HeroSec = styled.div`
    width: 100%;
    padding: 120px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1200px){
        padding: 50px 0;
    }

    img{
        width: 7%;
        margin: 10px 0;
        @media only screen and (max-width: 1200px){
            width: 30%;
            margin: 10px 0;
        }
    }

p{
    font-size: 28px;
    text-align: center;
    margin: 30px 0;
    letter-spacing: 1.1px;
    line-height: 2.2rem;
    padding: 0 10px;
    font-family: 'Rubik Microbe', cursive;
    @media only screen and (max-width: 1200px){
        font-size: 21px;
        margin: 20px 0;
    }
}

h1{
    font-size: 136px;
    text-align: center;
    text-transform: uppercase;
    // font-family: 'Rubik Microbe', cursive;
    font-family: 'Rubik Distressed', cursive;

    @media only screen and (max-width: 1200px){
        font-size: 53px;
        margin: 10px 0;
    }

    
`




export default Hero
