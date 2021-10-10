const canvas = document.querySelector('canvas');
const cxt = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let mathematicalSymbols = "∀8∁∂∃∄∅∆∇∈∉∊∋∌∍∎∏∐∑−∓∔∕∖∗∘∙√∛∜∝∞∟∠∡∢∣∤∥∦∧∨∩∪∫∬∭∮∯∰∱∲∳∴∵∶∷∸∹∺∻∼∽∾∿≀≁≂≃≄≅≆≇≈≉≊≋≌≍≎≏≐≑≒≓≔≕≖≗≘≙≚≛≜≝≞≟≠≡≢≣≤≥≦≧≨≩≪≫≬≭≮≯≰≱≲≳≴≵≶≷≸≹≺≻≼≽≾≿⊀⊁⊂⊃⊄⊅⊆⊇⊈⊉⊊⊋⊌⊍⊎⊏⊐⊑⊒⊓⊔⊕⊖⊗⊘⊙⊚⊛⊜⊝⊞⊟⊠⊡⊢⊣⊤⊥⊦⊧⊨⊩⊪⊫⊬⊭⊮⊯⊰⊱⊲⊳⊴⊵⊶⊷⊸⊹⊺⊻⊼⊽⊾⊿⋀⋁⋂⋃⋄⋅⋆⋇⋈⋉⋊⋋⋌⋍⋎⋏⋐⋑⋒⋓⋔⋕⋖⋗⋘⋙⋚⋛⋜⋝⋞⋟⋠⋡⋢⋣⋤⋥⋦⋧⋨⋩⋪⋫⋬⋭⋮⋯⋰⋱⋲⋳⋴⋵⋶⋷⋸⋹⋺⋻⋼⋽⋾⋿";
mathematicalSymbols = mathematicalSymbols.split("");

const fontSize = 10;
const columns = width / fontSize;

let drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function showLetters() {
    cxt.fillStyle = "#0F0";
    cxt.font = fontSize + "px arial";

    for (let i = 0; i < drops.length; i++) {
        let text = mathematicalSymbols[Math.floor(Math.random() * mathematicalSymbols.length)];
        let textPosY = drops[i] * fontSize;

        cxt.fillText(text, i * fontSize, textPosY);

        if (textPosY > height && Math.random() > 0.963) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

let frame = 1;

function draw() {
    if (frame === 1) {
        clear();
        showLetters();
    } else {
        frame = 0;
    }

    frame++;
    window.requestAnimationFrame(draw);
}

function clear() {
    cxt.fillStyle = 'rgba(0,0,0,0.05)';
    cxt.fillRect(0, 0, width, height);
}

window.requestAnimationFrame(draw);
window.addEventListener('resize', function () {
    height = canvas.height = window.innerHeight;
    width = canvas.width = window.innerWidth;
})