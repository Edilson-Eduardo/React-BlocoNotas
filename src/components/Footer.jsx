import { Youtube, Twitter, Facebook, Github, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {

    return (
        <div className='fixed bottom-0 flex text-sm flex-row justify-between bg-gray-300 w-full min-h-3'>
            <div className='p-1 flex flex-col justify-center items-center'>
                <p className='text-gray-600 font-semibold'>
                    &copy; copyright - 2025
                </p>
                <Link to='/about'>
                    <p className='md:block hidden text-gray-600 font-semibold'>Sobre mim</p>
                </Link>
            </div>

            <div className='p-1 flex flex-col justify-center items-center'>
                <p className='text-gray-600 font-semibold'>Termos de uso</p>
                <hr />
                <Link to='/others'>
                    <p className='hidden md:block text-gray-600 font-semibold'>Mais projetos</p>
                </Link>
            </div>

            <div className='flex flex-col p-2'>
                <p className='text-gray-600 font-semibold'>Minhas redes</p>
                <hgroup className='flex flex-row gap-1 text-gray-700'>
                    <Link to='https://www.youtube.com/@edilson_vita' target='_blank'><Youtube className='w-5 cursor-pointer hover:text-red-600' /></Link>
                    <Link to='https://x.com/edilson1eduardo/' target='_blank'><Twitter className='w-5 cursor-pointer hover:text-blue-400 hover:fill-current' /></Link>
                    <Link to='https://facebook.com/edilton.ediltonfelix/' target='_blank'><Facebook className='w-5 cursor-pointer hover:text-blue-600 hover:fill-current' /></Link>
                    <Link to='https://github.com/edilson-eduardo/' target='_blank'><Github className='w-5 cursor-pointer hover:text-black hover:fill-current' /></Link>
                    <Link to='https://www.instagram.com/edilson_vita/' target='_blank'><Instagram className='w-5 cursor-pointer hover:text-yellow-500' /></Link>
                </hgroup>
            </div>

        </div>
    )
}

export default Footer