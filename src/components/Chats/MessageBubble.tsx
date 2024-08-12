import { convertDate } from '@/utils/functions'
import React from 'react'

export default function MessageBubble({ currentUserId, sender_id, contain, created_at }: { currentUserId: string | undefined, sender_id: string, contain: string, created_at: string }) {
  return (
    <div
      className={`grid ${
        sender_id === currentUserId ? 'justify-items-end' : 'justify-items-start'
      } my-2`}
    >
        <div
            className={`max-w-xs p-3 rounded-lg shadow-md ${
                sender_id === currentUserId ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-900'
            }`}
        >
            <p>{contain}</p>
            <span
                className={`block mt-2 text-xs ${
                sender_id === currentUserId ? 'text-blue-200' : 'text-gray-500'
                }`}
            >
                {convertDate(created_at.substring(0, 10)) + ' ' + created_at.substring(11, 16)}
            </span>
        </div>
    </div>
  )
}
