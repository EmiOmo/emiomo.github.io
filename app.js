document.getElementById('measurement-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const bodyShape = document.getElementById('body-shape').value;
  
    let recommendation = '';
  
    if (bodyShape === 'hourglass') {
      recommendation = 'We recommend fitted dresses and high-waisted pants.';
    } else if (bodyShape === 'pear') {
      recommendation = 'Try A-line skirts and structured tops for balance.';
    } else {
      recommendation = 'Look for straight-cut dresses and jackets.';
    }
  
    document.getElementById('recommendations').innerHTML = `<h3>Your Recommendation:</h3><p>${recommendation}</p>`;
  });
  