import App from "./src/App";
import Splide from '@splidejs/splide';


const root=document.getElementById("root");

root.append(App())

var splide = new Splide( '.splide', {
  perPage: 3,
  rewind : true,
} );

splide.mount();