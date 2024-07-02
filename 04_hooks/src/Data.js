import React, { useState } from 'react'
import data from './data.json'
function Data() {
    const [nData, setnDate] = useState(data);
    const clearHandler = () => {
        setnDate([]);
    }
    const removeHandler = (id) => {
        setnDate(nData.filter(item => (item.id !== id)))
    }
    const updateHandler = (id) => {
        setnDate(nData.map(item => {
            if (item.id === id) {
                return { ...item, name: "updated" }
            }
            else return item
        }))
    }
    return (
        <div>
            <ul>
                {
                    nData.map(items =>
                        <li>
                            {items.name}
                            <br />
                            <button onClick={() => removeHandler(items.id)}>Remove</button>
                            <button onClick={() => updateHandler(items.id)}>Update</button>
                        </li>
                    )
                }
            </ul>
            <button onClick={clearHandler}>Clear</button>
        </div>
    )
}

export default Data
