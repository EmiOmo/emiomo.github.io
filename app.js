document.getElementById('fit-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  const style = document.getElementById('style').value;
  const photo = document.getElementById('photo').files[0];
  
  alert(`Height: ${height}, Weight: ${weight}, Style: ${style}, Photo uploaded: ${photo ? 'Yes' : 'No'}`);

  // Additional logic to handle fit and style recommendations based on the inputs.
});
