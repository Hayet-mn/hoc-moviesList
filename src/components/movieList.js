import React, { Component } from "react";
import RatingMovie from "./ratingMovie";
import HocLoading from "./hocLoading";
import {movies} from "./date"


import "../App.css";

 

  const MovieList = props => {
    return (
       <div className="appmovie">
         <h1>MOVIES LIST</h1>
         <div className="listmovie">
        {movies.map((el, i) => (
            <div className="movie">
               <RatingMovie rate={el.rating} />
              <img src={el.poster} className="imgMovie" />
              <span>{el.title}</span>-<span>{el.year}</span>
            </div>
          ))}
      </div>
      </div>
    );
  };



export default HocLoading(MovieList);
