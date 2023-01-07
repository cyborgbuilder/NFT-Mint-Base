import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "./styles.css";


function Game() {
  return (
    <Container>
      <Wrap>
        <Front>
            <Slot>
                <h1>GAME</h1>
            </Slot>
            <p>From Pc/console/mobile game and Its genre-defining
An action role-playing game set
between events in their world. Metamoths (half moth half human-like) are creatures helping to protect their planet
Pollinate.
Will Clash with different creatures that like nothing more than destroying everything that involves (Metamoth tradition)
collect epic items and gain
unimaginable superpower.
Explore the dark forbidden realms of idyllic scenery like never before, with
massive multiplayer online roles.
playing the game where the
Metamoths wage an unpredictable war
over the dominance of there
Planets realm. Join forces with
other players on an epic quest to
collect the shattered fragments of the silk crystal.
And prevent the dark from taking control of the metaverse
With a futuristic metaverse world, P2E play to earn based game where communities come together and share all their creative items
In-game purchase’s his/her characters
Create everything your Metamoth need’s to servive and everything else you create can be sold/traded auctioned in the marketplace buy other players' creations and integrate your Metamoths NFTS into your gameplay and receive extra items the possibilities will be endless
the RPG (role-play game) with 3 major elements.</p>
        </Front>
        <Middle>
            <Left>
                        
            </Left>
            <Right>
                <ul>
                    <li>a specific quest (the silk crystal has been stolen and it’s created a near catastrophic event’ the Metamoths king and queen have put a spell on the silk crystal that’s smashed it into 12 fragments to help defend their kingdom.</li>
                    <li>a process for evolving a
character through experience to improve
his/her ability to handle deadlier foes.</li>
                    <li>the careful acquisition and management with
inventory items for the quest (i.e.,
weapons, swords, daggers, helmets, armour, Breastplate, boots, Belts, Shield Lances, Spears, Axes, Mace, Crossbows, Longbows, healing, items,
skins, potions, mystery, boxes, building materials
Etc Etc</li>
                    
                </ul>
            </Right>
        </Middle>
        <Bottom>
            <LeftOne>
                <ul>
                    <li>Character abilities also
evolve and develop as the
game progresses.</li>
                <li>Game objective is .. missions
large overall quest broken
down into smaller missions.</li>
<li>Collecting items to an
inventory for later use.
Buy sell trade swap auction all NFTS.</li>
<li>Meeting and conversing with
Non-Playing Characters.

All for gameplay mode

The in-game Metamoths battle arena/league will be more 1on1 or a team vs team.</li>
<li>One v one battle as part of
the tournament. usually the game
structure</li>
<li>Increased opponent
difficulty as tournament
progresses.
 Player health bar Stamina speed agility the key. </li>
<li>Can be very violent eg.
Mortal Combat/street fighter/Tekken like
Arena battle related. </li>
                </ul>
            </LeftOne>
            <RightOne></RightOne>
        </Bottom>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: black;
    display: flex;
    justify-content: center;

`

const Wrap = styled.div`
    width: 95%;
    height: 100%;
    overflow: hidden;

`

const SliderDiv = styled.div`
    
`


const Left = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

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
    }

    li{
        font-family: 'Nerko One', cursive;
        font-size: 26px;
        margin: 10px 0;
        text-align: center;
        letter-spacing: 1.05px;
        line-height: 2.1rem;
    
        @media only screen and (max-width: 1200px){
            font-size: 18px;
            text-align: center;
        }
        
    }



`
const Front = styled.div`
    padding: 50px;

p{
    font-family: 'Nerko One', cursive;
    font-size: 26px;
    margin: 7px 0;
    text-align: center;
    letter-spacing: 1.05px;
    line-height: 2.1rem;

    @media only screen and (max-width: 1200px){
        font-size: 18px;
        text-align: center;
    }
    
}
`

const Middle = styled.div`
    display: flex;

    
`
const Bottom = styled.div`
    
`


const Slot = styled.div`
    width: 100%;
    height: 80px;
    margin: 50px 0;
    background: linear-gradient(180deg, #0000002A 0%, #000000 104%), url('/images/bgn3.jpg');
    border-radius: 15px;
    border-top: 1px solid #b0b0b0;
    border-left: 1px solid #b0b0b0;
    border-right: 1px solid #b0b0b0;
    background-position: center;
    background-size: cover;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover{
        transform: scale(1.04);
        cursor: move;
    }

    
    background-repeat: none;
    display: flex;
    align-items: center;
    justify-content: center;

    h1{
        font-family: 'Rubik Distressed', cursive;
        font-size: 45px;

        @media only screen and (max-width: 1200px){
            font-size: 28px;
        }
    }

`
const LeftOne = styled.div`
    width: 50%;
    padding: 20px;

    li{
        font-family: 'Nerko One', cursive;
        font-size: 26px;
        margin: 10px 0;
        text-align: center;
        letter-spacing: 1.05px;
        line-height: 2.1rem;
    
        @media only screen and (max-width: 1200px){
            font-size: 18px;
            text-align: center;
        }
        
    }
`
const RightOne = styled.div`
    width: 50%;

`
export default Game

