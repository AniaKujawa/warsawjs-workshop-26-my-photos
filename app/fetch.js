let fetchCallback = null;

function fetchImages({ tags= ["flowers"], mode = "ALL", callback} = {}) {
fetchCallback = callback;
const url = `https://api.flickr.com/services/feeds/photos_public.gne?tagmode=${mode}&tags=${tags.join(
   ","
 )}&format=json`;
 const scriptEl = document.createElement("script");
 scriptEl.src = url;
 scriptEl.type = "text/javascript";
 document.body.appendChild(scriptEl);
 document.body.removeChild(scriptEl);
}

function jsonFlickrFeed(data) {
  let images = data.items.map((image) => {
    return {
      title: image.title,
      url: image.media.m,
      author: image.author,
      published: image.published,
    }
  });
  images.map((image) => {imagesList.addImage(new ImageClass(image));
})
  imagesList.reRender();
  fetchCallback();
}

//async FetchData() {
// let data = await fetch(ur, header)
// data = await data.json();
// }
