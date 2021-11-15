import React, {useState} from "react";

const App = () => {
  const [count, setCount] = useState(0);

  //untuk meringkas increament dengan membuat function handle dg arrow func
  const handleIncreament = () => {
    setCount(count + 1)
  }

  //untuk meringkas decreament dengan membuat function handle dg Refuler func
  function handleDecreament(){
     if(count == 0) return;
          setCount(count - 1)
  }

  return (
    <div>
      <div>
        Jumlah : {count}
      </div>
      <button onClick={handleIncreament}>Increament</button>
      <button onClick={handleDecreament}>Decreament</button>
      {/* <button onClick={() => setCount((previous) => previous + 1)}>Increament</button>
      <button onClick={() => setCount((previous) => previous - 1)}>Decreament</button> */}
    </div>
  )
};

export default App;
