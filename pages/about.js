export default function About() {
    return (
    <div id="about" className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto flex items-center space-x-8 p-8 bg-slate-600 rounded-lg">
            <div className="w-1/2">
            <img 
                src="https://via.placeholder.com/300" 
                alt="Profile" 
                className="w-full h-auto rounded-lg"
            />
            </div>
            <div className="w-1/2">
            <h1 className="text-4xl font-bold mb-4 text-green-400">Who am I?</h1>
            <p className="text-2xl font-semibold mb-4">I'm Ebrahim Al-Nahdi</p>
            <p className="mb-4">
                I am a student at Hadhramaut University, having completed my first level of study with distinction. Currently, I am an intern at Smart Generations Company, gaining practical experience and enhancing my technical and analytical skills in information technology.
            </p>    
            <div className="flex justify-between mt-4">
                <div>
                    <p><span className="font-bold">Name:</span> Ebrahim Al-Nahdi</p>
                    <p><span className="font-bold">Age:</span> 20</p>
                </div>
                <div>
                    <p><span className="font-bold">From:</span> Hadhramaut, Yemen</p>
                    <p><span className="font-bold">Email:</span> ebrahimalnahdi@gmail.com</p>
                </div>
            </div>
            <hr className="my-6 border-t-2 border-gray-400" />
            <a
                href="https://drive.google.com/file/d/1eScGNGLrsJ-2YO1TA_XkNPNWUkyWsxIx/view?usp=sharing"
                className="inline-block mt-6 px-6 py-2 bg-green-500 text-white font-bold rounded-full"
            >
                Download CV
            </a>
            </div>
        </div>
        </div>

    );
}
