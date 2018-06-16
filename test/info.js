describe('info', function() {
  var tool = eruda.get('info'),
    $tool = $('.eruda-info')

  describe('default', function() {
    it('location', function() {
      expect($tool.find('.eruda-content').eq(0)).toContainText(location.href)
    })

    it('user agent', function() {
      expect($tool.find('.eruda-content').eq(1)).toContainText(
        navigator.userAgent
      )
    })

    it('device', function() {
      expect($tool.find('.eruda-content').eq(2)).toContainText(
        window.innerWidth
      )
    })

    it('system', function() {
      expect($tool.find('.eruda-content').eq(3)).toContainText('os')
    })

    it('about', function() {
      expect($tool.find('.eruda-content').eq(4)).toHaveText(/Eruda v[\d.]+/)
    })
  })

  it('clear', function() {
    tool.clear()
    expect($tool.find('li')).toHaveLength(0)
  })

  it('add', function() {
    tool.add('test', 'eruda')
    expect($tool.find('.eruda-title')).toContainText('test')
    expect($tool.find('.eruda-content')).toContainText('eruda')
  })

  it('remove', function() {
    tool.remove('test')
    expect($tool.find('li')).toHaveLength(0)
  })
})
