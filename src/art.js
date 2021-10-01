
    let cards = [
  {
    "name": "React-Logo",
    "page_link": "../src/art/JotSingh/index.html",
    "art_icon": "../src/art/JotSingh/icon.png",
    "author_name": "Jot Singh",
    "author_github_url": "https://github.com/JotSinghChawla"
  },
  {
    "name": "DotPattern",
    "page_link": "../src/art/ankeshp03/index.html",
    "art_icon": "../src/art/ankeshp03/icon.png",
    "author_name": "Ankesh Paramanik",
    "author_github_url": "https://github.com/ankeshp03/"
  },
  {
    "name": "Snowfall",
    "page_link": "../src/art/haylzrandom/index.html",
    "art_icon": "../src/art/haylzrandom/icon.png",
    "author_name": "HaylzRandom",
    "author_github_url": "https://github.com/HaylzRandom/"
  },
  {
    "name": "HacktoberFox!",
    "page_link": "../src/art/mattcsmith/index.html",
    "art_icon": "../src/art/mattcsmith/icon.png",
    "author_name": "Matt",
    "author_github_url": "https://github.com/MattCSmith/"
  },
  {
    "name": "Russian Flag",
    "page_link": "../src/art/mrkc2303/index.html",
    "art_icon": "../src/art/mrkc2303/icon.png",
    "author_name": "Kanishk Chhabra",
    "author_github_url": "https://github.com/mrkc2303/"
  },
  {
    "name": "Hanging moon",
    "page_link": "../src/art/rachelktyjohnson/index.html",
    "art_icon": "../src/art/rachelktyjohnson/icon.png",
    "author_name": "Rachel",
    "author_github_url": "https://github.com/rachelktyjohnson/"
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
  