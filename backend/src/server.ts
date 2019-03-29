import app from './app';
import * as http from 'http';

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`----- Server is listening on port ${port} -----`);
});
