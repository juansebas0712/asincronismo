import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function putData(urlApi, id, data){
    const response = fetch(`${urlApi}/${id}`, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return response;
}

const data = {
  "title": "New Product course JS New Name",
  "price": 30500,
}

putData(`${API}/products`, 215, data)
    .then(response => response.json())
    .then(data => console.log(data))