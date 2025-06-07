import React from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import ItemNotifikasi from '../../components/ItemNotifikasi'
import InputText from '../../components/InputText'
import Button from '../../components/Button'
import DataItem from '../../components/DataItem'
import Dropdown from '../../components/Dropdown'

const HomepageLaboran = () => {
    return (
        <div className='px-6 py-4 relative'>
          
            <Navbar />
            {/* <ItemNotifikasi title="Rekrutmen Asisten Praktikum" time="12:00" content="MUHAMMAD IRZA DZULHIKA mengajukan peminjaman ruangan G 1.3 pada 25/05/2025 pukul 09.30 WIB - 12.00 WIB" /> */}
            <DataItem label="Nama" value="MUHAMMAD IRZA DZULHIKA" />
            <DataItem label="Nama" value="MUHAMMAD IRZA DZULHIKA" />
            <DataItem label="Nama" value="MUHAMMAD IRZA DZULHIKA" />
            <Dropdown label="Bulan" className='w-32 border-sky border' value={["Hari", "Bulan", "Tahun"]} />
        
        <Button text="Log In" className='w-full' />
        </div>



    )
}

export default HomepageLaboran