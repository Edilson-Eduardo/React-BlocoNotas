import { Youtube, Twitter, Facebook, Github, Instagram } from 'lucide-react'
import {Link} from 'react-router-dom'

function Footer() {

    return (
        <div className='fixed flex text-sm flex-row justify-between bg-gray-300 w-full min-h-3 bottom-0'>
            <div className='p-1 flex flex-col justify-center items-center'>
                <p className='text-gray-600 font-semibold'>
                    &copy; copyright - 2025
                </p>
                <p className='md:block hidden text-gray-600 font-semibold'>Sobre mim</p>
            </div>

            <div className='p-1 flex flex-col justify-center items-center'>
                <p className='text-gray-600 font-semibold'>Termos de uso</p>
                <hr/>
                <p className='hidden md:block text-gray-600 font-semibold'>Mais projetos</p>
            </div>

            <div className='flex flex-col p-2'>
                <p className='text-gray-600 font-semibold'>Minhas redes</p>
                <hgroup className='flex flex-row gap-1 text-gray-700'>
                    <Link to='https://www.youtube.com/' ><Youtube className='w-5 cursor-pointer hover:text-red-600' /></Link>
                    <Link to='https://x.com/edilson1eduardo/' ><Twitter className='w-5 cursor-pointer hover:text-blue-400 hover:fill-current' /></Link>
                    <Link to='https://facebook.com/edilton.felix/' ><Facebook className='w-5 cursor-pointer hover:text-blue-600 hover:fill-current' /></Link>
                    <Link to='https://github.com/edilson-eduardo/' ><Github className='w-5 cursor-pointer hover:text-black hover:fill-current' /></Link>
                    <Link to='https://www.instagram.com/edilson_vita/' ><Instagram className='w-5 cursor-pointer hover:text-yellow-500' /></Link>
                </hgroup>
            </div>

        </div>
    )
}

export default Footer