export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  imageUrl: string;
  description: string;
}

export const books: Book[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 9.99,
    imageUrl: "https://picsum.photos/200/300",
    description: "A story of decadence and excess, Gatsby explores the American Dream in the 1920s."
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 12.99,
    imageUrl: "https://picsum.photos/200/300",
    description: "A powerful story of racial injustice and the loss of innocence in the American South."
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    price: 11.99,
    imageUrl: "https://picsum.photos/200/300",
    description: "A dystopian novel set in a totalitarian society, warning of the dangers of surveillance and control."
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 10.99,
    imageUrl: "https://picsum.photos/200/300",
    description: "A classic romance novel about the relationship between Elizabeth Bennet and Mr. Darcy."
  }
];