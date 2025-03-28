import { useState } from 'react'
import Notes from '../../components/Notes'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Annotations() {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState({
        title: "",
        content: "",
        date: new Date().toLocaleDateString()
    })

    function handleInput(e) {
        const { name, value } = e.target
        setNewNote((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    function createNote() {
        setNotes((prev) => [...prev, newNote])
        console.log("Nota adicionada:", newNote) // Mostra a nota recém-adicionada corretamente
        setNewNote({ title: "", content: "", date: new Date().toLocaleDateString() })
    }

    return (
        <div className='bg-gray-100 min-h-screen flex flex-col md:flex-row items-center justify-center gap-5 px-5 py-10'>
            <Header />
            {/* Formulário de Criação */}
            <div className='bg-gray-500 mt-5 md:max-w-96 w-full flex flex-col gap-2 mx-auto rounded-lg p-4 shadow-md shadow-black'>
                <h1 className='text-xl font-bold text-white text-center'>Criar nova nota</h1>

                <div className='w-full bg-transparent flex flex-col gap-2'>
                    <input
                        type="text"
                        name='title'
                        onChange={handleInput}
                        value={newNote.title}
                        className='p-2 border border-gray-300 rounded-lg outline-none'
                        placeholder='Título da anotação'
                    />
                    <textarea
                        className='p-2 placeholder:text-gray-400 border border-gray-300 rounded-lg outline-none'
                        value={newNote.content}
                        onChange={handleInput}
                        name="content"
                        id="content"
                        cols="30"
                        rows="5"
                        placeholder='Escreva aqui alguma coisa...'
                    />
                </div>

                <button className='bg-blue-500 text-white w-full rounded-md p-2 hover:bg-blue-600 transition' type='button' onClick={createNote}>
                    Anotar
                </button>
            </div>

            <div
                className={`${notes && notes.length < 1 ? "hidden" : "grid"
                    } w-full grid-cols-1 mb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 shadow-sm shadow-black bg-white p-4 rounded-lg`}
            >
                <Notes notas={notes} />
            </div>


            <Footer />
        </div>
    )
}

export default Annotations
