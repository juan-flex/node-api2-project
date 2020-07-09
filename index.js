const express = require('express'); // importing express
const cors = require('cors');
const postsRouter = require('./posts/posts-router')// importing posts-router

const server = express(); //creating express server
server.use(express.json()); // making server to use express.json middleware
server.use(cors());
// router
server.use('/api/posts', postsRouter ) // using posts-router endpoints

// server/port listen
const port = 8002;
server.listen(port, () => {
    console.log(`\n*** Server Running on ${port} ***\n`);
  });