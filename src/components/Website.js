import React from 'react'
import styled from 'styled-components'


function Website() {
  return (
    <Container>
      <Wrap>
        <Front>
            <h1>WEBSITE</h1>
        </Front>
        <Bottom>
            <Left>
                <img src='/images/MW.gif' />
            </Left>

            <Right>
            <p>A community-based website</p>
            <p>Where we can see the future in words and help the Metamoths grow into something spectacular and whoever gets in first will be greatly rewarded and appreciated. with community funding and purchasing NFTS</p>
            <p>And as me the director of Metamoths ltd I will be looking to find suitable team members to take this project to the top of the gaming world. if anyone wants to get involved then feel free to contact me.
                Hunter-j10@sky.com </p>

                <p>10% sold 10 crystal Metamoths (rare) will be airdropped randomly to holders and development of the marketplace will begin.</p>
            </Right>


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
    padding: 50px;

    @media only screen and (max-width: 1200px){
        width: 100%;
        padding: 20px;
    }

    img{
        width: 70%;
        border-radius: 25px;

        @media only screen and (max-width: 1200px){
            width: 90%;
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
        padding: 20px 
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

export default Website
