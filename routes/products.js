var express = require('express');
var router = express.Router();
const data =  new contenedorDeMemoria();

router.get('/', function(req, res, next) {
	//devuelve todos los productos
  res.send({data:data.getAll()});
});
router.get("/:id"(req, res)=>{
	//devuelve un producto por su id
	let obj = data.getOne(req.params.id)
	if(obj.lenght==0){
		res.send("no se pudo conseguir el producto")
	}else{
		res.send({data:obj})
	}
})
router.post("/", ({body}req, res)=>{
	//enviamos los datos
	data.addOne(body)
	res.send({datos:body})
})
router.put("/:id", (req, res)=>{
	//modificar segun id
	let id = req.params.id;
	res.send({datos:req.body})
})
router.delete("/:id", (req, res)=>{
	//eliminar segun id
	let newData = data.deleteOne(req.params.id)
	res.send({datos:newData})
})


module.exports = router;
