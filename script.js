document.getElementById('add-shark-btn').addEventListener('click', () => {
  // Retrieve shark details from input fields
  const imgUrl = document.getElementById('shark-img-url').value;
  const sharkName = document.getElementById('shark-name').value;
  const sharkDescription = document.getElementById('shark-description').value;

  if (!imgUrl || !sharkName || !sharkDescription) {
    alert('Please fill in all fields');
    return;
  }

  // Create the new shark div
  const newSharkDiv = document.createElement('div');

  // Create and append the image
  const image = document.createElement('img');
  image.src = imgUrl;
  image.alt = sharkName;
  newSharkDiv.appendChild(image);

  const boxDiv = document.createElement('div');

  // Create and append the h2 element
  const title = document.createElement('h2');
  title.textContent = sharkName;
  boxDiv.appendChild(title);

  // Create and append the paragraph
  const description = document.createElement('p');
  description.textContent = sharkDescription;
  boxDiv.appendChild(description);

  boxDiv.className = 'box';

  newSharkDiv.appendChild(boxDiv);

  // Append the new shark to the container
  document.getElementById('new-shark-container').appendChild(newSharkDiv);

  // Clear the input fields
  document.getElementById('shark-img-url').value = '';
  document.getElementById('shark-name').value = '';
  document.getElementById('shark-description').value = '';
});

const getHuman = async (num) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${num}`);
  const human = await res.json();
  return human;
};

const getFamily = async () => {
  const ids = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  ids.forEach(async (id) => {
    const human = await getHuman(id);
    console.log(human);
  });
};

// const getFamilyByOrder = async () => {
//   const ids = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
//   for (const id of ids) {
//     const human = await getHuman(id);
//     console.log(human);
//   }
// };

const run = async () => {
  const family = await getFamily();
  console.log(family);
};

run();
console.log('Am I Blocked?!');
