define([], function(){
  $('body').on('click', 'a[href$="pdf"],a.pdf,a.xls,a.svg', function(){
    var pdfLink = this.href
      , pdfLocation = pdfLink.substr(pdfLink.lastIndexOf('/') + 1)

    ga('send', 'pageview', pdfLocation)
    ga('send', 'event', 'Downloads', 'Downloaded: ' + pdfLocation, 'Downloaded from: ' + window.location.pathname + window.location.hash)
  })
})
