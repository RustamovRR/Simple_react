import React from "react";
import { useLocation } from "react-router-dom";

const Info = () => {
  const location = useLocation();
  console.log(location.state);

  return (
    <div>
      <h1>{location.state.title}</h1>
      <img src={location.state.image} alt="" width={100}/>
      <small>{location.state.date.createdAt}</small>
    </div>
  );
};

export default Info;
