const botaoBuscar = document.getElementById("#botao-buscar");
const campoEntrada = document.getElementById("#campo-entrada");

botaoBuscar.addEventListener("click", async () => {
    const buscar = campoEntrada.value.tolowerCase().trim();
    if(!buscar) return;

    try{
        const resposta = await fetch(`https://api.github.com/users/${buscar}`);
        if(!resposta.ok) throw new Error("Usuário não encontrado");
        const usuario = await resposta.json();

        document.getElementById("nome").textContent = dados.name;
        document.getElementById("numero").textContent = `#${dados.id}`;
        document.getElementById("imagem").src = dados.sprites.front_default;

        const tipos = document.getElementById("tipo");
        tipos.innerHTML = "";

        dados.types
    }
});