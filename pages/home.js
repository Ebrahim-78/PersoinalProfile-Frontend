import Image from 'next/image';
export default function HomePage() {
    return (
<main className=" text-white py-10">
            <div id='Home' className="  container mx-auto px-4 flex flex-col md:flex-row items-start">
                <div className="w-full md:w-1/2 mt-28 md:pr-10 order-2 md:order-1 ml-52">
                <h1 className="text-6xl font-bold  text-green-400">Hi There!</h1>
                <h2 className="text-4xl mt-2" >I am a Full Stack Developer</h2>
                <p className="text-3xl font-bold mt-4">I make the complex simple.</p>
                <div className="mr-4 mt-8 text-1XL">
                    <p>Email:</p>
                    <p>ebrahimalnahdi@gmail.com</p>
                </div>
                <div className="mr-4">
                    <p>Phone:</p>
                    <p>+967 773610341</p>
                </div>
                <div>
                    <p>Location:</p>
                    <p>Mukalla, Yemen</p>
                </div>
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2">
                <Image
                    src="/one.jpg"
                    alt="Profile Picture"
                    width={400}
                    height={450}
                    className="rounded-full mt-16"
                />
                </div>
            </div>
        </main>
    )}