'use strict'
const helper = require('protractor-helper')

describe('Delete page', () => {
  beforeEach(() => browser.get('/videos/5c0409ecf0006b1fe4149ccb'))

  it('should delete a video', () => {
    const buttonDelete = element(by.id('delete'))

    helper.clickWhenClickable(buttonDelete)
  })
})