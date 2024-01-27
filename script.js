document.getElementById('add-shark-btn').addEventListener('click', function () {
  // Retrieve shark details from input fields
  var imgUrl = document.getElementById('shark-img-url').value;
  var sharkName = document.getElementById('shark-name').value;
  var sharkDescription = document.getElementById('shark-description').value;

  // Create the new shark div
  var newSharkDiv = document.createElement('div');
  newSharkDiv.innerHTML = `
      <img src="${imgUrl}" alt="${sharkName}" />
      <h2>${sharkName}</h2>
      <p>${sharkDescription}</p>
    `;

  // Append the new shark to the container
  document.getElementById('sharks-container').appendChild(newSharkDiv);

  // Clear the input fields
  document.getElementById('shark-img-url').value = '';
  document.getElementById('shark-name').value = '';
  document.getElementById('shark-description').value = '';
});
