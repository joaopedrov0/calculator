const last = document.querySelector('small')
const res = document.querySelector('#res')

let displayContent = ''

const add = (value) => {
	displayContent += value
	render()
}
const deleteLast = () => {
	let view = res.innerHTML
	let arr = view.split('')
	arr.pop()
	displayContent = arr.join('')
	render()
}
const clean = () => {
	displayContent = ''
	console.log('Display cleaned')
	render()
}
const calc = () => {
	last.innerHTML = displayContent
	displayContent = eval(displayContent)
	render()
}
const render = () => {
	console.log('Rendering...')
	res.innerHTML = displayContent
}

document.addEventListener('keyup', (event) => {
	console.log(event.key)
	switch(event.key){
		case '1':
			add('1')
			break
		case '2':
			add('2')
			break
		case '3':
			add('3')
			break
		case '4':
			add('4')
			break
		case '5':
			add('5')
			break
		case '6':
			add('6')
			break
		case '7':
			add('7')
			break
		case '8':
			add('8')
			break
		case '9':
			add('9')
			break
		case '0':
			add('0')
			break
		case '.':
			add('.')
			break
		case 'Enter':
			calc()
			break
		case '+':
			add('+')
			break
		case '/':
			add('/')
			break
		case '-':
			add('-')
			break
		case '*':
			add('*')
			break
		case 'x':
			add('*')
			break
		case 'Backspace':
			deleteLast()
			break
		case 'Delete':
			clean()
			break

	}
})