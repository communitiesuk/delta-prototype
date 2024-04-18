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


      window.onload = function() {
        // Array of weekday names
        var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
        // Get the current date
        var today = new Date();
        
        // Get the day of the week (0-6)
        var dayIndex = today.getDay();
        
        // Get the name of the day using the index
        var currentDay = daysOfWeek[dayIndex];
        
        // Replace the content of the element with ID 'todaysDay' with the current day name
        document.getElementById('todaysDay').innerHTML = currentDay;
    };
  

})


