import React, { useEffect, useState } from 'react';
import './App.css';
import Quiz from './component/quiz'
import data from './component/data'
import Timer from './component/Timer';

function App() {

const [questionNumber,setQuestionNumber] = useState(1)
const [stopTime,setStopTime] = useState(false)
const[earned, setEarned] = useState("0$")


  const moneyPyramid = [
    {id:1, amount:"$ 10,000"},
    {id:2, amount:"$ 20,000"},
    {id:3, amount:"$ 30,000"},
    {id:4, amount:"$ 40,000"},
    {id:5, amount:"$ 50,000"},
    {id:6, amount:"$ 100,000"},
    {id:7, amount:"$ 200,000"},
    {id:8, amount:"$ 300,000"},
    {id:9, amount:"$ 400,000"},
    {id:10,amount:"$ 500,000"},
    {id:11,amount:"$ 1,000,000,000"},
    {id:12,amount:"$ 2,000,000,000"},
   
    ].reverse();

    useEffect(() =>{
      questionNumber > 1 &&
      setEarned (moneyPyramid.find(m => m.id === questionNumber).amount)
    },[moneyPyramid, questionNumber])

  return (
    <div className="app">
    <div className="main">
     {stopTime ? <h1 className='endText'> You Won : {earned} </h1> : (
       <>
       <div className="top">
        <div className="timer"> <Timer setStopTime={setStopTime} 
        questionNumber={questionNumber}/>
        </div>
        </div>
        <div className="bottom">
         <Quiz 
          data={data}
          setStopTime={setStopTime}
         questionNumber={questionNumber} 
         setQuestionNumber={setQuestionNumber}
         />
         </div> 
         </>       
     )}
   
      </div>
      <div className="pyramid">
      <ul className="moneyList">
        {moneyPyramid.map(m => <li className={questionNumber===m.id ? "moneyListItem active" : "moneyListItem"}>
        <span className="moneyListItemNumber">{m.id}</span>
        <span className="moneyListItemAmount">{m.amount}</span>
          </li>
          )}
          </ul>
          </div>
        </div>
     
  );
}

export default App;
