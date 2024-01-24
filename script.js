const cardImages = document.querySelectorAll('.gallery .card img');
//console.log(cardImages);

for (i = 0; i < cardImages.length; i++) {
  cardImages[i].addEventListener('click', (event) => {
    activateCarouselItem(event);
  });
}

function activateCarouselItem(event) {
  /* [DONE] Zapisz id klikniętego obrazu */
  const imgId = event.target.id;
  //console.log('Image id:', imgId);

  /* [DONE] Usuń fragment 'img-' z tego id i zapisz otrzymaną wartość */
  const id = imgId.slice(4, imgId.length);
  //console.log('Id number:', id);

  /* [DONE] Dodaj na początku tej wartości fragment 'carousel-item-' i zapisz otrzymaną wartość jako id elementu karuzeli */
  const carouselItemId = 'carousel-item-' + id;
  //console.log('Carousel item id:', carouselItemId);

  /* [DONE] Zapisz elementy karuzeli do tablicy */
  const carouselItems = document.querySelectorAll('.carousel-item');
  //console.log('Carousel items:', carouselItems);

  /* [DONE] Usuń klasę 'active' przy każdym elemencie */
  for (let carouselItem of carouselItems) {
    //console.log('Carousel item:', carouselItem);
    carouselItem.classList.remove('active');
    //console.log('Carousel item:', carouselItem);
  }

  /* [DONE] Dodaj klasę 'active' do elementy karuzeli z ostatnią zapisaną id */
  carouselItems[id - 1].classList.add('active');
}