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

# Another example
$('img').slideUP(2000, function() {
    $('img').slideDown(2000);
    });

- we can chain as many effects as we want
```

- DOM Manipulation in jQuery.

```sh
$('body').html();
.attr('src');

- id - $('#id').slideDown(2000);
- class - $('.class').slideUp(2000);
- tagName - $('tag').hide();


# Alerting the rgb color of the element
$('.div1').click(function() {
    alert($('.div1').css('background-color'));
});


# Methods
.append('<p>This is a paragraph</p>')
.prepend('<p>This is a paragraph</p>')
.before('<p>This is a paragraph</p>')
.after('<p>This is a paragraph</p>')
.remove();
.empty();
```

- What is jQuery UI?

```sh
- Open javascript library
```

- widgets in jQuery.

```sh
https://jqueryui.com/
```

- interactions in jQuery.

- Themes Customization using jQuery.

- jQuery Projects
