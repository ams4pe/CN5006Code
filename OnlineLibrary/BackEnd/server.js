let express = require('express');
let bodyparser = require('body-parser');
let cors = require('cors');
let Books = require('./booksSchema'); // Make sure this matches the BooksSchema file location
let mongodbConnected = require('./MongoDBConnect');

let app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());

// Default route
app.get('/', (req, res) => {
    res.send("Welcome to the Online Library API");
});

// Fetch all books
app.get('/allbooks', (req, res) => {
    Books.find()
        .then(allBooks => res.json(allBooks))
        .catch(err => {
            console.error(err);
            res.status(500).send('Error retrieving books.');
        });
});



// Fetch a single book by ID
app.get('/getbook/:id', (req, res) => {
    let id = req.params.id;
    Books.findById(id, (err, book) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error retrieving book.');
        } else {
            res.json(book);
        }
    });
});

// Add a new book
app.post('/addbooks', (req, res) => {
    let newBook = new Books(req.body);
    newBook.save()
        .then(() => {
            res.status(200).json({ message: 'Book added successfully' });
        })
        .catch(err => {
            console.log(err);
            res.status(400).send('Failed to add book.');
        });
});

// Update an existing book
app.post('/updatebook/:id', (req, res) => {
    let id = req.params.id;
    Books.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedBook) => {
        if (err) {
            console.log(err);
            res.status(500).send('Failed to update book.');
        } else {
            res.status(200).json({ message: 'Book updated successfully', updatedBook });
        }
    });
});

// Delete a book
app.post('/deleteBook/:id', (req, res) => {
    let id = req.params.id;
    Books.findByIdAndDelete(id, (err) => {
        if (err) {
            console.log(err);
            res.status(500).send('Failed to delete book.');
        } else {
            res.status(200).send('Book deleted successfully.');
        }
    });
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
