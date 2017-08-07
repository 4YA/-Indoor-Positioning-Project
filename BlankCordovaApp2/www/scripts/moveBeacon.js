    var scene, renderer, camera, light;
    var t;
    var s = str;

    var down = 0;
    var beacon;

    function init() {
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

        document.getElementById("main").appendChild(renderer.domElement);
        renderer.render(scene, camera);

        t = new squareScene(500, 500, scene);

        beacon = new beaconCircle(scene);


        document.getElementById("main").addEventListener('mousemove', onMouseMove, false);
        document.getElementById("main").addEventListener('mousedown', onMouseDown, false);
        document.getElementById("main").addEventListener('mouseup', onMouseUp, false);


        function onMouseMove(mouse) {
            if (down == 1) {

                var vector = new THREE.Vector3(475, 302, 0.5);
                var mouseVector = new THREE.Vector3(mouse.x, mouse.y, 0.5);

                beacon.position.x = mouse.x - 400;
                beacon.position.z = mouse.y - 500;
            }
        }

        function onMouseUp() {
            down = 0;
        }


        function onMouseDown() {
            down = 1;
        }

       

       


    }


    init();
    animate();

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
   

