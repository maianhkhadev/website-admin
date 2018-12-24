export default {

  loaded: function() {

    let page = document.querySelector('.page-posts-create')

    if(page === null) {
      return
    }

    let input = document.querySelector('input[name="thumbnail"]')
    input.addEventListener('change', function () {
      if (this.files && this.files[0]) {
        self.file = this.files[0]
        let reader = new FileReader();
        reader.onload = function (e) {
          let avatar = document.querySelector('.thumbnail')
          avatar.style['background-image'] = `url(${e.target.result})`
        };
        reader.readAsDataURL(this.files[0]);
      }
    })

    let thumbnailIcon = document.querySelector('.thumbnail .icon')
    thumbnailIcon.addEventListener('click', function() {
      input.click()
    })

    let form = page.querySelector('form')

    form.addEventListener('submit', function(e) {

      let storeData = vm.$refs.quill.storeData()

      let element = document.querySelector('input[name=content]')
      element.value = JSON.stringify(storeData)
    })
  }
}
