import { useState } from "react";
const User=({name})=>{
    const [count,setCount]=useState(0);
    const [count2,setCount2]=useState(1);
    return (
      <div className="userCard">
        <h3>Count :{count}</h3>
        <h3>Count :{count2}</h3>
        <button onClick={()=>{~
            setCount(count+1)
            setCount2(count2+1)
        }}>Incr</button>
        <div>Name : {name}</div>
        <div>Location : Jaipur</div>
        <div>Conatact : @Shahid</div>
      </div>
    );
}

export default User;