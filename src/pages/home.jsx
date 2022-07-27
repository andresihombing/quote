import React from "react";
import { KanyeWestQuote } from "../components/kanyeWestQuote";
import { MyQuote } from "../components/myquote";
import classes from './index.module.scss';

export const Home = () => {
  return (
    <>
      <div className={classes.container}>
        <KanyeWestQuote />
        <MyQuote />
      </div>
    </>
  )
}