export default function Tweets() {

    return (

        <section className="p-4 md:flex gap-8 md:p-8">
            <div className="mb-4 p-8 flex flex-col gap-8 rounded-md bg-[#1e1f24]">
                <div className="flex gap-4 items-center font-bold"><img className="h-10 w-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png" /><h3>Twitter</h3></div>
                <h1 className="font-bold text-2xl">Learn more about SaaS and tech on my Twitter !</h1>
                <p className="text-gray-500">I'm sharing with everyone my journey of building SaaS products & my knowledge</p>
                <button className="bg-purple-800 p-2 md:p-4 rounded-md items-center text-center"><a href="https://twitter.com/mehdi_khoudali">Connect with me</a></button>
            </div>
            <div className="mb-4 p-8 flex flex-col gap-8 rounded-md bg-[#1e1f24]">
                <div className="flex gap-4 items-center font-bold"><img className="h-10 w-10" src="https://uploads-ssl.webflow.com/6310a2f29cd6000cb1750803/6354ce53e708dc68f3417911_newsletter-icon.png" /><h3>Newsletter</h3></div>
                <h1 className="text-2xl">Learn more about SaaS and tech on my Newsletter !</h1>
                <p className="text-gray-500">I'm sharing every week tips about SaaS, business, tech, programming.</p>
                <button className="bg-purple-800 p-2 md:p-4 rounded-md items-center text-center"><a href="https://mehdi-newsletter.beehiiv.com/subscribe">Join my newsletter</a></button>
            </div>
        </section>

    )


}