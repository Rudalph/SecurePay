'use client'
import React from 'react'
import { Galada } from "next/font/google";
import { Menu, X, LogIn } from 'lucide-react'
import Image from 'next/image';

const menuItems = [
    {
        name: 'Home',
        href: '#',
    },
    {
        name: 'Invoice',
        href: '#',
    },
    {
        name: 'Retrive',
        href: '#',
    },
]

const galada = Galada({ weight: '400', subsets: ["latin"] });

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className='h-24 fixed top-0 z-50 w-full px-5 lg:px-10 bg-[#232333]'>
            <div className="w-full bg-[#2C2D43] mt-5 border-2 border-[#3A3952] rounded-lg">
                <div className="mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center">
                        <Image 
                          src='/logo.png'
                          height={50}
                          width={50}
                        />
                        <span className={`${galada.className} text-2xl text-white mt-1`}>Secure Pay</span>
                    </div>
                    <div className="hidden grow items-start lg:flex">
                        <ul className="ml-12 inline-flex space-x-8">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-sm font-semibold text-white hover:text-[#696CFF]"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="hidden lg:block">
                        <button
                            type="button"
                            className="rounded-md bg-[#5F61E6] px-3 py-2 text-sm font-extrabold text-white shadow-sm flex justify-center"
                        >
                           <LogIn className='mr-2'/> <strong>Login/Register</strong>
                        </button>
                    </div>
                    <div className="lg:hidden">
                        <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer text-point text-white" />
                    </div>
                    {isMenuOpen && (
                        <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="px-5 pb-6 pt-5">
                                    <div className="flex items-center justify-between">
                                        <div className="inline-flex items-center space-x-2">
                                            <span className="font-bold text-black">Secure Pay</span>
                                        </div>
                                        <div className="-mr-2">
                                            <button
                                                type="button"
                                                onClick={toggleMenu}
                                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                            >
                                                <span className="sr-only">Close menu</span>
                                                <X className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <nav className="grid gap-y-4">
                                            {menuItems.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                                                >
                                                    <span className="ml-3 text-base font-medium text-gray-900">
                                                        {item.name}
                                                    </span>
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                    <button
                                        type="button"
                                        className="mt-4 w-full rounded-md bg-[#5F61E6] py-2 space-x-2 text-sm font-semibold text-white shadow-sm flex justify-center"
                                    >
                                        <LogIn className=''/> <strong>Login/Register</strong>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default Navbar