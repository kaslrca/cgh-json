module.exports = (req, res, next) => {

  const body = req.body;
  console.log('[middleware] ' + req.method + " " + req.url);
  console.log(body);

  if (false && req.method === "GET" && req.url == '/patient') {
    res.write("AUDxGc21WaSWzg/oME7tmbGX0aDVPz5O3L92wlxPDN9uyqDDW1Q4Njn/N1v14YKA/PLRgIrCuH05fc+lSLwFbTLyHoJLAmDDHPIR9QGcFwE2rJFsNuFNVKb8gWYJ/DNUhM3DhrNpeN38HdjlRQV3CIdndx9HlkPvmpvaJ+BTqV/OhVmlR+2F/dVjVKl6xnJb4nd6tLHJJruDDTAKEw9GL12eVHzFX8VTNlmYkNXDRlDnxYJichBxLKC91bYykSDnhOdcJidCfr00a6Wc5QxUwIuZo9yEFDyY1jZfIJMj3Z716j9O9pMKmUTvN5rNjCReNfuu+3YNKP8ifuNJmztiYg==");
    res.end();
  } else if (req.method === "POST") {
    console.log("POST request listener");
    // If the method is a POST echo back the name from request body
    res.json({"dataCnt":"1","responseJSON":[{"DIVISIONNO":"001","DRNO":"00860","SEEDATE":"20210311","CREATEUSERNO":"admin","CHARTNO":"0016521013","ROOMNO":"818","TIMEDIVISIONNO":2}] , "message":"成功筆數1","result":"N","successCnt":"1"});
    // res.json({"responseJSON":[] , "message":"", "result":"Y", "failCnt":"0"});
  } else {
	//Not a post request. Let db.json handle it
    next();
  }  
}