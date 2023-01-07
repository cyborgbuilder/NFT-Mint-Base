import React from 'react'
import styled from 'styled-components'
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <Container>
      <Img>
          <img src='/images/footer.png' />

          
        </Img>
      <Wrap>
        <Left>
          <p>I will be seeking investment from environmental bodies from around the world to establish a foot hold in this project. the environmental awareness will give this project a positive impact towards the future of a successful business model as well with the help from our community we can make a huge difference to our futures wellbeing it’s not the first environmental project and we won’t be the last but as long as we do our part we will succeed in all we create.</p>
          
        </Left>
        <Right>
          <Box>
            <img src='/images/logo2.png' />

           <a href='https://discord.com/'><FaDiscord style={{background: 'black', margin: '0 5px '}}/></a> 
          <a href='https://twitter.com/j10hunter'><FaTwitter style={{background: 'black', margin: '0 5px '}} /></a>
          <a href='https://t.me/Metamoths'><FaTelegram style={{background: 'black', margin: '0 5px '}}/></a>
          <a href='https://www.instagram.com/Metamoths'><FaInstagram style={{background: 'black', margin: '0 5px '}}/></a>

          <img src='/images/logo2.png' />
          </Box>

          <BoxTwo>
           <Up>
             <p>CREATOR: </p>
            <a href='https://www.instagram.com/huntsman27'><FaInstagram style={{background: 'black', margin: '0 5px '}}/></a>
           </Up>
            <Down>
              <h4>© The Metamoths, All rights reserved.</h4>
            </Down>
          </BoxTwo>
        </Right>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  background: black;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;


`
const Wrap = styled.div`
  width: 95%;

  z-index: 1000;
  display: flex;

  @media only screen and (max-width: 1200px){
    flex-direction: column; 
}
`

const Img = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 0;
  img{
    width: 100%;
  }
`

const Left = styled.div`
  width: 50%;
  background: white;
  opacity: 0.8;
  border-radius: 15px;
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
		0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);

  @media only screen and (max-width: 1200px){
    width: 100%;
    padding: 20px; 
}

  p{
    font-family: 'Nerko One', cursive;
    font-size: 26px;
    padding: 40px;
    color: black;
    padding: 30px;
    letter-spacing: 1.1px;
    line-height: 2.1rem;

    @media only screen and (max-width: 1200px){
        font-size: 21px;
        text-align: center;
        padding: 0;
    }

    h4{
      font-family: 'Nerko One', cursive;
    font-size: 26px;
    padding: 40px;
    color: black;
    padding: 30px;
    letter-spacing: 1.1px;
    line-height: 2.1rem;
    }
    
}

`

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 1200px){
    width: 100%;
    padding: 20px 
}

`

const Box = styled.div`
width: 70%;
background: white;
opacity: 0.8;
border-radius: 15px;
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: center;
font-size: 60px;
margin: 20px 0;
box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
		0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);

@media only screen and (max-width: 1200px){
  width: 100%;
}

img{
  width: 15%;
  margin: 0 10px; 
}

p{
  font-family: 'Nerko One', cursive;
  font-size: 26px;
  margin: 0 10px;
  color: black;


  @media only screen and (max-width: 1200px){
      font-size: 21px;
      text-align: center;
  }
}

`

const BoxTwo = styled.div`
width: 70%;
background: white;
opacity: 0.8;
border-radius: 15px;
padding: 10px 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 50px;
margin: 20px 0;
box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
		0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);

@media only screen and (max-width: 1200px){
  width: 100%;
}

img{
  width: 15%;
  margin: 0 10px; 
}

p{
  font-family: 'Nerko One', cursive;
  font-size: 26px;
  margin:  10px;
  color: black;


  @media only screen and (max-width: 1200px){
      font-size: 21px;
      text-align: center;
  }
}

`

const Up = styled.div`
  display: flex;
`

const Down = styled.div`
  h4{
    color: black;
    font-size: 13px;
  }
`
export default Footer
