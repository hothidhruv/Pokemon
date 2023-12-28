import React, { useState } from 'react';
import './App.css';
import { ExpandedContent } from './ExpandedContent';


export function PokemonThumbnail(props) {
const [showeModle, setShoweModle] = useState(false);
  const style = `thumb-container ${props.type}`;
  const handleClick = ()=>{
    if(!showeModle)
         {
           setShoweModle(true);
           }
  }
const closeModel = () =>{
  setShoweModle(false);
}

  return (
    <>
      <div className={style} style = {{border:'2px solid black'}}>
        <p>ID: {props.id} </p>
        <img src = {props.image}/>
        <div>
          <h4>{props.name}</h4>
          <p>Type: {props.type}</p>
          <button onClick={handleClick}>Know more...</button>
        </div>
      </div>
      {showeModle && <ExpandedContent closeModel={closeModel} name={props.name} image ={props.image} height = {props.height} weight = {props.weight} stats ={props.stats} type={props.type}/>}
    </>
  );

}
