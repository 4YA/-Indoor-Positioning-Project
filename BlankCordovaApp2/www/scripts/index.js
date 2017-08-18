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
        window.plugins.PushbotsPlugin.initialize("5989527b4a9efa19fc8b4567", { "android": { "sender_id": "784353059382" } });
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
    }


    function addNotif(vendorID, title, iconURL, information, URL) {
        $("notifList").append(
            "<ul class='event- list'>" + 
                "< li >" +
                "<time datetime=''>" +
                    "<span class='vendor'>" + vendorID + "</span>" +
                "</time>" +
                "<img src='" + iconURL + "' />" +
                "<div class='info'>" +
                    "<h2 class='title'>" + title + "</h2>" +
                    "<p class='desc'>" + information + "</p>" +
                    "<ul>" +
                        "<li style='width:50%;'><a href='" + URL + "'><span class='fa fa-globe'></span>Website</a></li>" +
                    "</ul>" +
                "</div>" +
                "<div class='social'>" +
                    "<ul>" +
                        "<li class='facebook' style='width:33%;'><a href='#facebook'><span class='fa fa-facebook'></span></a></li>" +
                        "<li class='twitter' style='width:34%;'><a href='#twitter'><span class='fa fa-twitter'></span></a></li>" +
                        "<li class='google-plus' style='width:33%;'><a href='#google-plus'><span class='fa fa-google-plus'></span></a></li>" +
                   " </ul>" +
                "</div>" +
                "</li>" +
                       "</ul >");
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


        //closing the img modal by clicking nowhere
        $("#modalFull").click(function () {
            document.getElementById("modalFull").style.display = "none";
        })

        var m_src;
        var m_alt;
        // Modal Image Gallery
        $(".discovered > .discovered-block > .discovered-middle > img").click(function () {
            document.getElementById("imgFull").src = this.src;
            document.getElementById("modalFull").style.display = "block";
            var captionText = document.getElementById("caption");
            captionText.innerHTML = this.alt;
            m_src = this.src;
            m_alt = this.alt;
        })

        //append my exhibition
        document.getElementById("signIn").addEventListener("click", function () {
            document.getElementById("myExhibition").innerHTML += '<div class="discovered-item" >' +
                '<img src=' + m_src + ' class="img-rounded img-responsive" alt=' + m_alt + ' />'
        }, false)

        /* //moving notification btn by dragging
        var cursorX;
        var cursorY;
        var isMouseDown; //0 for up 1 for down

        $("#notifBtn").mousedown(function () {
            isMouseDown = true;
        })

        $("#notifBtn").mouseup(function () {
            isMouseDown = false;
        })

        document.onmousemove = function (e) {
            cursorX = e.pageX - 20;
            cursorY = e.pageY - 20;
            if (cursorX <= 0)
                cursorX = 0;
            if (cursorY <= 50)
                cursorY = 50;
            if (cursorX >= 310)
                cursorX = 310;
            if (cursorY >= 590)
                cursorY = 590;
            if (isMouseDown) {
                $("#notifBtn").css("left", cursorX + "px");
                $("#notifBtn").css("top", cursorY + "px");
            }
        }

        function allowDrag(e) {
            e.preventDefault();
        }*/
    }
})();

