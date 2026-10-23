import './style.css'

const toggle = document.querySelector<HTMLButtonElement>('#menu-toggle')
const nav = document.querySelector<HTMLElement>('#nav-menu')

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open')
    toggle.setAttribute('aria-expanded', String(isOpen))
  })

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open')
      toggle.setAttribute('aria-expanded', 'false')
    })
  })
}

const year = document.querySelector<HTMLSpanElement>('#year')

if (year) {
  year.textContent = String(new Date().getFullYear())
}