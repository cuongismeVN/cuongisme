// Music By CisMe
// anti f12



// Ngăn ngừa nhấn phím F12 và Ctrl+Shift+I
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
        event.preventDefault();
        console.log('DevTools bị chặn.');
    }
});

// Ngăn ngừa menu chuột phải
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    console.log('Menu chuột phải bị chặn.');
});

// Giám sát sự thay đổi kích thước cửa sổ
let lastHeight = window.innerHeight;
window.addEventListener('resize', function() {
    if (window.innerHeight < lastHeight) {
        console.log('Có thể DevTools đang mở.');
    }
    lastHeight = window.innerHeight;
});

// Phát hiện khi DevTools được mở bằng cách theo dõi các thuộc tính của cửa sổ
(function() {
    var devtools = /./;
    devtools.toString = function() {
        alert('DevTools đã được mở.');
    };
    console.log('%c', devtools);
})();
