var input = $("#new-item-input")
input.keydown(function(e) {	
  if (e.keyCode == "13") {
    console.log(e.keyCode)
    var valueToSave = input.val();
    addListItem(valueToSave);
  }
})

onNewListItem("graceList", function(value) {
  $("#list-display").append("<div>" + value + "</div>")
}) 