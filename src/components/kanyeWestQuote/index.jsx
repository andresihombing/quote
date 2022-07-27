import React, { useEffect } from "react";
import classes from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getQuote, addFavorite } from "../../store/actions/quoteAction";

export const KanyeWestQuote = () => {
  const dispatch = useDispatch();
  const quote = useSelector(state => state.quoteReducer.quote);
  const favorite = useSelector(state => state.quoteReducer.favorite);

  useEffect(() => {
    dispatch(getQuote())
  }, [])

  const handleGet = () => {
    dispatch(getQuote())
  }

  const addFav = () => {
    dispatch(addFavorite(quote))
  }

  return (
    <>
      <div className={classes.container}>
        <img 
          src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg" 
          alt=""
        />
        <h1>Kanye-West Quote</h1>
        <h3>{quote?.quote}</h3>
        <div className={classes.action}>
          <button className={classes.button} onClick={() => handleGet()}>Get Quote</button>
          <button className={classes.button} onClick={() => addFav()}>Add Favorite</button>
        </div>
        {favorite.map((item, idx) => {
          return (
            <p key={idx}>{item.quote}</p>
          )
        })}
      </div>
    </>
  )
}