import Image from "next/image"

import TagU from '../../assets/tagu.png'
import Eligius from '../../assets/eligius.png'

export default function Skills() {
    return (
        <section className="p-4 flex flex-col gap-8 md:p-8">
            <h2 className="text-4xl font-bold">What I'm building</h2>
            <div className="flex flex-col md:flex-row gap-12">
                <div className="flex flex-col md:w-[50%] jusitfy-center gap-8">
                    <Image className="rounded-md" src={TagU} alt="Mehdi Khoudali" />
                    <p className="text-gray-500 text-center">Create comments on any website and tag your team with TagU</p>
                    <p className="text-indigo-400 text-center">Nextjs | Reactjs | Supabase | Vercel | TailwindCss</p>
                    <button className="bg-purple-800 p-2 md:p-4 rounded-md items-center text-center"><a href="trytagu.com">View website</a></button>
                </div>
                <div className="flex flex-col md:w-[50%] jusitfy-center gap-8">
                    <Image className="rounded-md" src={Eligius} alt="Mehdi Khoudali" />
                    <p className="text-gray-500 text-center">Track your software team performances with eligius</p>
                    <p className="text-indigo-400 text-center">Nextjs | Reactjs | GITHUB_API | Vercel | TailwindCss | Nodejs | Postgresql</p>
                    <button className="bg-purple-800 p-2 md:p-4 rounded-md items-center text-center"><a href="#">Comming soon</a></button>
                </div>
            </div>
        </section>
    )
}