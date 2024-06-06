// Modifying elements
const heading = document.querySelector('h1');
heading.textContent = 'New Heading Text';
heading.style.color = 'blue';
heading.classList.add('highlight');

const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph.';
document.body.appendChild(newParagraph);
