import Image from "next/image"

import TagU from '../../assets/tagu.png'
import Eligius from '../../assets/eligius.png'

export default function Skills() {
    return (
        <section className="p-4 flex flex-col gap-4 md:p-8">
            <h2 className="text-2xl font-bold">What I'm building</h2>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col md:w-[50%] jusitfy-center gap-8">
                    <Image className="rounded-md" src={TagU} alt="Mehdi Khoudali" />
                    <p>Create comments on any website and tag your team with TagU</p>
                    <button className="bg-purple-800 p-2 md:p-4 rounded-md items-center text-center"><a href="trytagu.com">View website</a></button>
                </div>
                <div className="flex flex-col md:w-[50%] jusitfy-center gap-8">
                    <Image className="rounded-md" src={Eligius} alt="Mehdi Khoudali" />
                    <p>Track your software team performances with eligius</p>
                    <button className="bg-purple-800 p-2 md:p-4 rounded-md items-center text-center"><a href="#">Soon</a></button>
                </div>
            </div>
        </section>
    )
}