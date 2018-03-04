define([], function(){
  $('.lang-picker').on('click', 'a', function(){
    var a = $(this)
      , lang = a[0].title
      , path = a[0].href

    $('body').trigger('change:lang', [lang, path])

    ga('send', 'event', 'Internationalization', 'Lang Change to ' + lang + ' from ' + Monty.lang, path)
  })
})
