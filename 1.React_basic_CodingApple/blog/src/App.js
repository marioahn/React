/* eslint-disable */
import { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집2';   
  let [글제목, 글제목변경] = useState(['남자 코트', '우동 맛집', '파이썬']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(9);
  let [입력값, 입력값변경] = useState("");
  
  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={post}>ReactBlog</h4>
      </div>

      <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy)
      }}>정렬버튼</button>

      <button onClick={() => {
        let copy = [...글제목]; 
        copy[0] = '여자 코트 추천';
        글제목변경(copy)
      }}>글수정</button>

      {
        글제목.map((board, i) => {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => { setModal(true); setTitle(i) } }>{ 글제목[i] }
                <span onClick={(e) => { e.stopPropagation(); 따봉변경(따봉+1) }}>👍</span> {따봉}
              </h4>
              <p>7월 4일 발행</p>
              <button onClick={() => {
                let copy = [...글제목];
                copy.splice(i,1);
                글제목변경(copy);
              }}>삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e) => { 입력값변경(e.target.value); console.log(입력값) }}/>
      <button onClick={() => {
        let copy = [...글제목];
        copy.unshift(입력값)
        글제목변경(copy)
        }}>글발행</button>

      {
        modal == true ? <Modal title={title} 글제목변경={글제목변경} 글제목={글제목}/> : null
      }
    </div>
  );
}

function Modal(props) { // 여기에 props 변수로 넣어줘야겠지ㅇㅇ
  return (
    <> 
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => { props.글제목변경(['여!자 코트 추천', '강남 우동 맛집', '파이썬 독학']) }}>글수정</button>
    </div>
    <div></div>
    </>
  )
}

export default App;
