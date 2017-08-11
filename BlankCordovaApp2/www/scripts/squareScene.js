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
    var floor = new THREE.Mesh(geometry, material);
    var texture = loader.load("images/wood-floor.jpg", function () {
       
        floor.material.map = texture;
        obj[obj.length] = floor;
        scene.add(floor);
    });

    
    
    

    geometry = new THREE.BoxGeometry(x,80,5);
    material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    var wall = new THREE.Mesh(geometry, material);
    texture = loader.load("images/whiteWall.jpg", function () {
      
        wall.material.map = texture;
        wall.position.set(0, 40, -y / 2);
        obj[obj.length] = wall;
        scene.add(wall);
    });




   
   



    geometry = new THREE.BoxGeometry(5, 80, y);
    material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    var wall2 = new THREE.Mesh(geometry, material);
    texture = loader.load("images/whiteWall.jpg",function () {
        
        wall2.material.map = texture;
        wall2.position.set(x / 2, 40, 0);
        obj[obj.length] = wall2;
        scene.add(wall2);
    });
    
    geometry = new THREE.BoxGeometry(5, 80, y);
    material = new THREE.MeshLambertMaterial({ color: 0xffffff });
    var wall3 = new THREE.Mesh(geometry, material);
    texture = loader.load("images/whiteWall.jpg", function () {
       
        wall3.material.map = texture;
        wall3.position.set(-x / 2, 40, 0);
        obj[obj.length] = wall3;
        scene.add(wall3);
    },function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
        // Function called when download errors
        function (xhr) {
            console.log('An error happened');
        });
   

   
       

 
    return obj;
    
   
   
   

   
    
    
}