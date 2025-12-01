document.getElementById("converter").addEventListener("click", () => {
  const valor = Number(document.getElementById("valor").value);

  if (!valor) {
    document.getElementById("resultado").innerText = "Digite um valor válido!";
    return;
  }

  const USD = (valor / 5.50).toFixed(2);
  const EUR = (valor / 6.00).toFixed(2);

  document.getElementById("resultado").innerHTML = `
    <p>USD: <strong>$${USD}</strong></p>
    <p>EUR: <strong>€${EUR}</strong></p>
  `;
});
