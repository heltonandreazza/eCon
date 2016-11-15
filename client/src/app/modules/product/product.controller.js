class ProductCtrl {
    /* @ngInject */
    constructor($scope, $stateParams, $timeout, ngFB, ionicMaterialMotion, ionicMaterialInk, $state, productSvc, commonSvc) {
        this.$scope = $scope;
        this.$stateParams = $stateParams;
        this.$timeout = $timeout;
        this.ionicMaterialMotion = ionicMaterialMotion;
        this.ionicMaterialInk = ionicMaterialInk;
        this.$state = $state;
        this.productSvc = productSvc;
        this.commonSvc = commonSvc;

        this.activate();
        this.product = {};

        // this.product.image = 'https://cdn.filestackcontent.com/67w1jBMiS0il3Yos9X1w';
        // document.getElementById("myImg").src = 'https://cdn.filestackcontent.com/67w1jBMiS0il3Yos9X1w';
        localStorage.setItem('appState', this.$state.current.name);
    }


    activate() {
        this.loadCategories();
        this.$scope.$watch('vm.img', (n, o) => {
            console.log(n, o);
        });
        this.ionicMaterialInk.displayEffect();
    }

    loadCategories() {
        this.productSvc.getCategories()
            .then(categories => this.categories = categories);
    }

    upload() {
        filepicker.pick({
                mimetype: 'image/*',
                container: 'window',
                services: ['COMPUTER', 'FACEBOOK', 'INSTAGRAM', 'GOOGLE_DRIVE', 'DROPBOX']
            },
            (image) => {
                document.getElementById("myImg").src = image.url;
                this.product.image = image.url;
                console.log(this.product.image)
                console.log(image);
            },
            (FPError) => {
                console.log(FPError.toString());
            });
    }

    goCart() {
        this.$state.go('app.cart');
    }

    goBrewery(id) {
        this.$state.go('app.profile', { id: id });
    }

    createProduct(product) {
        this.commonSvc.getBreweryByOwner()
            .then(brewery => {
                if (brewery) {
                    this.productSvc.createProduct(brewery, product)
                        .then(data => this.$state.go('app.myprofile'));
                }
            });
    }
}

export default ProductCtrl;