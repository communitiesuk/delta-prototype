
document.addEventListener('DOMContentLoaded', function() {

      // Hide header and footer in prootyping kit
      var header = document.querySelector('.govuk-header');
      var footer = document.querySelector('.govuk-footer');

      if (footer) {
          footer.style.display = 'none';
      }
      if (header) {
          header.style.display = 'none';
      }


    // Panel stuff =============================================================
    const container = document.querySelector('.container');
    const panels = document.querySelectorAll('.panel');
    const startBtn = document.getElementById('startBtn');
    const backBtn = document.getElementById('backBtn');
    const forwardBtn = document.getElementById('forwardBtn');

    let currentIndex = 0;


    // Function to enable/disable panel nav buttons   
      function enableButtons() {
      console.log('enableButtons JS triggered');
      startBtn.disabled = currentIndex === 0;
      backBtn.disabled = currentIndex === 0;
      forwardBtn.disabled = currentIndex === panels.length - 1;
    };
    

    // Function to update active panel based on scroll
    function updateActivePanel() {
      console.log('currentIndex: ' + currentIndex)
      const containerTop = container.getBoundingClientRect().top;
      panels.forEach((panel, index) => {
        const panelTop = panel.getBoundingClientRect().top;
        const panelBottom = panel.getBoundingClientRect().bottom;
        if (panelTop - containerTop <= 0 && panelBottom - containerTop > 0) {
          panel.classList.add('active');
          panel.setAttribute('aria-current', 'true');
          currentIndex = index;
        } else {
          panel.classList.remove('active');
          panel.removeAttribute('aria-current');
        }
      });

      // Enable/disable buttons based on current index 
      enableButtons();
    }

    // Scroll to a specific panel
    function scrollToPanel(index) {
      panels[index].scrollIntoView({ behavior: 'smooth' });
      panels[index].focus(); // Move focus to the panel
      currentIndex = index;
      // updateActivePanel();
      console.log('currentIndex: ' + currentIndex)
      enableButtons();
    }

    // Event listeners for buttons
    startBtn.addEventListener('click', () => {
      //alert('Start clicked');
      scrollToPanel(0);
      currentIndex = 0;
      updateActivePanel();
    });

    backBtn.addEventListener('click', () => {
      //alert('Back clicked');
      if (currentIndex > 0) {
        scrollToPanel(currentIndex - 1);
        updateActivePanel();
      }
    });

    forwardBtn.addEventListener('click', () => {
      //alert('Forward clicked');
      if (currentIndex < panels.length - 1) {
        scrollToPanel(currentIndex + 1);
      }
    });

    // Update active panel on scroll
    container.addEventListener('scroll', function () {
        updateActivePanel();
        console.log('index updated on scroll');
    });


    // Initialize
    updateActivePanel();      
});
