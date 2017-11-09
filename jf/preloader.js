var delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();
Element.prototype.remove = function() {
this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
for(var i = this.length - 1; i >= 0; i--) {
if(this[i] && this[i].parentElement) {
this[i].parentElement.removeChild(this[i]);
}
}
}

delay(function(){
$("#white").fadeOut(750);
}, 1000)
   