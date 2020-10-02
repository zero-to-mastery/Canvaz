let cards = [
  //  Add your card in this section
  {
    artName: 'Welocme To Hacktoberfest',
    pageLink: './Art/Utkarsh2604/index.html',
    imageLink: './Art/Utkarsh2604/Screenshot.png',
    author: 'Utkarsh',
    githubLink: 'https://github.com/Utkarsh2604'
  },
  {
    artName: 'welcome robot',
    pageLink: './Art/joy/robot.html',
    imageLink: './Art/joy/robot.png',
    author: 'joy',
    githubLink: 'https://github.com/royranger'
  },
  {
    artName: 'ZTM Number One',
    pageLink: './Art/hieutrinh/index.html',
    imageLink: './Art/hieutrinh/zerotomasteryone.png',
    author: 'hieutrinh',
    githubLink: 'https://github.com/trinhminhieu'
  },
  {
    artName: 'lollipop',
    pageLink: './Art/ctq3103/lollipop.html',
    imageLink: './Art/ctq3103/lollipop.png',
    author: 'ctq3103',
    githubLink: 'https://github.com/ctq3103'
  },
  {
    artName: 'This is Arttttttt',
    pageLink: './Art/christine-aqui/caqui.html',
    imageLink: './Art/christine-aqui/caqui.png',
    author: 'christine-aqui',
    githubLink: 'https://github.com/christine-aqui'
  },
  {
    artName: 'World of machine learning',
    pageLink: './Art/vivek2509/machine_learning.html',
    imageLink: './Art/vivek2509/machine_learning.png',
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
    imageLink: './Art/shamika-kumar/shamika-art.gif',
    author: 'shamika-kumar',
    githubLink: 'https://github.com/shamikakumar'
  },
  {
    artName: 'Flower',
    pageLink: './Art/Neha/index.html',
    imageLink: './Art/Neha/flower.png',
    author: 'Neha',
    githubLink: 'https://github.com/Neha045'
  },
  {
    artName: 'Brazilian Flag',
    pageLink: './Art/cassio/index.html',
    imageLink: './Art/cassio/brazil.png',
    author: 'Cassio Groh',
    githubLink: 'https://github.com/cassiogroh'
  },
  {
    artName: 'Diamond',
    pageLink: './Art/ab510/diamond.html',
    imageLink: './Art/ab510/diamond.png',
    author: 'ab510',
    githubLink: 'https://github.com/ab510'
  },
  {
    artName: 'Snake Game',
    pageLink: './Art/jappan/index.html',
    imageLink: './Art/jappan/snake-game.gif',
    author: 'Jappan',
    githubLink: 'https://github.com/Jappan07'
  },
  {
    artName: 'The German Flag',
    pageLink: './Art/ravi/index.html',
    imageLink: './Art/ravi/German_Flag.jpg',
    author: 'Ravi',
    githubLink: 'https://github.com/rav291'
  },
  {
    artName: 'Hactoberfest 2020',
    pageLink: './Art/velada/index.html',
    imageLink: './Art/velada/canvas.png',
    author: 'velada',
    githubLink: 'https://github.com/annima24'
  },
  {
    artName: 'My Little Piece of Art',
    pageLink: './Art/gincos/index.html',
    imageLink: './Art/gincos/finished.png',
    author: 'Gincos',
    githubLink: 'https://github.com/gincos'
  },
  {
    artName: 'Hactoberfest2020',
    pageLink: './Art/krittiya-clark/index.html',
    imageLink: './Art/krittiya-clark/Hactoberfest2020.png',
    author: 'Krittiya Clark',
    githubLink: 'https://github.com/krittiyaclark'
  },
  {
    artName: 'Random monochromatic palette',
    pageLink: './Art/carls13/index.html',
    imageLink: './Art/carls13/mono.png',
    author: 'Carls13',
    githubLink: 'https://github.com/carls13'
  },
  {
    artName: 'Cool cursor',
    pageLink: './Art/ashwin/Cool-cursor.html',
    imageLink: './Art/ashwin/Cool-cursor.png',
    author: 'ashwin',
    githubLink: 'https://github.com/AswinBarath'
  },
  {
    artName: 'smile',
    pageLink: './Art/gh0sttttt/gh0sttttt',
    imageLink: './Art/gh0sttttt/smile-hacktoberfest.gif',
    author: 'Aaron',
    githubLink: 'https://github.com/gh0sttttt'
  },
  {
		artName: 'Color Wall Builder',
		pageLink: './Art/Jamiu/index.html',
		imageLink: './Art/Jamiu/color.PNG',
		author: 'Jamiu',
		githubLink: 'https://github.com/JamiuJimoh'
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
			`<a href='${c.pageLink}' target="_blank">` +
			`<img class="art-image" src='${c.imageLink}' alt='${c.artName}' />` +
			`</a>` +
			`<div class="flex-content">` +
			`<a href='${c.pageLink}' target="_blank"><h3 class="art-title">${c.artName}</h3></a>` +
			`<p class='author'><a href="${c.githubLink}" target="_blank"><i class="fab fa-github"></i> ${c.author}</a> </p>` +
			`</div>` +
			`</li>`
	]);
});

document.getElementById('cards').innerHTML = contents.join('');

function Shuffle(o) {
	for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
}
