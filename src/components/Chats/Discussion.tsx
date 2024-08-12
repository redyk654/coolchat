"use client";
import { CustomUser } from '@/interfaces/CustomUser'
import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import Header from './Header'
import useAuth from '@/hooks/useAuth';
import { storeMessage } from '@/apis/RPost';
import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';
import useRealTimeMessages from '@/hooks/useRealTimeMessages';

export default function Discussion({ userSelected }: { userSelected: CustomUser | null }) {

    const { user } = useAuth();
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const [message, setMessage] = useState<string>('');
    const [isSending, setIsSending] = useState<boolean>(false);

    const listOfMessages = useRealTimeMessages(user, userSelected);

    const handleChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    }

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [listOfMessages]);

    const sendMessage = async (e: FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        const result = await storeMessage(user, userSelected, message);

        if(result && result.error) {
            console.error(result.error);
            setIsSending(false);
        } else {
            console.log('Message sent successfully');
            resetForm();
        }
    }

    const buttonIsDisabled = () => {
        return message === '' || isSending;
    }

    const resetForm = () => {
        setMessage('');
        setIsSending(false);
    }

  return (
    <div className={`${userSelected === null ? 'hidden' : 'grid'} grid-rows-12 gap-0 h-[88vh]`}>
        <div className='row-span-1 w-full bg-slate-700 text-white p-2'>
            {/* header */}
            <div className='flex'>
                <Header userSelected={userSelected} />
            </div>
        </div>
        <div className='row-span-9 w-full overflow-auto h-[69vh]'>
            <div className='p-4 space-y-4'>
                {/* list of messages */}
                {listOfMessages.map((message, index) => (
                    <MessageBubble
                        key={index}
                        currentUserId={user?.id}
                        sender_id={message.sender_id}
                        contain={message.contain}
                        created_at={message.created_at}
                    />
                ))}
                <div ref={messagesEndRef} />
            </div>
        </div>
        <div className='row-span-2 w-full bg-slate-700'>
            {/* input */}
            <MessageInput
                message={message}
                handleChangeMessage={handleChangeMessage}
                sendMessage={sendMessage}
                buttonIsDisabled={buttonIsDisabled}
            />
        </div>
    </div>
  )
}
