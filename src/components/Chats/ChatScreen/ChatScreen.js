import React, {useState} from 'react'
import "./ChatScreen.css"
import Avatar from "@material-ui/core/Avatar";

const ChatScreen = () => {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([{
        name: 'Ellen',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRullEO8uUFFbWf3HNrdzMSw__XzxA17sTAUQ&usqp=CAU',
        message: 'Whats up'
    },
        {
            message: 'How are u?'
        }
    ])

    const handleSend = e => {
        e.preventDefault()

        setMessages([...messages, {message: input}])
        setInput('')
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You matched with Ellen on 10/10/10</p>

            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.img}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            ))}

            <form className="chatScreen__input">
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    placeholder="Type your message hear..."
                    type="text"
                />
                <button
                    onClick={handleSend}
                    type="submit"
                    className="chatScreen__inputButton"
                >
                    SEND
                </button>
            </form>
        </div>
    )
}

export default ChatScreen