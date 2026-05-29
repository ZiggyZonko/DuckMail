const deleteemailbutton = document.getElementById("DeleteButton");
const ducks = document.getElementById("duckSound");

document.querySelectorAll('table.interactive').forEach(table => {

    table.addEventListener('click', (event) => {

        const highlightedClass = 'highlighted';

        const isRow = el =>
            el.tagName === 'TR' &&
            el.parentElement.tagName === 'TBODY';

        const clickedRow = event.composedPath().find(isRow);

        if (!clickedRow) return;

        // Remove highlight from all rows
        table.querySelectorAll('tbody tr').forEach(row => {
            row.classList.remove(highlightedClass);
        });

        // Highlight clicked row
        clickedRow.classList.add(highlightedClass);
    });

    table.addEventListener('dblclick', (event) => {
            console.log("Row double-clicked, opening email...");
    });
});

// Delete selected row
deleteemailbutton.addEventListener('click', () => {

    console.log("Delete button clicked, removing email...");
    ducks.currentTime = 0;
    ducks.play();

    document.querySelectorAll('table.interactive tbody tr').forEach(row => {

        if (row.classList.contains('highlighted')) {
            row.remove();
        }

    });
});