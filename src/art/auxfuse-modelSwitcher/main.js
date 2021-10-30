let viewer = document.querySelector("model-viewer");
let src;

const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener('click', e => {
         src = button.id;
         viewer.setAttribute("src", button.id+".gltf");
    })
});

console.log("http://www.github.com/auxfuse");
