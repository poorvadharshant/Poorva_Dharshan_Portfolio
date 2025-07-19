import React from 'react'

export const Button = ({ children, onClick, className = '' }: { children: React.ReactNode; onClick?: () => void; className?: string }) => {
  return (
    <button onClick={onClick} className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition ${className}`}>
      {children}
    </button>
  )
}
