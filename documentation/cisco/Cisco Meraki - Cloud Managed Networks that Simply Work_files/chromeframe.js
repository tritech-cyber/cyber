define([], function(){
  var chromeframe = $('.chromeframe')
  if (chromeframe.length > 0){
    ga('send', 'event', 'Chrome Frame', 'Shown')
    chromeframe.on('click', 'a', function(){
      ga('send', 'event', 'Chrome Frame', $(this).text())
    })
  }
})
