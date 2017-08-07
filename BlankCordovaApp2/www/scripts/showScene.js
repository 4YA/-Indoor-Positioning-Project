showScene = function (str) {

    var scene, renderer, camera, light;
    var t;
    var s = str;

    function init(){
        scene = new THREE.Scene();
        
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(800, 600);

        light = new THREE.PointLight({ color: 0xff0000 });
        light.position.set(100, 500, 0);
        scene.add(light);



        camera = new THREE.PerspectiveCamera(40, 400 / 300, 1, 1000);
        camera.position.set(100, 800, 100);
        camera.lookAt(scene.position);


       
        
        renderer.setClearColor(0xffffff);

        console.log(document.getElementById("showScene"));
        document.getElementById("showScene").appendChild(renderer.domElement);
        renderer.render(scene, camera);




    }

    init();

    this.updateScene = function (x, y) {
        scene.remove(t);
        if (s == "circle")
            t = new circleScene(x, y, scene);
        else
            t = new squareScene(x, y, scene);
       
        renderer.setClearColor(0xffffff);


        document.body.appendChild(renderer.domElement);
        renderer.render(scene, camera);


    }
}
