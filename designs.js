// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    var row,column,tableElem,rowElem,colElem;
    row =$('#inputHeight').val();
    column = $('#inputWeight').val();
    tableElem = document.createElement('table');
    for (var i = 0; i < row; i++) {
            rowElem = document.createElement('tr');
            for (var j = 0; j < column; j++) {
                colElem = document.createElement('td');
                rowElem.append(colElem);
              }
            tableElem.append(rowElem);
        }
        $('#pixelCanvas').html(tableElem);
};
$('#submit').click(function x() {

      makeGrid();
});
