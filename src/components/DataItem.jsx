import React from 'react'

const DataItem = ({label,value}) => {
  return (
    <div className='mb-3'>
        <p>{label}</p>
        <h1 className='text-blue text-lg font-bold'>{value}</h1>
        <hr className='bg-blue w-full' />
    </div>
  )
}

export default DataItem