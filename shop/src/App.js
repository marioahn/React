import { useState } from 'react';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import data from './data.js';
import Detail from './routes/Detail.js';

function App() {

  let [shoes] = useState(data)

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">MegiShop</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>
            <Container>
              <Row>
                { shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i+1}/>
                    })}
              </Row>
          </Container>
        </>
        }/>
        {/* 아래처럼 Detail페이지는 컴포넌트 만들어서!! */}
        <Route path="/detail" element={<Detail />}/>
      </Routes>

      

    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src= {"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"} width="80%" />
      <h5>{props.shoes.title}</h5>
      <h5>{props.shoes.price}</h5>
    </div>
  )
}

export default App;