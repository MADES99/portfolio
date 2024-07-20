/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID = templateID = #form = publicKey
    emailjs.sendForm('service_pzycgxj', 'template_xr52qlg', '#contact-form', '-cbDwOOHg2o4PAb0K')
    .then(() =>  {
        // Show sent message
       contactMessage.textContent =  'Message sent successfully ✅'

    //    Remove message after 5 seconds
    setTimeout(() => contactMessage.textContent = '', 5000)

    // Clear input fields
    contactForm.reset()
    },
    () => {
   // Show error message
   contactMessage.textContent = 'Message not sent  ❌'
})
}

contactForm.addEventListener('submit', sendEmail)


// service_pzycgxj
// template_xr52qlgz
// -cbDwOOHg2o4PAb0K