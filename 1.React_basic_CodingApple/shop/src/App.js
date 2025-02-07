import axios from 'axios';
import { createContext, lazy, Suspense, useState } from 'react';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import data from './data.js';
import NotFound from './routes/404error.js';

const Cart = lazy(() => import('./routes/Cart.js'));
const Detail = lazy(() => import('./routes/Detail.js'));

export let Context1 = createContext()

function App() {

  let [shoes, setShoes] = useState(data)
  let [재고] = useState([10, 11, 12]);
  let navigate = useNavigate();

  // react-query를 이용한 ajax 요청
  const { data: userData, isLoading, error } = useQuery('userData', async () => {
    const response = await axios.get('https://codingapple1.github.io/userdata.json');
    console.log('요청됨');
    return response.data;
  });

  if (userData) {
    console.log(userData.name);
  }

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">MegiShop</Navbar.Brand>
          <Nav className="me-auto">
            <button onClick={()=>{ navigate('/') }}>Home</button>
            <button onClick={()=>{ navigate('/detail/1') }}>Detail</button>
            <button onClick={()=>{ navigate('/cart') }}>장바구니</button>
            <button onClick={()=>{ navigate(-1) }}>navigate(-1)는 뒤로가기!</button>
          </Nav>
          <Nav className="ms-auto">
            {isLoading && '로딩중'}
            {error && '에러남'}
            {userData && <span style={{ color: 'white' }}>{userData.name}님 환영!</span>}
          </Nav>
        </Container>
      </Navbar>

      <Suspense fallback={<div>로딩중임</div>}>
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
            <button onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((결과) => {
                console.log(결과.data) // .data하면 실제 데이터 나옴ㅇㅇ
                let copy = [...shoes, ...결과.data];
                setShoes(copy)
              })
              .catch(() => { // get요청 실패할 경우
                console.log('실패함 ㅅㄱ')
              })
            }}>더보기</button>
          </>
          }/>
          <Route path="/detail/:id" element={
              <Detail shoes={shoes}/>
            } />
          <Route path="/cart" element={ <Cart/> } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      

    </div>
  );
}

function About() {
  return (
    <>
      <h4>about페이지임</h4>
      <Outlet></Outlet>
    </>
  )
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