import { useState } from "react";


export default function Counter() {
    const [count, setCount] = useState(0);

    function Plus() {
        setCount(count + 1)
    }

    return (
        <div>
            {count}

            <button onClick={Plus}>+</button>

        </div>

    )

}