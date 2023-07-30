const numberInput = document.getElementById('numberInput')
const submitButton = document.getElementById('submitButton')
const imageContainer = document.getElementById('imageContainer')

submitButton.addEventListener('click', function () {
  const value = parseInt(numberInput.value)

  if (isNaN(value) || value < 1 || value > 10) {
    imageContainer.innerHTML = 'Число вне диапазона от 1 до 10'
  } else {
    const url = `https://jsonplaceholder.typicode.com/photos?_limit=${value}`

    const xhr = new XMLHttpRequest()

    xhr.open('GET', url, true)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText)
          const images = data.map(item => `<img src="${item.url}" alt="Picsum Photo">`)
          imageContainer.innerHTML = images.join('')
        } else {
          console.error('Ошибка при получении данных:', xhr.status)
          imageContainer.innerHTML = 'Ошибка при получении данных'
        }
      }
    }
    xhr.send()
  }
})
