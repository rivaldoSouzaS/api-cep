const cep = document.querySelector("#cep");

cep.addEventListener("blur", (event) => {
  //errow function
  let search = cep.value.replace("-", "");

  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  fetch(`http://viacep.com.br/ws/${search}/json/`, options)
    .then((resposta) => {
      resposta.json().then((res) => {
        mostrarDatos(res);
      }); //json tambem retornar uma promessa mas eu vou deixar para la
    })
    .catch((erro) => {
      console.log("nao foi possivel consutar o cep " + erro);
    });
});

const mostrarDatos = (resultado) => {
  for (const campo in resultado) {
    if (document.querySelector("#" + campo)) {
      document.querySelector("#" + campo).value = resultado[campo];
    }
  }
};
