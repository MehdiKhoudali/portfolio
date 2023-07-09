import Image from "next/image"

import TagU from '../../assets/tagu.png'
import Eligius from '../../assets/eligius.png'

import { FaArrowRight } from 'react-icons/fa'

export default function Skills() {
    return (
        <section className="p-4 flex flex-col gap-8 md:p-8">
            <h2 className="text-4xl font-bold">What I'm building</h2>
            <div className="flex flex-col md:flex-row gap-12">
                <div className="flex flex-col md:w-[50%] jusitfy-center gap-8">
                    <Image className="rounded-md" src={TagU} alt="Mehdi Khoudali" />
                    <p className="text-gray-500 text-center">Create comments on any website and tag your team with TagU</p>
                    <button className="hover:scale-[0.9] duration-100 bg-purple-800 p-5 rounded-full items-center text-center flex justify-center gap-2"><a href="trytagu.com">View website</a><FaArrowRight /></button>
                </div>
            </div>
        </section>
    )
}