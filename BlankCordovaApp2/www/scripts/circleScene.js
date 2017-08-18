var circleScene = function (x, y, scene) {

    var proportion = x / y;

 
    var material = new THREE.LineBasicMaterial({ color: 0xff0000, opacity: 1 });
    var ellipse = new THREE.EllipseCurve(100,100, x, y, 0, 2.0 * Math.PI, false);
    var ellipsePath = new THREE.CurvePath();
    ellipsePath.add(ellipse);
    var ellipseGeometry = ellipsePath.createPointsGeometry(100);
    ellipseGeometry.computeTangents();
    var line = new THREE.Line(ellipseGeometry, material);
    scene.add(line);

    return line;
}