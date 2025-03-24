import { Home, Settings, Trash2, Menu, UserRound, ZoomIn } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom"; 

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

            <ul className="md:flex hidden flex-row gap-2 items-center justify-center">
                <li className="flex flex-col items-center">
                    <Home className="text-gray-600" />
                </li>
                <li className="flex flex-col items-center">
                    <Trash2 className="text-gray-600" />
                </li>
                <li className="flex flex-col items-center">
                    <Settings className="text-gray-600" />
                </li>
            </ul>

            {/* Modal Menu */}
            <ul
                ref={modalRef}
                className={`${
                    isMenuOpen ? "flex" : "hidden"
                } flex-col overflow-hidden rounded-lg shadow-sm shadow-black bg-white absolute right-0 top-10 gap-2 items-start justify-center transition-all ease-in-out duration-200`}
            >
                <li className={`flex flex-row w-full px-5 py-1 cursor-pointer hover:bg-gray-100 items-center gap-1 ${location.pathname === '/' ? 'hidden' : ''}`}>
                    <Home className="text-gray-600" />
                    Casa
                </li>
                <li className="flex flex-row w-full px-5 py-1 cursor-pointer hover:bg-gray-100 items-center gap-1">
                    <ZoomIn className="text-gray-600" />
                    Outros
                </li>
                <li className="flex flex-row w-full px-5 py-1 cursor-pointer hover:bg-gray-100 items-center gap-1">
                    <UserRound className="text-gray-600" />
                    Sobre
                </li>
                <li className="flex flex-row w-full px-5 py-1 cursor-pointer hover:bg-gray-100 items-center gap-1">
                    <Trash2 className="text-gray-600" />
                    Lixo
                </li>
                <li className="flex flex-row w-full px-5 py-1 cursor-pointer hover:bg-gray-100 items-center gap-1">
                    <Settings className="text-gray-600" />
                    Definições
                </li>
            </ul>

            <div
                onClick={(e) => {
                    e.stopPropagation(); 
                    showMenu();
                }}
                className="md:hidden cursor-pointer hover:scale-110 transition-all ease-in-out flex flex-col items-center"
            >
                <Menu className={`${isMenuOpen ? 'text-white' : 'text-gray-600'} w-8 h-8 hover:text-white ease-in-out transition-all`} />
            </div>
        </div>
    );
}

export default Header;
