import { useState } from 'react'
import Notes from '../../components/Notes'

function HomePage() {
    const [notes, setNotes] = useState([])
    const [c, setC] = useState(1)
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
        console.log("Notas: ",notes)
        setNewNote({ title: "", content: "", date: new Date().toLocaleDateString()})
    }

    return (
        <div className='bg-gray-100 w-full h-screen flex flex-col items-center justify-center gap-2 px-5'>

            <div className='md:absolute left-2 bg-gray-600 md:max-w-96 w-full flex flex-col gap-1 mx-auto rounded-lg p-2 shadow-sm shadow-black'>
                <h1 className='text-xl font-bold text-white text-center'>Criar nova nota</h1>

                <div className='w-full bg-transparent flex flex-col gap-1'>
                    <input type="text" name='title' onChange={handleInput} value={newNote.title} className='p-2 border-none rounded-lg' placeholder='Título da anotação' />
                    <textarea className='p-2 placeholder:text-gray-400 outline-none rounded-lg' value={newNote.content} onChange={handleInput} name="content" id="content" cols="30" rows="10" placeholder='Escreva aqui alguma coisa...'></textarea>
                </div>

                <button className='bg-blue-500 text-white w-full rounded-md p-2' type='button' onClick={createNote}>Anotar</button>
            </div>

            <div className='w-full md:w-[70%] self-end grid grid-cols-3 shadow-sm shadow-black bg-white p-2 rounded-lg'>
                {
                    notes.map((nota, index) => (
                        <Notes key={index} title={nota.title} content={nota.content} date={nota.date} />
                    ))
                }
            </div>

        </div>

    )
}

export default HomePage