showScene = function (length, width, height) {

    var scene, renderer, camera, light, control;
    var t;
  
    var canvas;


    function init(){
        scene = new THREE.Scene();
        
        renderer = new THREE.WebGLRenderer({ antialias: true });

        light = new THREE.PointLight({ color: 0xffffff });
        light.position.set(0, 500, 500);
        scene.add(light);

        camera = new THREE.PerspectiveCamera(7.5, 400 / 300, 1, 1000);
        camera.position.set(0, height + 1,0);
        console.log(camera);
        
        camera.rotateX(-Math.PI / 2);

        //control = new THREE.OrbitControls(camera);

        var urls = [
            'images/px.jpg' ,'images/nx.jpg',
            'images/py.jpg' , 'images/ny.jpg',
            'images/pz.jpg' , 'images/nz.jpg'
        ];
        var reflectionCube = new THREE.CubeTextureLoader().load(urls);
        reflectionCube.format = THREE.RGBFormat;
        scene.background = reflectionCube;

       
        
        //renderer.domElement.width = window.innerWidth;
        //renderer.domElement.height = window.innerHeight - 200;
        console.log(renderer.domElement);
      
        document.getElementById("showScene").appendChild(renderer.domElement);
      
       
       
        renderer.render(scene, camera);
       

        updateScene(length,width,height);
        







    }

    init();
    animate();

    function animate()
    {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    



    function updateScene(length, width, height) {
       
        
        if (t != undefined) {
            for (i = 0; i < t.length; i++)
                scene.remove(t[i]);
        }
      

        t = new squareScene(length, width, height, scene);
    }
}
