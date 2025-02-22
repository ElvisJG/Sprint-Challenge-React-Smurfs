const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3333;

const server = express();
server.use(bodyParser.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let smurfs = [
  {
    id: 0,
    name: 'Brainey Smurf',
    age: 200,
    height: '8',
    image:
      'https://vignette.wikia.nocookie.net/smurfs/images/e/e8/Brainy.jpg/revision/latest?cb=20090609234412'
  },
  {
    id: 1,
    name: 'Papa Smurf',
    age: 546,
    height: '10',
    image:
      'https://vignette.wikia.nocookie.net/smurfs/images/9/96/Papa_Smurf_Cartoon.png/revision/latest/scale-to-width-down/200?cb=20111013135841'
  },
  {
    id: 2,
    name: 'Smurfette',
    age: '100',
    height: '6',
    image:
      'https://vignette.wikia.nocookie.net/smurfs/images/b/b7/Smurfette_old.jpg/revision/latest?cb=20090610000054'
  }
];
server.get('/smurfs', (req, res) => {
  res.json(smurfs);
});
let smurfId = 3;

server.post('/smurfs', (req, res) => {
  const { name, age, height, image } = req.body;
  const newSmurf = { name, age, height, image, id: smurfId };
  if (!name || !age || !height || !image) {
    return sendUserError(
      'Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB.',
      res
    );
  }
  const findSmurfByName = smurf => {
    return smurf.name === name;
  };
  if (smurfs.find(findSmurfByName)) {
    return sendUserError(
      `Ya gone did smurfed! ${name} already exists in the smurf DB.`,
      res
    );
  }

  smurfs.push(newSmurf);
  smurfId++;
  res.json(smurfs);
});

server.put('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, height, image } = req.body;
  const findSmurfById = smurf => {
    return smurf.id == id;
  };
  const foundSmurf = smurfs.find(findSmurfById);
  if (!foundSmurf) {
    return sendUserError('No Smurf found by that ID', res);
  } else {
    if (name) foundSmurf.name = name;
    if (age) foundSmurf.age = age;
    if (height) foundSmurf.height = height;
    if (image) foundSmurf.image = image;
    res.json(smurfs);
  }
});

server.delete('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const foundSmurf = smurfs.find(smurf => smurf.id == id);

  if (foundSmurf) {
    const SmurfRemoved = { ...foundSmurf };
    smurfs = smurfs.filter(smurf => smurf.id != id);
    res.status(200).json(smurfs);
  } else {
    sendUserError('No smurf by that ID exists in the smurf DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
