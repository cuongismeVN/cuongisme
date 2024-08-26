function checkPassword() {
                var password = document.getElementById('password').value;
                if (password === "123") { // Thay "your_password" bằng mật khẩu thực tế
                    document.getElementById('passwordPrompt').style.display = 'none';
                    document.getElementById('app').style.display = 'block';
                } else {
                    alert('Mật khẩu không đúng');
                }
            }
