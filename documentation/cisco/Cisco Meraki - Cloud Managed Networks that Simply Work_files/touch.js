define([], function(){
  if (Modernizr.touch){
    // Deal with hover effects on mobile
    $('body').on('touchend', 'a, .clickable, .filter', function(){
      $(this).mouseout()
    })

    $('#navItems').on('touchstart', '.dropDownItem > a', function(){
      $(this).parent().toggleClass('open').siblings().removeClass('open')
      return false
    })
    $('#navItems').on('click', '.dropDownItem > a', function(){
      return false
    })
    $('#navItems').on('touchend','.dropDownItem > a', function(){
      $(this).parent().siblings().removeClass('open')
    })
  }
})
