import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor= 'text-white',
    clasName = '',
    ...props

}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${clasName} ${bgColor} ${textColor}`} {...props} type={type}>{children}</button>
)
}

export default Button