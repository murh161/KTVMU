
        $(document).ready(function() {
            let playlist = [];
            let currentIndex = -1;
            let scheduleCheck;

            $.getJSON('data.json', function(data) {
                playlist = data;
                
                startScheduler();
            }).fail(function() {
                console.error("Could not load data.json");
            });

            function startScheduler() {
                scheduleCheck = setInterval(() => {

      const now = new Date(); 
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();


      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      

                    const currentVideoIndex = playlist.findIndex(item => {
                        const start = (item.start);
                        const end = (item.end);
                        return formattedTime >= start && formattedTime < end;
                    });


                    if (currentVideoIndex !== -1 && currentVideoIndex !== currentIndex) {
                        currentIndex = currentVideoIndex;
                        playVideo(playlist[currentIndex]);
                        
                    }
                }, 1000);  
            }

            function playVideo(videoItem) {
                
const url = (`https://www.youtube.com/embed/${videoItem.ur}?enablejsapi=1&autoplay=1&controls=0&fs=0&rel=0&showinfo=0&modestbranding=1`);
                $('#video-player').attr('src', url);

            }
            $(window).on('beforeunload', function() {
                if (scheduleCheck) clearInterval(scheduleCheck);
localStorage.clear();
            });
        });
$(window).on('click', () => document.documentElement.requestFullscreen());

var countDownDate = new Date("Oct 31, 2025 23:00:25").getTime();

var x = setInterval(function() {


  var now = new Date().getTime();
    

  var distance = countDownDate - now;
    

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

if (distance > 0) {
    clearInterval(x);
  }
else {
		location.replace('https://www.google.com/')
	}
}, 1000);