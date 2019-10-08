import React, { useState } from 'react';
import { Input } from "./Input";
import { Dropdown } from "react-bootstrap";

export let GameOptions = (props) => {
  let [no_ques, setNoOfQues] = useState(0);
  let [diff, setDiff] = useState("");

  let setGame = (event) =>{
    event.preventDefault();
    console.log(this)
  }

  setNoOfQues = (e) =>{
   let val = parseInt(e.target.selectedOptions[0].value,10)
   console.log(val)
  }

  console.log(props)
  return (
    <div className="form-group game-options">
      <Input name="Number of Questions" value="10" readOnly></Input>
      <form onSubmit={setGame}>
        <label htmlFor="no_of_ques">Number of Questions</label>
        {/* <select name="no_of_ques" onChange={(e)=>console.log(e)}> */}
        <select name="no_of_ques" onChange={e=>setNoOfQues(e)}>
          <option value="0">Pick a Number</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="audi">50</option>
        </select>
        <label htmlFor="difficulty">Difficulty of Questions</label>
        <select name="difficulty">
          <option value="all">Pick Difficulty Level</option>
          <option value="all">All</option>
          <option value="easy">Easy</option>
          <option value="med">Medium</option>
          <option value="hard">Hard</option>
          <option value="easy_med">Easy & Medium</option>
          <option value="med_hard">Medium & Hard</option>
        </select>
        <input type='submit' value="Go!"/>
      </form>

    </div>
  )
}