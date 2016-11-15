/* @ngInject */
class ProfileCtrl {
    constructor($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, $state, profileSvc, commonSvc) {
        localStorage.setItem('appState', $state.current.name);

        this.$stateParams = $stateParams;
        this.$timeout = $timeout;
        this.ionicMaterialMotion = ionicMaterialMotion;
        this.ionicMaterialInk = ionicMaterialInk;
        this.$state = $state;
        console.log(this.$state.current.name)
        this.$scope = $scope;
        this.profileSvc = profileSvc;
        this.commonSvc = commonSvc;

        // Set Header
        this.$scope.$parent.showHeader();
        this.$scope.$parent.clearFabs();
        this.$scope.isExpanded = false;
        this.$scope.$parent.setExpanded(false);
        this.$scope.$parent.setHeaderFab(false);

        this.id = $stateParams.id;

        this.activate();
    }

    activate() {
        this.loadBrewery();

        // Set Ink
        this.ionicMaterialInk.displayEffect();
    }

    loadBrewery() {
        if (this.id) {
            this.commonSvc.getBrewery(this.id)
                .then(brewery => {
                    this.brewery = brewery;
                    this.loadBeers(this.id);
                });
        } else {
            this.commonSvc.getBreweryByOwner()
                .then(brewery => {
                    this.brewery = brewery;
                    this.id = this.brewery._id;
                    this.loadBeers(this.id);
                });
        }
    }

    loadBeers(id) {
        this.profileSvc.getProducts(id)
            .then(beers => {
                this.beers = beers;

                this.beers.forEach(o => o.quantity = 0);
                // Set Motion
                this.setMotion();
            });

    }

    addToCart(beer) {
        if (beer.quantity > 0) {
            this.commonSvc.addToCart(beer)
                .then(response => console.log(response));
        }
    }

    goCart() {
        this.$state.go('app.cart');
    }

    goAbout() {
        this.$state.go('app.about', { about: 'brewery', id: this.brewery._id });
    }

    goNewProduct() {
        this.$state.go('app.product');
    }

    setMotion() {
        this.$timeout(() => {
            this.ionicMaterialMotion.slideUp({
                selector: '.slide-up'
            });
        }, 300);

        this.$timeout(() => {
            this.ionicMaterialMotion.fadeSlideInRight({
                startVelocity: 3000
            });
        }, 700);
    }
}

export default ProfileCtrl;