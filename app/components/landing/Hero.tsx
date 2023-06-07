import Image from "next/image"

import profile from "./profile.png"

export default function Hero() {

    return (

        <section className="h-full p-4 lg:flex lg:gap-8 items-center md:p-8">
            <div>
                <h1 className="text-4xl md:text-6xl">Mehdi Khoudali</h1>
                <p className="my-8">Tech . SaaS . EntrepreneurShip . Startup . Business</p>
                <p className="my-8 md:text-2xl text-gray-500">15 y/o Software engineer and SaaS bootstrapper, Building solftware with my friends, Sharing my knowledge and have a big passion for business online.</p>
            </div>
        </section>

    )

} 