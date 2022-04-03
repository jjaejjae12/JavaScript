//appendChild() 특정부모요소의자식요소중마지막으로 추가

const color = ["bisque","aquamarine","rgb(147, 147, 147)"]

const chosenColor = color[Math.floor(Math.random()*color.length)]

const bgColor = document.createElement("h2");



bgColor.innerText = "Color"
bgColor.style.backgroundColor = `${chosenColor}`

document.body.appendChild(bgColor)