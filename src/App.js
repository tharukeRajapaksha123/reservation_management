import styled from "styled-components"
import Header from './Header';
import HomeBodyManger from './HomeBodyManger';
import { useState } from "react"
import "antd/dist/antd.css";

const Container = styled.div`
    height : 100vh;
    background-size: cover;
    background-position : center;
    background-repeat: no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:space-between; //vertical alignment
    align-items:center; //horizonmtal alignment
    background-color:black;
`


function App() {

  const [activeIndex, setActiveIndex] = useState(0)
  const indexChanger = (index) => {

    setActiveIndex(index)
    console.log("called ===> " + activeIndex)
  }
  return (
    <>
      <Container style={{backgroundImage : `url("https://i.pinimg.com/originals/13/c4/04/13c404f26d6323ac9ee69167fabf3b8f.jpg")`}}>
        <Header indexChanger={indexChanger}  activeIndex= {activeIndex}/>
        <HomeBodyManger activeIndex={activeIndex} stateChanger={indexChanger}/>
      </Container>
    </>
  );
}

export default App;
