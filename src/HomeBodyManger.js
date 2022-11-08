import React from 'react'
import ContactUs from './ContactUs'
import Foods from './Foods'
import Home from './Home'

const HomeBodyManger = ({activeIndex,stateChanger}) => {

   const manager = ()=>{
      if(activeIndex === 0){
         return <Home />
      }else if(activeIndex === 1){
            return <Foods stateChanger={stateChanger}/>
      }else{
            return <ContactUs/>
      }
   }


  return <>{manager()}</>;
}

export default HomeBodyManger