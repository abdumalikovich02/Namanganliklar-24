const notification = document.querySelector('.notification-link')
const modal = document.querySelector('.modal')
const brackdrop = document.querySelector('.brackdrop')


notification.addEventListener('click', function() {
    modal.style.display = 'block'
    brackdrop.style.display = 'block'
})


if (brackdrop) {
    brackdrop.addEventListener('click', function() {
        brackdrop.style.display = 'none'
        modal.style.display = 'none'
    })
}