import React, { useEffect } from 'react'
import Header from '../component/include/header'
import Navbar from '../component/include/navbar'
import Footer from '../component/include/footer'
import UserTable from '../component/admin/user_table'
import AdminTabs from '../component/admin/tabs'
import { useNavigate, useSearchParams } from 'react-router-dom'
import AdminSellTable from '../component/admin/sell_table'

export default function AdminPage() {

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!searchParams.get('tab')) {
            const newURL = new URLSearchParams();
            newURL.set('tab', 'user');
            navigate(`/admin?${newURL.toString()}`, { replace: true });
        }
    }, [])

    const showTable = () => {
        if (!searchParams.get('tab') || searchParams.get('tab') === 'user') {
            return (<UserTable />)
        } else {
            return (<AdminSellTable />)
        }
    }

    return (
        <>
            <Header />
            <Navbar />
            <AdminTabs />
            {
                showTable()
            }
            <Footer />
        </>
    )
}