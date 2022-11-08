import React, { useState } from 'react'
import styled from "styled-components"
import { notification } from 'antd';
import axios from 'axios';
const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   background-color: rgba(0,0,0,0.8);
   border-radius : 12px;
   color: white;
   padding: 16px;
   margin-top: 80px;
   h1{
      color :white;
   }
   h3{
      color :white;
   }
`

const Row = styled.div`
   display: flex; 
   justify-content: end;
   align-items: center;
`

const InputFieldContainer = styled.div`
   display: flex;
   width: 90%;
   flex-direction: row;
   padding: 0 16px;
   align-items: center;
   margin: 8px 0;
`

const InputField = styled.input`
   flex: 8;
   height: 35px;
   border: none;
   border-radius: 12px;
`

const AddingButton = styled.button`
   color : black;
   border-radius: 50%;
   border: none;
   background-color: yellow;
   padding: 8px;
   margin: 8px;
   width: 36px;
   height: 36px;
   cursor: pointer;
   font-size: 18px;
   display: flex;
   justify-content: center;
   align-items: center;
`

const SubmitButton = styled.button`
   color : black;
   border: none;
   border-radius: 12px;
   background-color: yellow;
   padding: 8px;
   cursor: pointer;
   font-weight: w500;
`

const TextHolder = styled.div`
   flex : 2;
`
const ContactUs = () => {
   const [counter, setCounter] = useState(0)
   const [name, setName] = useState("")
   const [number, setNumber] = useState("")
   const [email, setEmail] = useState("")

   const createReservation = () => {

      if (name !== "" && number !== "" && email !== "" && counter > 0) {
         axios.post("http://localhost:8080/table-controller/create-table", {
            "customerName": name,
            "mobileNumber": number,
            "numberOFPeoples": counter,
            "email": email,
            "pricePerChair": 4850
         })
            .then(result => {
               notification.open({
                  message: 'Hey',
                  description:
                     'Your reservation created succesfully.',
                  onClick: () => {
                     console.log('Notification Clicked!');
                  },
               });
            })
            .catch(err => console.log(`error ${err}`))
      } else {
         notification.open({
            message: 'Please fill all fields',
            description:
               '',
            onClick: () => {
               console.log('Notification Clicked!');
            },
         });
      }
   }


   return (
      <Container>
         <h1>Welcome</h1>
         <h1>Please enter your details for the reservation</h1>
         <InputFieldContainer>
            <TextHolder>
               <h3>Name : </h3>
            </TextHolder>
            <InputField
               onChange={(val) => {
                  setName(val.target.value);
               }}

            />
         </InputFieldContainer>
         <InputFieldContainer>
            <TextHolder>
               <h3>Number : </h3>
            </TextHolder>
            <InputField

               onChange={(val) => {
                  setNumber(val.target.value);
               }}
            />
         </InputFieldContainer>
         <InputFieldContainer>
            <TextHolder>
               <h3>Email : </h3>
            </TextHolder>
            <InputField
               onChange={(val) => {
                  setEmail(val.target.value);
               }}

            />
         </InputFieldContainer>
         <Row>
            <TextHolder>
               <h3>Number Of Peoples : </h3>
            </TextHolder>
            <AddingButton onClick={() => { let i = counter - 1; if (counter >= 1) { setCounter(i) } }}>-</AddingButton> {counter} <AddingButton onClick={() => { let i = counter + 1; setCounter(i) }}>+</AddingButton>
         </Row>
         <Row>
            <SubmitButton onClick={() => { createReservation() }} >
               Confirm Reservation
            </SubmitButton>
         </Row>
      </Container>
   )
}

export default ContactUs