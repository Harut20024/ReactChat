import React, { useState } from 'react';

function Input() {
    const [str, setStr] = useState('');
    const [data, setData] = useState([
        {
            id: '1',
            title: 'test1',
            value: false
        },
        {
            id: '2',
            title: 'test2',
            value: false
        },
        {
            id: '3',
            title: 'test3',
            value: false
        }
    ]);

    function handleEvn(e) {
        e.preventDefault();
        setData([
            ...data,
            {
                id: new Date().getTime().toString(),
                title: str,
                value: false
            }
        ]);
        setStr('');
    }

    function handleChange(e) {
        setStr(e.target.value);
    }

    function deleteItem(id) {
        setData([...data.filter(el => el.id !== id)]);
    }

    function toggleValue(id) {
        setData(data.map(el => {
            if (el.id === id) {
                return { ...el, value: !el.value };
            }
            return el;
        }));
    }

    return (
        <div>
            <form onSubmit={handleEvn}>
                <input value={str} type="text" onChange={handleChange} />
                <button type="submit">add</button>
                {data.map(el => (
                    <h1 key={el.id}
                        style={{ textDecoration: el.value ? 'line-through' : 'none' }}>
                        {el.title}
                        <span
                            style={{
                                color: 'red',
                                height: "4px",
                                cursor: 'pointer',
                                border: "1px solid",
                                borderRadius: "20px"
                            }}
                            onClick={() => deleteItem(el.id)}>
                            x
                        </span>
                        <input
                            type="checkbox"
                            checked={el.value}
                            onChange={() => toggleValue(el.id)}
                        />
                    </h1>
                ))}
            </form>
        </div>
    );
}

export default Input;
