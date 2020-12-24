import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "./emojipedia.js";
import emojipedia from "./emojipedia.js";

// const app = <dl className='dictionary'>{emojipedia[1]}</dl>;
// console.log(app)

const entry =(
  <div className='term'>{emojipedia.map((element,index)=>{
    return <div>
    <dt>
      <span className="emoji" role="img">{element.icon}</span>
      <span class>{element.name}</span>  
    </dt>
    <dd>
    <span>{element.meaning}</span>
    </dd>
    </div>
    })}
</div>
)
const App =<dl className='dictionary'>{entry}</dl>;
ReactDOM.render(App, document.getElementById('root'));