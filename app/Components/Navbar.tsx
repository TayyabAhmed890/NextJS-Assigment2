import React from 'react'
import "../style.css"
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <h1>BlogSite</h1>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/Blogs">Blogs</Link></li>
            <li><Link href="/Contact">Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar