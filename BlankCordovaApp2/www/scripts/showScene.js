showScene = function (str) {

    var scene, renderer, camera, light;
    var t;
    var s = str;
    var canvas;
    

    function init(){
        scene = new THREE.Scene();
        
        renderer = new THREE.WebGLRenderer({ antialias: true });
       
        

        light = new THREE.PointLight({ color: 0xffffff });
        light.position.set(0, 500, 500);
        scene.add(light);



        camera = new THREE.PerspectiveCamera(40, 400 / 300, 1, 1000);
        camera.position.set(0, 600, 0);
        camera.lookAt(scene.position);

        

       
        
        renderer.setClearColor(0xffffff);
        
      
        document.getElementById("showScene").appendChild(renderer.domElement);
        THREEx.WindowResize(renderer, camera);
       
       
        renderer.render(scene, camera);
        canvas = document.getElementsByTagName("canvas")[0];
       
        document.addEventListener("mousedown",test, false);








    }

    function test(e)
    {
        if (e.target == canvas)
            console.log("@@");
    }

    init();
    animate();

    function animate()
    {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    



    this.updateScene = function (y, x) {
       
        
        if (t != undefined) {
            for (i = 0; i < t.length; i++)
                scene.remove(t[i]);
        }
        if (s == "circle")
            t = new circleScene(x, y, scene);
        else
            t = new squareScene(x, y, scene);
    }
}
