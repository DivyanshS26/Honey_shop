import HoneyList from './components/HoneyList';
import OrderSummary from './components/OrderSummary';

function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b-2 border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <h1 className="text-4xl font-bold text-gray-800">
                        🍯 Everything Honey?
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Discover our finest selection of premium honey varieties
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto">
                <HoneyList />
                {/* Add padding at bottom to account for fixed OrderSummary */}
                <div className="h-48"></div>
            </main>

            {/* Order Summary - Fixed at bottom */}
            <OrderSummary />
        </div>
    );
}

export default App;
