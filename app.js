const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`Hello from Kubernetes! Version: ${process.env.APP_VERSION || 'v1'}`);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
