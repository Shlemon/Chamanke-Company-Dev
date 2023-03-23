'use strict'
const file = document.querySelector('#file');
const message = document.querySelector('#uploadedFile')

file.addEventListener('input', () => {
  if (file.files.length) {
    let fileName = file.files[0].name
    message.textContent = fileName
  } else {
    message.textContent = 'Please select a file'
  }
})