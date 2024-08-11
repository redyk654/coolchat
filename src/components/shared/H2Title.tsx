import React from 'react'

export default function H2Title({ children, styles }: Readonly<{ children: React.ReactNode }> & { styles?: string }) {
  return (
    <h2 className={`text-2xl font-semibold ${styles}`}>
      {children}
    </h2>
  )
}
