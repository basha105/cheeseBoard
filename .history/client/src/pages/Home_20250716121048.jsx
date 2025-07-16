import Navbar from '../components/navbar'
import '../styles/home.css'

function Home() {
    
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center">
                <div className="m-12 flex flex-col items-center">
                    <div className="text-4xl mb-2">Welcome to <span className="font-semibold text-blue-400">cheeseBoard</span></div>
                    <div className="mb-2">cheeseBoard is a cheese database.</div>
                    <div className="mb-2">Browse our wide selection of different cheeses and leave comments to share your experience with the world!</div>
                    <div>"Poets have been mysteriously silent on the subject of cheese." - G.K. Chesterton</div>
                </div>
                <div>
                    <div className="mb-4 text-4xl text-blue-400">Click on cheeses to get started.</div>
                </div>

            </div>
            
        </div>
    )
}

export default Home