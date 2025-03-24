import { Home, Settings, Trash2, Menu } from 'lucide-react'


function Header() {
    function showMenu() {
        const modal = document.getElementById('modal')
        
        modal.classList.toggle('hidden')
        modal.classList.toggle('flex')
        
        document.addEventListener('click', (e) => {
            modal.classList.contains('flex') && e.target.id !== 'modal' ? modal.classList.remove('flex') : '' 
        })
    }

    return (
        <div className='flex flex-row w-full justify-between absolute top-0 bg-gray-300 p-2'>
            <div className='flex flex-col items-center'>
                <Menu className='text-gray-600' />
            </div>

            <ul className='md:flex hidden flex-row gap-2 items-center justify-center'>
                <li className='flex flex-col items-center'>
                    <Home className='text-gray-600' />
                </li>

                <li className='flex flex-col items-center'>
                    <Trash2 className='text-gray-600' />
                </li>

                <li className='flex flex-col items-center'>
                    <Settings className='text-gray-600' />
                </li>
            </ul>

            <ul id='modal' className='flex-col hidden overflow-hidden rounded-lg shadow-sm shadow-black bg-white absolute right-0 top-0 gap-2 items-start justify-center'>
                <li className='flex flex-row w-full px-5 py-1 cursor-pointer hover:bg-gray-100 items-center gap-1'>
                    <Home className='text-gray-600' />
                    Casa
                </li>

                <li className='flex flex-row w-full px-5 py-1 cursor-pointer hover:bg-gray-100 items-center gap-1'>
                    <Trash2 className='text-gray-600' />
                    Lixo
                </li>

                <li className='flex flex-row w-full px-5 py-1 cursor-pointer hover:bg-gray-100 items-center gap-1'>
                    <Settings className='text-gray-600' />
                    Definições
                </li>
            </ul>

            <div onClick={showMenu} className='md:hidden cursor-pointer hover:-scale-y-110 transition-all ease-in-out flex flex-col items-center'>
                <Menu className='text-gray-600 w-8 h-8 hover:text-white ease-in-out transition-all' />
            </div>
        </div>
    )
}

export default Header