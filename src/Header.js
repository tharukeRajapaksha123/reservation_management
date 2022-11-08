import React from 'react'
import styled from "styled-components"

const Container = styled.div`
   display: flex;
   min-height: 60px;
   align-items: center;
   position: fixed;
   justify-content: space-between;
   padding:0 20px ;
   top: 0;
   left: 0;
   right: 0;
   z-index:1;
   display: flex;
   justify-content: space-between;
`

const Spacer = styled.div`
   flex: 1;
`

const Button = styled.div`
   color : white;
   margin: 0 16px;
   cursor: pointer;
   background-color: rgba(0,0,0,0.5);
   padding: 16px;
   border-radius: 12px;
   transition-duration: 800ms;
`

const Header = ({indexChanger,activeIndex}) => {
   return (
      <Container>
         <Spacer />
         <Button onClick={() => { indexChanger(0) }} style ={{fontWeight : `${activeIndex === 0 ? "bold" : "normal"}`}}>Home</Button>
         <Button onClick={() => { indexChanger(1) }} style ={{fontWeight : `${activeIndex === 1 ? "bold" : "normal"}`}}>Foods</Button>
         <Button onClick={() => { indexChanger(2) }} style ={{fontWeight : `${activeIndex === 2 ? "bold" : "normal"}`}}>Reservations</Button>
      </Container>
   )
}

export default Header