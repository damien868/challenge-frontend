const express = require('express');
const morgan = require('morgan');

const path = require('path');

const app = express();
const { urlencoded } = require('express');

const router = express.Router();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use('/', router);

app.get('/', (req, res, next) => {
  try {
    res.status(200).sendFile(path.join(__dirname, '/public', 'index.html'));
  } catch (err) {
    next(err);
  }
});

const init = () => {
  try {
    app.listen(PORT, () => console.log(`now listening to port ${PORT}`));
  } catch (err) {
    console.log('error listening on port', err);
  }
};

init();
