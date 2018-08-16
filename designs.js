// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()


function makeGrid(height, width) {
//uses value of height to define number of tr
//uses value of width to define number of td
	$("#pixelCanvas").empty();
	for(let x = 0; x < height; x++) {
			const newRow = $("<tr> </tr>").appendTo("#pixelCanvas");
		for(let y = 0; y < width; y++) {
			const newCol = $("<td> </td>").appendTo(newRow);
		}
	}

}

$("#sizePicker").submit(function(event){
//determines value of height and width and runs makeGrid function when sizePicker is submitted
	event.preventDefault();
	const height = $("#inputHeight").val();
	const width  = $("#inputWeight").val();
	makeGrid(height, width);
})

$("#pixelCanvas").on("click", "td", function(){
//on clicking the table pixelCanvas, either adds new background color from color picker, or defaults to white
		let background = $(this).css("background-color");
		if (background === "rgba(0, 0, 0, 0)") {
			$(this).css("background-color", $("#colorPicker").val());
		} else {
			$(this).css("background-color", "rgba(0, 0, 0, 0)");
		}
});

$("#resetButton").click(function(event){
//resets canvas when botton clicked
	$("#pixelCanvas").empty();
});
