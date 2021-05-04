function areaOfATriangle (breadth,height,length){
    var perimeter = breadth + height + length;
    var semiperimeter = 0.5*perimeter;
    var inner = semiperimeter*(semiperimeter-breadth)*(semiperimeter-height)*(semiperimeter-length);
    if (inner >= 0) {
        var area = Math.sqrt(inner);
        return area;
    }
    return "undefined";
}