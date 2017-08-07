document.getElementById("startRangeBtn").addEventListener("click", startRange);
document.getElementById("stopRangeBtn").addEventListener("click", stopRange);
//document.getElementById("startAdvertiseBtn").addEventListener("click", startMonitor);

function startRange() {

    var beaconRegion = new cordova.plugins.locationManager.BeaconRegion("regionTest", "74278BDA-B644-4520-8F0C-720EAF059935");

    function click(message) {
        
    }

    var logToDom = function (type, message) {

        var name = message["name"];
        var uuid = message["uuid"];
        var major = message["major"];
        var minor = message["minor"];
        var accuracy = message["accuracy"];
        var rssi = message["rssi"];


        var existBeacon = document.getElementById(message["name"]);
        var br = document.createElement('br');
        var p = document.createElement('p');
        var input = document.createElement('input');

        if (existBeacon != undefined) {

            existBeacon.innerHTML = '<img src = "images/beacon.png" style = "width:15%;height:15%;float:left;margin-right:5%;margin-left:5%;">';

            existBeacon.innerHTML += "name : " + name + "<br>"
                                    + "major : " + major + "<br>"
                                    + "minor : " + minor + "<br>"
                                    + "rssi : " + rssi + "<br>"
                                    + "accuracy : " + accuracy + "<br<br><hr>";
                    
        } else {
            switch (type) {
                case 'EventType':
                    break;
                case 'Region':
                    break;
                case 'Beacons':
                    var beacon = document.createElement('div');
                    beacon.setAttribute("id", name);
                    /*
                    input.type = "image";
                    input.src = "images/beacon.png"
                    input.style.cssText = "width:20%;height:20%;float:left";
                    input.addEventListener('click', function () {
                        click(message);
                    });
                    beacon.appendChild(input);
                    */
                    document.body.appendChild(beacon);
                    break;
            }
        }

        /*
        var e = document.createElement('label');
        e.innerText = message;

        var br = document.createElement('br');
        var br2 = document.createElement('br');


        document.body.appendChild(e);
        document.body.appendChild(br);
        document.body.appendChild(br2);
        */

        window.scrollTo(0, window.document.height);
    };

    var delegate = new cordova.plugins.locationManager.Delegate();

    /*
    delegate.didDetermineStateForRegion = function (pluginResult) {

        logToDom('[DOM] didDetermineStateForRegion: ' + JSON.stringify(pluginResult));

        cordova.plugins.locationManager.appendToDeviceLog('[DOM] didDetermineStateForRegion: '
            + JSON.stringify(pluginResult));
    };

    
    delegate.didStartMonitoringForRegion = function (pluginResult) {
        console.log('didStartMonitoringForRegion:', pluginResult);

        logToDom('didStartMonitoringForRegion:' + JSON.stringify(pluginResult));

    };
    */

    delegate.didRangeBeaconsInRegion = function (pluginResult) {
        logToDom('EventType', pluginResult["eventType"]);
        logToDom('Region', pluginResult["region"]);
        for (var i in pluginResult["beacons"])
            logToDom('Beacons', pluginResult["beacons"][i]);
    };

    //var uuid = '00000000-0000-0000-0000-000000000000';
    //var identifier = 'beaconOnTheMacBooksShelf';
    //var minor = 1000;
    //var major = 5;
    //var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(identifier, uuid, major, minor);

    cordova.plugins.locationManager.setDelegate(delegate);

    // required in iOS 8+
    //cordova.plugins.locationManager.requestAlwaysAuthorization();
    // or cordova.plugins.locationManager.requestAlwaysAuthorization()

    
    /*cordova.plugins.locationManager.startMonitoringForRegion(beaconRegion)
        .fail(function (e) { console.error(e); })
        .done();*/

    
    cordova.plugins.locationManager.startRangingBeaconsInRegion(beaconRegion)
        .fail(function (e) { console.error(e); })
        .done();

    

}

function stopRange() {

    var beaconRegion = new cordova.plugins.locationManager.BeaconRegion("regionTest", "74278BDA-B644-4520-8F0C-720EAF059935");

    cordova.plugins.locationManager.stopRangingBeaconsInRegion(beaconRegion)
        .fail(function (e) { console.error(e); })
        .done();
}

function startMonitor() {
    var logToDom = function (message) {
        var e = document.createElement('label');
        e.innerText = message;

        var br = document.createElement('br');
        var br2 = document.createElement('br');
        document.body.appendChild(e);
        document.body.appendChild(br);
        document.body.appendChild(br2);

        window.scrollTo(0, window.document.height);
    };

    var delegate = new cordova.plugins.locationManager.Delegate();

    delegate.didDetermineStateForRegion = function (pluginResult) {

        logToDom('[DOM] didDetermineStateForRegion: ' + JSON.stringify(pluginResult));

        cordova.plugins.locationManager.appendToDeviceLog('[DOM] didDetermineStateForRegion: '
            + JSON.stringify(pluginResult));
    };

    delegate.didStartMonitoringForRegion = function (pluginResult) {
        console.log('didStartMonitoringForRegion:', pluginResult);

        logToDom('didStartMonitoringForRegion:' + JSON.stringify(pluginResult));
    };

    delegate.didRangeBeaconsInRegion = function (pluginResult) {
        logToDom('[DOM] didRangeBeaconsInRegion: ' + JSON.stringify(pluginResult));
    };

    var beaconRegion = new cordova.plugins.locationManager.BeaconRegion("regionTest", "74278BDA-B644-4520-8F0C-720EAF059935");

    cordova.plugins.locationManager.setDelegate(delegate);

    // required in iOS 8+
    //cordova.plugins.locationManager.requestWhenInUseAuthorization();
    // or cordova.plugins.locationManager.requestAlwaysAuthorization()

    cordova.plugins.locationManager.startMonitoringForRegion(beaconRegion)
        .fail(function (e) { console.error(e); })
        .done();
}

function startAdvertise() { 

    var beaconRegion = new cordova.plugins.locationManager.BeaconRegion("regionTest", "74278BDA-B644-4520-8F0C-720EAF059935");

    // The Delegate is optional
    var delegate = new cordova.plugins.locationManager.Delegate();

    // Event when advertising starts (there may be a short delay after the request)
    // The property 'region' provides details of the broadcasting Beacon
    delegate.peripheralManagerDidStartAdvertising = function (pluginResult) {
        console.log('peripheralManagerDidStartAdvertising: ' + JSON.stringify(pluginResult.region));
    };
    // Event when bluetooth transmission state changes 
    // If 'state' is not set to BluetoothManagerStatePoweredOn when advertising cannot start
    delegate.peripheralManagerDidUpdateState = function (pluginResult) {
        console.log('peripheralManagerDidUpdateState: ' + pluginResult.state);
    };

    cordova.plugins.locationManager.setDelegate(delegate);

    // Verify the platform supports transmitting as a beacon
    cordova.plugins.locationManager.isAdvertisingAvailable()
        .then(function (isSupported) {

            if (isSupported) {
                cordova.plugins.locationManager.startAdvertising(beaconRegion)
                    .fail(conole.error)
                    .done();
            } else {
                console.log("Advertising not supported");
            }
        })
        .fail(function (e) { console.error(e); })
        .done();
}

