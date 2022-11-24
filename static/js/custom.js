$('.box-simple').click(function(){
    $(this).toggleClass('box-simple-selected');
    $(this).
    console.log(this.className);
});


function updateTextBoxdevelopment() {
    var informationBox = document.getElementById("development-info");
    var informationTarget = document.getElementById("infobox")
    informationTarget = informationBox.innerText;
    informationTarget.innerHTML = informationBox.innerHTML;
}