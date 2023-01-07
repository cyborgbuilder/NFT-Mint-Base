import React from 'react'
import styled from 'styled-components'
import { FaInstagram} from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


function Community() {
  return (
    <Container>
      <Wrap>
        <Front>
            <h1>COMMUNITY</h1>
        </Front>
        <Bottom>
            
            <Right>
            <p>Will start straight away this is where we will build the Metamoth's future </p>
            <p>Our Community will be for all NFT Holders we will follow a set structure and adopt principles to help all members regards to NFT purchases sales and all things related to Metamots and anyone who may begin to generate interest around new ideas. We will discuss the progression of a project, receive notifications and updates, on future NFTs and consult with each other.</p>
            <p>A percentage of all NFT sales will contribute to the evolution of each project
This will give each NFT owner A piece of the action</p>
            </Right>

            <Left>
               <Slot>
                    <FaTelegramPlane style={{margin: '0 10px'}} />
                    <FaInstagram style={{margin: '0 10px'}} />
                    <FaTwitter style={{margin: '0 10px'}} />
               </Slot>

               <Slot>
                    <FaFacebookSquare style={{margin: '0 10px'}} />
                    <FaDiscord style={{margin: '0 10px'}} />
                    <FaYoutube style={{margin: '0 10px'}} />
               </Slot>
            </Left>
        </Bottom>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 90vh;
    background: black;
    display: flex;
    justify-content: center;

`

const Wrap = styled.div`
    width: 95%;
    height: 100%;
    overflow: hidden;
    margin: 20px 0;

`

const Left = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 90px;

    @media only screen and (max-width: 1200px){
        font-size: 50px;
    }


    @media only screen and (max-width: 1200px){
        width: 100%;
    }

 

`

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 50px;

    @media only screen and (max-width: 1200px){
        width: 100%;
        padding: 40px 10px;
    }
    
    justify-content: center;

    p{
        font-family: 'Nerko One', cursive;
        font-size: 26px;
        margin: 7px 0;

        @media only screen and (max-width: 1200px){
            font-size: 21px;
            text-align: center;
        }
        
    }


`
const Front = styled.div`
    width: 100%;


    h1{
        font-family: 'Rubik Distressed', cursive;
        font-size: 75px;
        text-align: center;
        padding: 20px;

        @media only screen and (max-width: 1200px){
            font-size: 38px;
        }
    }

`

const Bottom = styled.div`
    width: 100%;
    display: flex;
    border: 1px solid white;
    @media only screen and (max-width: 1200px){
        flex-direction: column;
    }
`

const Slot = styled.div`
    display: flex;
    margin: 20px 0;

`

export default Community
