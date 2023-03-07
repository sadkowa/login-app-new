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
  const reqB = req.body;
  const { email, userName } = userBody;
  try {
    if (!reqB.userName || !reqB.password) {
      return res.status(400).send(`Wrong data`);
    }
    reqB.email === email &&
    reqB.userName === userName &&
    reqB.password === 'test1234'
      ? res.status(200).json(apiToken)
      : res.status(401).json('Wrong credentials');
  } catch (err) {
    console.log(err);
  }
});

app.get('/authUser', (req, res) => {
  const reqH = req.headers;
  try {
    if (reqH.authorization !== apiToken.token) {
      res.status(401).json('Wrong auth apiToken');
    }
    return res.status(200).json(userBody);
  } catch (err) {
    console.log(err);
  }
});

const port = 8080;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
