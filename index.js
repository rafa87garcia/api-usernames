const cards = document.getElementById("user-list");

// const fetchUser = async () => {
//   await fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((res) => console.log(res));
// };
// console.log(fetchUser());

const fetchUser = () => {
  const promises = [];

  for (let i = 1; i <= 10; i++) {
    const url = `https://jsonplaceholder.typicode.com/users/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }

  Promise.all(promises).then((results) => {
    console.log(results);
    const user = results.map((result) => {
      console.log(result);
      //   name: result.name,
      //   userName: result.username,
      //   email: result.email,
    });
    displayUser(user);
  });
};

const displayUser = (user) => {
  console.log(user);

  const myUser = user
    .map(
      (newUser) =>
        `
    <li>
        <h2>${newUser.name}</h2>
        <p>${newUser.userName}</p>
        <p>${newUser.email}</p>
    </li>
    `
    )
    .join("");
  cards.innerHTML = myUser;
};

fetchUser();
