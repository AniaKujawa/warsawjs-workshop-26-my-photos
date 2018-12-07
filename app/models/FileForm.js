class FileForm {
  constructor({parentSelector = '.file-form'} ={}) {
    this.parentEl = document.querySelector(parentSelector)
  }

  bindEvent() {
    document.querySelector('#fileForm').addEventListener('submit', (e) => {
      e.preventDefault();
      let formData = new FormData(e.target);
      const fR = new FileReader(); //konwertuje obrazek na base64
      fR.addEventListener('load', function(e) {
        let image = {
        author: formData.get('author'),
        title: formData.get('title'),
        published: new Date().toString(),
        url: e.target.result
      };
      imagesList.addImage(new ImageClass(image));
    });
      fR.readAsDataURL(formData.get('imageSrc'));
    });
  }

  render() {
    let tempParent = document.createElement('div');
    tempParent.innerHTML = `<form id='fileForm'>
    <i class='welcome'> Add new file</i>
    <p><input type='text' id='title' name='title' placeholder='Title' /></p>
    <p><input type='text' id='author' name='author' placeholder='Author' /></p>
    <p><input type='file' id='imageSrc' name='imageSrc' class='button' /></p>
    <button class='button' type="submit">SAVE</button>
    </form>`
    this.parentEl.appendChild(tempParent.firstChild);
  }


}
