$(function(){
  $(".swiper-slide ul li:nth-child(2)").click(function(){
    $(".modal").fadeIn();/*서서히나타남*/
  });
  $(".popup .close").click(function(){
    $(".modal").fadeOut();/*서서히사라짐 */
  });
  $(".first li:nth-child(1)").click(function(){
    $(".inside_popup ul li:nth-child(1), .inside_popup a").fadeIn();/*서서히나타남*/
  });
  $(".first li:nth-child(2)").click(function(){
    $(".inside_popup ul li:nth-child(2), .inside_popup a").fadeIn();/*서서히나타남*/
  });
  $(".first li:nth-child(3)").click(function(){
    $(".inside_popup ul li:nth-child(3), .inside_popup a").fadeIn();/*서서히나타남*/
  });
  $(".first li:nth-child(4)").click(function(){
    $(".inside_popup ul li:nth-child(4), .inside_popup a").fadeIn();/*서서히나타남*/
  });
  $(".first li:nth-child(5)").click(function(){
    $(".inside_popup ul li:nth-child(5), .inside_popup a").fadeIn();/*서서히나타남*/
  });
  $(".first li:nth-child(6)").click(function(){
    $(".inside_popup ul li:nth-child(6), .inside_popup a").fadeIn();/*서서히나타남*/
  });
  $(".inside_popup a").click(function(){
    $(".inside_popup li, .inside_popup a").fadeOut();/*서서히사라짐 */
  });
});