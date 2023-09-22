import React, { useState } from 'react'

function List() {
    const [n, setN] = useState(0)
    const [arr, setArr] = useState([])
    function addItem() {
        setArr([
            ...arr,
            {
                id: n,
                title: "item"
            }
        ])
        setN(n + 1)
    }
    function dellFItem() {
        setArr([
            ...arr.filter((el, ind) => ind != 0)
        ])
        if (arr.length === 1) setN(0)

    }
    function dellLItem() {
        setArr([
            ...arr.filter((el, ind) => ind != arr.length - 1)
        ])
        if (arr.length === 1) setN(0)
    }
    function dellAllItems() {
        setArr([])
        setN(0)
    }
    function FilterArr() {
        setArr([
            ...arr.sort((a, b) => b.id - a.id)
        ])
    }

    return (
        <>
            <button onClick={addItem}>add</button>
            <button onClick={dellFItem}>Delete First</button>
            <button onClick={dellLItem}>Delete Last</button>
            <button onClick={dellAllItems}>Delete All</button>
            <button onClick={FilterArr}>Filter </button>
            <div>
                {
                    arr.map(el => (
                        <h1 key={el.id}> {el.title} - {el.id} </h1>
                    ))
                }
            </div >
        </>
    )
}

export default List