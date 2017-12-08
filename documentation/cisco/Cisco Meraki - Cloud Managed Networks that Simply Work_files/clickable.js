define([], function(){
  $('body').on('click', '.clickable', function(e){
    var link = $('a:first', this)
      , href = link.attr('href')

    // _blank, command key, ctrl key, middle click
    if (link.attr('target') === '_blank' || e.metaKey || e.ctrlKey || e.which === 2)
      window.open(href, '_blank')
    else
      window.location = href
  })
})
