//llamo a esto para tener autocompletado en las funciones

const {response,request} = require('express')

const usersGet= (req= request, res=response)=> {

    //const query= req.query;
    const {q,nombre='No name',apikey, page=1, limit}= req.query;

   
    res.json({
        'msg':'get API- Controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });

}

const usersPost= (req, res)=> {

    const {nombre,edad}= req.body;
    const body= req.body;
    
    res.status(201).json({
        'msg':'post API- Controlador',
        nombre,
        edad
    });

}


const usersPut= (req, res)=> {
  
    //params viene en la ruta
    //const id = req.params.id
    const {id}= req.params


    res.status(400).json({
        'msg':'put API- Controlador',
        id
    });

}


const usersPatch=(req, res)=> {
     
    res.json({
        'msg':'patch API- Controlador'
    });

}

const usersDelete=(req, res)=> {
     
    res.json({
        'msg':'delete API- Controlador'
    });

}



module.exports={
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete

}


