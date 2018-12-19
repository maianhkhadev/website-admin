export default {

  loaded: function() {

    let page = document.querySelector('.page-posts-create')

    if(page === null) {
      return
    }

    let form = page.querySelector('form')

    form.addEventListener('submit', function(e) {

      let storeData = vm.$refs.quill.storeData()

      let element = document.querySelector('input[name=content]')
      element.value = JSON.stringify(storeData)

      // let file = document.querySelector('input[name=blods]')
      // storeData.blods.forEach(function(blod) {
      //   debugger
      //   file.files.push(blod)
      // })
    })
  }
}
