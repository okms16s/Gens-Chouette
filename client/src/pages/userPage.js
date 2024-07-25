import React from 'react'
import Header from '../component/include/header'
import Navbar from '../component/include/navbar'
import Footer from '../component/include/footer'
import UserSellTable from '../component/user/user_table'

export default function UserPage() {
    return (
        <>
            <Header />
            <Navbar />
            <UserSellTable />
            <Footer />
        </>
    )
}