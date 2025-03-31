import { UserRound } from 'lucide-react'
import Header from "../../components/Header";
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div>
            <Header />

            <section className='w-full h-screen'>
                <div className='rounded-lg mt-16 w-[98%] mx-auto md:max-w-screen-lg md:mx-auto bg-gray-400 flex flex-col border-l-4 px-4 py-2 border-blue-700'>
                    <div className='flex flex-row w-full justify-between'>
                        <h2 className='text-xl text-blue-700'>Edilson Eduardo</h2>
                        <UserRound className='bg-blue-700 text-white p-1 rounded-full h-10 w-10' />
                    </div>

                    <div className='flex gap-2 flex-row w-full justify-between'>
                        <p>
                            Olá!
                            Sou o <Link to='https://www.instagram.com/edilson_vita'>Edilson</Link>,
                            Sou um jovem de 19 anos de idade, programador, trabalho na área de desenvolvimento web há quase 3 anos.
                            Sou desenvolvedor fullStack, mais experiente em desenvolvimento backend.
                        </p>
                        <p>
                            <Link to='https://x.com/edilson1eduardo' className='underline'>Mais...</Link>
                        </p>
                    </div>
                </div>

                <div className='py-4'>
                    <h2 className='italic p-2 text-blue-700'>Projetos</h2>
                    <article className='flex flex-col border px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                        <Link to='https://vi-relogio.netlify.app' className='text-gray-500 font-semibold' >Relógio digital</Link>
                        <p className='text-sm indent-2'>
                            Esta é uma aplicação simples desenvolvida com HTML, CSS e JavaScrip
                            Apresenta as informações locais de tempo (hora, minuto e segundos).
                        </p>
                    </article>

                    <article className='flex flex-col border px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                        <Link to='https://vi-lovers.netlify.app' className='text-gray-500 font-semibold' >Calculadora do amor</Link>
                        <p className='text-sm indent-2'>
                            Esta é uma aplicação simples desenvolvida com HTML, CSS e JavaScrip
                            Cria a  (hora, minuto e segundos).
                        </p>
                    </article>

                    <article className='flex flex-col border px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                        <Link to='https://vi-relogio.netlify.app' className='text-gray-500 font-semibold' >Relógio digital</Link>
                        <p className='text-sm indent-2'>
                            Esta é uma aplicação simples desenvolvida com HTML, CSS e JavaScrip
                            Apresenta as informações locais de tempo (hora, minuto e segundos).
                        </p>
                    </article>
                </div>

                <div className='border-orange-500 p-2 flex flex-col border-l-4'>
                    <h2 className='text-orange-500'>Contactos</h2>
                    <span>
                        phone: 946456941
                    </span>
                    <span>
                        email: edilson.twenty7eduardo@gmail.com
                    </span>
                    <span>
                        whatsApp: <Link to='https://wa.me/946456941?text=Oi,%20Edilson!'>Diz olá!</Link>
                    </span>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default About