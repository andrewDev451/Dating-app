import React from 'react'
import './Chats.css'
import Chat from "./Chat/Chat";

const Chats = () => {
    return (
        <div className="chats">
            <Chat
                name="Mark"
                message="Whats up"
                timestamp="40 seconds ago"
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRullEO8uUFFbWf3HNrdzMSw__XzxA17sTAUQ&usqp=CAU"
            />
        </div>
    )
}

export default Chats