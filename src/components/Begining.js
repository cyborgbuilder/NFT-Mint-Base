import React from 'react'
import styled from 'styled-components'
function Begining() {
  return (
    <Container>
      <Wrap>
        <Front>
            <h1>THE BEGINNING</h1>
        </Front>
        <Bottom>
            <Left>
               <img src='/images/pol.png' />
            </Left>
            <Right>
            <p>Metamoths are a force of pure evolution half moth half human they come from a planet called <span>pollinate.</span></p>
            <p>Good or evil merciful or brutal.</p>
            <p>Your Metamoth will become part of the brand and will receive great rewards. I have my views on Metamoths !! let me know yours.</p>
            </Right>
        </Bottom>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 70vh;
    background: black;
    display: flex;
    justify-content: center;

`

const Wrap = styled.div`
    width: 95%;
    height: 100%;
    overflow: hidden;

`

const Left = styled.div`
    width: 50%;
    display: flex;
    padding: 50px;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1200px){
        padding: 20px;
    }


    @media only screen and (max-width: 1200px){
        width: 100%;
    }

    img{
        width: 85%;
        border-radius: 25px;

        @media only screen and (max-width: 1200px){
            width: 100%;
        }
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

    span{
        font-size: 30px;
        margin: 0 10px ;
        font-family: 'Rubik Distressed', cursive;
        color: #b0b0b0;

        @media only screen and (max-width: 1200px){
            font-size: 26px;
            text-align: center;
        }
        
    }
`
const Front = styled.div`
   

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



    @media only screen and (max-width: 1200px){
        flex-direction: column;
    }
`

export default Begining
