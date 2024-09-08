function checkOrientation() {
            const content = document.getElementById('content');
            const rotateMessage = document.getElementById('rotate-message');
            
            if (window.innerWidth < 1080) { // Small screen check
                if (window.innerHeight > window.innerWidth) { // Portrait mode
                    content.style.display = 'none';
                    rotateMessage.style.display = 'flex';
                } else { // Landscape mode
                    content.style.display = 'block';
                    rotateMessage.style.display = 'none';
                }
            } else {
                // If the screen is large, always show content
                content.style.display = 'block';
                rotateMessage.style.display = 'none';
            }
        }

        // Run on page load and orientation change
        window.addEventListener('load', checkOrientation);
        window.addEventListener('resize', checkOrientation);


  const elementButtons = document.querySelectorAll('.element-button');
  elementButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const targetContent = document.getElementById(targetId);
        
      // Hide all hidden content divs
      document.querySelectorAll('.hidden-content').forEach(content => {
        content.style.display = 'none';
      });
         // Slide up Part B
      document.querySelector('.part-b').style.display = 'block';
      // Show the content of the clicked button
      targetContent.style.display = 'block';
    });
  });

document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const sectionId = link.getAttribute('href');
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const groupButtons = document.querySelectorAll('.group-button');
  const elementButtons = document.querySelectorAll('.element-button');
  const groupButtonContainer = document.querySelector('.group-buttons');
  const periodicTable = document.querySelector('.periodic-table');

  groupButtons.forEach(button => {
    button.addEventListener('click', function() {
      const group = this.getAttribute('data-group');
      elementButtons.forEach(elementButton => {
        const elementGroup = elementButton.getAttribute('data-group');
        if (elementGroup === group) {
          elementButton.disabled = false; // Enable the button
          elementButton.style.pointerEvents = 'auto'; // Enable click events
          elementButton.style.opacity = '1'; // Make it fully visible
        } else {
          elementButton.disabled = true; // Disable the button
          elementButton.style.pointerEvents = 'none'; // Disable click events
          elementButton.style.opacity = '0.5'; // Dim the button
        }
      });

      // Hide group buttons and show periodic table
      periodicTable.style.display = 'block';
    });
  });

  // Existing event listeners for element buttons and smooth scrolling
  elementButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const targetContent = document.getElementById(targetId);
      // Hide all hidden content divs
      document.querySelectorAll('.hidden-content').forEach(content => {
        content.style.display = 'none';
      });
      // Slide up Part B
      document.querySelector('.part-b').style.display = 'block';
      // Show the content of the clicked button
      targetContent.style.display = 'block';
    });
  });

  document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const sectionId = link.getAttribute('href');
      document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
  });
});

  // Function to play the audio
  function playAudio() {
    var audio = document.getElementById('background-audio');
    audio.play().catch(function(error) {
      console.log('Manual play was prevented:', error);
      // Optionally, provide feedback to the user if playback fails
    });
  }

  // Attempt to autoplay the audio on page load
  window.addEventListener('load', function() {
    var audio = document.getElementById('background-audio');
    audio.play().catch(function(error) {
      console.log('Autoplay was prevented:', error);
      // If autoplay fails, show the play button
      document.querySelector('button').style.display = 'inline-block';
    });
  });
