var squareScene = function(x, y, scene)
{

    

    var obj = [];

    var proportion = x / y;
    if (proportion >= 1) {
        reduction = x / window.innerWidth;
    }
    else {
        reduction = y / window.innerWidth;
    }

    x /= reduction;
    y /= reduction;

    var geometry = new THREE.BoxGeometry(x, 5, y);
    var material = new THREE.MeshLambertMaterial({ color: 0xEE7700 });
    var loader = new THREE.TextureLoader();
    var texture = loader.load("../images/wood-floor.jpg");
    var floor = new THREE.Mesh(geometry, material);
    floor.material.map = texture;
    obj[obj.length] = floor;

    geometry = new THREE.BoxGeometry(x,(x+y)/2,5);
    material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    texture = loader.load("../images/whiteWall.jpg");
    console.log(texture);
    var wall = new THREE.Mesh(geometry, material);
    wall.material.map = texture;
    wall.position.set(0, (x + y) / 4,-y/2);
    obj[obj.length] = wall;



    geometry = new THREE.BoxGeometry(5, (x + y) / 2, y);
    material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    texture = loader.load("../images/whiteWall.jpg");
    wall = new THREE.Mesh(geometry, material);
    wall.material.map = texture;
    wall.position.set(x / 2, (x + y) / 4, 0);
    obj[obj.length] = wall;

    geometry = new THREE.BoxGeometry(5, (x + y) / 2, y);
    material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    texture = loader.load("../images/whiteWall.jpg");
    wall = new THREE.Mesh(geometry, material);
    wall.material.map = texture;
    wall.position.set(-x / 2, (x + y) / 4, 0);
    obj[obj.length] = wall;



 
   
   
   

    for (i = 0; i < obj.length;i++)
        scene.add(obj[i]);
    return obj;
}