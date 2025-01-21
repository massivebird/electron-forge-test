// Backend functionality for main menu.
document.getElementById("createButton").onclick = function() {
   window.file.createFile()
}

document.getElementById("removeButton").onclick = function() {
   window.file.removeFile()
}

document.getElementById("viewButton").onclick = function() {
   window.location.href = "./view_file.html";
}
