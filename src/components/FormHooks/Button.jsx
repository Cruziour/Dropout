import React, {useId} from 'react'

const Button = ({
    children,
    type='button',
    className = '',
    ...props
}) => {
  const id = useId()
  return (
    <button type={type} className={`px-2 py-1 text-center rounded-2xl text-xl ${className}`} id={id} {...props}>{children}</button>
  )
}

export default Button
    