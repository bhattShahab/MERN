import React, { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)
    const handleClickInc = () => {
        if (count < 20) setCount(count + 1)
    }
    const handleClickDec = () => {
        if (count > 0) setCount(count - 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClickInc}>+</button>
            <button onClick={handleClickDec}>-</button>
        </div>
    )
}

export default App