
$('.paypal-button').on('click', function() {
  var buttonID;
  switch ($('#paypal-currency').val()) {
    case 'USD':
      buttonID = "PDX9GTZ72R7T6";
      break;
    case 'EUR':
      buttonID = "XYD8MEXGZDDC6";
      break;
  }
  $('input[name="hosted_button_id"]').val(buttonID);
})

$('#btn-install-chrome').on('click', function() {
  if (typeof chrome !== 'undefined' && chrome.webstore) {
    chrome.webstore.install('https://chrome.google.com/webstore/detail/kajibbejlbohfaggdiogboambcijhkke');
    return false;
  }
  return true;
});
