module.exports = (req, res, next) => {
  console.log("POST request listener");
  const body = req.body;
  console.log(body);
  if (req.method === "POST") {
    // If the method is a POST echo back the name from request body
    res.json({"dataCnt":"1","responseJSON":[{"DIVISIONNO":"001","DRNO":"05703","SEEDATE":"20210102","CREATEUSERNO":"01967","CHARTNO":"0016521011","ROOMNO":"809","TIMEDIVISIONNO":1,"DEBUGMSG":"成功"}] , "message":"成功筆數1","result":"N","successCnt":"1"});
  }else{
	//Not a post request. Let db.json handle it
    next();
  }  
}