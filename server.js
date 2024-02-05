const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const userBody = {
  email: 'candidate@test.com',
  userName: 'tester',
  fullUserName: 'Archie Karas',
};

const apiToken = {
  token: '90917fs91-1041-4491-oe66',
};

app.post('/login', (req, res) => {
  const { userName, password } = req.body;
  try {
    if (!userName || !password) {
      return res.status(400).json({ message: 'Missing username or password' });
    }
    if (userName === userBody.userName && password === 'test1234') {
      res.status(200).json(apiToken);
    } else {
      res.status(401).json({ message: 'Wrong credentials' });
    }
  } catch (err) {
    res.status(500).json({ message: 'An error occurred', error: err.message });
  }
});

app.get('/authUser', (req, res) => {
  try {
    if (req.headers.authorization !== apiToken.token) {
      return res.status(401).json({ message: 'Wrong auth token' });
    }
    res.status(200).json(userBody);
  } catch (err) {
    res.status(500).json({ message: 'An error occurred', error: err.message });
  }
});

const port = 8080;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
