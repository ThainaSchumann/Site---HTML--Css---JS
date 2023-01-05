document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu"));

document.querySelector("#quantity").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-yes").addEventListener("change", atualizarPreco)
document.querySelector("#layout-no").addEventListener("change", atualizarPreco)
document.querySelector("#period").addEventListener("change", function () {
    const period = document.querySelector("#period").value
    document.querySelector("label[for=period]").innerHTML = `period: ${period} weeks`
    atualizarPreco()
});

function atualizarPreco(){
    const quantity = document.querySelector("#quantity").value
    const hasJS = document.querySelector("#js").checked
    const includeLayout = document.querySelector("#layout-yes").checked
    const period = document.querySelector("#period").value
  
    let preis = quantity * 100;
    if (hasJS) preis *= 1.1
    if (includeLayout) preis += 500
    let taxaUrgencia = 1 - period*0.1;
    preis *= 1 + taxaUrgencia
   
    document.querySelector("#preis").innerHTML = `$ ${preis.toFixed(2)}`
}