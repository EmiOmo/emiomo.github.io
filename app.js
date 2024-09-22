// Scroll to AI model section
function scrollToAIModel() {
    document.getElementById('ai-model').scrollIntoView({ behavior: 'smooth' });
}

// Handle form submission for AI recommendations
document.getElementById('ai-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let height = document.getElementById('height').value;
    let chest = document.getElementById('chest').value;
    let waist = document.getElementById('waist').value;
    let hips = document.getElementById('hips').value;

    // Simulate AI recommendation logic
    let recommendation = `
        Based on your measurements:
        Height: ${height} cm, Chest: ${chest} cm, Waist: ${waist} cm, Hips: ${hips} cm,
        we recommend the following items for you:
        - Item 1: Slim-fit Shirt
        - Item 2: High-waist Jeans
    `;

    document.getElementById('ai-recommendations').innerText = recommendation;
});