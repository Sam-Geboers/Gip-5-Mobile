const USER_REST_API = 'http://192.168.0.105:8080/users';
const HOUSE_REST_API = 'http://192.168.0.105:8080/houses';

class APIService {   
  /* USER ENDPOINTS */
  addUser(uname, mail, pass) {
    return fetch(USER_REST_API + '/add-user', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: uname,
        email: mail,
        password: pass,
        role: 'USER'
      })
    })
    .then(res => res.json());
  }

  /* HOUSE ENDPOINTS */
  addHouse(hname, hadress) {
    return fetch(HOUSE_REST_API + '/add-house', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: hname,
        address: hadress
      })
    })
    .then(res => res.json());
  }
}

export default new APIService();