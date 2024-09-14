// Music By CisMe
// anti f12




// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Ngăn ngừa nhấn phím F12 và Ctrl+Shift+I
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
        event.preventDefault();
        alert('Việc mở DevTools đã bị chặn.');
    }
});

// Ngăn ngừa menu chuột phải
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert('Menu chuột phải bị vô hiệu hóa.');
});

// Giám sát sự thay đổi kích thước cửa sổ
let lastHeight = window.innerHeight;
window.addEventListener('resize', function() {
    if (window.innerHeight < lastHeight) {
        alert('Có thể DevTools đang mở.');
    }
    lastHeight = window.innerHeight;
});

ReactDOM.render(<App />, document.getElementById('root'));
