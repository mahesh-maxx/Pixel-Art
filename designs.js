function makeGrid() {
    var row,column,tableElem,rowElem,colElem;
    row =$('#inputHeight').val();
    column = $('#inputWeight').val();
    tableElem = document.createElement('table');
    tableElem.setAttribute('id', 'Grid');
    for (var i = 0; i < row; i++) {
            rowElem = document.createElement('tr');
            for (var j = 0; j < column; j++) {
                colElem = document.createElement('td');
                colElem.setAttribute('onClick','clickFn()');
                rowElem.append(colElem);
              }
            tableElem.append(rowElem);
        }
        $('#pixelCanvas').html(tableElem);
};
$('#submit').click(function () {
  makeGrid();
});
function clickFn() {
  $("#Grid td").click(function() {
            var colorValue = $('#colorPicker').val();
            $(this).css('background-color',colorValue);
  });
}
