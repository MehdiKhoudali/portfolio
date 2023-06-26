import Image from 'next/image'

import Youtube from '../../assets/youtube.png'
import Twitter from '../../assets/twitter.png'
import Newsletter from '../../assets/newsletter.png'
import Facebook from '../../assets/facebook.png'

export default function Footer() {
    return (
        <footer className="p-4 md:p-8 flex flex-col gap-4">
            <div className="md:flex gap-4 items-center md:justify-between">
                <a className="flex items-center gap-4 my-4">
                    <img alt='Mehdi Khoudali' className="rounded-full h-8 md:h-12" src="https://pbs.twimg.com/profile_images/1670426661395873796/OVgETSHN_400x400.jpg" />
                    Mehdi.Khoudali
                </a>
                <h1 className="my-4 md:text-xl">Want to know more about<br />SaaS and EntrepreneurShip ? Follow me.</h1>
                <button className="my-4 bg-purple-800 p-2 md:p-4 rounded-md items-center text-sm text-center"><a href="https://mehdi-newsletter.beehiiv.com/subscribe">Join my newsletter</a></button>
            </div>
            <ul>
                <li className="flex items-center py-4 gap-4"><Image alt='Mehdi Khoudali' className="rounded-full h-8 w-8" src={Youtube} /><a href="https://www.instagram.com/mehdi_khoudali/">Youtube</a></li>
                <li className="flex items-center py-4 gap-4"><Image alt='Mehdi Khoudali' className="rounded-full h-8 w-8" src={Twitter} /><a href="https://twitter.com/mehdi_khoudali">Twitter</a></li>
                <li className="flex items-center py-4 gap-4"><Image alt='Mehdi Khoudali' className="rounded-full h-8 w-8" src={Newsletter} /><a href="https://mehdi-newsletter.beehiiv.com/subscribe">Newsletter</a></li>
                <li className="flex items-center py-4 gap-4"><Image alt='Mehdi Khoudali' className="rounded-full h-8 w-8" src={Facebook} /><a href="https://www.facebook.com/profile.php?id=100082648135910">Facebook</a></li>
            </ul>
        </footer>
    )
}