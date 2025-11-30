import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, setQuantity } from '../store/slices/honeySlice';
import { selectProductById } from '../store/selectors';

export default function HoneyItem({ productId }) {
    const dispatch = useDispatch();
    const product = useSelector((state) => selectProductById(state, productId));

    if (!product) return null;

    const handleIncrement = () => {
        dispatch(incrementQuantity(productId));
    };

    const handleDecrement = () => {
        dispatch(decrementQuantity(productId));
    };

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value) || 0;
        dispatch(setQuantity({ id: productId, quantity: value }));
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            {/* Product Image */}
            <div className="mb-4 overflow-hidden rounded-md bg-gray-100 h-48">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
            </div>

            {/* Product Info */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-2xl font-bold text-amber-600 mb-4">€{product.price.toFixed(2)}</p>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3 mb-4">
                <button
                    onClick={handleDecrement}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-3 rounded transition-colors"
                >
                    −
                </button>

                <input
                    type="number"
                    value={product.quantity}
                    onChange={handleInputChange}
                    min="0"
                    className="w-16 text-center border-2 border-gray-300 rounded py-2 px-1 focus:border-amber-500 focus:outline-none"
                />

                <button
                    onClick={handleIncrement}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-3 rounded transition-colors"
                >
                    +
                </button>
            </div>

            {/* Subtotal */}
            <div className="text-sm text-gray-600">
                Subtotal: <span className="font-semibold">€{(product.price * product.quantity).toFixed(2)}</span>
            </div>
        </div>
    );
}
