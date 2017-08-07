var squareScene = function(x, y, scene)
{

    var proportion = x / y;

    

    var geometry = new THREE.BoxGeometry(x, 5, y);
   
    var material = new THREE.MeshLambertMaterial({ color: 0xff0000 });
  
    var floor = new THREE.Mesh(geometry, material);
    
    scene.add(floor);

    return floor;
}