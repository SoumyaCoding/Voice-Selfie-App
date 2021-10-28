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