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