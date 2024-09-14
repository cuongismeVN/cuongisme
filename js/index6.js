// Music By CisMe
// Up Link Nhạc - Đuôi Menu
// Ước Bị Crack




const songList = [
    { title: "Em Nào Có Tội", link: "https://thanhdieu.com/files/Em-N%C3%A0o-C%C3%B3-T%E1%BB%99i.mp3" },
    { title: "Nhạc Tết Chill", link: "https://eoec.ecoe.cc/api/v1/download?sig=Irxsw11gce4FJ04SciZOmWk99m5GMZZm13oaVoGCYKz8L%2BekvduEqVfotxHBk5lMsPkLeEmMQKuaP9KgeUG3oIJwi3feYZcUZKmDvnuX%2F6kxgUEArlS%2BUMNzMceN2BVEpKQ0paJCGsWOIpd1TMTbBLhxi7rKoY6Vn4b5PccUCsNFf%2Fj6tqGxgINXMFaEn3K%2BJfScHRiO%2B0IfddYJBRCPPCBgVcy0MeEw3uwCCZ7l2%2FDlpq4RgwHY5XsGMtOVPwHuBDROytUuU7JrtXJE3wWE9fPdP6ZXV%2FCYfUP2Mq%2BKv1awDRUUYCHSS3XG8AubYaGE04jyBSlw5LPOPeHq%2BHo36g%3D%3D" },
    { title: "Future Remix", link: "https://eeec.ecoe.cc/api/v1/download?sig=aMxfHQDhIoG0DqucXyUtbLGT0DlKFISQ9yjzUMeIFWQHL4Jv93J1ulC9f7O2flitAehiLGvTvUvobj%2FT1cRJcIz1DKM3eWnHWFYTLSbN8ZwdK15hFPbfqQKWE9pvNIIHeF1wGEYF0T4NWISx%2FJBjFJaClI8r28wUfcnSVqR35UKXqkp4k0jl0OGMP9tVq2Nm8A8voZkk4eM0C6jjRMAKh8UltuCDT5V8HF8wnxxsqAs%2B%2Bn1hPqbwdhC5N7Gvcn%2Fx8Q6vrjS1pltbhlALEnc6waujEJsYDixcG7Iz1xwy8v3iTGgwNxQPoncTCmPztuFS310y6kd9loJO5uGZ7ZRAlA%3D%3D" }
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
