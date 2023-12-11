var tour = document.querySelector('#tour')
var paths = tour.querySelectorAll ('.tour__dessin a')
var links = tour.querySelectorAll ('.tour__list a')

// polyfill du foreach
if (NodeList.prototype.forEach === undefined ) {
    NodeList.prototype.forEach === function (callback){
    [].forEach.call(this, callback)
}
}

var activepiece = function (id) {
tour.querySelectorAll('.is-active').forEach(function(item) {
item.classList.remove('is-active')
})
if (id !== undefined){
    document.querySelector ('#list-' + id).classList.add('is-active')
    document.querySelector ('#piece-' + id).classList.add('is-active')
    
}
}

paths.forEach(function (path) {
    path.addEventListener('mouseenter', function () {
        var id = this.id.replace ('piece-','')
        activepiece(id)
        

    })
})

links.forEach(function(link) {
    link.addEventListener ('mouseenter', function () {
        var id=this.id.replace ('list-','')
        activepiece(id)
        
    })
})

tour.addEventListener ('mouseover', function () {
    activepiece()
})
