// 如需空白範本的簡介，請參閱下列文件: 
// http://go.microsoft.com/fwlink/?LinkID=397704
// 若要對 cordova-simulate 中頁面載入上或 Android 裝置/模擬器上的程式碼偵錯: 啟動應用程式、設定中斷點、
// 然後在 JavaScript 主控台中執行 "window.location.reload()"。
(function () {
    "use strict";
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // 處理 Cordova 暫停與繼續事件
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        // TODO: Cordova 已載入。請在這裡執行任何需要 Cordova 的初始化作業。
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        $("#initial").fadeOut("slow");
        $("#loaded").fadeIn("slow");
        $("#discovered").fadeIn("slow");
    };

     function discovered() {
        $("#discovered").fadeIn("slow");
        $("#record").fadeOut("slow");
        $("#add").fadeOut("slow");
    }

    function record() {
        $("#discovered").fadeOut("slow");
        $("#record").fadeIn("slow");
        $("#add").fadeOut("slow");
    }

    function add() {
        $("#discovered").fadeOut("slow");
        $("#record").fadeOut("slow");
        $("#add").fadeIn("slow");


        window.open("step1.html");
    }

    

   
    function onPause() {
        // TODO: 這個應用程式已暫停。請在這裡儲存應用程式狀態。
    };

    function onResume() {
        // TODO: 這個應用程式已重新啟動。請在這裡還原應用程式狀態。
    };


    window.onload = function () {
        document.getElementById("discoveredBtn").addEventListener("click", discovered, false);
        document.getElementById("recordBtn").addEventListener("click", record, false);
        document.getElementById("addBtn").addEventListener("click", add, false);

        

        $("#modalFull").click(function () {
            document.getElementById("modalFull").style.display = "none";
        })

        var m_src;
        var m_alt;
        // Modal Image Gallery
        $("img").click(function () {
            document.getElementById("imgFull").src = this.src;
            document.getElementById("modalFull").style.display = "block";
            var captionText = document.getElementById("caption");
            captionText.innerHTML = this.alt;
            m_src = this.src;
            m_alt = this.alt;
        })

        document.getElementById("signIn").addEventListener("click", function () {
            document.getElementById("myExhibition").innerHTML += '<div class="discovered-item" >' +
                '<img src=' + m_src + ' class="img-rounded img-responsive" alt=' + m_alt + ' />'
        }, false)

    }
    

   
})();

  