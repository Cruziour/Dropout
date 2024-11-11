import React, {useId, forwardRef} from 'react'

const Input = ({
    label,
    type = 'text',
    labelClass='',
    className='',
    ...props
}, ref) => {
    const id = useId()
  return (
    <div className='mt-4'>
      {label && <label className={`text-black font-semibold text-xl ${labelClass} `} htmlFor={id}>{label}</label>}
      <input type={type} className={`w-full h-12 px-2 py-1 rounded-2xl bg-green-400 bg-opacity-15 ${className}`} id={id} ref={ref} {...props} />
    </div>
  )
}

export default forwardRef(Input)
