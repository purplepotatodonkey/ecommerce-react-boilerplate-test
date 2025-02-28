import { useState } from 'react'
import './App.css'
import { Book, books } from './data/books'
import { Header } from './components/Header'
import { BookList } from './components/BookList'
import { Cart } from './components/Cart'

function App() {
  const [cartItems, setCartItems] = useState<Book[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleAddToCart = (book: Book) => {
    setCartItems(prev => [...prev, book])
  }

  const handleRemoveFromCart = (bookId: number) => {
    setCartItems(prev => prev.filter(item => item.id !== bookId))
  }

  const toggleCart = () => {
    setIsCartOpen(prev => !prev)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header 
        cartItemCount={cartItems.length}
        onCartClick={toggleCart}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <div className={`flex-1 ${isCartOpen ? 'w-2/3' : 'w-full'}`}>
            <BookList 
              books={books}
              onAddToCart={handleAddToCart}
            />
          </div>
          
          {isCartOpen && (
            <div className="w-1/3">
              <Cart 
                items={cartItems}
                onRemoveFromCart={handleRemoveFromCart}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
