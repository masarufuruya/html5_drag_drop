
/**
 * File Preview
 * @author Matty工房
 */

/**
 * Contructor
 */
var init = function() {
	Array.prototype.contains = function (value) {
	    var flg = false;
	    for(var i in this) {
	        if(this[i] == value) {
	            flg = true;
	        }
	    }
	    return flg;
	}
}
init();

// ドロップされた時に読み出される
function doDragOver(event) {
    var type = event.dataTransfer.types.contains('Files');
    console.log(type);
    if (type) {
        // デフォルトだと表示されるのでキャンセル
        event.preventDefault();
    }
}

// ドロップした際の実際の処理を書く
function doDrop(event) {
	// ページの遷移を防止
	// (これが無いとドラッグファイルの内容が表示される)
	event.preventDefault();

    // var img = $('#preview');
    var img = document.getElementById('preview');

    var file = event.dataTransfer.files[0];
    var reader = new FileReader();

    reader.onload = function() {
    	// 非同期処理
        img.src = reader.result;
    }

    reader.readAsDataURL(file);
}
