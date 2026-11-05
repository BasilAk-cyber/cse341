import { getAllBooks, getBookById } from '../models/book.js';

export const getBooksHandler = async (req, res) => {
  try {
    const books = await getAllBooks();
    return res.status(200).json(books);
  } catch (error) {
    console.error('Error retrieving books:', error.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const getBookByIdHandler = async (req, res) => {
    try {
      const requestedId = req.params.id;
      const book = await getBookById(requestedId);
  
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      return res.status(200).json(book);
    } catch (error) {
      console.error('Error retrieving book:', error.message);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };