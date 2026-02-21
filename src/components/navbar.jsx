'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import NavLink from './navLink'

const Links = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    title: 'Contact',
    url: '/contact',
  },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
      {/* links */}
      <div className='hidden md:flex gap-4 w-1/3'>
        {Links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* logo */}
      <div className='md:hidden lg:flex w-1/3  justify-center'>
        <Link
          href={''}
          className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'
        >
          <span className='text-white mr-1'>Asif</span>
          <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center'>
            .dev
          </span>
        </Link>
      </div>
      {/* Socials */}
      <div className='hidden md:flex gap-4 w-1/3'>
        <Link href='#'>
          <Image src='/github.png' width={24} height={24} alt='' />
        </Link>
        <Link href='#'>
          <Image src='/dribbble.png' width={24} height={24} alt='' />
        </Link>
        <Link href='#'>
          <Image src='/instagram.png' width={24} height={24} alt='' />
        </Link>
        <Link href='#'>
          <Image src='/facebook.png' width={24} height={24} alt='' />
        </Link>
        <Link href='#'>
          <Image src='/pinterest.png' width={24} height={24} alt='' />
        </Link>
        <Link href='#'>
          <Image src='/linkedin.png' width={24} height={24} alt='' />
        </Link>
      </div>

      {/* Responsive Menu */}
      <div className='md:hidden'>
        {/* MENU BUTTON */}

        <button
          className='w-10 h-8 flex flex-col justify-between z-50 relative'
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className='w-10 h-1 bg-white rounded '></div>

          <div className='w-10 h-1 bg-white rounded '></div>

          <div className='w-10 h-1 bg-white rounded '></div>
        </button>

        {/*MENU LIST */}
        {open && (
          <div className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl'>
            {Links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
