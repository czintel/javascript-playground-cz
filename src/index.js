const header = document.querySelector([data-header])
const form = document.querySelector([data-form])
const input = document.querySelector([name="header-text"])

form.addEventListener('submit', event => {
  event.preventDefault()
  header.innerText = input.value
})
