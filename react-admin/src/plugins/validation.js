const Validation = function(form, fields) {
  let self = this

  self.checkValid = function() {
    let hasError = false

    fields.forEach(function(field) {
      let element = form.querySelector(`input[name='${field.name}']`)

      if(field.rules.required) {

        if(element.type !== 'checkbox' && element.value === '') {

          hasError = true
          self.showError(element, 'Please fill out this field.')
        }
      }

      if(field.rules.minLength) {

        self.showError(element, 'Minimum of 6 characters.')
      }

      if(field.rules.maxLength) {

        self.showError(element, 'Maximum of 6 characters.')
      }

      if(field.rules.rangeLength) {

      }

      if(field.rules.min) {

      }

      if(field.rules.max) {

      }

      if(field.rules.range) {

      }

      if(field.rules.email) {

        let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(regex.test(element.value) === false) {

          hasError = true
          self.showError(element, 'Bruh, that email address is invalid.')
        }
      }

      if(field.rules.number) {

      }

      if(field.rules.equalTo) {

        let testdsad = form.querySelector(`input[name='${field.rules.equalTo}']`)

        if(element.value !== testdsad.value) {

          hasError = true
          self.showError(element, 'Please enter the same value again.')
        }
      }
    })

    return hasError
  }

  self.showError = function(element, message) {

    let error = element.nextElementSibling

    if(error === null) {
      return
    }

    if(error.innerHTML === '') {
      element.classList.add('error')
      error.innerHTML = message
    }
  }
}

export default Validation
