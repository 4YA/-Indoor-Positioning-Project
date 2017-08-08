    var scene, renderer, camera, light;
    var t;
    

    var down = 0;
    var beacon;

    

    window.onload = function () {
        
        $.extend($.support, { touch: "ontouchend" in document });

        if (!$.support.touch) {
            $("body").html("<span>Not a touchable device!</span>");
        }
        //停用頁面捲動功能
        document.body.addEventListener('touchmove', function (event) {
            event.preventDefault();
        }, false);

        scene = new THREE.Scene();

        renderer = new THREE.WebGLRenderer({ antialias: true });
        
        light = new THREE.PointLight({ color: 0xff0000 });
        light.position.set(100, 500, 0);
        scene.add(light);



        camera = new THREE.PerspectiveCamera(40, 400 / 300, 1, 1000);
        camera.position.set(0, 800, 0);
        camera.lookAt(scene.position);




        renderer.setClearColor(0xffffff);

        document.getElementById("main").appendChild(renderer.domElement);
        renderer.render(scene, camera);

        t = new squareScene(500, 500, scene);

        beacon = new beaconCircle(scene);


        renderer.domElement.addEventListener('touchmove', onMouseMove, false);
        renderer.domElement.addEventListener('touchstart', onMouseDown, false);
        renderer.domElement.addEventListener('touchend', onMouseUp, false);


        function onMouseMove(mouse) {
            if (down == 1) {
                console.log(mouse.targetTouches[0].clientX);

                beacon.position.x = mouse.targetTouches[0].clientX - renderer.domElement.width / 2;
                beacon.position.z = mouse.targetTouches[0].clientY - renderer.domElement.height / 2;
            }
        }

        function onMouseUp() {
            down = 0;
        }


        function onMouseDown() {
            down = 1;
        }

        renderer.setClearColor(0xffffff);

      
      

        animate();
        console.log("finish");
        THREEx.WindowResize(renderer, camera);


    }


    
   

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
   

