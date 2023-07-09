import { FaArrowRight } from 'react-icons/fa'

export default function Hero() {
    return (
        <section className="h-full p-4 lg:flex lg:gap-8 items-center md:p-12">
            <div className="text-center flex flex-col justify-center">
                <h1 className="text-4xl flex justify-center items-center gap-4 md:text-7xl"><img className="border-2 border-white h-8 md:h-20 rounded-full" src="https://pbs.twimg.com/profile_images/1670426661395873796/OVgETSHN_400x400.jpg" />Mehdi Khoudali</h1>
                <p className="my-8 text-indigo-400">Tech . SaaS . EntrepreneurShip . Startup . Business . Programming</p>
                <p className="my-8 md:text-2xl text-gray-500">15 y/o Software engineer and SaaS bootstrapper, Building solftware with my friends, Sharing my knowledge and have a big passion for online business & programming.</p>
                <button className="md:mx-auto hover:scale-[0.9] duration-100 bg-purple-800 p-5 md:px-8 rounded-full items-center text-center flex justify-center gap-2"><a href="mailto:mehdikhoudalpro@gmail.com">Get in touch with me</a><FaArrowRight /></button>
            </div>
        </section>
    )
} 