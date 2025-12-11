import { useSelector } from 'react-redux';
import { selectAllProducts } from '../store/selectors';
import HoneyItem from './HoneyItem';

export default function HoneyList() {
    const products = useSelector(selectAllProducts);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {products.map((product) => (
                <HoneyItem key={product.id} productId={product.id} />
            ))}
        </div>
    );
}
