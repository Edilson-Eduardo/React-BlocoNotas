import { useEffect, useState } from "react";
import { Trash2, Settings } from 'lucide-react'
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Home() {
    const [notes, setNotes] = useState([])
    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {
        if (localStorage.notes)
            setNotes(JSON.parse(localStorage.notes))
    }, [])

    return (
        <div className="w-full h-screen">
            <Header />

            <section className='w-full h-screen flex gap-4 flex-col bg-transparent'>

                <header className="border-l-4 border-blue-700 max-w-lg mx-auto rounded-md mt-16 flex text-center flex-col bg-blue-200 p-2">
                    <p className="italic">
                        A precisão está nos detalhes que poucos percebem.
                    </p>
                    <p>
                        Use estas ferramentas simples e eficientes.
                    </p>
                </header>

                <ul className="w-full flex gap-2 p-2 flex-col md:flex-row">
                    <li className="max-w-lg bg-blue-200 p-2 text-start border-yellow-400 rounded-lg border-l-4">
                        <h3 className="font-bold text-gray-600">Acessibilidade</h3>
                        <p>
                            As tuas notas ficam centralizadas na nossa base de dados e podes acessá-las através
                            de qualquer dispositivo que tenhas sessão iniciada.
                        </p>
                    </li>

                    <li className="max-w-lg bg-blue-200 p-2 text-start border-yellow-400 rounded-lg border-l-4">
                        <h3 className="font-bold text-gray-600">Compartilhar</h3>
                        <p>
                            Podes enviar/compartilhar as tuas anotações com qualquer pessoa dentro ou fora da plataforma
                            através de um link gerado quando clicares o botão de partilha.
                        </p>
                    </li>

                    <li className="max-w-lg bg-blue-200 p-2 text-start border-yellow-400 rounded-lg border-l-4">
                        <h3 className="font-bold text-gray-600">Captura extra</h3>
                        <p>
                            Além das informações básicas que insires, capturamos mais dados para tornar as tuas notas mais marcáveis.
                        </p>
                    </li>
                </ul>

                <section className={`${isSelected ? 'max-w-md' : 'max-w-[150px]'} hover:bg-gray-100 shadow-black shadow-sm bg-white px-6 py-1 rounded-tr-full rounded-br-full overflow-hidden`}>
                    <h1 className="w-full cursor-pointer text-black font-bold" onClick={() => setIsSelected((select) => !select)}>{isSelected ? "Ocultar notas" : "Ver notas"}</h1>
                    <section className={`${isSelected ? 'grid' : 'hidden'} grid-cols-1 md:grid-cols-2 gap-2 p-4`}>
                        {notes.map((nota, index) => (
                            <div key={index} className={`'flex' ease-in-out bg-gray-200 min-w-8 w-full p-2 m-0.5 flex-col rounded-lg`}>
                                <h1 className='font-bold text-gray-600'>{nota.title}</h1>
                                <p className='font-semibold text-sm text-gray-500'>{nota.content}</p>

                                <div className='flex flex-row justify-between items-center mt-3'>
                                    <span className='text-xs bg-gray-300 py-1 px-2 rounded-lg'>
                                        {nota.date === new Date().toLocaleDateString() ? "Hoje" : nota.date}
                                    </span>

                                    <div className='flex flex-row gap-1'>
                                        <Trash2 className="text-gray-500 w-4 h-4 cursor-pointer hover:text-red-300" />
                                        <Settings className="text-gray-500 w-4 h-4 cursor-pointer hover:text-blue-300" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </section>
            </section>

            <Footer />
        </div>
    )
}

export default Home