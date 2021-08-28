(function(){
    'use strict';

    const detailsform = document.querySelector('#destination_details_form');

    detailsform.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event){
    event.preventDefault();

    const destName = event.target.elements["name"].value;
    const destLocation = event.target.elements["location"].value;
    const destPhoto = event.target.elements["photo"].value;
    const destDesc = event.target.elements["description"].value;

    for(let i = 0; i<detailsform.length; i++){
        detailsform.elements[i].value = '';
    }

    const destCard = createDestinaionCard(destName, destLocation, destPhoto, destDesc);

    //create card here

    const wishListContainer = document.getElementById('destination_container');
    if(wishListContainer.children.length === 0){
        document.getElementById('title').innerHTML = 'My Wish List';
    }

    //add the card
    document.querySelector('#destination_container').appendChild(destCard);

}

function createDestinaionCard(name, location, photoURL, description){
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.setAttribute('alt', name); 

    const constantPhotoUrl = 'images/signpost.jpg';

    if(photoURL.length === 0){
        img.setAttribute('src', constantPhotoUrl);
    }
    else{
        img.setAttribute('src', photoURL);
    }

    card.appendChild(img);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h3');
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    const cardSubtitle = document.createElement('h4');
    cardSubtitle.innerText = location;
    cardBody.appendChild(cardSubtitle);

    if(description.length !== 0){
        var cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.innerText = description;
        cardBody.appendChild(cardText);
    }

    const cardDeletBtn = document.createElement('button');
    cardDeletBtn.innerText = 'Remove';
    cardDeletBtn.addEventListener('click', removeDestination);
    cardBody.appendChild(cardDeletBtn);

    card.appendChild(cardBody);

    return card;
    }   

    function removeDestination(event){
        const card = event.target.parentElement.parentElement;
        card.remove();
    }

})();

