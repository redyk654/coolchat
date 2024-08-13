"use client";
import useAuth from '@/hooks/useAuth'
import React, { useState } from 'react'

export default function Profile() {

    const { user } = useAuth();

    const [showPopover, setShowPopover] = useState(false);

  return (
    <div className="relative row-start-11 w-full text-slate-700 p-1 flex justify-center">
        <div
            className="flex flex-col items-center"
            onMouseEnter={() => setShowPopover(true)}
            onMouseLeave={() => setShowPopover(false)}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-8 w-8"
            >
                <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clipRule="evenodd"
                />
            </svg>

            {showPopover && (
            <div className="absolute bottom-10 bg-gray-800 text-white text-xs rounded-lg p-2 z-10">
                Logged in as {user?.email}
            </div>
            )}
        </div>
    </div>
)
}
