const API_URL = "http://localhost:3000/query/"

class QueryService {
  getStatus(res, err) {
    let req = new XMLHttpRequest();
    req.onreadystatechange = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          res(JSON.parse(req.responseText));
        } else {
          err(JSON.parse(req.responseText));
        }
      }
    };

    req.open("GET", API_URL + "status", true);
    req.setRequestHeader("Accept", "application/json");
    req.send();
  }
}

export default new QueryService();
