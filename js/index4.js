// Cuong is me
// đụ mẹ crack menu e chi rứa
// pass 

      var app = new Vue({

			el: "#app",
			data() {
				return {
					ifshow: true,
					checked: false,
					radio: '1',
					activeSelect: '',
					selectOption: [{
						value: 'Option1',//实际内容
						label: 'golden'//显示文案
					}, {
						value: 'Option2',
						label: 'eggs'
					}],
					input: "",
					showOption: false,
					tabValue: "one",
				}
			},
			mounted() {
				this.setRect(360, 320);

				//设置不可拖动
				setWindowRect("calc(50% - 180px)", "calc(50% - 160px)", 360, 320);

				var layout = function () {
					//window.orientation是设备握持方向, 不是屏幕显示方向
					if (window.lastorientation == window.orientation) return;
					window.lastorientation = window.orientation;

					//window.screen中的宽高不会随着屏幕旋转更新(只会在初始化的时候固定)
					if (Math.abs(window.orientation) == 90) {
						//横屏模式
						setWindowRect(0, 0, window.screen.height, window.screen.width);
					} else {
						//竖屏模式
						setWindowRect(0, 0, window.screen.width, window.screen.height);
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
				},
				changeTab(v) {
					this.tabValue = v;
				},
				closeimgui() {
					var menu = document.querySelector("#app");
					menu.style.display = 'none';
					setWindowTouch(false);
				}

			},
			data: {
				showCustomPrompt: true, // Bắt đầu hiển thị hộp thoại nhập key
				isKeyValid: false,
				inputKey: '',
				tabValue: 'one',
				ifshow: true
			},
			methods: {
				confirmKey() {
					const validKey = 'helloconcac';  // thay key menu ở đây
					if (this.inputKey === validKey) {
						this.isKeyValid = true;
						this.showCustomPrompt = false; // Ẩn hộp thoại khi nhập đúng key
					} else {
						alert("key không hợp lệ, vui lòng thử lại!");
					}
				},
				copyLink() {
                const url = 'https://example.com'; // Thay URL bằng địa chỉ bạn muốn sao chép

                // Tạo một phần tử textarea tạm thời
                const textarea = document.createElement('textarea');
                textarea.value = url;
                document.body.appendChild(textarea);

                // Chọn nội dung của textarea và sao chép
                textarea.select();
                document.execCommand('copy');

                // Xóa phần tử textarea
                document.body.removeChild(textarea);

                // Thông báo sao chép thành công
                alert('liên kết đã được sao chép, xóa tab game vào safari dán link để get key');
            },
				changeTab(tab) {
					this.tabValue = tab;
				},
				closeimgui() {
					this.ifshow = false;
				}
			}
		});
