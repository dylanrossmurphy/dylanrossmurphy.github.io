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

const lightbulb = document.querySelector('.fa-lightbulb-o')
const darkModeState = document.querySelector('.body')
const emojiHover = document.querySelector('.emoji')
const styleTag = document.querySelector('style')
const projectGroup = document.querySelector('.project-group')

lightbulb.addEventListener('click', function testFuncion(e) {
    if (darkModeState.style.backgroundColor == "black") {
        darkModeState.style.backgroundColor = "white"
        darkModeState.style.color = "black"

        styleTag.innerHTML = 'a { color: black !important; }'

        var h3Elements = document.getElementsByTagName("h3");
        for(var i = 0; i < h3Elements.length; i++) {
            h3Elements[i].style.color = "#ffffff";
        }
        var h4Elements = document.getElementsByTagName("h4");
        for(var i = 0; i < h4Elements.length; i++) {
            h4Elements[i].style.color = "#ffffff";
        }
        var hrElements = document.getElementsByTagName("hr");
        for(var i = 0; i < hrElements.length; i++) {
            hrElements[i].style.border = "1px solid #ffffff";
        }
        var h99Elements = document.getElementsByTagName(".fa-chevron-right");
        for(var i = 0; i < h99Elements.length; i++) {
            h99Elements[i].style.color = "#ffffff";
        }
        var backgroundElements = document.querySelectorAll(".project-group");
        for(var i = 0; i < backgroundElements.length; i++) {
            console.log(backgroundElements)
            backgroundElements[i].style.backgroundColor = "black";
        }
    } else {
        darkModeState.style.backgroundColor = "black"
        darkModeState.style.color = "white"
        styleTag.innerHTML = 'a { color: white !important; }'


        var h3Elements = document.getElementsByTagName("h3");
        for(var i = 0; i < h3Elements.length; i++) {
            h3Elements[i].style.color = "#ffffff";
        }
        var h4Elements = document.getElementsByTagName("h4");
        for(var i = 0; i < h4Elements.length; i++) {
            h4Elements[i].style.color = "#ffffff";
        }
        var hrElements = document.getElementsByTagName("hr");
        for(var i = 0; i < hrElements.length; i++) {
            hrElements[i].style.border = "1px solid #ffffff";
        }
        var h99Elements = document.getElementsByTagName(".fa-chevron-right");
        for(var i = 0; i < h99Elements.length; i++) {
            h99Elements[i].style.color = "#ffffff";
        }
        var backgroundElements = document.querySelectorAll(".project-group");
        for(var i = 0; i < backgroundElements.length; i++) {
            console.log(backgroundElements)
            backgroundElements[i].style.border = "1px solid #ffffff";
        }
    }
})

console.log(styleTag.innerHTML)
console.log(projectGroup.firstElementChild)

