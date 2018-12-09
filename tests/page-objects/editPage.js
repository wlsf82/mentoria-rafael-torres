const Common = require('./common')

class EditPage extends Common {
  constructor () {
    super()

    this.titleField = element(by.id('video-title-input'))
    this.saveButton = element(by.className('edit-video-button'))
  }
}

module.exports = EditPage
