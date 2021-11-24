function quiz() {
  let name = prompt("What's your first name?");
  name = name[0].toUpperCase() + name.substring(1);
  let active = prompt("Do you like active dogs? Yes/No");
  active = active.toLowerCase();
  active = active.trim();
  let allergy = prompt("Are you allergic to dogs? Yes/No");
  allergy = allergy.toLowerCase();
  allergy = allergy.trim();
  let experienced = prompt("Have you had a dog before? Yes/No");
  experienced = experienced.toLowerCase();
  experienced = experienced.trim();
  alert("I've found a dog for you!");
  /* Changes top text*/
  let bestie = document.getElementById("bestFriend");
  bestie.innerHTML =
    "<span class='gradient-text'>Here's your new best friend!</span>";

  /* If non-active, show Shih Tzu */
  if (active === "no") {
    /*Changes greeting text*/
    let h2 = document.querySelector("h2");
    h2.innerHTML = `Hi ${name}, a <em>Shih Tzu</em> would suit you best!`;
    /*Changes breedText to a paragraph on Shih Tzus*/
    var shihTzuText = document.getElementById("breedText");
    shihTzuText.innerHTML =
      "Shih Tzus, also known as 'little lions', are hypoallergenic dogs who have an outgoing, affectionate and playful personality. <br />Their toy size, low exercise requirements and calm temperament makes them especially suited for apartment living. <br /> Fun fact: Shih Tzus were prized by Chinese royalty in the imperial courts, and were said to lie at the feet of emperors and empresses to provide warmth. <br /><br /> To find out more about Shih Tzus, click here: <a href='https://en.wikipedia.org/wiki/Shih_Tzu' target='_blank' > Shih Tzu Info </a> <br />To see more photos of the Shih Tzu above, click here: <a href='https://www.instagram.com/safyra.ou/' target='_blank' >@safyra.ou</a>";
    /*Changes the original circle image to one of my dog, Fifi */
    var fifi =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/020/363/original/707785CB-DB45-4326-B1BE-D703A2937EDE.jpeg?1635869561";
    var shihTzu = document.getElementById("dogHug");
    shihTzu.style.background = `url(${fifi})`;
    shihTzu.style.backgroundSize = "100%";
    /*adding a gif by me of my shih Tzu Fifi on mousehover to her static pic*/
    var shihTzuGif =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/020/391/original/fifigif.gif?1635892268";
    var addShihTzuGifMouseover = document.getElementById("dogHug");
    addShihTzuGifMouseover.addEventListener("mouseover", function () {
      addShihTzuGifMouseover.style.background = `url(${shihTzuGif})`;
      addShihTzuGifMouseover.style.backgroundSize = "100%";
    });
    /*when the mouse leaves the gif, it changes back to the original static pic*/
    var addShihTzuGifMouseleave = document.getElementById("dogHug");
    addShihTzuGifMouseleave.addEventListener("mouseleave", function () {
      addShihTzuGifMouseleave.style.background = `url(${fifi})`;
      addShihTzuGifMouseleave.style.backgroundSize = "100%";
    });
  } else if (allergy === "no") {
    let h2 = document.querySelector("h2");
    h2.innerHTML = `Hi ${name}, a <em>Pomsky</em> would suit you best!`;
    /*Changes breedText to a paragraph on pomskies*/
    var pomskyText = document.getElementById("breedText");
    pomskyText.innerHTML = `Pomskies are a cross between the Siberian Husky and Pomeranian. As they are highly adaptable, don't require a lot of space and don't require a ton of exercise, pomskies are suitable for city apartment life. <br /></br>They want lots of attention and look like adorable mini huskies. As they are very intelligent and quite playful around the house, they require lots of training and are not as suitable for first-time dog owners or for people who need to leave their pets alone at home. Pomskies don't take well to being left alone, and might destroy your furniture while you're hitting the town! <br /> <br /> Find out more about Pomskies here: <a href='https://dogtime.com/dog-breeds/pomsky#/slide/1' target='_blank'> Pomsky Info </a> <br /> Look at more Pomsky photos here: <a href='https://www.instagram.com/miya.pomsky' target='_blank'>@miya.pomsky</a>`;
    /* Changes dogHug pic to one of my pomsky Mimi*/
    var mimi =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/020/366/original/BE8B40D0-1D8B-4B51-A4CD-F83D1CE60094.jpeg?1635874782";
    var pomsky = document.getElementById("dogHug");
    pomsky.style.background = `url(${mimi})`;
    pomsky.style.backgroundSize = "100%";
    /*adding a gif by me of Mimi on mousehover to her static pic*/
    var pomskyGif =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/020/390/original/mimipomsky.gif?1635891974";
    var addPomskyGifMouseover = document.getElementById("dogHug");
    addPomskyGifMouseover.addEventListener("mouseover", function () {
      addPomskyGifMouseover.style.background = `url(${pomskyGif})`;
      addPomskyGifMouseover.style.backgroundSize = "100%";
    });
    /*when the mouse leaves the gif, itchanges back to the original static pic*/
    var addPomskyGifMouseleave = document.getElementById("dogHug");
    addPomskyGifMouseleave.addEventListener("mouseleave", function () {
      addPomskyGifMouseleave.style.background = `url(${mimi})`;
      addPomskyGifMouseleave.style.backgroundSize = "100%";
    });
  } else if (experienced === "yes") {
    /*Changes h2 to greet user and suggest Brussels Griffon*/
    let h2 = document.querySelector("h2");
    h2.innerHTML = `Hi ${name}, a <em>Brussels Griffon</em> would suit you best!`;
    /*Changes breedText to a paragraph on brussels griffons*/
    var brusselsGriffonText = document.getElementById("breedText");
    brusselsGriffonText.innerHTML = `Brussels Griffons, known as Griffon Bruxellois in Europe, were originally bred for rat-hunting but have now become popular house pets. With their flat face, large eyes and dense coat, it wouldn't be a surprise if you mistook them for a Wookie! Griffons require a lot of time and personal attention, and need to live indoors with the family rather than be outside all day. <br /><br /> For more information on Brussels Griffons, click here: <a href='https://en.wikipedia.org/wiki/Griffon_Bruxellois' target='_blank'> Brussels Griffon Info</a><br /> For more photos of the cutie above, click here: <a href='https://www.instagram.com/squidthegriff/' target='_blank'>Squid the Griff</a>`;
    /* Changing the dogHug photo to a brussels griffon photo*/
    var brusselsGriffonPic =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/020/379/original/703F9284-5D15-46C8-999B-228038D5AC2D.jpeg?1635885113";
    var brusselsGriffon = document.getElementById("dogHug");
    brusselsGriffon.style.background = `url(${brusselsGriffonPic})`;
    brusselsGriffon.style.backgroundSize = "100%";
    /*adding a gif by Brussels Sprout via Giphy on mousehover to the brussels griffon pic*/
    var brusselsGif =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/020/384/original/brusselssprout.gif?1635889868";
    var addBrusselsGifMouseover = document.getElementById("dogHug");
    addBrusselsGifMouseover.addEventListener("mouseover", function () {
      addBrusselsGifMouseover.style.background = `url(${brusselsGif})`;
      addBrusselsGifMouseover.style.backgroundSize = "100%";
    });
    /*when the mouse leaves the gif, it changes back to the original static pic*/
    var addBrusselsGifMouseleave = document.getElementById("dogHug");
    addBrusselsGifMouseleave.addEventListener("mouseleave", function () {
      addBrusselsGifMouseleave.style.background = `url(${brusselsGriffonPic})`;
      addBrusselsGifMouseleave.style.backgroundSize = "100%";
    });
  } else {
    /*Changes h2 to greet user and suggest Basenji*/
    let h2 = document.querySelector("h2");
    h2.innerHTML = `Hi ${name}, a <em>Basenji</em> would suit you best!`;
    /*Changes breedText to a paragraph on basenji*/
    var basenjiText = document.getElementById("breedText");
    basenjiText.innerHTML = `Basenjis are known as the 'barkess' dogs of Africa, and were originally trained to hunt small game. They are now beautiful family pets with a certain stubborn streak, a  fierce intelligence and escape artist tendencies. While they don't bark, Basenjis can certainly get your attention by yodeling. They require lots of walks and exercise as they are high-energy dogs. <br />If you're looking for a new hobby, why not take up lure coursing with your Basenji?<br /><br /> For more information on Basenjis, click here: <a href='https://dogtime.com/dog-breeds/basenji#/slide/1' target='_blank'>Basenji Info</a> <br /> For cute Basenji photos, click here: <a href='https://www.instagram.com/basenji_bertje/' target='_blank'>Bertje the Basenji</a>`;
    /* Changing the dogHug photo to a basenji photo by Edvinas Bruzas on Unsplash*/
    var basenjiPic =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/020/380/original/0B53CE5B-8F93-48F0-BE82-58305575F8D1.jpeg?1635885426";
    var basenji = document.getElementById("dogHug");
    basenji.style.background = `url(${basenjiPic})`;
    basenji.style.backgroundSize = "100%";
    /*adding a gif by Westminster Kennel Club via Giphy on mousehover to the basenji pic*/
    var basenjiGif =
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/020/383/original/basenjicutie.gif?1635889361";
    var addBasenjiGifMouseover = document.getElementById("dogHug");
    addBasenjiGifMouseover.addEventListener("mouseover", function () {
      addBasenjiGifMouseover.style.background = `url(${basenjiGif})`;
      addBasenjiGifMouseover.style.backgroundSize = "100%";
    });
    /*when the mouse leaves the gif, it changes back to the original static pic*/
    var addBasenjiGifMouseleave = document.getElementById("dogHug");
    addBasenjiGifMouseleave.addEventListener("mouseleave", function () {
      addBasenjiGifMouseleave.style.background = `url(${basenjiPic})`;
      addBasenjiGifMouseover.style.backgroundSize = "100%";
    });
  }
}

let button = document.querySelector("button");
button.addEventListener("click", quiz);
