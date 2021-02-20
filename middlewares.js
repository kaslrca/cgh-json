module.exports = (req, res, next) => {
  console.log("POST request listener");
  const body = req.body;
  console.log(body);
  if (req.method === "POST") {
    // If the method is a POST echo back the name from request body
    res.json({"dataCnt":"1","responseJSON":[{"DIVISIONNO":"001","DRNO":"08905","SEEDATE":"20210129","CREATEUSERNO":"admin","CHARTNO":"0016521010","ROOMNO":"820","TIMEDIVISIONNO":2,"DEBUGMSG":"重複掛號或重複取號[1],請查詢後再掛號"}] , "message":"成功筆數1","result":"N","successCnt":"1"});
    // res.json({"responseJSON":[] , "message":"", "result":"Y", "failCnt":"0"});
  }else{
	//Not a post request. Let db.json handle it
    next();
  }  
}