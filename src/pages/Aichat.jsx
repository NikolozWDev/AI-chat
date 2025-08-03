import React, { useState } from 'react';
import ChatInput from '../components/Chatinput';
import ChatMessages from '../components/Chatmessages';

const Aichat = () => {


    const [chatMessages, setChatMessages] = React.useState([])

    return (
        <div className="flex flex-col items-center justify-between pt-[60px] h-[100vh]">

            <div className="flex flex-col gap-[50px] items-center justify-between w-[90%] nm:w-[850px] h-[100%]">
                <ChatMessages chatMessages={chatMessages} />
                <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
            </div>

        </div>
    )

}
export default Aichat;