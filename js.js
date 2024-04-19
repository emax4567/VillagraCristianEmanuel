fetch ("https://rickandmortyapi.com/api/character/?page=19")
.then (response =>response.json())
.then (data =>{
console.log (data.result.name )
});
