import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();

$('.form-floating-label input, .form-floating-label textarea').focusin(function(){
  $(this).parent().addClass('has-value');
});

$('.form-floating-label input, .form-floating-label textarea').blur(function(){
  if(!$(this).val().length > 0) {
    $(this).parent().removeClass('has-value');
  }
});
