import React, { useState } from "react";

export default function Calk() {

    const [out, setOut] = useState(0)
    let inp = React.createRef()
    let inp2 = React.createRef();


    function addUser() {
        console.log(inp.current.value);
        const result = +inp.current.value + +inp2.current.value
        setOut(result)
    }
    return (
        <div>


            <input type="text" ref={inp} />
            <input type="text" ref={inp2} />
            <button onClick={addUser}>Addd</button>
            <h3>{out}</h3>

        </div>
    );

}