# JQUERY

## Objectives

- What is JQuery?

```sh
  Introduced by John Resig in the year 2006.
  write less, do more.

```

- JQuery Selectors.

```sh
$(function(){
    $(this).fadeIn();
    $('h1').text('Introduction to jQuery');
    $('h1').css('color', 'black')
})
```

- jQuery Events and Effects.

```sh
# Events
$('button').click(function(){
    $(this).css('width', '500px');
})
.mouseenter
.mouseleave
.dblclick
.hover
.click

#Effects
.fadeOut();
.animate();
.fadeToggle();
.hide();
.show();
.toggle(3000);
.slideUp();
.slideDown();
```

- Callback functions in jQuery.

```sh
$('img').animate({}, 2000, function() {});

$('img').animate({
    left: '500px',
    opacity: '1',
    height: '200px',
    width: '200px'
}, 'slow', function() {
    alert("Animated image")
});

# ANother example
$('img').slideUP(2000, function() {
    $('img').slideDown(2000);
    });

- we can chain as many effects as we want
```

- DOM Manipulation in jQuery.

- What is jQuery UI?

- widgets in jQuery.

- interactions in jQuery.

- Themes Customization using jQuery.

- jQuery Projects
