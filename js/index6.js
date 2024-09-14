// Music By CisMe
// Up Link Nhạc - Đuôi Menu
// Ước Bị Crack




const songList = [
    { title: "Em Nào Có Tội", link: "https://thanhdieu.com/files/Em-N%C3%A0o-C%C3%B3-T%E1%BB%99i.mp3" },
    { title: "Nhạc Tết Chill", link: "https://dl167.filemate14.shop/?file=M3R4SUNiN3JsOHJ6WWRQNXNPUFN2cFdxRVJIOG1mdGh2WVIvNVRGbUlQcFA3YmxxOHJYbEFlZ0tESUViaHFtcUdOSll2bXlJSTRUQWV6dk1rOGxqWUZMRTFmQXA4aEdLME4xbGVKbG9IVFgzbGEyUTB4UW56Q1hVTy9ycFhvNFRTQ1krZ1dJbWkzZlloOS9jL0RDcDlsK000bXpTYjI4eXAzNG9ickR4bzVFRDltSENZL3V2L1pjTnFHMnpwN2thbjlITi96WCtocGR2L2Y1VUcyVWhhdHRwbkwra210THQ0R1UvbE5jUnloN2lyK3VxQTZFbEhiR1dKSElpR0RzRy9QdjZYaDViblFNVDZELzdwSWtncXpJdlc0VWkvMDZOMVBDd1FpaldjOUtsQ1phQkpiV0xpSVA4K3Vsb3JVVFZyKzdDd2NzWHhGNzBHSnVxRUlsT28wb2xucUNMNE04OW53Zi95UmxIaHVKZQ%3D%3D" },
    { title: "Bài hát 3", link: "https://www.example.com/music/song3.mp3" }
];

document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('searchBar');
    const songListElement = document.getElementById('songList');
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');
    
    // Hiển thị danh sách bài hát
    function renderSongList(songs) {
        songListElement.innerHTML = ''; // Xóa danh sách hiện tại
        songs.forEach(function(song) {
            const li = document.createElement('li');
            li.textContent = song.title;
            li.setAttribute('data-link', song.link);
            
            // Xử lý sự kiện khi click vào bài hát
            li.addEventListener('click', function() {
                const songLink = li.getAttribute('data-link');
                audioSource.src = songLink; // Cập nhật link nhạc
                audioPlayer.load();  // Nạp lại audio với link mới
                audioPlayer.play();  // Phát nhạc
            });
            
            songListElement.appendChild(li);
        });
    }

    renderSongList(songList); // Hiển thị danh sách bài hát khi tải trang

    // Tìm kiếm bài hát
    searchBar.addEventListener('keyup', function() {
        const searchValue = this.value.toLowerCase();
        const filteredSongs = songList.filter(song => song.title.toLowerCase().includes(searchValue));
        renderSongList(filteredSongs);
    });
});
