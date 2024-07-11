import { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { addItem } from '../store/storeSlice';

function Detail(props){

  useEffect(() => {
    // 새로고침시, 초기화 방지! wow~
    let watched = localStorage.getItem('watched');
    if (!watched) {
      localStorage.setItem('watched', JSON.stringify([]))
    }
  }, [])

  let { id } = useParams();
  let 찾은상품 = props.shoes.find((x) => x.id == id );
  let navigate = useNavigate();
  let [count, setCount] = useState(0);
  let [alert2, setAlert2] = useState(true);
  let [num, setNum] = useState('');
  let [탭, 탭변경] = useState(0);
  let dispatch = useDispatch();

  // 4)최근 본 제품 기록 추가
  useEffect(() => { 
    let 꺼낸거 = localStorage.getItem('watched')
    꺼낸거 = JSON.parse(꺼낸거)
    꺼낸거.push(찾은상품.id)
    console.log(꺼낸거)
    꺼낸거 = Array.from(new Set(꺼낸거))
    localStorage.setItem('watched', JSON.stringify(꺼낸거))
  }, []) 

  // 1)input태그에 잘못된 숫자입력되면 경고메세지
  useEffect(() => {
    if (isNaN(num) === true) {
      alert('그러지마십쇼')
    }
  }, [num])

  // 2)2초 후 할인메세지 삭제
  useEffect(() => {
    if (count > 0) {
      setAlert2(true);
      const timer = setTimeout(() => {
        setAlert2(false);
      }, 2000);
      return () => clearTimeout(timer); 
    }
  }, [count]);

  // 3)잘못된 상품페이지면 404페이지로 ㄱㄱ
  useEffect(() => {
    if (!찾은상품) {
      navigate('*'); 
    }
  }, [찾은상품, navigate]);

  if (!찾은상품) {
    return null; 
  }

  return (
    <div className="container">
      {count}
      <button onClick={()=>{ setCount(count+1) }}>확인하셨나요</button>
      {
        alert2 == true
        ? <div className="alert alert-warning">2초 이내 구매시 할인</div>
        : null
      }
      <input onChange={ (e) => { setNum(e.target.value) }}/>
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger" onClick={() => {
            dispatch(addItem({id: 3, name: 'Red Knit', count:1}))
          }}>주문하기</button> 
        </div>
      </div>

      <Nav variant="tabs"  defaultActiveKey="link1">
        <Nav.Item>
          <Nav.Link onClick={() => { 탭변경(0) }} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { 탭변경(1) }} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { 탭변경(2) }} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
    </Nav>
    <TabContent 탭={탭} />
  </div>  
  )
};

function TabContent({탭}){
  
  let [fade, setFade] = useState('');

  useEffect(() => {
    let a = setTimeout(() => { setFade('end') }, 100)
    return () => {
      clearTimeout(a)
      setFade('')
    }
  }, [탭])

  return (
    <div className={'start ' + fade}>
      { [ <div>내용0</div>, <div>내용1</div>, <div>내용2</div> ][탭] }
    </div>
  )
}



export default Detail 