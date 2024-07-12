import Link from 'next/link';

export default function Header() {
    return (
    <header className="bg-gray-800 text-white py-4 ">
        <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold pl-4"></h1>
        <nav className='scroll-behavior: smooth;'>
            <Link href="#Home" className="text-white mx-2">Home</Link>
            <Link href="#about" className="text-white mx-2">About</Link>
            <Link href="#projects" className="text-white mx-2">Projects</Link>
            <Link href="#skills" className="text-white mx-2">Skills</Link>
            <Link href="#contact" className="text-white mx-2">Contact</Link>
        </nav>
        </div>
    </header>
    );
}
// 