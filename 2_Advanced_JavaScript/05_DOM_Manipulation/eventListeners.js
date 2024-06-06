// Adding event listeners
const button = document.querySelector('button');

button.addEventListener('click', () => {
    alert('Button clicked!');
});

// Removing event listeners
const logMessage = () => {
    console.log('Event listener triggered');
};

button.addEventListener('mouseover', logMessage);
button.removeEventListener('mouseover', logMessage);
