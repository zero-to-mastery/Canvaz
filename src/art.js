
    let cards = [
  {
    "name": "React-Logo",
    "page_link": "./art/JotSingh/index.html",
    "art_icon": "./art/JotSingh/icon.png",
    "author_name": "Jot Singh",
    "author_github_url": "https://github.com/JotSinghChawla"
  },
  {
    "name": "Indian-Flag",
    "page_link": "./art/JotSinghChawla/index.html",
    "art_icon": "./art/JotSinghChawla/icon.png",
    "author_name": "Jot Singh",
    "author_github_url": "https://github.com/JotSinghChawla"
  },
  {
    "name": "Infinity Triangle",
    "page_link": "./art/PolisanTheEasyNick/index.html",
    "art_icon": "./art/PolisanTheEasyNick/icon.png",
    "author_name": "Oleh (ob3r0n_)",
    "author_github_url": "https://github.com/PolisanTheEasyNick/"
  },
  {
    "name": "DotPattern",
    "page_link": "./art/ankeshp03/index.html",
    "art_icon": "./art/ankeshp03/icon.png",
    "author_name": "Ankesh Paramanik",
    "author_github_url": "https://github.com/ankeshp03/"
  },
  {
    "name": "Crayon Data Logo",
    "page_link": "./art/arvindtronics/index.html",
    "art_icon": "./art/arvindtronics/icon.png",
    "author_name": "Arvind Kumar Thoppe",
    "author_github_url": "https://github.com/ARVINDTRONICS/"
  },
  {
    "name": "Snowfall",
    "page_link": "./art/haylzrandom/index.html",
    "art_icon": "./art/haylzrandom/icon.png",
    "author_name": "HaylzRandom",
    "author_github_url": "https://github.com/HaylzRandom/"
  },
  {
    "name": "HacktoberFox!",
    "page_link": "./art/mattcsmith/index.html",
    "art_icon": "./art/mattcsmith/icon.png",
    "author_name": "Matt",
    "author_github_url": "https://github.com/MattCSmith/"
  },
  {
    "name": "Russian Flag",
    "page_link": "./art/mrkc2303/index.html",
    "art_icon": "./art/mrkc2303/icon.png",
    "author_name": "Kanishk Chhabra",
    "author_github_url": "https://github.com/mrkc2303/"
  },
  {
    "name": "Hanging moon",
    "page_link": "./art/rachelktyjohnson/index.html",
    "art_icon": "./art/rachelktyjohnson/icon.png",
    "author_name": "Rachel",
    "author_github_url": "https://github.com/rachelktyjohnson/"
  },
  {
    "name": "Moon and Stars",
    "page_link": "./art/rachelktyjohnson2/index.html",
    "art_icon": "./art/rachelktyjohnson2/icon.png",
    "author_name": "Rachel",
    "author_github_url": "https://github.com/rachelktyjohnson/"
  },
  {
    "name": "Solar System",
    "page_link": "./art/rachelktyjohnson3/index.html",
    "art_icon": "./art/rachelktyjohnson3/icon.png",
    "author_name": "Rachel",
    "author_github_url": "https://github.com/rachelktyjohnson/"
  },
  {
    "name": "Rainy Day in New York",
    "page_link": "./art/sammneto/index.html",
    "art_icon": "./art/sammneto/icon.png",
    "author_name": "Samm",
    "author_github_url": "https://github.com/sammkodes96/"
  },
  {
    "name": "Welcome to Web dev",
    "page_link": "./art/Vivek2509/index.html",
    "art_icon": "./art/Vivek2509/icon.png",
    "author_name": "Vivek Patel",
    "author_github_url": "https://github.com/Vivek2509/"
  }
]

    
  // +--------------------------------------------------------------------------------+
  // +                                                                                +
  // +                 YOU DO NOT NEED TO CHANGE ANYTHING IN THIS FILE!               +
  // +                                                                                +
  // +--------------------------------------------------------------------------------+
  
  // Creates cards from the array above
  // You don't need to modify this
  let contents = [];
  Shuffle(cards).forEach((c) => {
    contents.push([
      `<li class="card">` +
        `<a href='${c.page_link}' target="_blank">` +
        `<img class="art-image" src='${c.art_icon}' alt='${c.name}' onerror="this.src='https://cdn.discordapp.com/attachments/870676772683919390/891310666596630538/coming-soon-logo_okok.png';"/>` +
        `</a>` +
        `<div class="flex-content">` +
        `<a href='${c.page_link}' target="_blank"><h3 class="art-title">${c.name}</h3></a>` +
        `<p class='author'><a href="${c.author_github_url}" target="_blank"><i class="fab fa-github"></i> ${c.author_name}</a> </p>` +
        `</div>` +
        `</li>`
    ]);
  });
  
  document.getElementById('cards').innerHTML = contents.join('');
  
  function Shuffle(o) {
    for (
      var j, x, i = o.length;
      i;
      j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  }  
  