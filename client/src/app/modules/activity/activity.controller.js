/* @ngInject */
function ActivityCtrl($scope, $stateParams, $timeout, ionicMaterialMotion, $state) {
    let vm = this;
    localStorage.setItem('appState', $state.current.name);

    activate();

    function activate() {
        $timeout(function() {
            ionicMaterialMotion.fadeSlideIn({
                selector: '.animate-fade-slide-in .item'
            });
        }, 200);
    }
}

export default ActivityCtrl;