(function(){
    'use strict';
    let converType = 'miles';
    const heading = document.querySelector('h1');
    const intro = document.querySelector('p');
    const answerDiv = document.getElementById('answer');
    const form = document.getElementById('convert');
    document.addEventListener('keydown', function(event){
        let key = event.code;
        if (key == 'KeyK'){
            converType = 'Kilometers';
            heading.innerHTML = 'Kilometeres to Miles Converter';
            intro.innerHTML = 'Type in a number of kilometers and click the button to convert the distance to miles.';

        }
        else if(key == 'KeyM'){
            converType = 'Miles';
            heading.innerHTML = 'Miles to Kilometers Converter';
            intro.innerHTML = 'Type in a number of miles and click the button to convert the distance to kilometers.';
        }
    });

    form.addEventListener('submit', function(evt){
        evt.preventDefault();
        const distance = parseFloat(document.getElementById('distance').value);

        if(distance || distance == 0){
            if(converType == 'Miles'){
                const converted = (distance * 1.609344).toFixed(3);
                answerDiv.innerHTML = `<h2>${distance} miles converts to ${converted} kilometers</h2>`;
            }
            else if(converType == 'Kilometers'){
                const converted = (distance * 0.621371192).toFixed(3);
                answerDiv.innerHTML = `<h2>${distance} kilometers converts to ${converted} miles</h2>`;
            }

            else{
                answerDiv.innerHTML = `<h2>Press the "K" key to switch to kilometer converstion, press the "M" key to switch to mile conversion</h2>`;
            }
        }
        else{
            answer.innerHTML = '<h2>Please provide a number!</h2>';
        }
    });
})();