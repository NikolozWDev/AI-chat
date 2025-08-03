import React from 'react';
import AiImage from '../assets/images/AI-chat.png';

const ChatMessage = ({message, sender}) => {

    return (
        <div className={`flex items-end gap-[4px] mt-[20px] w-full ${sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            
        {sender === 'robot' && 
            <img src={AiImage} className="w-10 h-10 rounded-full" />
        }

        <div className={`
            max-w-[70%] px-4 py-2 rounded-lg text-white
            ${sender === 'user'
            ? 'bg-blue-500 rounded-br-none'
            : 'bg-gray-600 rounded-bl-none'
            }
        `}>
            <p className="break-words overflow-hidden">{message}</p>
        </div>

        {sender === 'user' && 
        <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 rounded-full" width="50px" height="50px" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
        }

        </div>
    );
}
export default ChatMessage;