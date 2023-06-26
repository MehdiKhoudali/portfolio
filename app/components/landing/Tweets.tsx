import Image from "next/image"

import Youtube from '../../assets/youtube.png'
import Twitter from '../../assets/twitter.png'
import Newsletter from '../../assets/newsletter.png'
import Facebook from '../../assets/facebook.png'

export default function Tweets() {
    return (
        <section>
            <div className="p-4 md:flex gap-8 md:p-8">
                <div className="mb-4 p-8 flex flex-col gap-8 rounded-md bg-[#1e1f24]">
                    <div className="flex gap-4 items-center font-bold"><Image alt="Mehdi Khoudali" className="h-10 w-10" src={Twitter} /><h3>Twitter</h3></div>
                    <h1 className="font-bold text-2xl">Learn more about SaaS and tech on my Twitter !</h1>
                    <p className="text-gray-500">I'm sharing with everyone my journey of building SaaS products & my knowledge</p>
                    <button className="bg-purple-800 p-2 md:p-4 rounded-md items-center text-center"><a href="https://twitter.com/mehdi_khoudali">Connect with me</a></button>
                </div>
                <div className="mb-4 p-8 flex flex-col gap-8 rounded-md bg-[#1e1f24]">
                    <div className="flex gap-4 items-center font-bold"><Image alt="Mehdi Khoudali" className="h-10 w-10" src={Newsletter} /><h3>Newsletter</h3></div>
                    <h1 className="text-2xl">Learn more about SaaS and tech on my Newsletter !</h1>
                    <p className="text-gray-500">I'm sharing every week tips about SaaS, business, tech, programming.</p>
                    <button className="bg-purple-800 p-2 md:p-4 rounded-md items-center text-center"><a href="https://mehdi-newsletter.beehiiv.com/subscribe">Join my newsletter</a></button>
                </div>
            </div>
            <div className="p-4 md:flex md:justify-center gap-8 md:p-8">
                <div className="mb-4 p-8 flex flex-col gap-8 rounded-md bg-[#1e1f24]">
                    <div className="flex gap-4 items-center font-bold"><Image alt="Mehdi Khoudali" className="h-10 w-10" src={Youtube} /><h3>Youtube</h3></div>
                    <h1 className="font-bold text-2xl">I create content about modern subjects, SaaS & tech startups !</h1>
                    <p className="text-gray-500">I'm sharing with everyone my journey of building SaaS products & my knowledge, also creating content on modern & viral content.</p>
                    <button className="bg-purple-800 p-2 md:p-4 rounded-md items-center text-center"><a href="https://www.youtube.com/channel/UCA2wEEnvGNHzObJ47uZmatQ">Subscribe</a></button>
                </div>
            </div>
        </section>
    )
}