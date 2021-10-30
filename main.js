var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function Start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.Start();
}

recognition.onresult = function(event){
    var Content = event.results[0][o].transcript;

    document.getElementById("textbox").innerHTML = Content;
    speak();
}

var Content = event.results[0][0].transcript;{

    Textbox.innerHTML = Content;
      if(Content =="take my selfie")
      {
        speak();
      }
}

function speak{
    var synth = window.speechSynthesis;

    speak_data = "Taking you Selfie in 5 seconds";{
    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()
{
    take_selfie()
    save();
}, 5000);
}
}

camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_selfie()
{
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
}
}

function save(){
    link= document.getElementByIdlink = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click()
}