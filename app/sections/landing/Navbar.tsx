"use client";

import { useState } from "react";

export default function Navbar() {

    const [show, setshow] = useState(false);

    return (
        <div className=" bg-black">
            <nav className="2xl:container 2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4">
                {/* For large and Medium-sized Screen */}
                <div className="flex justify-between ">
                    <div className="hidden sm:flex flex-row items-center space-x-6">
                        <a href="https://twitter.com/mehdi_khoudali">
                            <svg className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005V3.00005Z" stroke="#6EA9FF" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        
                        <a href="https://www.instagram.com/mehdi_khoudali/">
                            <svg className="hover:text-red-800 cursor-pointer" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#DA00FF" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.0002 11.3701C16.1236 12.2023 15.9815 13.0523 15.594 13.7991C15.2065 14.5459 14.5933 15.1515 13.8418 15.5297C13.0903 15.908 12.2386 16.0397 11.408 15.906C10.5773 15.7723 9.80996 15.3801 9.21503 14.7852C8.62011 14.1903 8.22793 13.4229 8.09426 12.5923C7.9606 11.7616 8.09226 10.91 8.47052 10.1584C8.84878 9.40691 9.45438 8.7938 10.2012 8.4063C10.948 8.0188 11.7979 7.87665 12.6302 8.00006C13.4791 8.12594 14.265 8.52152 14.8719 9.12836C15.4787 9.73521 15.8743 10.5211 16.0002 11.3701Z" stroke="#DA00FF" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17.5 6.5H17.51" stroke="#DA00FF" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                    <div className=" flex space-x-3 items-center">
                        <h1 className=" font-normal text-2xl leading-6 text-white">Mehdi.K</h1>
                    </div>
                    <div className="hidden sm:flex flex-row space-x-4">
                        <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-indigo-700 bg-transparent border border-indigo-700 focus:outline-none focus:bg-indigo-700 hover:bg-indigo-700 hover:text-white duration-150 justify-center items-center"><a href="https://twitter.com/mehdi_khoudali">My twitter</a></button>
                        <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center"><a href="https://mehdi-newsletter.beehiiv.com/subscribe">Newsletter</a></button>
                    </div>
                    {/* Burger Icon */}
                    <div id="bgIcon" onClick={() => setshow(!show)} className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  justify-center items-center sm:hidden cursor-pointer`}>
                        <svg className={`${show ? 'hidden' : ''}`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className=" transform duration-150" d="M4 6H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 12H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path className=" transform duration-150" d="M4 18H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <svg className={`${show ? 'block' : 'hidden'}`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 6L18 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                {/* Mobile and small-screen devices (toggle Menu) */}
                <div id="MobileNavigation" className={`${show ? 'block' : 'hidden'} sm:hidden mt-4 mx-auto`}>
                    <div className="flex flex-row items-center justify-center space-x-6">
                        <a href="https://twitter.com/mehdi_khoudali">
                            <svg className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005V3.00005Z" stroke="#6EA9FF" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        
                        <a href="https://www.instagram.com/mehdi_khoudali/">
                            <svg className="hover:text-red-800 cursor-pointer" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#DA00FF" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.0002 11.3701C16.1236 12.2023 15.9815 13.0523 15.594 13.7991C15.2065 14.5459 14.5933 15.1515 13.8418 15.5297C13.0903 15.908 12.2386 16.0397 11.408 15.906C10.5773 15.7723 9.80996 15.3801 9.21503 14.7852C8.62011 14.1903 8.22793 13.4229 8.09426 12.5923C7.9606 11.7616 8.09226 10.91 8.47052 10.1584C8.84878 9.40691 9.45438 8.7938 10.2012 8.4063C10.948 8.0188 11.7979 7.87665 12.6302 8.00006C13.4791 8.12594 14.265 8.52152 14.8719 9.12836C15.4787 9.73521 15.8743 10.5211 16.0002 11.3701Z" stroke="#DA00FF" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17.5 6.5H17.51" stroke="#DA00FF" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                    <div className="flex flex-col gap-4 mt-4 w-80 mx-auto ">
                        <button className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-indigo-700 bg-indigo-600 bg-opacity-0 hover:opacity-100 duration-100 border border-indigo-700 focus:outline-none hover:bg-indigo-700 hover:text-white duration-150 justify-center items-center"><a href="https://twitter.com/mehdi_khoudali">Twitter</a></button>
                        <button className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center"><a href="https://mehdi-newsletter.beehiiv.com/subscribe">Newsletter</a></button>
                    </div>
                </div>
            </nav>
        </div>

    );
}
