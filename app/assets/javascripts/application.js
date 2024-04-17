//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here


  document.getElementById('toggleLink').addEventListener('click', function() {
    var designNotes = document.querySelectorAll('.designNote'); // Get all elements with class 'designNote'
    for (var i = 0; i < designNotes.length; i++) {
        if (designNotes[i].style.display === 'none') {
            designNotes[i].style.display = 'block'; // Show the designNote element
        } else {
            designNotes[i].style.display = 'none'; // Hide the designNote element
        }
    }
  });

  

})


