function Notes({title, content, date}) {
    return (
        <div className='bg-gray-200 p-2 m-0.5 flex flex-col'>
            <h1 className='font-bold text-gray-600 text-'>{title}</h1>
            <p className='font-semibold text-sm text-gray-500'>{content}</p>
            <span className='text-xs'>{date == new Date().toLocaleDateString() ? "Hoje": date}</span>
        </div>
    )
}

export default Notes