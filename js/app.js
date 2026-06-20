
const setores = {
Diretoria:"Responsável pela estratégia, metas e governança.",
Projetos:"Gestão de entregas, cronogramas e execução.",
Operacional:"Processos, logística e operação diária."
};

document.getElementById("app").innerHTML = `
<nav class="max-w-7xl mx-auto p-8 text-white text-3xl font-extrabold">
◢ prospecta
</nav>

<main class="max-w-7xl mx-auto bg-white rounded-3xl p-8 shadow-2xl">
<h1 class="text-3xl font-bold mb-8">Painel Organizacional</h1>

<div class="grid md:grid-cols-3 gap-6">
${Object.keys(setores).map(s=>`
<div onclick="abrir('${s}')"
class="node-card p-6 bg-slate-50 rounded-2xl border">
<h2 class="text-xl font-bold text-[#D03112]">${s}</h2>
<p>${setores[s]}</p>
</div>`).join("")}
</div>

<div id="detalhe" class="hidden mt-8 bg-slate-900 text-white p-6 rounded-2xl"></div>
</main>
`;

function abrir(nome){
const d=document.getElementById("detalhe");
d.classList.remove("hidden");
d.innerHTML=`<h2 class="text-xl font-bold">${nome}</h2><p>${setores[nome]}</p>`;
}
