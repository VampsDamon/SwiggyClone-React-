import React from "react";
import * as ReactDOM from "react-dom/client";
import logo from './SiteLogo.png'

const headStyle={
    color:"red",
    padding:"2rem",
    textAlign:"center"
}
const heading = (
    
  <>
    <h1 style={headStyle}>Hello Shahid</h1>
    <p style={headStyle}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
      consequuntur nihil nesciunt corporis repellat dolores? Accusamus totam ex
      earum laborum facere, laboriosam iusto quod cupiditate blanditiis debitis
      tempore qui eum.
    </p>
    <img src={logo} alt="logoImg" style={{width:"50%", padding:"20px"}}/>
  </>
);

const HeadingComponent=()=>(
      <div className="box">
        <div id="box1">box1</div>
        <div id="box2">box2</div>
        <div id="box3">box3</div>
      </div>
);



export {HeadingComponent,heading};