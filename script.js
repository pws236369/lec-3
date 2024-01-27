document.getElementById('add-shark-btn').addEventListener('click', function () {
  // Retrieve shark details from input fields
  var imgUrl = document.getElementById('shark-img-url').value;
  var sharkName = document.getElementById('shark-name').value;
  var sharkDescription = document.getElementById('shark-description').value;

  // Create the new shark div
  var newSharkDiv = document.createElement('div');
  // Create the new shark div
  var newSharkDiv = document.createElement('div');

  // Create and append the image
  var image = document.createElement('img');
  image.src = imgUrl;
  image.alt = sharkName;
  newSharkDiv.appendChild(image);

  // Create and append the h2 element
  var title = document.createElement('h2');
  title.textContent = sharkName;
  newSharkDiv.appendChild(title);

  // Create and append the paragraph
  var description = document.createElement('p');
  description.textContent = sharkDescription;
  newSharkDiv.appendChild(description);

  // Append the new shark to the container
  document.getElementById('sharks-container').appendChild(newSharkDiv);

  // Clear the input fields
  document.getElementById('shark-img-url').value = '';
  document.getElementById('shark-name').value = '';
  document.getElementById('shark-description').value = '';
});
