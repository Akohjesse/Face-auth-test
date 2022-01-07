const video =  document.getElementById('video')

Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('../models'),
    faceapi.nets.faceExpressionNet.loadFromUri('../models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('../models'),
    faceapi.nets.faceLandmark68TinyNet.loadFromUri('../models'),

]).then(
    window.navigator.mediaDevices.getUserMedia({video:true}).then( stream => {
        video.srcObject = stream
    }, err => console.log(err))
)


