function buscar() {
    var valor=document.getElementById("numero").value;
    fetch ("https://rickandmortyapi.com/api/character/"+valor)
    .then (Response=>Response.json())
    .then(data=>{
        console.log (data.result.name)
 
    })
    
}
