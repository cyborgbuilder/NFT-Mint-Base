import React from 'react'
import styled from 'styled-components'
function Story() {
  return (
    <Container>
      <Wrap>
        <Text>
        <p>Metamoths is a revolutionary new gaming company that introduces a unique concept of half moth half human creatures called Metamoths, who come from a planet called Pollinate. The company aims to build a strong community and an exciting game that will change the way we experience the gaming world. The team behind Metamoths is committed to taking the project to the top of the gaming world, and is always open to new ideas and suggestions from the community. Whether you're a hardcore gamer or just getting started, Metamoths is the perfect place for you to explore and experience the world of Metamoths.</p>
        
        <ul>
            <li>Website</li>
            <li>Community</li>
            <li>P2E gaming</li>
            <li>NFTS</li>
            <li>Crypto Token</li>
            <li>Marketplace wallet</li>
            <li>Liquidity pool’s</li>
            <li>NFT card collection</li>
            <li>Comic’s nft hero based</li>
            <li>Story book’s</li>
            <li>Merchandise</li>
            <li>Donations</li>
        </ul>
        </Text>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 70vh;
    background: black;
    background: linear-gradient(180deg, #0000002A 0%, #000000 104%), url('/images/bg2.png');
    background-size: cover;
    display: flex;
    justify-content: center;
`

const Wrap = styled.div`
    width: 95%;

   


`

const Text = styled.div`
    padding: 50px;

    @media only screen and (max-width: 1200px){
        padding: 20px;
    }

    span{
        font-size: 50px;
        margin: 0 10px ;
        font-family: 'Rubik Distressed', cursive;
        color: #b0b0b0;

        @media only screen and (max-width: 1200px){
            font-size: 41px;
        }
    }

    p{
        font-size: 26px;
        text-align: center;
        font-family: 'Nerko One', cursive;
        line-height: 1.9rem;
        

        @media only screen and (max-width: 1200px){
            font-size: 21px;
        }
    }

    ul{
        text-align: center;
        font-family: 'Nerko One', cursive;
        font-size: 26px;
        margin: 30px 0;
        list-style-type: none;

        @media only screen and (max-width: 1200px){
            font-size: 21px;
        }
    }

    li{
        margin: 6px 0;
    }

`

export default Story
