$(document).ready(function () {
    populateBoard();
    var selectedSquare = null;
    var moveToSquare = null;

    var myDivs = $('#chessboard').find('*');
    for (let i = 0; i < myDivs.length; i++) {
        myDivs[i].onclick = function () { alert(this.id) }
    }
})

//reads from a hidden div, it's hardcoded but it's fine
populateBoard = function () {
    var str = $('#fen').text();

    var myDivs = $('#chessboard').find('*');
    for (let i = 0; i < myDivs.length; i++) {
        myDivs[i].innerHTML = getSquareFromFen(str, i);
    }
}

getSquareFromFen = function (fen, pos) {
    
    var fenList = fen.split("/");
    var myRow = fenList[Math.floor(pos / 8)].replace(/\s/g, "");;
    var col = pos % 8;

    var fenPos, i;
    for (i = 0, fenPos = 0; i <= col; i++, fenPos++) {
        //alert("fen: " + fenPos + " i: " + i + " col: " + col);
        var ch = myRow.charAt(fenPos);

        if (isNumeric(ch)) {
            if (ch > col - i)
                return "";
            i += ch - 1;
        }

        if (i == col)
            return fenCharToHtmlChar(myRow.charAt(fenPos));
    }
}

function isNumeric(s) {
    return !isNaN(s - parseFloat(s));
}

function fenCharToHtmlChar(str) {
    switch(str) {
        case 'r':
            return "&#9820";
        case 'n':
            return "&#9822";
        case 'b':
            return "&#9821";
        case 'q':
            return "&#9819";
        case 'k':
            return "&#9818";
        case 'p':
            return "&#9823";
        case 'R':
            return "&#9814";
        case 'N':
            return "&#9816";
        case 'B':
            return "&#9815";
        case 'Q':
            return "&#9813";
        case 'K':
            return "&#9812";
        case 'P':
            return "&#9817";

    }
}