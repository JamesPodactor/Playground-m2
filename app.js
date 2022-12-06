var Hoteles = {
  "Soho Boutique": {
    name: "Soho Boutique",
    location: "Málaga",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/4d/d6/33/street--v14315648.jpg?w=1200&h=-1&s=1",
  },
  Miramar: {
    name: "Miramar",
    location: "La Malagueta",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/fb/44/db/events.jpg?w=1200&h=-1&s=1",
  }
}

var selectedHotel = prompt("Indica el nombre del Hotel: Soho Boutique o Miramar");

document.getElementById("hotel-name").innerHTML = "Hotel " + Hoteles[selectedHotel].name;
document.getElementById("hotel-location").innerHTML = "Ubicado en  " + Hoteles[selectedHotel].location;
document.getElementById("img-hotel").src = Hoteles[selectedHotel].img;

var stars = {
  una: "<span>&#9733</span><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>",
  dos: "<span>&#9733</span><span>&#9733</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>",
  tres: "<span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9734</span><span>&#9734</span>",
  cuatro: "<span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9734</span>",
  cinco: "<span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span>",
};

var rating = prompt("¿Cuántas estrellas otorgas: una, dos, tres, cuatro o cinco?");

document.getElementById("rating").innerHTML= stars[rating];

var anonymous = confirm ("¿Quiere que su puntuación sea anónima?");

document.getElementById("anonymous").checked = anonymous;



