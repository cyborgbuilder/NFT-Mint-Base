import React from 'react'
import styled from 'styled-components'

import "./styles.css"

function MothsMatter() {
  return (
    <Container>
      <Wrap>
        <Header>
        <h1>#MothsMatter!</h1>
        </Header>
        <Content>
        <Left>
          <ImageBox>
          <h1>#MothsMatter!</h1>
          <img src='./images/866.png' />
          <img src='./images/871.png' />
          <img src='./images/1003.png' />

          <img src='./images/1046.png' />
          <img src='./images/1199.png' />
          <img src='./images/1286.png' />

          <img src='./images/1046.png' />
          <img src='./images/1199.png' />
          <img src='./images/1286.png' />
          </ImageBox>


          
        </Left>
        <Right>

            <p>Here at Butterfly Conservation we naturally think moths are fascinating, important and worth protecting. But we know that not everybody gets a warm feeling when moths are mentioned - we're here to change that!</p>
            <h2># Crucial to a healthy environment</h2>
            <p> Moths are indicators of a healthy environment and healthy ecosystems. Areas that are rich in moths are also rich in other invertebrates.
                They are an important element of the food chain and are prey for a wide range of birds, bats and other insectivorous animals. For example, in Britain and Ireland, Blue Tits eat an estimated 50 billion caterpillars each year!</p>

               <h2># An important component of a rich biodiversity</h2>  
            <p>Moths are intrinsically valuable and are worthy of conservation in their own right, part of life on earth and an important component of its rich biodiversity.
It is estimated that they have been around for at least 50 million years and likely first evolved some 200 million years ago!</p> 
            <h2># Why Sir David Attenborough loves moths!</h2>
            <p>"We hear a lot about the threats to conspicuous and charismatic animals such as birds and mammals, but far less about the insects that make up over half of all the species known to science and which play a vital role in the functioning of the world’s moth ecosystems"</p>    

        </Right>
        </Content>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: url('/images/butterfly.jpg');
    background-size: cover;
    display: flex;
    aling-items: center;
    justify-content: center;
    overflow: hidden;

`
const Wrap = styled.div`
    width: 95%;
    margin-bottom: 50px;
    overflow: hidden;

    
 

`

const Left = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1200px){
      width: 100%;
      margin: 10px 0;
  }
  
`

const SliderDiv = styled.div`
  width: 100%;
  
`

const ImageBox = styled.div`
    width: 90%;
    padding: 0 20px;
    background: #fff;
    border-radius: 25px;
    opacity: 0.85;

    
    @media only screen and (max-width: 1200px){
      padding: 0;
      margin: 10px 0;
  }

    img{
      width: 25%;
      height: 20%;
      margin: 20px;
      border-radius: 15px;
      
      @media only screen and (max-width: 1200px){
        margin: 10px;
    }
    }

    h1{
      color: black;
      text-align: center;
      font-family: 'Zen Dots', cursive;
      font-size: 40px;
      margin: 20px 0;

      @media only screen and (max-width: 1200px){
        font-size: 25px;
    }
    }


`

const Right = styled.div`
    width: 50%;
    padding: 0 20px;
    background: #FFFDD0;
    border-radius: 25px;
    opacity: 0.85;

    @media only screen and (max-width: 1200px){
      width: 100%;
      padding: 0px;
  }
    

    p{
      padding: 20px 10px;
      color: black;
      font-family: 'Diplomata SC', cursive;
      font-size: 16px;
      text-align: center;
      line-height: 1.6rem;
      letter-spacing: 1px;

      
      @media only screen and (max-width: 1200px){
        font-size: 12px;
        text-align: center;
    }
   

    }

    h2{
      color: black;
      text-align: center;
      font-family: 'Zen Dots', cursive;
      font-size: 20px;


      
      @media only screen and (max-width: 1200px){
        font-size: 19px;
        text-align: center;
    }

    }
`
const Header = styled.div`
h1{
  color: black;
  font-size: 110px;
  margin: 30px;
  text-align: center;
  font-family: 'Zen Dots', cursive;
  letter-spacing: 2px;

  @media only screen and (max-width: 1200px){
    font-size: 33px;
    margin: 20px 0;
}

}

`

const Content = styled.div`
    display: flex; 

    @media only screen and (max-width: 1200px){
      flex-direction: column;
  }
`



export default MothsMatter
