import { useDispatch, useSelector } from 'react-redux';
import { resetCart } from '../store/slices/honeySlice';
import { selectTotalQuantity, selectTotalPrice, selectIsOrderValid } from '../store/selectors';

export default function OrderSummary() {
    const dispatch = useDispatch();
    const totalQuantity = useSelector(selectTotalQuantity);
    const totalPrice = useSelector(selectTotalPrice);
    const isOrderValid = useSelector(selectIsOrderValid);

    const handleReset = () => {
        dispatch(resetCart());
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-lg">
            <div className="max-w-7xl mx-auto p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                    {/* Left: Order Info */}
                    <div className="flex gap-8">
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Total Items</p>
                            <p className="text-2xl font-bold text-gray-800">{totalQuantity} jars</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Total Price</p>
                            <p className="text-2xl font-bold text-amber-600">€{totalPrice}</p>
                        </div>
                    </div>

                    {/* Right: Buttons */}
                    <div className="flex gap-4">
                        {/* Reset Button */}
                        <button
                            onClick={handleReset}
                            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition-colors"
                        >
                            Reset Selection
                        </button>

                        {/* Order Button */}
                        <button
                            disabled={!isOrderValid}
                            className={`px-8 py-3 font-semibold rounded-lg transition-colors ${
                                isOrderValid
                                    ? 'bg-amber-500 hover:bg-amber-600 text-white cursor-pointer'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                        >
                            {isOrderValid ? 'Place Order' : `Order (min. 5 jars needed)`}
                        </button>
                    </div>
                </div>

                {/* Minimum Order Message */}
                {!isOrderValid && (
                    <div className="mt-4 text-sm text-orange-600 font-medium">
                        ⚠️ You need at least 5 jars to place an order. Currently: {totalQuantity} jars
                    </div>
                )}
            </div>
        </div>
    );
}
