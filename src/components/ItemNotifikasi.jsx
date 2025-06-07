import React from 'react'
import ClockIcon from '../assets/svg/clock-icon.svg'

const ItemNotifikasi = ({ title, time, content }) => {
    return (
        <div className='bg-grey relative w-full px-3 py-2'>
            <div className='flex items-center justify-between'>
                <h1 className='text-blue text-lg font-bold'>{title}</h1>
                <div className='rounded-full bg-blue w-3 h-3'>

                </div>
            </div>
            <p className='text-blue text-sm text-justify'>{content}</p>
            <div className='mt-2 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img src={ClockIcon} alt="clock-icon" />
                    <p>{time}</p>
                </div>
                <button className='text-blue text-sm font-bold'>
                    Lihat
                </button>
            </div>


            <hr className='absolute bottom-0 left-3 right-3 border-t-1 border-grey' />
        </div>
    );
}

export default ItemNotifikasi;
