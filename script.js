// Logic for message submission
// Clear message and Display success or failure message
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(form)

    fetch(form.action, {
      method: form.method,
      body: formData,
    })
      .then(() => {
        form.reset()

        // Show Toastify success message
        Toastify({
          text: 'Message sent successfully!',
          duration: 3000,
          gravity: 'top',
          position: 'center',
          backgroundColor: '#28a745',
          stopOnFocus: true,
        }).showToast()
      })
      .catch(() => {
        Toastify({
          text: 'Something went wrong.',
          duration: 3000,
          gravity: 'top',
          position: 'center',
          backgroundColor: '#dc3545',
        }).showToast()
      })
  })
})
