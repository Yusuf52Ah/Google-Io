const list = document.querySelector(".parent");

const url = "https://jsonplaceholder.typicode.com/users";

const getUsersData = async () => {
  try {
    const response = await fetch(url);
    const users = await response.json();
    for (let i = 0; i < users.length; i++) {
      const li = document.createElement("li");
      const name = document.createElement("p");
      const address = document.createElement("p");

      name.textContent = users[i].name;
      address.textContent = users[i].address.city;
      li.append(name, address);

      list.appendChild(li);
    }
  } catch (error) {
    alert(error.message);
  }
};

const renderUsersName = () => {
  // for (let i = 0; i < users.length; i++) {
  //   const newUser = document.createElement("li");
  //   newUser.textContent = users[i];
  //   list.appendChild(newUser);
  // }
};

renderUsersName();
getUsersData();
