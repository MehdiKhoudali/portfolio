import Image from "next/image"

import Youtube from '../../assets/youtube.png'
import Twitter from '../../assets/twitter.png'
import Newsletter from '../../assets/newsletter.png'

import { FaArrowRight } from 'react-icons/fa'

export default function Tweets() {
    return (
        <section>
            <div className="p-4 w-full md:flex gap-8 md:p-8">
                <div className="mb-4 p-8 md:w-[50%] flex flex-col gap-8 rounded-md bg-[#1e1f24]">
                    <div className="flex gap-4 items-center font-bold"><Image alt="Mehdi Khoudali" className="h-10 w-10" src={Youtube} /><h3>Youtube</h3></div>
                    <h2 className="font-bold text-2xl">I create content about modern subjects, SaaS & tech startups !</h2>
                    <p className="text-gray-500">I'm sharing with everyone my journey of building SaaS products & my knowledge, also creating content on modern & viral content.</p>
                    <button className="hover:scale-[0.9] duration-100 bg-purple-800 p-5 rounded-full items-center text-center flex justify-center gap-2"><a href="https://www.youtube.com/channel/UCA2wEEnvGNHzObJ47uZmatQ">Subscribe</a><FaArrowRight /></button>
                </div>
                <div className="mb-4 p-8 md:w-[50%] flex flex-col gap-8 rounded-md bg-[#1e1f24]">
                    <div className="flex gap-4 items-center font-bold"><Image alt="Mehdi Khoudali" className="h-10 w-10" src={Newsletter} /><h3>Newsletter</h3></div>
                    <h2 className="font-bold text-2xl">Learn more about SaaS and tech on my Newsletter !</h2>
                    <p className="text-gray-500">I'm sharing every week tips about SaaS, business,<br />tech, programming.</p>
                    <button className="hover:scale-[0.9] duration-100 bg-purple-800 p-5 rounded-full items-center text-center flex justify-center gap-2"><a href="https://mehdi-newsletter.beehiiv.com/subscribe">Join my newsletter</a><FaArrowRight /></button>
                </div>
            </div>
        </section>
    )
}