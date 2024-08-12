import React from 'react'

export default function MessageInput({ message, handleChangeMessage, sendMessage, buttonIsDisabled }: 
    { message: string, handleChangeMessage: (e: React.ChangeEvent<HTMLInputElement>) => void, sendMessage: (e: React.FormEvent<HTMLFormElement>) => void, buttonIsDisabled: () => boolean }) {
  return (
    <form className='grid grid-cols-12 gap-4 p-4' onSubmit={sendMessage}>
        <div className='col-span-11'>
            <input
                value={message}
                onChange={handleChangeMessage}
                type="text"
                placeholder="Type a message"
                className="pl-5 pr-4 py-2 w-full h-14 border rounded-lg focus:outline-none"
            />
        </div>
        <button
            type='submit'
            className='col-span-1 text-white disabled:text-slate-400 disabled:cursor-not-allowed'
            disabled={buttonIsDisabled()}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
        </button>
    </form>
  )
}
