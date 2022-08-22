const table = document.querySelector(".table");

let usuarios;

function getData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      renderData(data);
    });
}

function renderData(data) {
  let users = data;
  for (let i = 0; i < users.length; i++) {
    const element = users[i];

    const id = element.id;
    const name = element.name;
    const username = element.username;
    const email = element.email;
    const address = element.address.street;

    const tbody = document.createElement("tbody");
    tbody.innerHTML = `
        <tbody>
          <tr>
            <th scope="row">${id}</th>
            <td>${name}</td>
            <td>${username}</td>
            <td>${email}</td>
            <td>${address}</td>
          </tr>
        </tbody>
        `;
    table.appendChild(tbody);
  }
}

getData();
renderData();
