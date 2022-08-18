class ContenedorDeMemoria {
	miId=0;
	constructor(){
		this.products=[];
	}
	getAll(){
		return this.products;
	}
	getOne(id){
		console.log(Number(id));
		let obj = this.products;
		let miObj = obj.filter(p=>p.id==Number(id))
		return miObj;
	}
	addOne(obj){
		obj.id=this.miId++
		this.products=[...this.products,obj]
	}
	updateOne(id,obj){
		this.products.forEach(p=>{
			if(p.id == Number(id)){
				p=obj
			}
		})
		return this.products;
	}
	deleteOne(id){
		let obj = this.products.filter(p=>p.id != Number(id));
		this.products=obj
		return obj
	}
}
module.exports = ContenedorDeMemoria