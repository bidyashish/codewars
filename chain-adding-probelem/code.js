

function add(n) {
    var fn = function(x) {
        return add(n + x);
      };
      
      fn.valueOf = function() {
        return n;
      };
      
      return fn;
}



console.log( add(5))