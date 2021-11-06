function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/URgkE0h0g/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;


        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";


        img = document.getElementById('Dog.png');
        img1 = document.getElementById('cat.jpg');
        img2 = document.getElementById('dino.png');


        if (results[0].label == "Clap") {
            img.src = 'Dog.gif';
            img1.src = 'cat.jpg';
            img2.src = 'dino.png';

        } else if (results[0].label == "Bell") {
            img.src = 'Dog.png';
            img1.src = 'cat.gif';
            img2.src = 'dino.png';

        } else if (results[0].label == "Snapping") {
            img.src = 'Dog.png';
            img1.src = 'cat.jpg';
            img2.src = 'dino.gif';

        } else {
            img.src = 'Dog.gif';
            img1.src = 'cat.gif';
            img2.src = 'dino.gif';

        }
    }
}