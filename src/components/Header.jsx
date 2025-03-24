import { Home, Settings, Trash2, Menu } from 'lucide-react'


function Header() {
    return (
        <div className='flex flex-row w-full absolute top-0 bg-gray-300'>
            <ul className='md:flex flex-row gap-2 p-2 items-center justify-center'>
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

            <div className='flex flex-col items-center'>
                <Menu className='text-gray-600' />
            </div>
        </div>
    )
}

export default Header