var grids = $(".grid");

var $randomGrid = $(grids[Math.floor(Math.random() * grids.length)]);



console.log($randomGrid);

$randomGrid.removeClass("notselected");


$(".notselected").remove();

/*var gridarray = [".gridA", ".gridB", ".gridC", ".gridD", ".gridE", ".gridF", ".gridG", ".gridH"];

var randomGrid = gridarray[Math.floor(Math.random() * gridarray.length)];

$(randomGrid).removeClass("notselected");

*/