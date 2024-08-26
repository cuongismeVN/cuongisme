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
