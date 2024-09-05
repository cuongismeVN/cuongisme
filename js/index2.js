// cuong is me
// xin đừng crack menu em
// body chức năng menu


	
	<div id="app">
		<div :class="!ifshow?'onlyTitle ayimgui':'ayimgui'" ref="menuMain">
			<div class="aytitle">
			<i :class="ifshow ? 'el-icon-caret-bottom' : 'el-icon-caret-top'" @click.prevent=""></i>
			
				<span class="title-age" style="margin-left:18px; color:#f0f0f0;">Project By Cuong Is Me</span><i class="titleClose el-icon el-icon-close" @click="closeimgui"></i>
			</div>
			<div class="aybody">
				<div class="aytab"><span @click="changeTab('one')":style="{background:tabValue==='one'?'#444444':'	#111111'}">Function</span>
				<span @click="changeTab('two')":style="{background:tabValue==='two'?'#444444':'	#111111'}">Contact</span>
				</div>
				<strong>
				<div v-show="tabValue==='one'"><div class="aytext"><p>Nhấn Contact Để Xem Hướng Dẫn.</p></color>
					</div>
                <div class="checkbox-wrapper-24">
                <div>

					<input type="checkbox" id="autowin" name="check" onclick="so01(this)"><label for="autowin"><span></span>Tìm Speed</label>

			    	</div><div>

					<input type="checkbox" id="onehit" name="check" onclick="so06(this)"><label for="onehit"><span></span>Speed x2</label>

				    </div><div>
										  
					<input type="checkbox" id="buffvang" name="check" onclick="so02(this)"><label for="buffvang"><span></span>Speed x10</label>
					
				   </div><div>
											  
					<input type="checkbox" id="cooldown" name="check" onclick="so05(this)"><label for="cooldown"><span></span>Speed x50</label>

				   </div><div>
				   <input type="checkbox" id="testskin" name="testskin" onclick="so03(this)"><label for="testskin"><span></span>Xóa Speed</label>
				</div>
			</div>
</div>
			
					<div v-show="tabValue === 'two'">
					<div class="aytext">
						<p>Đọc Kĩ Trước Khi Chơi :</p></div><div style="margin-left: 5px; margin-top:0">
               
                  <p class="m1txt">Vào Game Nhấn Tìm Speed Rồi Chọn Speed.</p>
                  <p class="m1txt">Chơi Xong Trận Tắt Nút Speed.</p>
				  <p class="m1txt">Sau Đó Nhấn Xóa Speed</p>
				  <p class="m1txt">Ghép Trận Mới Và Lập Lại</p>
				  <br>
                  <b class="m1txt">Contact Me :
                  </i></b>
									  <p class="m1txt">Telegram: @cskh_cuongisme</p>
										  <p class="m1txt">Zalo: 034 944 0360</p>
										</div> 								
		</div>
		</div>
			<div class="vip">VIP</div>
		</div>		
		<!-- Hộp thoại tùy chỉnh -->
		<div v-if="showCustomPrompt" class="custom-prompt">
			<div class="prompt-content">
				<h3>Nhập Key</h3>
				<input type="text" v-model="inputKey" placeholder="Nhập Key">
				<div class="button-container">
					<button @click="confirmKey">Xác Nhận</button>
					<button @click="copyLink">Get Key </button>
				</div>
			</div>
		</div>
