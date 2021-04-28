function areaOfATriangle (a,b,c){
    var p = a + b + c;
    var s = 0.5*p;
    var inner = s*(s-a)*(s-b)*(s-c);
    if (inner >= 0) {
        var area = Math.sqrt(inner);
        return area;
    }
    return "undefined";
}