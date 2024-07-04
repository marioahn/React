/* eslint-disable */
import { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집2';   
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  
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

      {/* <div className="list">
        <h4>{ 글제목[0] } <span onClick={() => { 따봉변경(따봉+1) }}>👍</span> {따봉} </h4>
        <p>7월 4일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() => { setModal(!modal) } }>{ 글제목[1] }</h4>
        <p>7월 4일 발행</p>
      </div> */}
      {
        // 2번째 변수는 반복문 돌 때마다 0부터 1씩 증가하는 정수가 됨ㅇㅇ.
        글제목.map((board, i) => {
          return (
            <div className="list">
              <h4>{ 글제목[i] }
                <span onClick={() => {
                  // state니까 shallowㅠ
                  let copy = [...따봉];
                  copy[i] += 1;
                  따봉변경(copy)
                }}>👍</span> {따봉[i]} </h4>
              <p>7월 4일 발행</p>
            </div>
          )
        })
      }

      {
        modal == true ? <Modal /> : null
      }
    </div>
  );
}

function Modal() {
  return (
    <> 
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    <div></div>
    </>
  )
}

export default App;
