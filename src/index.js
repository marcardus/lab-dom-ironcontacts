// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.

// Your code goes here ...
const threeContacts = contacts.splice(0, 3);
const createContactRow = (contact) => {
  const row = document.createElement("tr");
  row.innerHTML = `
  <td>
    <img src="${contact.pictureUrl}" />
  </td>
  <td> ${contact.name} </td>
  <td> ${contact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
  `;
  return row;
};
threeContacts.forEach((person) => {
  const element = createContactRow(person);
  tableBody.appendChild(element);
  const deleteButton = element.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    element.remove();
  });
  const likeButton = element.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected");
  });
  console.log(likeButton, "like button here");
});

  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  const deleteBtn = row.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
    row.remove();
  });
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...
  row.querySelector(".btn-like").addEventListener("click", () => {
    row.querySelector(".btn-like").classList.toggle("selected");
  });

  tableBody.appendChild(row);

  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
const addRandomContact = (arrContacts) => {
  const randomIndex = Math.floor(Math.random() * arrContacts.length);
  const randomContact = arrContacts.splice(randomIndex, 1)[0];
  //   const row = document.createElement("tr");
  //   row.innerHTML = `
  //   <td>
  //     <img src="${randomContact.pictureUrl}" />
  //   </td>
  //   <td> ${randomContact.name} </td>
  //   <td> ${randomContact.popularity.toFixed(2)} </td>
  //   <td>
  //     <button class="btn-delete">Delete</button>
  //   </td>
  //   <td>
  //     <button class="btn-like">
  //       <img src="./images/icon.png" alt="like" />
  //     </button>
  //   </td>
  // `;
  tableBody.prepend(createContactRow(randomContact));
};

buttonAddRandom.addEventListener("click", () => {
  addRandomContact(contacts);
});
