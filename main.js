// 햄버거를 누르면 -> 이벤트 발생
// 밑에 토글 식으로

const toggleBtn = document.querySelector('.navbar__toggle')
const menus = document.querySelector('.menus')
const icons = document.querySelector('.community')

toggleBtn.addEventListener('click', () => {
    menus.classList.toggle('active')
    icons.classList.toggle('active')
});