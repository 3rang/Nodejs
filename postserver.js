function postHandlerFun(req,res)
{
	console.log("In Post");
	res.json({"ID":1});
}


module.exports =
{
	postHandlerP : postHandlerFun
}
