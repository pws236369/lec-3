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

// Create a function to simulate an asynchronous task
function swimWithShark() {
  return new Promise((resolve, reject) => {
    // Simulate swimming with a shark for 3 seconds
    setTimeout(() => {
      const isSafe = Math.random() < 0.5; // Simulate whether it's safe or not
      if (isSafe) {
        resolve('You safely swam with the shark!');
      } else {
        reject('The shark got too close! Retreat!');
      }
    }, 3000); // 3 seconds
  });
}

// Using async/await
document
  .getElementById('swim-with-shark-btn')
  .addEventListener('click', async () => {
    const result = await swimWithShark();
    alert(result); // Success: You safely swam with the shark!
  });

//   // Using async/await
// document.getElementById('swim-with-shark-btn').addEventListener('click', async () => {
//     try {
//       const result = await swimWithShark();
//       console.log(result); // Success: You safely swam with the shark!
//     } catch (error) {
//       console.error(error); // Error: The shark got too close! Retreat!
//     }
//   });
