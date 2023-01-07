import React from 'react'
import styled from 'styled-components'
function Story() {
  return (
    <Container>
      <Wrap>
        <Text>
        <p><span>I begin</span> 12 months ago after spending the best part of 3 years buying and playing NFT games. I saw an opportunity to bring a gaming community together to help climate change and more importantly our environment.
            The Metamoths will mainly be a gaming community ecosystem and with this, we will do our part to protect and preserve the ecosystem of moth’s and butterfly’s environments in our world.</p>
        <p>The proposal to Metamoths the brand will have its ecosystem With</p>
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
