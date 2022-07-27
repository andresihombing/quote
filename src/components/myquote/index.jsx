import React, {useState} from "react";
import classes from './index.module.scss';
import { myQuotes } from "../../store/actions/quoteAction";
import { useDispatch, useSelector } from 'react-redux';

export const MyQuote = () => {
  const dispatch = useDispatch();
  const [ inputs, setInputs ] = useState({});
  const quoteList = useSelector(state => state.quoteReducer.myQuote);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  };

  const handleAdd = () => {
    dispatch(myQuotes(inputs))
  }

  return (
    <>
      <div className={classes.container}>
        <h2>My Quotes</h2>
        <div className={classes.formInput}>
          <input type="text" name="quote" onChange={handleChange} />
          <button type="button" onClick={() => handleAdd()}>Submit</button>
        </div>
        {quoteList.map((item, idx) => {
          return (
            <p key={idx}>{item.quote}</p>
          )
        })}
      </div>
    </>
  )
}