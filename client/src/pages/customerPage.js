import React, { useEffect, useState } from 'react'
import Header from '../component/include/header'
import Navbar from '../component/include/navbar'
import Footer from '../component/include/footer'
import CustomerTabs from '../component/customer/tabs'
import { useNavigate, useSearchParams } from 'react-router-dom'
import ProTable from '../component/customer/pro_table'
import SellTable from '../component/customer/sell_table'

export default function CustomerPage() {

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    // redirect customer page with tab
    useEffect(() => {
        if (!searchParams.get('tab')) {
            const newURL = new URLSearchParams();
            newURL.set('tab', 'product');
            navigate(`/customer?${newURL.toString()}`, { replace: true });
        }
    }, [])

    const showTable = () => {
        if (!searchParams.get('tab') || searchParams.get('tab') === 'product') {
            return (<ProTable />)
        } else {
            return (<SellTable />)
        }
    }

    return (
        <>
            <Header />
            <Navbar />
            <CustomerTabs />
            {
                showTable()
            }
            <Footer />
        </>
    )
}