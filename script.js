const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia(); // this gets video content
        videoElement.srcObject=mediaStream; // passing video stream as the soruce object
        videoElement.onloadedmetadata = ()=>{ // metadata loads the video
            videoElement.play(); // this plays the content
        }
         }catch(error) {
                console.log("whoops error here",error)
         }
}
button.addEventListener('click',async ()=>{
   //disable the button when button is clicked
   button.disabled = true;
   //start picture in picture mode
    await videoElement.requestPictureInPicture(); // this plays the video picture by picture
    //reset the buttton
    button.disabled = false;
});
selectMediaStream();