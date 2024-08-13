"use client";
import React, { ChangeEvent } from 'react'

export default function SearchInput({ search, setSearch }: { search: string, setSearch: (search: string) => void }) {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    return (
    <div className="relative flex items-center w-full max-w-xs">
        <svg
            className="absolute left-3 w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 111.414-1.414 7.5 7.5 0 01-1.414 1.414z"
            />
        </svg>
        <input
            value={search}
            onChange={handleChange}
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
    </div>
  )
}
