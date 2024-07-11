//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {


    // Results table fixed width =========================== 
    function setResultTable() {   
        var deltaScrollablePane = document.getElementById('delta-scrollable-pane');
        var resultTable = document.getElementById('resultTable');
        var width = deltaScrollablePane.offsetWidth; // Get the width in pixels
        resultTable.style.width = width + 'px'; // Set the width as an inline style
        // alert('Resizer');
    };

    setResultTable();

    // DESIGN NOTES: SHOW/HIDE CLICK ===================== 
    const designNotes = document.querySelectorAll('.designNote'); // Get all elements with class 'designNote'    
    // document.getElementById('toggleLink').addEventListener('click', function() {
    //     showHideDesignNotes();
    // });

    // DESIGN NOTES: SHOW/HIDE KEY DOWN (N)
    document.addEventListener('keydown', function(event) {
        // Check if the pressed key is 'N'
        if (event.key === 'N' || event.key === 'n') {
            alert('N pressed');
            showHideDesignNotes();
        }
    });

    // DESIGN NOTES: SHOW/HIDE
    function showHideDesignNotes() {
        // alert('Show hide activated');
        for (var i = 0; i < designNotes.length; i++) {
            if (designNotes[i].style.display === 'none') {
                designNotes[i].style.display = 'block'; // Show the designNote element
            } else {
                designNotes[i].style.display = 'none'; // Hide the designNote element
            }
        }
    };



    // TOGGLE Results filters ===============
    document.getElementById('toggleFiltersPanel').addEventListener('click', function() {
        // alert('Toggle filters clicked');      
        var deltaResultsFilters = document.getElementById('delta-results-filters');
        deltaResultsFilters.classList.toggle('hidden');           
        // alert('toggle');
        var filterBtnText = document.getElementById('filterBtnText');
        if (filterBtnText.textContent === 'Show filters') {
            filterBtnText.textContent = 'Hide filters';
        } else {
            filterBtnText.textContent = 'Show filters';
        }        
    });  
    document.getElementById('closeFiltersPanel').addEventListener('click', function() {
        // alert('Close filters clicked');
        var deltaResultsFilters = document.getElementById('delta-results-filters');
        deltaResultsFilters.classList.toggle('hidden');           
    });          




})






