import React from 'react'
import ClockIcon from '../assets/svg/clock-icon.svg'
import ChevronRightIcon from '../assets/svg/chevron-right-icon.svg'

const ItemPeminjaman = ({ title, time, name, category}) => {
    return (
        <div className="relative mt-3 rounded-xl border border-2 p-2 border-sky">
            <h1 className='mb-2 text-blue text-lg'>{title}</h1>
            <div className='flex flex-col gap-2'>
                <div className='flex text-[10px] items-center gap-2'>
                    <div className='inline-block  text-white bg-blue px-2 py-1 rounded-full'>{category}</div>
                    <div className='flex items-center gap-2'>
                        <div className=' flex items-center gap-1'>
                            <img src={ClockIcon} alt="" />
                            <p className='text-blue'>{time}</p>

                        </div>
                        <p>oleh <span className='font-bold '>{name}</span></p>
                    </div>
                </div>
            </div>
            <img src={ChevronRightIcon} alt="" className='right-0 absolute top-1/2 bottom-1/2 -translate-y-1/2 ' />
        </div>
    )
}

export default ItemPeminjaman