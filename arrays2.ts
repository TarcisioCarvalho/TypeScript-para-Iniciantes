interface Curso{
    aulas:number;
    gratuito:boolean;
    horas:number;
    idAulas:number[];
    nivel:"iniciante"|"avançado"
    nome:string;
    tags:string[];
}


async function fetchCursos(){
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const data = await response.json();
    showCursos(data);
}

fetchCursos();

function showCursos(data:Curso[]){
    data.forEach(curso => document.body.innerHTML+=`
    <h2 style="color:${curso.nivel === "iniciante"?"blue;":"red"};">Curso ${curso.nome}</h2>
    <p>Horas: ${curso.horas}hrs</p>
    <p>Nivel: ${curso.nivel}</p>
    <p>Gratuito: ${curso.gratuito?"Sim":"Não"}</p>
    <p>Id das Aulas : ${curso.idAulas.map(id => `<span>${id}</span>`)}</p>
    <p>Tags : ${curso.tags.map(tag => `<span>${tag}</span>`)}</p>
    `
    )
}