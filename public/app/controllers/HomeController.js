app.controller('HomeController', function ($scope, $http) {

    $scope.insert = {};
    $scope.ipaddress = '';
    $scope.browser = '';
    $scope.comments = [];


    function getBrowserName() {

        let userAgent = navigator.userAgent;
        let browserName;

        if (userAgent.match(/chrome|chromium|crios/i)) {
            browserName = "chrome";
        } else if (userAgent.match(/firefox|fxios/i)) {
            browserName = "firefox";
        } else if (userAgent.match(/safari/i)) {
            browserName = "safari";
        } else if (userAgent.match(/opr\//i)) {
            browserName = "opera";
        } else if (userAgent.match(/edg/i)) {
            browserName = "edge";
        } else {
            browserName = "No browser detection";
        }

        return browserName;
    }

    $scope.insertData = function () {

        try {
            $http.get('https://api.ipify.org?format=json').then(function (data) {
                $scope.insert.ipaddress = data.data.ip;
            })
        } catch (e) {
        }


        $scope.insert.browser = getBrowserName();
        setTimeout(() => {
            $http({
                method: "POST",
                url: "/store",
                data: $scope.insert
            });
            location.reload();
        }, 1000)

    }

});
