export default function Footer() {

    return (

        <footer className="p-4 md:p-8 flex flex-col gap-4">

            <div className="md:flex gap-4 items-center md:justify-between">
                <a className="flex items-center gap-4 my-4">
                    <img className="rounded-full h-8 md:h-12" src="https://pbs.twimg.com/profile_images/1670426661395873796/OVgETSHN_400x400.jpg" />
                    Mehdi.Khoudali
                </a>
                <h1 className="my-4 md:text-xl">Want to know more about<br />SaaS and EntrepreneurShip ? Follow me.</h1>
                <button className="my-4 bg-purple-800 p-2 md:p-4 rounded-md items-center text-sm text-center"><a href="https://mehdi-newsletter.beehiiv.com/subscribe">Join my newsletter</a></button>

            </div>
            
            <ul>
                <li className="flex py-4 gap-4"><img className="rounded-md" src="https://uploads-ssl.webflow.com/6310a2f29cd6000cb1750803/6310a2f39cd6006ea075086a_icon-5-social-media-video-x-template.svg" /><a href="https://www.linkedin.com/in/mehdi-khoudali-74ab72249/">LinkedIn</a></li>
                <li className="flex py-4 gap-4"><img className="rounded-md" src="https://uploads-ssl.webflow.com/6310a2f29cd6000cb1750803/6310a2f39cd600d40b750868_icon-4-social-media-video-x-template.svg" /><a href="https://www.instagram.com/mehdi_khoudali/">Instagram</a></li>
                <li className="flex py-4 gap-4"><img className="rounded-md" src="https://uploads-ssl.webflow.com/6310a2f29cd6000cb1750803/6310a2f39cd6000747750869_icon-3-social-media-video-x-template.svg" /><a href="https://twitter.com/mehdi_khoudali">Twitter</a></li>
            </ul>
        </footer>

    )

}