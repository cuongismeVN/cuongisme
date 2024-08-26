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
                background-color: #ba2f2f;
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
