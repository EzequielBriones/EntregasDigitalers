const express = require("express");
const app = express();
const port = 8080;
const frase = require("./modules/frase");

app.listen(port, () => {
  console.log(`App listening in port: ${port}`);
});

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/api/getFrase", (req, res) => {
  res.send(frase);
});

app.get("/api/getLetra/:num", (req, res) => {
  const param = req.params.num;
  const num = parseInt(param);

  if (Number.isInteger(num)) {
    if (num <= frase.length) {
      return res.send(`The Letter in position ${num} is: <b>"${frase.charAt(num - 1)}"</b>`);
    } else {
      const objError = { error: `Parameter ${num} is out of range 1 to ${frase.length}` };
      console.log(objError);
      return res.send(objError);
    }
  } else {
    console.log({ error: `Invalid Parameter: /${param}` });
    return res.send({ error: `Invalid Parameter: /${param}` });
  }
});

app.get("/api/getPalabra/:num", (req, res) => {
  const num = req.params.num;
  palabras = frase.split(" ");
  if (num <= palabras.length) {
    res.send(palabras[num - 1]);
  } else {
    res.send("El valor ingresado está fuera de rango");
  }
});
