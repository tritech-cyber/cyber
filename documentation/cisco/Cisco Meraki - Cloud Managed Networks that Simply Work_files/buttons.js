define([], function(){
  $(document).on('click', '.button', function(){

    var button = $(this)
      , value = $('input', this).val()
      , buttonText = (value !== undefined || null) ? value : button.text()

    ga('send', 'event', 'Button Click', 'Button: ' + buttonText, button.attr('href') || window.location.href)
  })
})
