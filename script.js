var width = 640,
height = 480;

var links = [
    { source: 'Ba', target: 'La'},
    { source: 'Ba', target: 'St'},
    { source: 'La', target: 'St'},
    { source: 'Ta', target: 'Ba'},
    ];
    
var nodes = {};

//parse links to nodes

links.forEach(function(link) {
    links.source = nodes[link.source] || 
        (nodes[link.source] = {name: link.source});
    links.target = nodes[link.target] || 
        (nodes[link.target] = {name: link.target});
})