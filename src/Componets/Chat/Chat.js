import React, { useRef, useState } from 'react'

function Chat({ userName }) {
    const [massage, setMasage] = useState([])
    const formRef = useRef(null)

    function sub(e) {
        e.preventDefault();
        let mess = formRef.current[0].value
        let answ
        switch (mess) {
            case "barev":
                answ = "Barev aper"
                break;

            default:
                answ = "inch e exel aper"
                break;
        }
        setMasage([
            ...massage,
            {
                id: new Date().getTime() + "me",
                txt: mess,
                user: "me"
            },
            {
                id: new Date().getTime() + "you",
                txt: answ,
                user: "you"

            }
        ])
    }

    return (
        <>
            <div>hello {userName.name}</div>
            <form ref={formRef} onSubmit={sub}>
                <input type='text' />
                <button>sent</button>
            </form>
            <div>
                {
                    massage.map(el => (
                        <h2 key={el.id}>
                            {el.user === "me" ? <h3>{userName.name}</h3> : <h3>Bot</h3>}
                            {el.txt}
                        </h2>
                    ))
                }
            </div>
        </>
    )
}

export default Chat