<template>
  <div ref="quill"></div>
</template>

<script>
  if (process.browser) {
    require('quill/dist/quill.core.css')
    require('quill/dist/quill.snow.css')
    window.Quill = require('quill/dist/quill.min.js')
    require('quill/dist/quill.core.js')
  }
  export default {
    data () {
      return {
        editor: null
      }
    },
    methods: {
      html: function () {
        let self = this
        return self.editor.root.innerHTML
      },
      storeData: function () {
        let self = this

        return self.editor.getContents()
      },
      setContents: function (delta) {
        let self = this
        self.editor.setContents(delta)
      }
    },
    created () {
      let self = this

      self.selectLocalImage = function() {
        const input = document.createElement('input')
        input.setAttribute('type', 'file')
        input.click()
        // Listen upload local image and save to server
        input.onchange = () => {
          const file = input.files[0]

          // file type is only image.
          if (/^image\//.test(file.type)) {
            window.tools.storeToServer(file, function(url) {
              let range = self.editor.getSelection()
              self.editor.insertEmbed(range.index, 'image', url)
            })
          } else {
            console.warn('You could only upload images.')
          }
        }
      }
    },
    mounted () {
      let self = this

      let BlockEmbed = Quill.import('blots/block/embed')
      class ImageBlot extends BlockEmbed {
        static create(value) {
          let node = super.create()
          node.setAttribute('src', value)
          node.setAttribute('class', 'w-100 mt-2 mb-3')
          return node
        }
        static value(node) {
          return node.getAttribute('src')
        }
      }
      ImageBlot.blotName = 'image'
      ImageBlot.tagName = 'img'
      Quill.register(ImageBlot, true)

      self.editor = new Quill(self.$refs.quill, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ header: [2, 3, false] }],
            ['bold', 'italic', 'underline'],
            ['link', 'blockquote', 'code-block', 'image'],
            [{ 'color': [] }],
            [{ list: 'ordered' }, { list: 'bullet' }]
          ]
        }
      })

      // quill editor add image handler
      self.editor.getModule('toolbar').addHandler('image', () => {
        self.selectLocalImage()
      })
    }
  }
</script>

<!-- /**
 * Step1. select local image
 *
 */
function selectLocalImage() {
  const input = document.createElement('input')
  input.setAttribute('type', 'file')
  input.click()
  // Listen upload local image and save to server
  input.onchange = () => {
    const file = input.files[0]
    debugger
    // file type is only image.
    if (/^image\//.test(file.type)) {
      saveToServer(file)
    } else {
      console.warn('You could only upload images.')
    }
  }
}
/**
 * Step2. save to server
 *
 * @param {File} file
 */
function saveToServer(file) {
  const fd = new FormData()
  fd.append('image', file)
  const xhr = new XMLHttpRequest()
  xhr.open('POST', 'http://localhost:3000/upload/image', true)
  xhr.onload = () => {
    if (xhr.status === 200) {
      // this is callback data: url
      const url = JSON.parse(xhr.responseText).data
      insertToEditor(url)
    }
  };
  xhr.send(fd)
}
/**
 * Step3. insert image url to rich editor.
 *
 * @param {string} url
 */
function insertToEditor(url) {
  // push image url to rich editor.
  const range = editor.getSelection();
  editor.insertEmbed(range.index, 'image', `http://localhost:9000${url}`);
} -->

<!-- // quill editor add image handler
// self.editor.getModule('toolbar').addHandler('image', () => {
//   selectLocalImage()
// }) -->
