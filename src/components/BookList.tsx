import { Book } from '../data/books';
import { BookCard } from './BookCard';

interface BookListProps {
  books: Book[];
  onAddToCart: (book: Book) => void;
}

export function BookList({ books, onAddToCart }: BookListProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map(book => (
          <BookCard
            key={book.id}
            book={book}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}