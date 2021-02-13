module.exports = (req, res, next) => {
  console.log("POST request listener");
  const body = req.body;
  console.log(body);
  if (req.method === "POST") {
    // If the method is a POST echo back the name from request body
    res.json({"dataCnt":"1","responseJSON":[{"DIVISIONNO":"001","DRNO":"01967","SEEDATE":"20210223","CREATEUSERNO":"shihfeng","CHARTNO":"0016521013","ROOMNO":"AB1","TIMEDIVISIONNO":"3","DEBUGMSG":"成功"}],"message":"成功筆數1","result":"N","successCnt":"1"});
  }else{
	//Not a post request. Let db.json handle it
    next();
  }  
}