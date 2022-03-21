
const express = require('express')
const cors = require('cors')



class Server{

    constructor(){
        this.app=express();
        this.port= process.env.PORT;
        this.usersPath='/api/users';

        //Middlewares--funciones que siempre se ejecuta cuando se levante el servidor.
        this.middlewares();

        //Rutas
        this.routes();
    }



    routes(){
        
        this.app.use(this.usersPath, require('../routes/user.routes'));

    }


    middlewares(){

        //CORS
        this.app.use(cors());

        //Lectura y parseo del body

        this.app.use(express.json());

        //Directorio Público
        this.app.use(express.static('public'));
    }


    listen(){

                
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en el puerto', this.port)
        });

    }



}


module.exports= Server;