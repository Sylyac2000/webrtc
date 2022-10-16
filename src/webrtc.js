/* check if webrtc work on this browser */

function checkBrowserWebrtc() {
    const $video = document.querySelector('video');
    if (navigator.getUserMedia) {
        navigator.getUserMedia({ audio: true, video: true },
            stream => {
                $video.srcObject = stream;
                $video.muted = true;
                $video.onloadedmetadata = function (e) {
                    $video.play();
                };
            },
            error => console.error(error)
        );
    }
}
function checkBrowserWebrtcFirefox() {
    const $video = document.querySelector('video');
    navigator.mediaDevices.getUserMedia({ audio: true, video: true })
        .then(stream => {
            $video.srcObject = stream;
            $video.muted = true;
            $video.onloadedmetadata = function (e) {
                $video.play();
            };
        })
        .catch(console.error);
}
export { checkBrowserWebrtc, checkBrowserWebrtcFirefox}