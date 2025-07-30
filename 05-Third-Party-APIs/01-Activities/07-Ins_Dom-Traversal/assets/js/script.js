// Highlight which elements in the DOM are the children of the parent element
// Uncomment the following two lines to see the which elements are the children to the #top
$('#top').children().css('color', 'yellow');
console.log($('#top').children());

// Uncomment the following line to see the which element is the first direct child of the <main>
$('#top').children().eq(0).addClass('boxy');
// children().eq(0) translates to child of index 0

// Uncomment the following line to add a list item to the list
$('#top').children().eq(4).append($('<li>Classmates</li>'));
// children().eq(4) translates to child of index 4

// Uncomment the following line to style the list items
$('#top').children('ul').children().addClass('bg-primary text-dark mb-3 p-3').css('border-radius', '.4rem');
// children will ALWAYS an immediate child

$('#top').children('ul').children().css({'border-radius': '.10rem', background: "red"});