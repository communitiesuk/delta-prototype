//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {

    // alert('JS - resultsTable running');

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





