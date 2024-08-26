<!DOCTYPE html>
<html>
    <header>
        <title>Cuong Is Me</title>

        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="stylesheet" href="https://unpkg.com/element-ui@2.15.7/lib/theme-chalk/index.css">
        <link rel="stylesheet" href="https://cuongismevn.github.io/cuongisme/css/index1.css">
        <script src="https://cdn.jsdelivr.net/npm/vue@2.6/dist/vue.min.js"></script>
        <script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
		<style>
            body, html {
            height: 100%;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #1a1a2e;
            }

            #passwordPrompt {
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: #0f3460;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            }

            #passwordPrompt input[type="password"] {
                padding: 10px;
                font-size: 16px;
                border: 2px solid #e94560;
                border-radius: 5px;
                width: 300px;
                margin-bottom: 20px;
                background-color: #16213e;
                color: #ffffff;
            }

            #passwordPrompt button {
                padding: 10px 20px;
                font-size: 16px;
                background-color: #e94560;
                color: #ffffff;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                transition: 0.3s ease;
            }

            #passwordPrompt button:hover {
                background-color: #e94560;
            }

            #app {
                display: none; /* Ẩn nội dung trang chính cho đến khi nhập đúng mật khẩu */
            }
            .button-link {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            color: #ffffff;
            background-color: #e94560;
            text-decoration: none;
            border-radius: 5px;
            transition: 0.3s ease;
            text-align: center;
            cursor: pointer;
            }

            .button-link:hover {
                background-color: #ba2f2f;
            }
        </style>

    </header>

    <body>
		
            <div id="passwordPrompt">
            <input type="password" id="password">
            <button onclick="checkPassword()">Xác Nhận</button>
            <br></pr><button style="background-color: #e94560;height: 40px;width: 100px;border-radius: 8px;"><a href="https://t.me/cskh_cuongisme" style="text-decoration: none;">Get Key</a></button>
        </div>
        <script src="https://cuongismevn.github.io/cuongisme/js/index3.js"></script>


        <div id="app" style="display: none;">
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
				<script src="https://cuongismevn.github.io/cuongisme/js/index1.js"></script>

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

							<input onclick="long1(this)" name="radio-group7" type="checkbox" id="checkbox7" />
							<label for="checkbox7" class="checkbox-label" style="margin-right: 50px;">Speed x02</label>
			  
							<input onclick="long2(this)" name="radio-group8" type="checkbox" id="checkbox8" />
							<label for="checkbox8" class="checkbox-label" style="margin-right: 0px;">Esp iGG</label>

						</div>
						<div>

							<input onclick="long3(this)" name="radio-group2" type="checkbox" id="checkbox2" />
							<label for="checkbox2" class="checkbox-label" style="margin-right: 74px;">Magic</label>
			  
							<input onclick="ZomCamxa(this)" name="radio-group2" type="checkbox" id="checkbox2" />
							<label for="checkbox2" class="checkbox-label" style="margin-right: 0px;">Zom Cam</label>
					
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
					<script src="https://cuongismevn.github.io/cuongisme/js/index2.js"></script>
				</body>
</html>
