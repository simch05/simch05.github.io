const totalPages = 4;

// Array of page names
const pages = ['index.html', 'firstsc.html', 'secondsc.html', 'epi.html'];

// Function to generate page buttons
function generatePageButtons() {
  const container = document.getElementById('pageButtons');
  container.innerHTML = ''; // Clear previous buttons

  // Create a button for each page
  for (let i = 0; i < pages.length; i++) {
    const button = document.createElement('div');
    button.textContent = i + 1;
    button.classList.add('page-button');
    button.addEventListener('click', () => handlePageClick(i));
    container.appendChild(button);
  }
}

// Function to handle page click
function handlePageClick(pageNumber) {
  // Remove active class from all buttons
  const buttons = document.querySelectorAll('.page-button');
  buttons.forEach(button => button.classList.remove('active'));

  // Add active class to the clicked button
  const button = document.querySelector(`.page-button:nth-child(${pageNumber + 1})`);
  button.classList.add('active');

  // Redirect to the clicked page
  window.location.href = pages[pageNumber];
}

// Initial generation of page buttons
generatePageButtons();
