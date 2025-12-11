import HoneyList from './components/HoneyList';
import OrderSummary from './components/OrderSummary';
import beeLeft from './assets/beeleft.png';
import beeRight from './assets/beeright.png';
import honeyImg from './assets/honey.png';

function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white border-b-2 border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-8 relative">
                    <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
                        <img
                            src={beeLeft}
                            alt="Bee Left"
                            className="h-24 w-auto object-contain"
                        />
                    </div>
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 flex items-center justify-center">
                            <img src={honeyImg} alt="honey" className="inline-block w-12 h-12 md:w-16 md:h-16 mr-4" />
                            <span>Everything Honey?</span>
                        </h1>
                        <p className="text-gray-600 mt-3 text-lg md:text-xl">
                            Discover our finest selection of premium honey varieties
                        </p>
                    </div>

                    <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
                        <img
                            src={beeRight}
                            alt="Bee Right"
                            className="h-24 w-auto object-contain"
                        />
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto">
                <HoneyList />
                <div className="h-48"></div>
            </main>

            <OrderSummary />
        </div>
    );
}

export default App;