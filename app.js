const btn = document.querySelector('.talk'),
      content = document.querySelector('.content');

const greetings = [
    "I'm good darling",
    "so long fellow",
    "Great, but now that you have come not so much"
]

const weather = [
    "It's good, but you're not",
    "It's chilli, silly!",
    "First icecream"
]

try{
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.onstart = () => {
        console.log('voice activated');
    }

    recognition.onspeechend = () => {

    }

    recognition.onresult = (e) => {
        const current = e.resultIndex;

        const transcript = e.results[current][0].transcript;
        content.textContent = transcript;
        readOutLoud(transcript);
    }

    btn.addEventListener('click', () => {
        recognition.start();
    });

    function readOutLoud(message) {
        const speech = new SpeechSynthesisUtterance();
        
        speech.text = "i don't know what you saying";
        if(message.includes('you')){
            const finalText = greetings[Math.floor(Math.random() * greetings.length)]
            speech.text = finalText;
        }

        if(message.includes('weather')){
            const finalText = weather[Math.floor(Math.random() * weather.length)]
            speech.text = finalText;
        }
        
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;

        window.speechSynthesis.speak(speech);
    }

}catch(err){
    console.error(err);
}