import React,{useState} from 'react';
function App()
{
  const [count,setCount]=useState(50)
  return(<div>
    <h1>Hooks in functional Component</h1>
    <button onClick={()=>{setCount(count+1)}}>Increment</button>
  </div>)
}

  
export default App;