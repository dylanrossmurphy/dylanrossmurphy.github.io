//cursor 
// const cursor = document.querySelector('.cursor');

// document.addEventListener('mousemove', e => {
//     cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
// })

// function mouseLeave() {
//     mouseMovement()
// }

// function mouseEnter() {
//     mouseMovement();
// }

// function mouseMovement() {
//     if (cursor.style.display === "none") {
//         cursor.style.display = "block";
//       } else {
//         cursor.style.display = "none";
//       }
// }

//lightbulb

const lightbulb = document.querySelector('.light-btn')
const darkModeState = document.querySelector('.body')
const emojiHover = document.querySelector('.emoji')
const styleTag = document.querySelector('style')

lightbulb.addEventListener('click', function testFuncion(e) {
    if (darkModeState.style.backgroundColor == "black") {
        darkModeState.style.backgroundColor = "white"
        darkModeState.style.color = "black"
        styleTag.innerHTML = 'a { color: black !important; }'
    } else {
        darkModeState.style.backgroundColor = "black"
        darkModeState.style.color = "white"
        styleTag.innerHTML = 'a { color: white !important; }'
    }
})

console.log(styleTag.innerHTML)



function removeEmojiClass() {
    emojiHover.classList.remove("emoji")
}
