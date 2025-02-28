import { Book } from '../data/books';

interface CartProps {
  items: Book[];
  onRemoveFromCart: (bookId: number) => void;
}

export function Cart({ items, onRemoveFromCart }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  if (items.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
        <p className="text-gray-600">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      <div className="space-y-4">
        {items.map(item => (
          <div key={item.id} className="flex justify-between items-center border-b pb-2">
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
            <button
              onClick={() => onRemoveFromCart(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between items-center">
          <span className="font-bold">Total:</span>
          <span className="font-bold">${total.toFixed(2)}</span>
        </div>
        <button className="w-full mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Checkout
        </button>
      </div>
    </div>
  );
}