//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {

    // Ensure the DOM is fully loaded before running the scripts
document.addEventListener('DOMContentLoaded', function() {
    // Results table fixed width
    function setResultTable() {   
        var deltaScrollablePane = document.getElementById('delta-scrollable-pane');
        var resultTable = document.getElementById('resultTable');

        if (deltaScrollablePane && resultTable) {
            var width = deltaScrollablePane.offsetWidth; // Get the width in pixels
            resultTable.style.width = width + 'px'; // Set the width as an inline style
        } else {
            console.error('Delta scrollable pane or result table not found.');
        }
    }

    setResultTable();

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

    // TOGGLE Results filters
    const toggleFiltersPanel = document.getElementById('toggleFiltersPanel');
    const closeFiltersPanel = document.getElementById('closeFiltersPanel');
    const filterBtnText = document.getElementById('filterBtnText');

    if (toggleFiltersPanel) {
        toggleFiltersPanel.addEventListener('click', function() {
            var deltaResultsFilters = document.getElementById('delta-results-filters');
            if (deltaResultsFilters) {
                deltaResultsFilters.classList.toggle('hidden');           
                if (filterBtnText) {
                    filterBtnText.textContent = filterBtnText.textContent === 'Show filters' ? 'Hide filters' : 'Show filters';
                }
            }
        });
    }

    if (closeFiltersPanel) {
        closeFiltersPanel.addEventListener('click', function() {
            var deltaResultsFilters = document.getElementById('delta-results-filters');
            if (deltaResultsFilters) {
                deltaResultsFilters.classList.toggle('hidden');
            }
        });
    }
});


})






