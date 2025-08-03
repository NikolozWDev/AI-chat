import React from 'react';
import ChatMessage from './Chatmessage';

const ChatMessages = ({chatMessages}) => {

    const chatMessagesRef = React.useRef(null)

    React.useEffect(() => {
        const containerEl = chatMessagesRef.current
        if(containerEl) {
        containerEl.scrollTop = containerEl.scrollHeight
        }
    }, [chatMessages])

    return (
        <div ref={chatMessagesRef} className="flex flex-col justify-center items-center w-[100%] pb-[250px]">
        {
            chatMessages.length === 0 ? (
            <p className="text-[16px] font-semibold opacity-[0.8] text-center px-4 nm:mt-[150px]">
            Welcome to the AI-chat website. This project was created by Nikoloz Gigiashvili.<br />
            You can ask me anything and I will try to help you as best as I can.<br />
            Press <kbd>Enter</kbd> to send a message, and <kbd>Esc</kbd> to clear the input.<br />
            The AI will respond shortly after you ask something. Have fun chatting!
        </p>
        ) : (
            chatMessages.map((chatMessage) => (
            <ChatMessage message={chatMessage.message} sender={chatMessage.sender} key={chatMessage.id}/>
            ))
        )
      }
        </div>
    );
}
export default ChatMessages;