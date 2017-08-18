beaconCircle = function(scene) {

    


    var geometry = new THREE.CylinderGeometry(50, 5, 50, 32);

    var material = new THREE.MeshLambertMaterial({ color: 0xffff00 });

    var floor = new THREE.Mesh(geometry, material);

    scene.add(floor);

    return floor;
}