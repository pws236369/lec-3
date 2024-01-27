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
