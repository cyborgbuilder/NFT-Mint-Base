import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

function VideoPage() {
  return (
    <Container>
        <ReactPlayer url='/glitch.mp4'  config={{ file: { attributes: {autoPlay: true,muted: true  }}}} playing='playing' loop='true' width='' height='' />
       
    </Container>
  )
}


const Container = styled.div`
    width: 100%;
    height: 72vh;
    overflow: hidden;
    position: relative;

    @media only screen and (max-width: 1200px){
        height: 17vh;
    }

    
`

const TextBox = styled.div`
    position: absolute;
    top: 20%;
    left: 5%;
    padding: 20px;
    border-radius: 15px;
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    h1{
        font-size: 51px;
        color: black;
        margin: 10px 0;
        
    }
    p{
        font-size: 20px;
        padding: 5px;
        color: black;
    }
`
export default VideoPage