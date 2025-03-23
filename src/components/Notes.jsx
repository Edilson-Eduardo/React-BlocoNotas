import { Trash, Settings} from 'lucide-react'

function Notes({ title, content, date }) {
    return (
        <div className='bg-gray-200 p-2 m-0.5 flex flex-col'>
            <h1 className='font-bold text-gray-600 text-'>{title}</h1>
            <p className='font-semibold text-sm text-gray-500'>{content}</p>

            <div className='flex flex-row justify-between'>
                <span className='text-xs'>{date == new Date().toLocaleDateString() ? "Hoje" : date}</span>

                <div className='flex flex-row gap-1'>
                    <Trash className="text-gray-500 w-4 h-4 cursor-pointer hover:shadow-md hover:fill-current hover:text-red-300" />
                    <Settings className="text-gray-500 w-4 h-4 cursor-pointer hover:shadow-md hover:text-blue-300" />
                </div>
            </div>
        </div>
    )
}

export default Notes