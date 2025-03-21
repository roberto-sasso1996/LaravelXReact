import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

function Layout({children}) {
    return (
        <main>
            <Nav />
                <section className="min-vh-100">{children}</section>
            <Footer/>
        </main>
    );
}

export default Layout