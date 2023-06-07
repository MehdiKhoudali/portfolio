
export default function Navbar() {

    return (

        <nav className="p-4 md:p-8 flex justify-between w-full items-center">

            <a className="flex items-center gap-4">
                <img className="rounded-full h-8 md:h-12" src="https://pbs.twimg.com/profile_images/1663816689752866816/wQT7jk4G_400x400.jpg" />
                Mehdi.K
            </a>

            <div className="flex gap-4 md:gap-8 items-center">

                <a className="h-full items-center" href="https://twitter.com/mehdi_khoudali">Twitter</a>
                <button className="bg-purple-800 p-2 md:p-4 rounded-md items-center text-center"><a href="#">My newsletter</a></button>

            </div>
            
        </nav>

    )

} 