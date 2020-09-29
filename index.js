const  express = require('express')
const  bodyParser = require('body-parser')
const app = express();

const port = 3000


// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



let books = [];




//routing request and response for localhost
app.get('/', (req, res) =>
  res.send('hello world, from Alasdair!'))

  //routing request and response for /bananas
app.get('/bananas', (req, res) =>
  res.send('hello world, this is a sad way to go'))


  //routing request and response for /book will allow us to push to the book array
  app.post('/book', (req, res) => {
    const book = req.body;
    books.push(book);

    res.send ('book has been added to the database');
    console.log(`book name is ${book.Name} number of book is ${books.length}`);

});

  app.get('/books', (req, res) => {
      res.send(books);
  })

  app.get('/books/:id', (req, res) => {

     let id = req.params.id;
      res.json(books[id]);
  })

  app.delete('/books/:id',(req, res) => {
    let id = req.params.id; 
    console.log(`removing book ${books[id].Name}`)
    books.splice(req.params.id, 1);
    res.send(books);

  })

  //listening to the server
app.listen(port,  () => console.log(`Example app listening on port ${port}!`))


