import { Trash2, Settings } from 'lucide-react'
import { useState, useEffect } from 'react'

function Notes({ notas }) {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        setNotes(notas)
    }, [notas]) 

    return (
        <div>
            {notes.map((nota, index) => (
                <div key={index} className='bg-gray-200 min-w-8 w-full p-2 m-0.5 flex flex-col rounded-lg'>
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
        </div>
    )
}

export default Notes
