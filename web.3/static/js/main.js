const spinButton = document.getElementById('spinButton');
const roulette = document.querySelector('.roulette');
const randomNumberElement = document.getElementById('randomNumber');
let currentRotation = 0;

spinButton.addEventListener('click', () => {
    spinButton.disabled = true;
    currentRotation += 720;
    roulette.style.transform = `rotate(${currentRotation}deg)`;
    
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 1001); 
        randomNumberElement.textContent = `Random Number: ${randomNumber}`;
        
        const data = { number: randomNumber };

        fetch('/api/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(result => {
            alert(result.message);
        })
        .catch(error => {
            console.error('Error:', error);
        });

        spinButton.disabled = false;
    }, 3000);
});
