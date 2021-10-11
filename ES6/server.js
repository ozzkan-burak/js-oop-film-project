const basePath = __dirname;
const express = require('express');
const path = require('path');

const app = express()
const publicDirPath = path.join(basePath, '/');

app.use(express.static(publicDirPath, {extensions: ['html']}))


PORT = 3030;

app.listen(PORT,()=>{
  console.log(`Server ${PORT} portunda çalışıyor`)
});
