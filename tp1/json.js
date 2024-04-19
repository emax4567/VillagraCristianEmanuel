const personaje={
    "id": 140,
    "name": "Genital Washer",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Post-Apocalyptic Earth",
        "url": "https://rickandmortyapi.com/api/location/8"
    },
    "location": {
        "name": "Post-Apocalyptic Earth",
        "url": "https://rickandmortyapi.com/api/location/8"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/140.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/23"
    ],
    "url": "https://rickandmortyapi.com/api/character/140",
    "created": "2017-12-27T18:47:44.566Z"
}
console.log(personaje) 
    function buscar() {
    var n=document.getElementById("numero").value;
    if (personaje.id==n) {
        document.getElementById("result"). innerHTML="el personaje "+personaje.name+" esta "+personaje.status
    } else {
        document.getElementById("result"). innerHTML="el personaje no esta registrado"
    }
}
//fetch ('uhttps://rickandmortyapi.com/api/character/2')
