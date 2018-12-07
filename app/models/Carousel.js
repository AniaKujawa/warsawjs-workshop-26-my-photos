class Carousel {
  constructor({ destinationSelector='.carousel'} = {}){
    this.imagesSrcs = imagesList.images.map(image=> image.url);
    this.destinationEl = document.querySelector(destinationSelector);
    this.init();
  }
  init() {
     let index = 1;
     this.render();
       setInterval(() => {
         let image = this.destinationEl.querySelector('img');
         let radios = this.destinationEl.querySelectorAll('input[type="radio"]');
         image.src = this.imagesSrcs[index];
         radios[index].checked = true;
         index++;
         if (index == this.imagesSrcs.length) index = 0;
       }, 2000)
    }

    renderRadios() {
      let tempEl = document.createElement('fieldset')
      tempEl.innerHTML = this.imagesSrcs.map(img => {
        return '<input type="radio" name="choice" />'
      }).join('');
      this.destinationEl.appendChild(tempEl);
    }

    render(){
      let tempEl = document.createElement('div');
      tempEl.innerHTML = `<img id='carousel-img' src='${this.imagesSrcs[0]}'/>`;
      this.destinationEl.appendChild(tempEl.firstChild)
      this.renderRadios();
    }
  }

  

// w konstruktorze:
  // this.imagesEl = Array.from(
  //   document.querySelectorAll(`${sourceSelector} img`)
  // );
//bo document.querySelectorAll robi nam nodeList(która nie ma mapy) wszystkich img z obiektu o klasie images..., musimy
// z niego zrobić tabicę
