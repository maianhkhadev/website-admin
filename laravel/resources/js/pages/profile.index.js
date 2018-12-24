export default {

  loaded: function() {

    let page = document.querySelector('.page-profile-index')

    if(page === null) {
      return
    }

    let input = document.querySelector('input[name="avatar"]')
    input.addEventListener('change', function () {
      if (this.files && this.files[0]) {
        self.file = this.files[0]
        let reader = new FileReader();
        reader.onload = function (e) {
          let avatar = document.querySelector('.avatar')
          avatar.style['background-image'] = `url(${e.target.result})`
        };
        reader.readAsDataURL(this.files[0]);
      }
    })

    let avatarIcon = document.querySelector('.avatar .icon')
    avatarIcon.addEventListener('click', function() {
      input.click()
    })
  }
}
