import {createServer} from 'node:http';
import path from 'node:path';
import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import fileUpload from 'express-fileupload';

import {errorMiddleware} from '../middleware/errorMiddleware';
import {NODE_ENV, PORT, TZ} from '../config/constants';
import {findAvailablePort} from '../plugins/free-port';
import {router} from '../routes';

class Server {
    private app: Application;
    private port: number;
    private server;
    // private io;

    constructor() {
        console.clear();

        this.app = express();
        this.port = PORT;

        this.app.use(morgan(NODE_ENV));

        this.server = createServer(this.app);

        // Middlewares
        this.middlewares();

        //Definir mis rutas
        this.routes();

        //sockets
        // this.io = require('socket.io')(this.server, { cors: { origin: '*' } });
        // this.sockets();
    }

    /**
     * Initializes the middlewares for the application.
     *
     * @param {type} paramName - description of parameter
     * @return {type} description of return value
     */
    middlewares() {
        // disable x-powered-by
        this.app.disable('x-powered-by');

        //CORDS
        this.app.use(cors());

        //Limit size body
        this.app.use(express.json({limit: '50mb'}));

        // Parse application/x-www-form-urlencoded
        this.app.use(express.urlencoded({extended: true}));

        //Capeta Pública
        this.app.use(express.static(path.join(__dirname, '../public')));
        // this.app.use(express.static('public'));

        this.app.use(
            fileUpload({
                useTempFiles: true,
                tempFileDir: '/tmp/',
                createParentPath: true,
                limits: {
                    fieldSize: 50000,
                },
            }),
        );
    }

    /**
     * Sets up the routes for the application.
     *
     * @param {type} paramName - description of parameter
     * @return {type} description of return value
     */
    routes() {
        this.app.use('/api', router);
    }

    /**
     * Listens for incoming connections.
     *
     * @param {type} paramName - description of parameter
     * @return {type} description of return value
     */
    listen() {
        TZ;
        findAvailablePort(this.port).then((port) => {
            this.server.listen(port, () => {
                console.info(`Servidor corriendo en el puerto ${port}`);
            });
        });
    }
}

export default Server;
