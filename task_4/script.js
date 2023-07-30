const widthInput = document.getElementById('widthInput')
const heightInput = document.getElementById('heightInput')
const submitButton = document.getElementById('submitButton')
const imageContainer = document.getElementById('imageContainer')

submitButton.addEventListener('click', function () {
  const width = parseInt(widthInput.value)
  const height = parseInt(heightInput.value)

  if (isNaN(width) || isNaN(height) || width < 100 || width > 300 || height < 100 || height > 300) {
    imageContainer.innerHTML = 'Oдно из чисел вне диапазона от 100 до 300'
  } else {
    const url = `https://loremflickr.com/${width}/${height}`
    fetch(url)
      .then((response) => {
        const imageElement = document.createElement('img')
        imageElement.src = url
        imageElement.alt = 'Random Image'
        imageContainer.innerHTML = ''
        imageContainer.appendChild(imageElement)
      })
      .catch((error) => {
        imageContainer.innerText = 'Ошибка при загрузке картинки'
      })
  }
})
