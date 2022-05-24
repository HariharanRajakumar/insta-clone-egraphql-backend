import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'cors';

//App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  'mongodb+srv://admin:Nq8WMZcQLCrkchWT@cluster0.bhlga.mongodb.net/?retryWrites=true&w=majority';

//Middlewares
app.use(express.json());
app.use(Cors());

//DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//API endpoits
app.post('/', (req, res) => {
  res.status(200);
  res.send('Hello World');
});

app.post('/posts', (req, res) => {
  const dbStory = req.body;
  Cards.create(dbStory, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get('/posts', (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Listener
app.listen(port, () => {
  console.log(`listening on localhost ${port}`);
});
