import Header from "../../components/Header"
import Footer from "../../components/Footer"

function NotFound() {
    return (
        <div className="w-screen h-screen bg-gray-100">
            <Header />
            <main className="flex items-center flex-col w-full h-full justify-center">
                <h1 className="text-3xl font-bold">Página não encontrada</h1>
                <h2 className="font-bold text-xl"> &lt;/ 404&gt; </h2>
            </main>
        </div>
    )
}

export default NotFound