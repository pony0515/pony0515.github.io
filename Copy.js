window.Clipboard = (function (window, document, navigator) {
    var textArea,
        copy;
    // 判斷是不是ios端
    function isOS() {
        return navigator.userAgent.match(/ipad|iphone/i);
    }
    //創建文本元素
    function createTextArea(text) {
        textArea = document.createElement('textArea');
        textArea.value = text;
        document.body.appendChild(textArea);
    }
    //選擇內容
    function selectText() {
        var range,
            selection;
        if (isOS()) {
            range = document.createRange();
            range.selectNodeContents(textArea);
            selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            textArea.setSelectionRange(0, 999999);
        } else {
            textArea.select();
        }
    }
    //複製到剪貼板
    function copyToClipboard() {
        try {
            if (document.execCommand("Copy")) {
                alert("複製成功！");
            } else {
                alert("複製失敗！請手動複製！");
            }
        } catch (err) {
            alert("複製錯誤！請手動複製！")
        }
        document.body.removeChild(textArea);
    }
    copy = function (text) {
        createTextArea(text);
        selectText();
        copyToClipboard();
    };
    return {
        copy: copy
    };
})(window, document, navigator);