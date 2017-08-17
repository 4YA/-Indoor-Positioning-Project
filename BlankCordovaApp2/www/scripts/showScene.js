showScene = function (length, width, height) {

    var scene, renderer, camera, light, control;
    var t;
  
    var canvas;

    var storage = window.localStorage;

    function init(){
        scene = new THREE.Scene();
        
        renderer = new THREE.WebGLRenderer({ antialias: true });

        light = new THREE.PointLight({ color: 0xffffff });
        light.position.set(0, 500, 500);
        scene.add(light);

        camera = new THREE.PerspectiveCamera(40, 400 / 300, 1, 1000);
        camera.position.set(0, 300, 300);
        camera.lookAt(scene.position);

        control = new THREE.OrbitControls(camera);
       

       
        
        renderer.setClearColor(0xff0000);
        
      
        document.getElementById("showScene").appendChild(renderer.domElement);
        THREEx.WindowResize(renderer, camera);
       
       
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
