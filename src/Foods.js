import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const Container = styled.div`
   width:  100%;
   flex: 1;
   align-items: center;
   display: flex;
`

const FoodCard = styled.div`
   width: 800px;
   height: 60vh;
   border-radius: 12px;
   background-color: rgba(0,0,0,0.8);
   margin: 16px;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-around;
   h3{
      color : white;
      font-weight: bold;
   }

   h2{
      color :white;
   }

   button{
      width: 60%;
      height: 50px;
      border: none;
      border-radius: 12px;
      background-color: yellow;
      font-size: 18px;
      font-weight: w800;
   }

   img {
      width: 100%;
      height: 100%;
      object-fit: fill;
      border-radius: 12px;
   }
`

const Foods = ({stateChanger}) => {
   const [foods, setFoods] = useState([])

   useEffect(() => {

      axios.get("http://localhost:8080/food-controller").then(result => {
         setFoods(result.data["Food_Items"])
      }).catch(err => { console.log(`get foods from db failed ${err}`) })


   }, [])

   return (
      <Container>
         {foods.map((slide, index) =>
            <FoodCard key={index}>
               <div style={{ flex : 1, height:"100%",borderRadius : "12px"}} >
                  <img src={slide["image"]} alt={index} />
               </div>
               <div style={{flex : 1,padding : "16px"}}>
                  <h3>{slide["name"]}</h3>
                  <h2>LKR {slide["price"]}</h2>
                  <button onClick={()=>{stateChanger(2)}}>Order NOW {">>"}</button>
               </div>
            </FoodCard>

         )}
      </Container>
   )
}

export default Foods