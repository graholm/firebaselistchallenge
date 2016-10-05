var input = $("")

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    console.log ("yay")

    var valueToSave = input.val();
    addListItem(valueToSave);
  }
})

onNewListItem("davidsList", function(value) {
  $("#list-display").append("<div>" + value + "</div>")
}) 