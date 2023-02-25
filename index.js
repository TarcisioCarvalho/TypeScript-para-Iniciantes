"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchCursos() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.origamid.dev/json/cursos.json");
        const data = yield response.json();
        showCursos(data);
    });
}
fetchCursos();
function showCursos(data) {
    data.forEach(curso => document.body.innerHTML += `
    <h2 style="color:${curso.nivel === "iniciante" ? "blue;" : "red"};">Curso ${curso.nome}</h2>
    <p>Horas: ${curso.horas}hrs</p>
    <p>Nivel: ${curso.nivel}</p>
    <p>Gratuito: ${curso.gratuito ? "Sim" : "Não"}</p>
    <p>Id das Aulas : ${curso.idAulas.map(id => `<span>${id}</span>`)}</p>
    <p>Tags : ${curso.tags.map(tag => `<span>${tag}</span>`)}</p>
    `);
}
