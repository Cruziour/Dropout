import React, {useId} from 'react'

const DivItem = ({children,className='',...props}) => {
  const id = useId()

  return (
    <div className={`w-full md:w-1/2 md:px-10 px-4 py-5 border-2 border-orange-400 rounded-2xl text-left text-lg md:text-2xl font-semibold ${className}`} id={id} {...props}>
      <h1>{children}</h1>
    </div>
  )
}

export default DivItem
