
function getTextFile(encd) {
	var myFile = document.getElementById("targetTextFiles").files[0];
		var reader = new FileReader();
    reader.onload = function(evt){
			var txt = evt.target.result; //ファイル内容を読み出し
			txt = txt.replace(/</g, "&lt;"); //置き換え
			txt = txt.replace(/>/g, "&gt;"); //置き換え
      txt = txt.replace(/\r\n|\r/g, "\n;");//改行コードの統一
			txt = "<p>MIME : " + myFile.name + "</p><pre>" + txt + "</pre>";
			document.getElementById("guttext").innerHTML = txt;
		}
		reader.readAsText(myFile, encd);
}

// function cuti(){ //INFOレベルを非表示
//   var itxt = document.getElementById("guttext").value;#
//   var cutitxt = itxt.replace(/^I\/.*$/gm, "");
//   document.getElementById("guttext").innerHTML = cutitxt;
// }
//
// function cutd(){ //DEBUGレベルを非表示
//   var dtxt = document.getElementById("guttext").value;
//   var cutdtxt = itxt.replace(/^D\/.*$/gm, "");
//   document.getElementById("guttext").innerHTML = cutdtxt;
// }
//
// function cutw(){ //WARNレベルを非表示
//   var wtxt = document.getElementById("guttext").value;
//   var cutwtxt = itxt.replace(/^W\/.*$/gm, "");
//   document.getElementById("guttext").innerHTML = cutwtxt;
// }
// function highlight(){
//   var logtxt = document.getElementById("Logcutted").value;
//     if (logtxt.match(/^I/)) { logtxt.style.color = "red"; }
// }
