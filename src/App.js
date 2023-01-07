import React, { useState } from 'react'
import Mint from './components/Mint'
import Hero from './components/Hero'
import Story from './components/Story'
import Beginner from './components/Begining'
import VideoPage from './components/VideoPage'
import Roadmaps from './components/Roadmap'
import Community from './components/Community'
import Website from './components/Website'
import MothsMatter from './components/MothsMatter'
import Footer from './components/Footer'
import styled from 'styled-components'
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Web3Modal from 'web3modal'
// import { ethers } from 'ethers'
function App() {

  const [web3Provider, setWeb3Provider] = useState(null);

  async function connectWallet(){
    try{
      let web3Modal = new Web3Modal({
        cacheProvider: false
      });
      const web3modalInstance = await web3Modal.connect();
      const web3modalProvider = new ethers.providers.Web3Provider(web3modalInstance);
      console.log(web3Provider);
    }
    catch(error){
      console.log(error);
    }
}
  return (
    <div>
      <SocialIcons>
      <a href='https://discord.com/'><FaDiscord style={{color: '#fff', margin: '0 5px '}}/></a> 
        <a href='https://twitter.com/j10hunter'><FaTwitter style={{color: '#fff', margin: '0 5px '}} /></a>
          <a href='https://t.me/Metamoths'><FaTelegram style={{color: '#fff', margin: '0 5px '}}/></a>
          <a href='https://www.instagram.com/Metamoths'><FaInstagram style={{color: '#fff', margin: '0 5px '}}/></a>
          

         
        </SocialIcons>
      <Hero />
      <Story />
      <Beginner />
      <VideoPage />
      <Mint />
      <MothsMatter />
      <Roadmaps />
      <Community />
      
      <Website />
      
      <Footer />
    </div>
  )
}

const SocialIcons = styled.div`
    position: fixed;
    top: 0%;
    right: 1%;
    display: flex;
    z-index: 1000;
    display: flex;
    font-size: 45px;
    padding: 10px 0;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


    @media only screen and (max-width: 1200px) {
      font-size: 30px;
    }

    a{
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

      &:hover{
        cursor: pointer;
        transform: scale(1.01);
      }
    }
`

const Button = styled.button`
    border: 1px solid #fff;
    height: 50px;
    outline: none;
    padding: 10px;
    font-size: 17px;
    margin-left: 20px;
    background: none;
    font-family: 'Rubik Distressed', cursive;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    color: #fff;

    &:hover{
      background: #fff;
      color: black;
      cursor: pointer;
    }

`

export default App
