// cuong is me
// xin đừng crack menu em
// body menu


	
		<style>
		* {
			padding: 0;
			margin: 0;
			font-family: 'Roboto Condensed', sans-serif;
		}

		.ayimgui {
			position: fixed;
			width: 360px;
			height: 320px;
			border: 5px;
			top: calc(50% - 180px);
			left: calc(50% - 180px);
			z-index: 999;
			background-color: rgba(0, 0, 0, 0.9);
			border-radius: 8px;
			border: 1px solid #555;
			overflow: hidden;
			-webkit-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;

		}

		.m1txt {
			color: #f0f0f0;
			margin-bottom: 5px;

		}

		.m1txt::before {
			content: "•";
			margin-right: 5px;
		}

		.onlyTitle {
			height: 21px !important;
		}

		.ayimgui .aytitle {
			padding: 5px;
			font-size: 18px;
			background-color: #000;

		}

		.ayimgui .aytitle i {
			font-size: 20px;
			color: #f0f0f0;
		}

		.ayimgui .aytitle .titleClose {
			position: absolute;
			top: 5px;
			right: 5px;
			color: #F0F0F0;
		}

		.ayimgui .aytitle .titleClose:hover {
			color: #409EFF;
		}

		.ayimgui .aybody {
			padding: 15px;
			height: calc(100% - 21px - 15px - 15px);
			/*减去标题高度，减去上线padding高度*/
			overflow: auto;
			font-size: 14px;
		}


		.aytext {
			width: 100%;
			padding-top: 5px;
			margin-bottom: 5px;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			color: #99ff66;
		}

		.el-checkbox {
			margin: 0px;
		}

		.el-checkbox__label {
			color: #f0f0f0;
		}

		.el-checkbox__input.is-checked+.el-checkbox__label {
			color: #409EFF;
		}

		.el-checkbox__inner {
			background-color: #333333;
			border-radius: 50%;
			width: 24px;
			/* Tăng kích thước */
			height: 24px;
			/* Tăng kích thước */
		}


		.el-radio {
			margin: 8px 0;
		}

		.el-radio__label {
			color: #F0F0F0;
		}

		.el-radio__input.is-checked+.el-radio__label {
			color: #f0f0f0;
		}

		.el-radio__inner {
			background-color: rgb(254, 254, 254);
			border: none;
		}

		.el-radio__input.is-checked .el-radio__inner {
			background-color: rgb(254, 254, 254);
		}

		.el-radio__inner::after {
			width: 10px;
			height: 10px;
			background-color: rgb(58, 138, 247);
		}

		.onlySelect {
			background-color: rgb(254, 254, 254);
			border: none;
		}

		.onlySelect .el-select-dropdown__item {
			color: #F0F0F0;

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
			color: #F0F0F0;
			right: 0;
		}

		.el-select .el-select__caret {
			color: #F0F0F0;
		}

		.el-select .el-input__inner {
			background-color: transparent;
			border: none;
			color: #F0F0F0;
		}

		.el-select .el-input .el-select__caret {
			color: #F0F0F0;
		}

		/* 解决ios下拉需要点两次 */
		.el-scrollbar .el-scrollbar__bar {
			opacity: 1 !important;
		}

		.el-button {
			font-size: 14px;
			padding: 5px 10px;
			line-height: 14px;
			color: #F0F0F0;
			background-color: #B8D1F2;
		}

		.el-button:hover {
			opacity: .7;
			color: #F0F0F0;
			background-color: #B8D1F2;
		}

		.el-button:focus,
		.el-button:hover {
			color: #F0F0F0;
			background-color: #B8D1F2;
		}

		.aycollapse {
			width: 100%;
			font-size: 14px;
			background-color: rgb(177, 206, 240);
			color: #F0F0F0;
		}

		.aytab {
			width: 100%;
			height: 25px;
			display: flex;
			border-bottom: 0.8px solid #666;
			order: 1;
		}

		.aytab span {

			padding: 0 5px;
			width: 15%;
			height: 97%;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: rgb(189, 199, 208);
			color: #F0F0F0;
			font-size: 14px;
			font-weight: bold;
			margin-left: 10px;
			border-top: 0.8px solid #666;
			border-right: 0.8px solid #666;
			border-left: 0.8px solid #666;
			border-radius: 6px 6px 0 0;
			cursor: pointer;
			order: 2;
		}

		.aycollapses span {
			background-color: rgb(177, 206, 240);
			color: #000;
		}

		.el-input input {
			background-color: rgb(254, 254, 254);
			border: none;
			border-radius: 0px;
		}

		.checkbox-wrapper-24 .checkbox {
			display: table-cell;
			width: 100%;
			height: 100%;
			vertical-align: middle;
			text-align: center;

		}

		.checkbox-wrapper-24 label {
			display: inline-block;
			color: #f9f9f9;
			cursor: pointer;
			position: relative;
			margin-bottom: 5px;
		}

		.checkbox-wrapper-24 label span {
			display: inline-block;
			position: relative;
			background-color: #999;
			width: 25px;
			height: 25px;
			transform-origin: center;
			border-radius: 50%;
			vertical-align: middle;
			margin-right: 10px;

		}

		.checkbox-wrapper-24 label span:before {
			content: "";
			width: 0px;
			height: 2px;
			border-radius: 2px;

			position: absolute;
			transform: rotate(45deg);
			top: 10px;
			left: 4px;
			transition: width 50ms ease 50ms;
			transform-origin: 0% 100%;
		}

		.checkbox-wrapper-24 label span:after {
			content: "";
			width: 0;
			height: 2px;
			border-radius: 2px;

			position: absolute;
			transform: rotate(305deg);
			top: 15px;
			left: 8px;

			transform-origin: 25% 0%;
		}

		.checkbox-wrapper-24 label:hover span:before {
			width: 7px;

		}

		.checkbox-wrapper-24 label:hover span:after {
			width: 15px;

		}

		.checkbox-wrapper-24 input[type=checkbox] {
			display: none;

		}

		.checkbox-wrapper-24 input[type=checkbox]:checked+label span {
			background-color: #666;
		}

		.checkbox-wrapper-24 input[type=checkbox]:checked+label span:after {
			width: 16px;
			background: #00ffff;

		}

		.checkbox-wrapper-24 input[type=checkbox]:checked+label span:before {
			width: 9px;
			background: #00ffff;

		}

		.vip {
			background-color: gold;
			color: black;
			padding: 3px 20px;
			position: absolute;
			bottom: 25px;
			right: 0;
			transform: rotate(-45deg) translate(15px, 15px);
			;
			transform-origin: right bottom;
		}
	</style>
	<style>
		.custom-prompt {
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background-color: white;
			padding: 20px;
			box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
			z-index: 9999;
		}

		.prompt-content {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.prompt-content input {
			margin-bottom: 10px;
			padding: 5px;
			width: 200px;
		}

		.button-container {
			display: flex;
			justify-content: space-between;
			width: 100%;
		}

		.button-container button {
			padding: 5px 10px;
			margin: 0 5px;
		}
	</style>
</header>
  <script src="https://apps.bdimg.com/libs/jquery/2.1.0/jquery.min.js"></script>
	  <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
	
  <script type="text/javascript">
      var message = "NoRightClicking";
      function defeatIE() {
          if (document.all) {
              (message);
              return false;
          }
      }
      function defeatNS(e) {
          if (document.layers || (document.getElementById && !document.all)) {
              if (e.which == 2 || e.which == 3) {
                  (message);
                  return false;
              }
          }
      }
      if (document.layers) {
          document.captureEvents(Event.MOUSEDOWN);
          document.onmousedown = defeatNS;
      } else {
          document.onmouseup = defeatNS;
          document.oncontextmenu = defeatIE;
      }
      document.oncontextmenu = new Function("return false")
