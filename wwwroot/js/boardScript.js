$(document).ready(function () {
    var selectedSquare = null;
    var moveToSquare = null;

    var myDivs = $('#chessboard').find('*');
    myDivs[0].onclick = function () { alert(this.id) }
    for (let i = 0; i < myDivs.length; i++) {
        myDivs[i].onclick = function () { alert(this.id) }
    }

        //document.getElementById("chessboard").children;
    alert(myDivs.length);
})