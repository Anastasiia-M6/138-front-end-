// import { useState } from "react";
// import React, { useState } from "react";
import Counter from "./component/Counter/Counter";
import Calk from "./component/Calk/Calk";

export default function App() {
    // //всегда идет две переменные и первое это результат а вторая это переписать результат
    // const [num, setNum] = useState(0);
    // function countPlus() {
    //     setNum(num + 1);
    // }
    // function countMinus() {
    //     if (num > 0) setNum(num - 1);
    // }

    // const [out, setOut] = useState(0)
    // let inp = React.createRef()
    // let inp2 = React.createRef();


    // function addUser() {
    //     console.log(inp.current.value);
    //     const result = +inp.current.value + +inp2.current.value
    //     setOut(result)
    // }
    return (
        <div className="App">
            <h1>counter</h1>
            <Counter />

            <h2>Inputs</h2>
            {/* <input type="text" ref={inp} />
            <input type="text" ref={inp2} />
            <button onClick={addUser}>Addd</button>
            <h3>{out}</h3> */}
            <Calk />
            {/* <h1>test</h1>
            {num}
            <button onClick={countPlus}>+</button>
            <button onClick={countPlus}>-</button> */}
        </div>
    );

}
// export default function App() {
//     //всегда идет две переменные и первое это результат а вторая это переписать результат
//     const [num, setNum] = useState(0);
//     function countMinus() {
//         if (num > 0) setNum(num - 1);
//     }
//     return (
//         <div className="App">
//             <h1>test</h1>
//             {num}
//             <button onClick={countMinus}>-</button>

//         </div>
//     );
// }

// // {/* <button onClick={countPlus}>+</button> */ }
// function countPlus() {
//     setNum(num + 1);
// }

// let btn = document.createElement('button');
// btn.innerHTML = "start";
// btn.addEventListener('click', countPlus());
