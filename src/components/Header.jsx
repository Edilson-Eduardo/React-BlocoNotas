import { Home, Settings, Trash2, Menu, UserRound, ZoomIn } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const modalRef = useRef(null);
    const location = useLocation();

    function showMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        }

        if (isMenuOpen) {
            document.addEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <div className="flex flex-row w-full justify-between fixed top-0 bg-gray-300 p-2">
            <div className="flex flex-col items-center">
                <Menu className="text-gray-600" />
            </div>

            <ul className="md:flex hidden flex-row gap-2 bg-gray-500 px-2 py-1 rounded-lg items-center justify-center">
                <Link to='/' className={`flex flex-row w-full cursor-pointer rounded-full items-center transition-all ease-in-out p-1 gap-1 ${location.pathname === '/' ? 'bg-white' : ''}`}>
                    <Home className="text-gray-600" />
                </Link>

                <Link to='/annotations' className={`flex flex-row w-full cursor-pointer items-center rounded-full transition-all ease-in-out p-1 gap-1 ${location.pathname === '/annotations' ? 'bg-white' : ''}`}>
                    <Home className="text-gray-600" />
                </Link>

                <Link to='/others' className={`flex flex-row w-full cursor-pointer items-center rounded-full transition-all ease-in-out p-1 gap-1 ${location.pathname === '/others' ? 'bg-white' : ''}`}>
                    <ZoomIn className="text-gray-600" />
                </Link>

                <Link to='/about' className={`flex flex-row w-full cursor-pointer items-center rounded-full transition-all ease-in-out p-1 gap-1 ${location.pathname === '/about' ? 'bg-white' : ''}`}>
                    <UserRound className="text-gray-600" />
                </Link>

                <Link to='/trash' className={`flex flex-row w-full cursor-pointer items-center rounded-full transition-all ease-in-out p-1 gap-1 ${location.pathname === '/trash' ? 'bg-white' : ''}`}>
                    <Trash2 className="text-gray-600" />
                </Link>

                <Link to='settings' className={`flex flex-row w-full cursor-pointer items-center rounded-full transition-all ease-in-out p-1 gap-1 ${location.pathname === '/settings' ? 'bg-white' : ''}`}>
                    <Settings className="text-gray-600" />
                </Link>
            </ul>

            {/* Modal Menu */}
            <ul ref={modalRef} className={`${isMenuOpen ? "flex" : "hidden"} flex-col overflow-hidden rounded-lg shadow-sm shadow-black bg-white absolute right-0 top-10 gap-2 items-start justify-center transition-all ease-in-out duration-200`}>

                <Link to='/' className={`flex flex-row w-full px-5 py-1 cursor-pointer hover:bg-gray-100 items-center gap-1 ${location.pathname === '/' ? 'bg-slate-500 text-white' : ''}`}>
                    <Home className="text-gray-600" />
                    Casa
                </Link>

                <Link to='/annotations' className={`flex flex-row w-full px-5 py-1 cursor-pointer hover:bg-gray-100 items-center gap-1 ${location.pathname === '/annotations' ? 'bg-slate-500 text-white' : ''}`}>
                    <Home className="text-gray-600" />
                    Anotações
                </Link>

                <Link to='/others' className={`flex flex-row w-full px-5 py-1 cursor-pointer hover:bg-gray-100 items-center gap-1 ${location.pathname === '/others' ? 'bg-slate-500 text-white' : ''}`}>
                    <ZoomIn className="text-gray-600" />
                    Outros
                </Link>

                <Link to='/about' className={`flex flex-row w-full px-5 py-1 cursor-pointer hover:bg-gray-100 items-center gap-1 ${location.pathname === '/about' ? 'bg-slate-500 text-white' : ''}`}>
                    <UserRound className="text-gray-600" />
                    Sobre
                </Link>

                <Link to='/trash' className={`flex flex-row w-full px-5 py-1 cursor-pointer hover:bg-gray-100 items-center gap-1 ${location.pathname === '/trash' ? 'bg-slate-500 text-white' : ''}`}>
                    <Trash2 className="text-gray-600" />
                    Lixo
                </Link>

                <Link to='settings' className={`flex flex-row w-full px-5 py-1 cursor-pointer hover:bg-gray-100 items-center gap-1 ${location.pathname === '/settings' ? 'bg-slate-500 text-white' : ''}`}>
                    <Settings className="text-gray-600" />
                    Definições
                </Link>
            </ul>

            <div onClick={(e) => { e.stopPropagation(); showMenu(); }} className="md:hidden cursor-pointer hover:scale-110 transition-all ease-in-out flex flex-col items-center" >
                <Menu className={`${isMenuOpen ? 'text-white' : 'text-gray-600'} w-8 h-8 hover:text-white ease-in-out transition-all`} />
            </div>
        </div>
    );
}

export default Header;
