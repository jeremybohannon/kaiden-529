const fallingItems = document.getElementById('fallingItems')
const modal = document.getElementById('copyModal')

const icons = [
    'fa-book',
    'fa-books',
    'fa-book-open',
    'fa-book-reader',
    'fa-journal-whills',
    'fa-pencil-alt',
    'fa-pen',
    'fa-marker',
    'fa-chalkboard-teacher',
    'fa-graduation-cap',
    'fa-laptop',
    'fa-desktop',
    'fa-tablet',
    'fa-microscope',
    'fa-ruler',
    'fa-backpack',
    'fa-school',
    'fa-paperclip',
    'fa-atom',
    'fa-brain',
    'fa-flask',
    'fa-calculator',
    'fa-user-graduate',
    'fa-lightbulb',
    'fa-award',
    'fa-trophy',
]

let copyCodeTimer = undefined

function createFallingBackground() {
    let totalIcons = 0
    const interval = setInterval(() => {
        const icon = document.createElement('i')

        icon.className = `icon fas ${
            icons[Math.floor(Math.random() * icons.length)]
        }`
        icon.style.left = Math.random() * 100 + 'vw'
        icon.style.animationDuration = Math.random() * 5 + 5 + 's'
        icon.style.fontSize = Math.random() * 1.5 + 1 + 'rem'

        fallingItems.appendChild(icon)

        totalIcons++
        // Only allow up to 50 icons
        if (totalIcons === 50) {
            window.clearInterval(interval)
        }
    }, 1_000)
}

createFallingBackground()

function onCopyClick() {
    window.clearTimeout(copyCodeTimer)
    navigator.clipboard
        .writeText('W69-X7F')
        .then(() => {
            modal.innerText = 'Code copied!'
        })
        .catch((err) => {
            modal.innerText = 'Failed to copy text'

            console.error('Failed to copy text: ', err)
        })
        .finally(() => {
            modal.classList.add('active')
            // Hide modal after 3 seconds
            copyCodeTimer = setTimeout(() => {
                modal.classList.remove('active')
            }, 1_500)
        })
}
