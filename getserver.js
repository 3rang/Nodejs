function getHandlerFun(req,res)
{
	console.log("In Get");
	console.log(req.body.ID);
}

module.exports =
{
	getHandlerG : getHandlerFun
}
