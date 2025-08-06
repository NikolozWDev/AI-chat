import React from 'react';
import ChatInput from '../components/ChatInput';
import ChatMessages from '../components/ChatMessages';

const AiChat = () => {


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
export default AiChat