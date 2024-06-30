import React from 'react'
import App from './App'
import data from './data.json'
function Info() {
    return (
        <div>
            {
                data.map((ele) => {
                    return <App Name={ele.Name} Age={ele.Age} Sex={ele.Se} />
                })
            }
        </div>
    )
}

export default Info
