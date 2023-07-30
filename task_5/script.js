const pageNumberInput = document.getElementById('pageNumber')
const limitInput = document.getElementById('limit')
const requestBtn = document.getElementById('requestBtn')
const imageContainer = document.getElementById('imageContainer')
const lastQueryURL = localStorage.getItem('lastQueryURL')

if (lastQueryURL) {
  fetchImages(lastQueryURL)
}

requestBtn.addEventListener('click', function () {
  const pageNumber = parseInt(pageNumberInput.value)
  const limit = parseInt(limitInput.value)

  if ((isNaN(pageNumber) || pageNumber < 1 || pageNumber > 10) && (isNaN(limit) || limit < 1 || limit > 10)) {
    imageContainer.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10'
  } else if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > 10) {
    imageContainer.innerHTML = 'Номер страницы вне диапазона от 1 до 10'
  } else if (isNaN(limit) || limit < 1 || limit > 10) {
    imageContainer.innerHTML = 'Лимит вне диапазона от 1 до 10'
  } else {
    const url = `https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`
    fetchImages(url)
    localStorage.setItem('lastQueryURL', url)
  }
})

function fetchImages (url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        imageContainer.innerHTML = 'Нет доступных изображений.'
      } else {
        const images = data.map(item => `<img src="${item.url}" alt="Picsum Photo">`)
        imageContainer.innerHTML = images.join('')
      }
    })
    .catch((error) => {
      imageContainer.innerHTML = 'Ошибка при загрузке картинок'
    })
}
