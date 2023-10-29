// Loader

document.onreadystatechange = function () {
  if (document.readyState === "complete") {    
    document.querySelector("content").style.visibility = "visible";
    document.querySelector("loader").classList.add("loaderOut");
    document.querySelector("body").style.overflow = "visible";

    setTimeout(() => {
      document.querySelector("loader").remove();
    }, 1000);
  } 
}

// Title Center Section

const messages = [
  "to sem ideia, toma uns negocio ae",
  "nada para ver aqui!",
  "se vc veio procurar algo, procurou no lugar errado :)",
  ">:)",
  "umas coisinhas ae"
];

const centerTitle = document.querySelector("#center #title");
centerTitle.innerText = messages[Math.floor(Math.random() * messages.length)];

// Songs

const songs = [
  "0eOKg88Jcew", // for my family
  "6GMKYueN4mM", // by the way
  "Ikweq0THs88", // oh, pretty woman
  "qU9mHegkTc4", // 505
  "mV01vajK3C4", // dreamin'
  "o2PoHJfknUI", // i'm gone
  "-ufLmFKGTwA", // solstício
  "nTQE44GVzT4", // i just don't know what to do with myself
];

const iframe = document.querySelector('iframe');
const song = songs[Math.floor(Math.random() * songs.length)];
iframe.src = `https://www.youtube.com/embed/${song}`;
