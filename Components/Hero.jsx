'use client'
import React,{useRef, useEffect} from 'react'
import Typed from 'typed.js';


export default function Hero() {

    const typingRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                'SECURE YOUR PAYMENTS',
            ],
            typeSpeed:50,
            backSpeed: 50,
            backDelay: 3000,
            loop: true,
            showCursor: true,
        };

        const typingInstance = new Typed(typingRef.current, options);

        return () => {
            typingInstance.destroy();
        };
    }, []);


    return (
        <div className='p-5 lg:p-10'>
            <div className="relative w-full bg-[#2B2C40] mt-20 rounded-xl border-2 border-[#3A3952]">
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
                        <div className="inline-flex items-center">

                            <span className="text-2xl font-extrabold text-white">SECURE PAY</span>
                        </div>
                        <div className="mt-10 flex max-w-max items-center space-x-2 rounded-full border border-[#5F61E6] p-2">
                            <p className="text-xs font-medium md:text-sm text-white">
                                Securing Global Payments with Blockchain Transparency
                            </p>
                        </div>
                        <h1 className="mt-8 max-w-4xl text-xl font-bold tracking-tight text-[#5F61E6] md:text-4xl lg:text-6xl">
                            <span ref={typingRef} />
                        </h1>
                        <div className="mt-8 max-w-3xl text-lg text-white">
                        Secure Pay is a blockchain-based web application designed to facilitate secure and reliable cross-border payments while 
                        safeguarding both consumers and suppliers from potential fraud.
                        </div>
                        <div className="mt-8">
                            <button
                                type="button"
                                className="rounded-md bg-[#5F61E6] px-3 py-2.5 text-sm font-semibold text-white shadow-sm"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className="rounded-lg p-4 pb-10">
                        <img
                            className="aspect-[3/2] w-full rounded-lg object-cover lg:aspect-auto lg:h-[400px]"
                            src="https://www.pikpng.com/pngl/b/319-3194262_one-example-of-whats-wrong-with-blockchain-transparent.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
