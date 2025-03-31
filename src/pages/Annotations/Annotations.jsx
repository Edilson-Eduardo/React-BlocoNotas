import { useState, useEffect } from 'react'
import Notes from '../../components/Notes'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Annotations() {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState({
        title: "",
        content: "",
        date: new Date().toLocaleDateString(),
        deleted: false,
        time: "12:23"
    })

    useEffect(() => {
        if (localStorage.notes)
            setNotes(JSON.parse(localStorage.notes))
    }, [])

    function handleInput(e) {
        const { name, value } = e.target
        setNewNote((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    function createNote() {
        setNotes((prev) => [...prev, newNote])
        localStorage.notes = JSON.stringify([...notes, newNote])
        setNewNote({ title: "", time: "13:45", content: "", deleted: false, date: new Date().toLocaleDateString() })
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
            <Notes notas={notes} />

            <Footer />
        </div>
    )
}

export default Annotations
