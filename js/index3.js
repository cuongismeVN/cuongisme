function so01() {
    h5gg.clearResults();
    h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x200000000');
    alert('搜索(' + h5gg.getResultsCount() + '/1)');
}

function so02() {
    h5gg.editAll('4397530849749489418', 'I64');

    vant.showNotify({
        type: 'success',
        message: '10x'
    });

}

function so03() {
    h5gg.editAll('4397530849764387586', 'I64');
    vant.showNotify({
        type: 'success',
        message: '還原'
    });

}


function so05() {
    h5gg.editAll('4397530849741637681', 'I64');
    vant.showNotify({
        type: 'success',
        message: '50x'
    });

}

function so06() {
    h5gg.editAll('4397530849758414897', 'I64');
    vant.showNotify({
        type: 'success',
        message: '2x'
    });

}








function so89() {
    h5gg.clearResults();
    h5gg.searchNumber('72340173878198272', 'I64', '0x100000000', '0x130000000');
    h5gg.editAll('72340172821233664', 'I64');
    vant.showNotify({
        type: 'success',
        message: '快切'
    });


}

function s04() {
    h5gg.clearResults();
    h5gg.searchNumber('4609164001829663539', 'I64', '0x100000000', '0x130000000');
    h5gg.editAll('4620693218765517619', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Success'
    });


}

function s05() {
    h5gg.clearResults();
    h5gg.searchNumber('1065856532', 'I64', '0x100000000', '0x160000000');
    h5gg.editAll('1073741824', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Success'
    });


}

function so90() {
    h5gg.clearResults();
    h5gg.searchNumber('4575657222469899220', 'I64', '0x100000000', '0x160000000');
    h5gg.editAll('4848124999925814228', 'I64');
    h5gg.clearResults();
    h5gg.searchNumber('4575657222469336965', 'I64', '0x100000000', '0x160000000');
    h5gg.editAll('4848124999925251973', 'I64');
    vant.showNotify({
        type: 'success',
        message: '肩膀天線'
    });


}



function so91() {
    h5gg.clearResults();
    h5gg.searchNumber('1051196712', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;

        var dizhi0 = (Number(addr1) + 20);




        {
            h5gg.setValue(dizhi0, 200, "F32");
        }
    }
    h5gg.clearResults();
    h5gg.searchNumber('4575657224610966592', 'I64', '0x100000000', '0x160000000');
    h5gg.editAll('4848125002066881600', 'I64');
    vant.showNotify({
        type: 'success',
        message: '超細手線'
    });


}

function so92() {
    h5gg.clearResults();
    h5gg.searchNumber('4575657222443971598', 'I64', '0x100000000', '0x130000000');
    h5gg.editAll('4848124999899886606', 'I64');
    h5gg.clearResults();
    h5gg.searchNumber('4575657224578539469', 'I64', '0x100000000', '0x130000000');
    h5gg.editAll('4848125002034454477', 'I64');
    vant.showNotify({
        type: 'success',
        message: '微粗手線'
    });


}

function sk() {
    h5gg.clearResults();
    var hk1 = prompt("請輸入想要的靈敏");
    h5gg.searchNumber('4417130516484980736', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;
        var dizhi0 = (Number(addr1) + -4);
        var dizhi1 = (Number(addr1) + -8);
        var dizhi2 = (Number(addr1) + -12);
        var dizhi3 = (Number(addr1) + -0);




        {
            h5gg.setValue(dizhi0, hk1, "F32");
            h5gg.setValue(dizhi1, hk1, "F32");
            h5gg.setValue(dizhi2, hk1, "F32");
            h5gg.setValue(dizhi3, hk1, "F32");

        }
    }
    vant.showNotify({
        type: 'success',
        message: '遊戲靈敏'
    });

}

function s100s() {
    h5gg.clearResults();
    h5gg.searchNumber('4603687625386098688', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;

        var dizhi0 = (Number(addr1) + 36);
        var dizhi1 = (Number(addr1) + 40);
        var dizhi2 = (Number(addr1) + -308);



        {
            h5gg.setValue(dizhi0, 0.01, "F32");
            h5gg.setValue(dizhi1, 0.01, "F32");
            h5gg.setValue(dizhi2, 0, "I32");

        }
    }
    vant.showNotify({
        type: 'success',
        message: 'AWM快切準心'
    });


}

function s101s() {
    h5gg.clearResults();
    h5gg.searchNumber('4603687625386098688', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;

        var dizhi0 = (Number(addr1) + 36);
        var dizhi1 = (Number(addr1) + 40);



        {
            h5gg.setValue(dizhi0, 0.01, "F32");
            h5gg.setValue(dizhi1, 0.01, "F32");

        }
    }
    vant.showNotify({
        type: 'success',
        message: 'AWM快切'
    });


}




function s08() {
    h5gg.clearResults();
    h5gg.searchNumber('4728779608739021057', 'I64', '0x100000000', '0x150000000');

    alert('Sear(' + h5gg.getResultsCount() + ')');

    var count = h5gg.getResultsCount(); //获取总共搜索结果个数

    var r = h5gg.getResults(count); //获取总共搜索结果个数的数组

    //开始循环遍历

    for (var i = 0; i < count; i++) {

        var addr1 = r[i].address; //获取每个搜索结果的地址 address弟子 value值 type类型

        var weishu = /18$/; //设置置顶结尾

        var pd = weishu.test(addr1); //判断地址是否包含指定结尾



        var dizhi1 = (Number(addr1) + 4);




        if (pd) {
            h5gg.setValue(dizhi1, 100, "F32");


        }
    }
    vant.showNotify({
        type: 'success',
        message: '跳躍靈敏'
    });


}

function so88() {
    h5gg.clearResults();
    h5gg.searchNumber('4333543704410193920', 'I64', '0x100000000', '0x160000000');
    h5gg.searchNearby('0.01', 'F32', '0x8');
    h5gg.searchNearby('0.0219~0.02975', 'F32', '0x32')
    h5gg.searchNearby('0.1035~0.1070', 'F32', '0x4');
    h5gg.searchNearby('2.802597e-45', 'F32', '0x4');
    h5gg.searchNumber('0.1035~0.1070', 'F32', '0x100000000', '0x160000000');
    h5gg.editAll('1.875', "F32");
    vant.showNotify({
        type: 'success',
        message: '人物範圍'
    });
}

function s56() {
    h5gg.clearResults();
    h5gg.searchNumber('3.741467e-43', 'F32', '0x100000000', '0x170000000');
    h5gg.searchNearby('0.07~0.0899999', 'F32', '0x20');
    h5gg.searchNumber('0.07~0.0899999', 'F32', '0x100000000', '0x170000000');
    h5gg.searchNearby('0.0068~0.00915', 'F32', '0x20');
    h5gg.searchNearby('0.01', 'F32', '0x45');
    h5gg.searchNumber('0.07~0.0899999', 'F32', '0x100000000', '0x170000000');
    h5gg.searchNearby('2', 'I32', '0x4');
    h5gg.searchNumber('0.07~0.0899999', 'F32', '0x100000000', '0x170000000');
    h5gg.editAll('0.135', "F32");
    vant.showNotify({
        type: 'success',
        message: '人物鎖頭'
    });
}
function s105s() {
h5gg.clearResults();
h5gg.searchNumber('31101603021', 'I64', '0x100000000', '0x160000000');
var count = h5gg.getResultsCount();
var r = h5gg.getResults(count);
var cnt = 0;
for(var i=0; i<count; i++) {
    var addr1 = r[i].address;

var dizhi0 = (Number(addr1) + 8);

   


{
h5gg.setValue(dizhi0, 2139095040, "I32");

   }
}
vant.showNotify({
        type: 'success',
        message: 'AWM自瞄'
    });
}




function s2296() {
    h5gg.clearResults();
    h5gg.searchNumber('8128164201335532067', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;

        var dizhi0 = (Number(addr1) + 4);
        var dizhi1 = (Number(addr1) + -12);
        var dizhi2 = (Number(addr1) + -16);
        var dizhi3 = (Number(addr1) + -20);
        var dizhi4 = (Number(addr1) + -48);




        {
            h5gg.setValue(dizhi0, 2753558450, "I32");
            h5gg.setValue(dizhi1, 13, "F32");
            h5gg.setValue(dizhi2, 13, "F32");
            h5gg.setValue(dizhi3, 13, "F32");
            h5gg.setValue(dizhi4, 0.7, "F32");

        }
    }


    h5gg.clearResults();
    h5gg.searchNumber('506812498028', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;


        var dizhi1 = (Number(addr1) + 180);
        var dizhi2 = (Number(addr1) + 184);
        var dizhi3 = (Number(addr1) + 188);
        var dizhi4 = (Number(addr1) + 192);
        var dizhi5 = (Number(addr1) + 196);
        var dizhi6 = (Number(addr1) + 200);




        {
            h5gg.setValue(dizhi1, 5439583, "I32");
            h5gg.setValue(dizhi2, 6881392, "I32");
            h5gg.setValue(dizhi3, 6619246, "I32");
            h5gg.setValue(dizhi4, 0, "I32");
            h5gg.setValue(dizhi5, 0, "I32");
            h5gg.setValue(dizhi6, 0, "I32");

        }
    }

    vant.showNotify({
        type: 'success',
        message: '範圍'
    });

}