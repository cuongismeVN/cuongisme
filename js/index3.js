// cuong is me
// đừng crack menu em huhu
// chức năng menu


h5gg.require(7.9); 
var h5frida=h5gg.loadPlugin("h5frida", "h5frida-16.0.10.dylib");
function ActiveCodePatch(fpath, vaddr, bytes) {
if(!h5frida.ActiveCodePatch(fpath, vaddr, bytes)) {
var result = h5frida.ApplyCodePatch(fpath, vaddr, bytes); alert(fpath+":0x"+vaddr.toString(16)+"-修改失败!\n" + fpath+":0x"+vaddr.toString(16)+"-PatchFailed!\n" + result);return false;
    } return true;
	}
  function DeactiveCodePatch(fpath, vaddr, bytes) {
    return h5frida.DeactiveCodePatch(fpath, vaddr, bytes);
	}

// thêm <i></i> để nghiêng chữ
// chức năng ở đâu



function so01() { // tìm speed
    h5gg.clearResults();
    h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x200000000');
    alert('搜索(' + h5gg.getResultsCount() + '/1)');
}


function so03() { // xóa speed
    h5gg.editAll('4397530849764387586', 'I64');
    ({
        type: 'success',
        message: '還原'
    });

}


function so06() {
    h5gg.editAll('4397530849758414897', 'I64');
    ({
        type: 'success',
        message: '2x'
    });

}

function so02() {
    h5gg.editAll('4397530849749489418', 'I64');

    ({
        type: 'success',
        message: '10x'
    });

}


function so05() {
    h5gg.editAll('4397530849741637681', 'I64');
     ({
        type: 'success',
        message: '50x'
    });

}





