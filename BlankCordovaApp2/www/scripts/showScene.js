showScene = function (str) {

    var scene, renderer, camera, light;
    var t;
    var s = str;
    

    function init(){
        scene = new THREE.Scene();
        
        renderer = new THREE.WebGLRenderer({ antialias: true });
       
        THREEx.WindowResize(renderer, camera);

        light = new THREE.PointLight({ color: 0xffffff });
        light.position.set(0, 500, 0);
        scene.add(light);



        camera = new THREE.PerspectiveCamera(40, 400 / 300, 1, 1000);
        camera.position.set(0, 300, 600);
        camera.lookAt(new THREE.Vector3(scene.position.x, scene.position.y + 100, scene.position.z));
        


       
        
        renderer.setClearColor(0xffffff);

        console.log(document.getElementById("showScene"));
        document.getElementById("showScene").appendChild(renderer.domElement);
        renderer.render(scene, camera);
       








    }

    init();
    animate();

    function animate()
    {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    



    this.updateScene = function (y, x) {
        console.log(t);
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
