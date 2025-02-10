//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {

   // alert('JS - designNotes running');

    // DESIGN NOTES: SHOW/HIDE CLICK
    const designNotes = document.querySelectorAll('.designNote');
    const toggleLink = document.getElementById('toggleLink');

    if (toggleLink) {
        toggleLink.addEventListener('click', function() {
            showHideDesignNotes();
        });
    }

    // DESIGN NOTES: SHOW/HIDE KEY DOWN (N)
    document.addEventListener('keydown', function(event) {
        // Check if the pressed key is 'N'
        if (event.key === 'N' || event.key === 'n') {
            // alert('N pressed');
            showHideDesignNotes();
        }
    });

    // DESIGN NOTES: SHOW/HIDE
    function showHideDesignNotes() {
        designNotes.forEach(function(note) {
            if (note.style.display === 'none') {
                note.style.display = 'block'; // Show the designNote element
            } else {
                note.style.display = 'none'; // Hide the designNote element
            }
        });
    }    

});







