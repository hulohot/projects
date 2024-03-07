import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-semibold">
                    <Link href="/" className="hover:text-gray-300">
                        Ethan Brugger
                    </Link>
                </div>
                <div className="flex space-x-10"> {/* Updated spacing to 10px */}
                    <Link href="/resume" className="hover:text-gray-300">
                        Resume
                    </Link>
                    <Link href="/projects" className="hover:text-gray-300">
                        Projects
                    </Link>
                    <Link href="/circuits" className="hover:text-gray-300">
                        Circuits
                    </Link>
                    <Link href="/art" className="hover:text-gray-300">
                        Art
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
