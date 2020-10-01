let cards = [
  //  Add your card in this section
  {
    artName: 'welcome robot',
    pageLink: './Art/joy/robot.html',
    imageLink: './Art/joy/robot.png',
    author: 'joy',
    githubLink: 'https://github.com/royranger'
  },
  {
    artName: 'lollipop',
    pageLink: './Art/ctq3103/lollipop.html',
    imageLink: './Art/ctq3103/lollipop.png',
    author: 'ctq3103',
    githubLink: 'https://github.com/ctq3103'
  },
    artName: 'This is Arttttttt',
    pageLink: './Art/christine-aqui/caqui.html',
    imageLink: '/Art/christine-aqui/caqui.png',
    author: 'christine-aqui',
    githubLink: 'https://github.com/christine-aqui'
  },
  {
    artName: 'World of machine learning',
    pageLink: './Art/vivek2509/machine_learning.html',
    imageLink: '/Art/vivek2509/machine_learning.png',
    author: 'Vivek2509',
    githubLink: 'https://github.com/Vivek2509'
  },
  {
    artName: 'Hacktober Bannner',
    pageLink: './Art/antonio-trajanovski/index.html',
    imageLink: './Art/antonio-trajanovski/banner.png',
    author: 'Antonio Trajanovski',
    githubLink: 'https://github.com/antoniotrajanovski'
  },
  {
    artName: '3 bouncing balls',
    pageLink: './Art/shamika-kumar/index.html',
    imageLink: '/Art/shamika-kumar/shamika-art.gif',
    author: 'shamika-kumar',
    githubLink: 'https://github.com/shamikakumar'
  },
    artName: 'Flower',
    pageLink: './Art/Neha/index.html',
    imageLink: '/Art/Neha/flower.png',
    author: 'Neha',
    githubLink: 'https://github.com/Neha045'
  },
  {
    artName: 'The German Flag',
    pageLink: './Art/ravi/index.html',
    imageLink: './Art/ravi/German_Flag.jpg',
    author: 'Ravi',
    githubLink: 'https://github.com/rav291'
  }
];

// +--------------------------------------------------------------------------------+
// +                                                                                +
// +                  YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS                 +
// +                                                                                +
// +--------------------------------------------------------------------------------+

// Creates cards from the array above
// You don't need to modify this
let contents = [];
Shuffle(cards).forEach((c) => {
  contents.push([
    `<li class="card">` +
    `<a href='${c.pageLink}'>` +
    `<img class="art-image" src='${c.imageLink}' alt='${c.artName}' />` +
    `</a>` +
    `<div class="flex-content">` +
    `<a href='${c.pageLink}'><h3 class="art-title">${c.artName}</h3></a>` +
    `<p class='author'><a href="${c.githubLink}" target="_blank"><i class="fab fa-github"></i> ${c.author}</a> </p>` +
    `</div>` +
    `</li>`,
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
