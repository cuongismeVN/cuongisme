
<!DOCTYPE html>
<html>
<header>
	<title>Cuong Is Me</title>
	
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link rel="stylesheet" href="https://unpkg.com/element-ui@2.15.7/lib/theme-chalk/index.css">
	<script src="https://cdn.jsdelivr.net/npm/vue@2.6/dist/vue.min.js"></script>
	<script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>

	<style>
		body{
			height: 280px;
			width: 410px;
		}
		* {
					padding: 0;
					margin: 0;
		  color:#fff;
				}
		
				.ayimgui {			
					position: fixed;
					width: 410px;
					height: 280px;
					top: calc(50% - 180px);
					left: calc(50% - 180px);
					z-index: 999;
					background: rgba(0, 0, 0, 1.0); /* màu background menu */
					background-size: 25599px;
					/*border-color: #04ff00;
					border-radius: 10px;*/	
					overflow: hidden;
					-webkit-user-select: none;
					-moz-user-select: none;
					-ms-user-select: none;
					user-select: none;
					border: #7c81aa;
		
				}
		
			  .onlyTitle {
					height: 25px !important;
		
				}
			
		
			 .ayimgui .aytitle {
					padding: 0 5px;
					font-size: 22px;
					background: rgba(5, 56, 114, 0.9); /* thanh tên menu */
				} 
		
		
				.ayimgui .aytitle .titleClose {
					position: absolute;
					top: 3px;
					right: 6px;
					color: #062d61;
				}
		
				.ayimgui .aytitle .titleClose:hover {
					color: #000;
				}
		
				.ayimgui .aybody {
					padding: 15px;
					height: calc(100% - 21px - 15px - 15px);
					/*减去标题高度，减去上线padding高度*/
					overflow: auto;
					font-size: 15px;
				}
		
		
				.aytext {
					width: 100%;
					margin-bottom: 10px;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					color: #fff;
				}
		
				input[type=checkbox]{
		 visibility: hidden;
		 vertical-align:middle; margin-bottom:1px;
		 cursor: pointer;
		 position: relative;
		 width: 26px;
		 height:30px;
		
		
		}
		input[type=checkbox]::after{
		 position: absolute;
		 top: 0;
		 margin-top:1px;
		 width: 22px; height: 22px;
		 border: 1px solid #2e2c38;
		 border-radius: 30px;
		 background-color:#868589;
		 display: inline-block;
		 visibility: visible;
		 text-align: center;
		 content: ' '
		
		}
		
		/* giao diện nút bật chức năng */
		input[type=checkbox]:checked::after {
			content: "✔️";
			color:#075c5c;
			border-color: #000000;
			background-color: #ffffff;
			font-size: 16px;
			font-weight: bold;
		
		}
		
				
		
		
		input[type=lradio]  {
			width:20px;
			height:20px;
			margin-right:6px;
			border:none;
			outline-style:none;
			-webkit-appearance:none;
			vertical-align:middle;
			border:1px solid #686868F0;
			border-radius:50%;
		}
		input[type=lradio]:checked {
			border:6px solid #2F7DCDF0;
			background:#E8E8E8;
		}
		
				.onlySelect {
					background-color: rgb(254, 254, 254);
					border: none;
				}
		
				.onlySelect .el-select-dropdown__item {
					color: #000;
		
				}
		
				.onlySelect .el-select-dropdown__item.hover,
				.el-select-dropdown__item:hover:hover {
					background-color: transparent;
				}
		
				.onlySelect .popper__arrow {
					border-bottom-color: rgb(254, 254, 254) !important;
				}
		
				.onlySelect.el-popper[x-placement^=bottom] .popper__arrow::after {
					border-bottom-color: rgb(8254, 254, 254) !important;
				}
		
				.el-select {
					width: 100%;
				}
		
				.el-select .el-input {
					background-color: rgb(254, 254, 254);
				}
		
				.el-select .el-input__suffix {
					background-color: rgb(160, 196, 243);
					color: #000;
					right: 0;
				}
		
				.el-select .el-select__caret {
					color: #000;
				}
		
				.el-select .el-input__inner {
					background-color: transparent;
					border: none;
					color: #000;
				}
		
				.el-select .el-input .el-select__caret {
					color: #000;
				}
		
				
				.el-scrollbar .el-scrollbar__bar {
					opacity: 1 !important;
				}
		
				.el-button {
					font-size: 14px;
					padding: 5px 10px;
					line-height: 14px;
					color: #000;
					background-color: #B8D1F2;
				}
		
				.el-button:hover {
					opacity: .7;
					color: #000;
					background-color: #B8D1F2;
				}
		
				.el-button:focus,
				.el-button:hover {
					color: #000;
					background-color: #B8D1F2;
				}
		
				.aycollapse {
					width: 100%;
					font-size: 14px;
					background-color: rgb(177, 206, 240);
					color: #000;
				}
		
				.aytab {
					width: 100%;
					height: 25px;
					display: flex;
					border-bottom: 2px solid rgb(200, 217, 233);
				}
		
				.aytab span {
					padding: 1 2 px;
					height: 100%px;
					display: flex;
					align-items: center;
					justify-content: center;
					background-color: rgb(189, 199, 208);
					color: #fff;
					font-size: 16px;
					font-weight: 500;
					margin-left: 2px;
					border-radius: 6px 6px 0 0;
					cursor: pointer;
				}
		
		
				.el-input input {
					background-color: rgb(254, 254, 254);
					border: none;
					border-radius: 0px;
				
				}
				
		input[type=range] {
		  -webkit-appearance: none;
		}
		input[type=range]:focus {
		  outline: none;
		}
		input[type=range]::-webkit-slider-runnable-track {
		  height: 21px;
		  cursor: pointer;
		  animate: 0.2s;
		  background: #5c5870;
		  border-radius: 100px;
		}
		input[type=range]::-webkit-slider-thumb {
		  border: 1px solid #000000;
		  height: 21px;
		  width: 21px;
		  border-radius: 30px;
		  background: #489af7;
		  cursor: pointer;
		  -webkit-appearance: none;
		  margin-top: -0px;
		}
		input[type=range]:focus::-webkit-slider-runnable-track {
		  background: #0d1804;
		}
		input[type=range]::-webkit-slider-thumb::after {
		  content: attr(value) "%";
		  position: absolute;
		  top: -25px; 
		  left: 50%;
		  transform: translateX(-50%);
		  color: #ffffff;
		  font-weight: bold;
		  font-size: 12px;
		}


/*		.color-effect {
      animation: color-change 5s infinite;
    }
    
    @keyframes color-change {
      0%, 100% {
        color: #ff7675;
      }
      25% {
        color: #74b9ff;
      }
      50% {
        color: #55efc4;
      }
      75% {
        color: #ffeaa7;
      }
  } */



</style>
</header>
<body>
	<div id="app">
		<div :class="!ifshow?'onlyTitle ayimgui':'ayimgui'" ref="menuMain">
			<div class="aytitle" @touchstart="titleTouchStart" @touchmove="titleTouchMove">
				<i :class="ifshow?'el-icon-caret-bottom':'el-icon-caret-top'" @click="ifshow = !ifshow" style="color: white"></i>
                <span class="title-age" style="margin-left:70px;font-size: 16px; color: white;">Project By Cuong Is Me<img src="https://github.com/WeansHHN/weanshhn.github.io/blob/main/img/gif/gifwaifu.gif?raw=true" alt="weanshhn" width="25" height="15" /> </span>

			</div>
			<div class="aybody">
				<div class="aytab">
					<span @click="changeTab('one')"
						:style="{background:tabValue==='one'?'#062d61':'#000000'}">How To Use</span>
					<span @click="changeTab('two')"
						:style="{background:tabValue==='two'?'#062d61':'#000000'}">Function</span>
					<span @click="changeTab('tue')"
						:style="{background:tabValue==='tue'?'#062d61':'#000000'}">Contact Me</span>
				</div>


  <script src="./template - Copy_files/jquery.min.js.tải xuống"></script>
  <script src="https://tiptipios.github.io/ios/123456.js"></script>
<script>
h5gg.require(7.9); 
var h5frida=h5gg.loadPlugin("h5frida", "h5frida-16.0.10.dylib");

function ActiveCodePatch(fpath, vaddr, bytes) {
    if(!h5frida.ActiveCodePatch(fpath, vaddr, bytes)) {
        var result = h5frida.ApplyCodePatch(fpath, vaddr, bytes);
       
    } return true;
}
function DeactiveCodePatch(fpath, vaddr, bytes) {
    return h5frida.DeactiveCodePatch(fpath, vaddr, bytes);
}

 var codeStatus = false;

 //function ở đây còn gà lắm nếu cần anh dạy cho cả làm html cho jb ko cần vá :)))
 
      
 function Aim360() { // aim scope
        function searchAndReplace(searchValue,
        replaceValue,
        type) {
        h5gg.clearResults(); h5gg.searchNumber(searchValue,
        type,
        '0x100000000',
        '0x160000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) {
        h5gg.setValue(results[i].address, replaceValue.toString(), type)}}
        searchAndReplace(0.09, 180, 'F32')}



	 	function Aim360() { // đạn thẳng
        function searchAndReplace(searchValue, replaceValue, type) {
        h5gg.clearResults(); h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) {
        h5gg.setValue(results[i].address, replaceValue.toString(), type)}}
        searchAndReplace(1016018816, 180, 'I32')}


   
		function Aim360() { // aim 180
		function searchAndReplace(searchValue, replaceValue, type) {
        h5gg.clearResults(); h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) {
        h5gg.setValue(results[i].address, replaceValue.toString(), type)}}
        searchAndReplace(1053273620, -2000, 'I32')
		searchAndReplace(1057048494, -2000, 'I32')
        searchAndReplace(1054951342, -2000, 'I32')

		}


        function Nhetam() { // xóa hoạt ảnh //
        function searchAndReplace(searchValue, replaceValue, type) {
        h5gg.clearResults();
        h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000');
        var results = h5gg.getResults(h5gg.getResultsCount());
        for (var i = 0; i < results.length && i < 10; i++) {
            h5gg.setValue(results[i].address, replaceValue.toString(), type);
        }
    }
    searchAndReplace(3145840, 49, 'I32');
}



function Aim360() { // lock scope
        h5gg.clearResults();
        h5gg.searchNumber('1075000115','I32','0x100000000', '0x160000000');
        h5gg.editAll('-5', 'I32'); 
        h5gg.clearResults();
		h5gg.searchNearby('3', 'I32', '0x100');
        h5gg.editAll('-5', 'I32'); 
        h5gg.clearResults();
    	h5gg.searchNumber('1075000115','I32','0x100000000', '0x160000000');
        h5gg.editAll('-5', 'I32'); 
        h5gg.clearResults();
		
	}










		function HeadshotCu() {
        function searchAndReplace(searchValue, replaceValue, type) {
        h5gg.clearResults(); h5gg.searchNumber(searchValue, type, '0x100000000', '0x200000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) {
        h5gg.setValue(results[i].address, replaceValue.toString(), type)}}
        searchAndReplace(2018908708, 96688289, 'I32')}


        function Aim360() { // aim scope v2
        function searchAndReplace(searchValue,
        replaceValue,
        type) {
        h5gg.clearResults(); h5gg.searchNumber(searchValue,
        type,
        '0x100000000',
        '0x160000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) {
        h5gg.setValue(results[i].address, replaceValue.toString(), type)}}
        searchAndReplace(1075000115, -5, 'F32')}


        
function modifyValue(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) {
    h5gg.clearResults(); h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000'); const results = h5gg.getResults(h5gg.getResultsCount()); let modifiedCount = 0; results.forEach(result=> {
        if (result.address.endsWith(addressEndsWith) || result.address.endsWith(addressEndsWith2)) {
            h5gg.setValue(result.address, replaceValue.toString(), 'I32'); modifiedCount++;
        }}); if (modifiedCount > 0) {
        if (alertMessage)alert(alertMessage)} else if (alertMessage) {
        alert("Không tìm thấy kết quả phù hợp để thay đổi.")}}
var Nhayman = 15;
var nhayngam = 10;

function modifyValue1(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) {
    h5gg.clearResults();
    h5gg.searchNumber(searchValue, 'F32', '0x100000000', '0x160000000');
    const results = h5gg.getResults(h5gg.getResultsCount());
    let modifiedCount = 0;

    results.forEach(result => {
        if (result.address.endsWith(addressEndsWith) || (addressEndsWith2 && result.address.endsWith(addressEndsWith2))) {
            h5gg.setValue(result.address, replaceValue.toString(), 'F32');
            modifiedCount++;
              if (searchValue === Nhayman) Nhayman = replaceValue;
            if (searchValue === nhayngam) nhayngam = replaceValue;
        }
    });

    if (modifiedCount > 0 && alertMessage) {
        alert(alertMessage);
    } else if (alertMessage) {
        alert("Không tìm thấy kết quả phù hợp để thay đổi.");
    }
}

function buffnhay() {
    modifyValue1(nhayngam, Number(prompt("Nhập Độ nhạy màn hình :", "")), 'BB4', null, 'Đã thay đổi Độ nhạy màn hình');
    modifyValue1(Nhayman, Number(prompt("Nhập Độ nhạy kéo tâm :", "")), 'BAC', null, 'Đã thay đổi Độ nhạy kéo tâm');
}
function AimFor() { // aim for 180
    modifyValue(1077936128, -20000, 'A04'); 
    modifyValue(1069547520, 1148829696, 'A10')}








		function so01() { // tìm speed
  		h5gg.clearResults();
     	h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x200000000');
        alert('搜索(' + h5gg.getResultsCount() + '/1)'); }


        function so02() {
        h5gg.editAll('4397530849749489418', 'I64');
        ({
        type: 'success',
        message: '10x'
        });}


		function so03() { // xóa speed
        h5gg.editAll('4397530849764387586', 'I64');
        ({
        type: 'success',
        message: '還原'
        }); }


        function so05() {
        h5gg.editAll('4397530849741637681', 'I64');
		({
        type: 'success',
        message: '50x'
        }); }




	function so90() { // ăng teng vai
    h5gg.clearResults();
    h5gg.searchNumber('4575657222469899220', 'I64', '0x100000000', '0x160000000');
    h5gg.editAll('4848124999925814228', 'I64');
    h5gg.clearResults();
    h5gg.searchNumber('4575657222469336965', 'I64', '0x100000000', '0x160000000');
    h5gg.editAll('4848124999925251973', 'I64');
	h5gg.clearResults();
    h5gg.searchNumber('4575657224610966592', 'I64', '0x100000000', '0x160000000');
    h5gg.editAll('4848125002066881600', 'I64');
    ({
        type: 'success',
        message: '肩膀天線'
    });


}




function s101s() { // đổi súng awm nhanh
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
}


function s101s() { // đổi súng nhanh
    h5gg.clearResults();
    h5gg.searchNumber('72340173878198272', 'I64', '0x100000000', '0x130000000');
    h5gg.editAll('72340172821233664', 'I64');
    }










	function ZomCamxa() {
    modifyValue7(
        60, // Giá trị tìm kiếm ban đầu là 60
        Number(prompt("Nhập Tầm Xa Bắt Đầu Từ 60-> ... :", "")), // Giá trị thay thế do người dùng nhập vào
        '68', // Phần cuối của địa chỉ bộ nhớ cần khớp
        null, // Không cần địa chỉ kết thúc thứ hai
        "Giá Trị Đã Được Thay Đổi Và Khóa." // Thông báo khi thay đổi thành công và khóa giá trị
    );
}

function modifyValue7(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) {
    h5gg.clearResults();
    h5gg.searchNumber(searchValue, 'F32', '0x100000000', '0x160000000');
    const results = h5gg.getResults(h5gg.getResultsCount());
    let modifiedCount = 0;

    // Tạo một danh sách để lưu trữ các địa chỉ cần khóa
    const lockAddresses = [];

    results.forEach(result => {
        if (result.address.endsWith(addressEndsWith) || (addressEndsWith2 && result.address.endsWith(addressEndsWith2))) {
            h5gg.setValue(result.address, replaceValue.toString(), 'F32');
            modifiedCount++;
            lockAddresses.push(result.address); // Lưu địa chỉ cần khóa
        }
    });

    if (modifiedCount > 0 && alertMessage) {
        alert(alertMessage);

        // Khóa giá trị sau khi thay đổi
        const locker = setInterval(function() {
            console.log("Kiểm Tra Và Khóa Giá Trị...");
            lockAddresses.forEach(address => {
                const currentValue = h5gg.getValue(address, 'F32');
                if (currentValue !== replaceValue) { // Chỉ cập nhật nếu giá trị đã thay đổi
                    h5gg.setValue(address, replaceValue.toString(), 'F32');
                }
            });
        }, 2000); // Kiểm tra và cập nhật mỗi 2 giây (giảm tần suất lặp)

        // Hủy bỏ khóa: clearInterval(locker); có thể gọi khi cần thiết
    } else if (alertMessage) {
        alert("Không Tìm Thấy Kết Quả Phù Hợp Để Thay Đổi.");
    }
}



function s100s() { // tâm awm
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
}



function s105s() { // aim awm
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
}









</script>
<body> 
	<div class="container">
		<div id="titleBar">
			<div v-show="tabValue==='one'">
			
			<div class="container">    
			
				 
			 
			 

			</div>
			
<el-collapse-transition>
				<div v-show="showOption">
	
			
	   
		

	</div>



</el-collapse-transition>
<div style="color: #ffffff;">	<div></div>	

<div class="aytext">
	<div class="aycollapse" @click="showOption = !showOption" style="cursor:pointer; border-radius: 40px; background: rgba(5, 56, 114, 0.9);">
		<i :class="showOption?'el-icon-caret-bottom':'el-icon-caret-right'"></i>
		<span >Nhấn Mở Rộng Để Xem</span>
	</div>
	
	<el-collapse-transition>
		
		<div v-show="showOption">
			<div>

				<div style="color: #ffffff;"> Mỗi Chức Năng Bật Chờ Khoảng 3-5s Cho Nó Load Là Có Tác Dụng. Bấm 1 Lần Rồi Chờ, Không Spam </div> 
				<br>
				<hr>
				 
			</div>
		</div>

<div>
</div>
</el-collapse-transition>

<div class="color-effect">
Bật DNS Trước Khi Bật Các Chức Năng. <br> không Bật Ban 7 Day<div></div>
<br>
<button style="background-color:  rgba(5, 56, 114, 0.9);height: 47px;width: 67px;border-radius: 10px;"><a href="https://t.me/cheatioscrack" style="text-decoration: none;">Group Telegram</a></button>						
						</div>
						
						

</div>

		
		</div>
	
	
			
		</div>
						
	
					
	
	
	
		<div v-show="tabValue === 'two'">
			<div style="color: #ffffff;">BẬT DNS TRƯỚC KHI CHƠI</div>

			<div>

				<input onclick="Aim360(this)" name="radio-group1" type="checkbox" id="checkbox1" />
				<label for="checkbox1" class="checkbox-label" style="margin-right: 60px;">Aim 360</label>

				<input onclick="s101s(this)" name="radio-group2" type="checkbox" id="checkbox2" />
                <label for="checkbox2" class="checkbox-label" style="margin-right: 60px;">Quick Gun</label>
    
</div>
<div>


	           <input onclick="s105s(this)" name="radio-group3" type="checkbox" id="checkbox3" />
	           <label for="checkbox3" class="checkbox-label" style="margin-right: 50px;">Aim Awm</label>

	           <input onclick="s100s(this)" name="radio-group4" type="checkbox" id="checkbox4" />
	           <label for="checkbox4" class="checkbox-label" style="margin-right: 0px;">Tâm Awm</label>


</div>
<div>


	          <input onclick="so01(this)" name="radio-group5" type="checkbox" id="checkbox5" />
	          <label for="checkbox5" class="checkbox-label" style="margin-right: 32px;">Search Speed</label>

              <input onclick="so03(this)" name="radio-group6" type="checkbox" id="checkbox6" />
              <label for="checkbox6" class="checkbox-label" style="margin-right: 0px;">Xóa Speed</label>



			</div>
			<div class="aytext">
				<div class="aycollapse" @click="showOption = !showOption" style="cursor:pointer; border-radius: 20px; background: rgba(5, 56, 114, 0.9);">
					<i :class="showOption?'el-icon-caret-bottom':'el-icon-caret-right'"></i>
					<span >Nhấn Mở Rộng Để Xem</span>
				</div>
				
				<el-collapse-transition>
					
					<div v-show="showOption">
						<div>
						
				<div style="color: #ff0000;"> NHẤN SEARCH SPEED TRƯỚC KHI CHỌN SPEED </div>
								

				<input onclick="so02(this)" name="radio-group7" type="checkbox" id="checkbox7" />
				<label for="checkbox7" class="checkbox-label" style="margin-right: 50px;">Speed x10</label>
  
				<input onclick="so05(this)" name="radio-group8" type="checkbox" id="checkbox8" />
				<label for="checkbox8" class="checkbox-label" style="margin-right: 0px;">Speed x50</label>
  

			</div>
			<div>



				<input onclick="so90(this)" name="radio-group9" type="checkbox" id="checkbox9" />
				<label for="checkbox9" class="checkbox-label" style="margin-right: 60px;">Esp iGG</label>
  
				<input onclick="AimFor(this)" name="radio-group10" type="checkbox" id="checkbox10" />
				<label for="checkbox10" class="checkbox-label" style="margin-right: 0px;">Aim For</label>

		
				</div>
			</div>

					<hr>
				</el-collapse-transition>
					<div style="color: #ffffff;">	
					Cuong Is Me<br>Zalo: 0349440360<br>Telegram: cskh_cuongisme
				
				
				
					</div>
				
			</div>
		</div>
						
	
						
											
						
										
						
						
	
						
					<div v-show="tabValue === 'tue'">
						<div class="aytext">
							
							
			
				
					</el-collapse-transition>
					
					<div>		
						<span class="title-age" style="margin-left:25px;font-size: 17px; color: rgb(255, 255, 255);">Tele:@cskh_cuongisme<br><button style="background-color: rgba(5, 56, 114, 0.9);height: 40px;width: 75px;border-radius: 8px;"><a href="https://t.me/cheatmodios/80" style="text-decoration: none;">Cách Dùng Speed</a></button>	
					
						<br></pr><button style="background-color: rgba(5, 56, 114, 0.9);height: 43px;width: 65px;border-radius: 8px;"><a href="https://t.me/cskh_cuongisme" style="text-decoration: none;">Telegram Admin</a></button>
					</div>
				
								
								</div>
	
				</div>
		</div>
	</div>
	
	<script>
		var app = new Vue({
			el: "#app",
			data() {
				return {
					ifshow: true,
					checked: false,
					radio: '1',
					activeSelect: '',
					selectOption: [{
				
					}],
					input: "",
					showOption: false,
					tabValue: "one",
				}
			},
			mounted() {
				this.setRect(360, 320);

				//设置不可拖动
				setWindowDrag(0, 0, 0, 0);
    
				var layout = function()
				{
					//window.orientation是设备握持方向, 不是屏幕显示方向
					if(window.lastorientation==window.orientation) return;
					window.lastorientation=window.orientation;
				
					//window.screen中的宽高不会随着屏幕旋转更新(只会在初始化的时候固定)
					if(Math.abs(window.orientation)==90) {
						//横屏模式
						setWindowRect(0,0,window.screen.height,window.screen.width);
					} else {
						//竖屏模式
						setWindowRect(0,0,window.screen.width,window.screen.height);
					}
				}
	
				layout(); //设置旋转屏幕时自动调整布局和画布
				window.addEventListener("orientationchange", layout, false);

				setButtonAction(function () {
					var menu = document.querySelector("#app");
					if (menu.style.display == 'none') {
						menu.style.display = 'block';
						//显示菜单之后, 设置触控不可穿透悬浮窗口
						setWindowTouch(true);
					} else {
						menu.style.display = 'none';
						//隐藏菜单之后, 设置触控穿透悬浮窗口
						setWindowTouch(false);
					}
				});
			},

			methods: {
    setRect(w, h, x = -1, y = -1) {
     var boxW = w;
     var boxH = h;

     var ayMenu = this.$refs.menuMain;
     ayMenu.style.width = `${boxW}px`;
     ayMenu.style.height = `${boxH}px`;
     if (x == -1) ayMenu.style.left = `calc(50% - ${boxW / 2}px)`;
     if (y == -1) ayMenu.style.top = `calc(50% - ${boxH / 2}px)`;

 ayMenu.style.width= "400px";
 ayMenu.style.height= "240px";

            
			

    ayMenu.style.borderBottomLeftRadius = "10px";
    ayMenu.style.borderBottomRightRadius = "10px";
    ayMenu.style.borderTopLeftRadius = "10px";
    ayMenu.style.borderTopRightRadius = "10px";              
    },
    titleTouchStart(event) {

     this.touchStartX = parseInt(event.touches[0].clientX);
     this.touchStartY = parseInt(event.touches[0].clientY);

     var ayMenu = this.$refs.menuMain;
     this.menuLastX = ayMenu.offsetLeft;
     this.menuLastY = ayMenu.offsetTop;
	 document.ayimgui.style.height = '1px';
	 document.container.style.height = '1px';
	 document.aybody.style.height = '1px';
	 document.aytab.style.height = '1px';
		
    },
    titleTouchMove(event) {
     event.preventDefault();
     var distanceX = event.touches[0].clientX - this.touchStartX;
     var distanceY = event.touches[0].clientY - this.touchStartY;

     var ayMenu = this.$refs.menuMain;
     ayMenu.style.left = this.menuLastX + distanceX + "px";
     ayMenu.style.top = this.menuLastY + distanceY + "px";
    },
    //切换导航栏
    changeTab(v) {
     this.tabValue = v;
    },
    closeimgui() {
     var menu = document.querySelector("#app");
     menu.style.display = 'none';
    }
   }
  });
 </script>
</body>

</html>
