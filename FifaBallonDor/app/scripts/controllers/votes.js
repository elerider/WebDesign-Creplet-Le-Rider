'use strict';
angular.module('fifaBallonDorApp')
  .controller('VotesCtrl' , function ($scope,$http) {
    var getVoies = function(start){

        $http.get('http://public.opendatasoft.com/api/records/1.0/search?dataset=resultat_ballon_d_or_2014&rows=30&start=' + start + 
        	'&facet=joueur&facet=point&facet=poste&facet=club&facet=name&facet=vote&facet=country&facet=continent').success(function(data){
            $scope.voies = data;
        });
    };
    $scope.getVoies = getVoies;
    $scope.page = 0;
    getVoies($scope.page);
    $scope.buttonPagination1 = 1;
    $scope.buttonPagination2 = 2;
    $scope.buttonPagination3 = 3;
    $scope.buttonPagination4 = 4;
    $scope.buttonPagination5 = 5;
    var buttonPaginationActualisation = function(page){
        if(page < 3){
            $scope.buttonPagination1 = 1;
            $scope.buttonPagination2 = 2;
            $scope.buttonPagination3 = 3;
            $scope.buttonPagination4 = 4;
            $scope.buttonPagination5 = 5;
        }
        else if( page > (Math.ceil($scope.voies.nhits/$scope.voies.parameters.rows)-2)){
                $scope.buttonPagination1 = (Math.ceil($scope.voies.nhits/$scope.voies.parameters.rows)-4);
                $scope.buttonPagination2 = Math.ceil($scope.voies.nhits/$scope.voies.parameters.rows)-3;
                $scope.buttonPagination3 = Math.ceil($scope.voies.nhits/$scope.voies.parameters.rows)-2;
                $scope.buttonPagination4 = Math.ceil($scope.voies.nhits/$scope.voies.parameters.rows)-1;
                $scope.buttonPagination5 = Math.ceil($scope.voies.nhits/$scope.voies.parameters.rows);
             }
        else{
            $scope.buttonPagination1 = $scope.page - 2;
            $scope.buttonPagination2 = $scope.page- 1;
            $scope.buttonPagination3 = $scope.page ;
            $scope.buttonPagination4 = $scope.page + 1;
            $scope.buttonPagination5 = $scope.page + 2;
        }
    };
    buttonPaginationActualisation(0);

    $scope.ajouter = function(newquote){
    	newquote.date = new Date();
        $http.post('http://192.168.14.138:9292/quotes/quotes',newquote)
            .success(function(){
                $scope.newquote = {};
                getQuotes();
            });
    };
    $scope.selectionPage = function(page){ 
        $scope.page = Math.ceil(page);
        console.info($scope.page);
        console.info('start prev '+$scope.voies.parameters.start);
    	getVoies($scope.page * 30);
        buttonPaginationActualisation($scope.page);
    };
    
    $scope.nextPage = function(){
        if( ( ($scope.voies.parameters.rows) * ($scope.page) ) < ( $scope.voies.nhits-31)){
            $scope.page++;
            console.info($scope.page);
        console.info('start prev '+$scope.voies.parameters.start);
            getVoies($scope.page * 30);
            buttonPaginationActualisation($scope.page);
        }
    };
    
    $scope.previousPage = function(){
        if( ( ($scope.voies.parameters.rows) * ($scope.page) ) > ($scope.voies.parameters.rows -1) ){
          
            $scope.page--;
        console.info('start prev '+$scope.voies.parameters.start);
            getVoies($scope.page * 30);
            buttonPaginationActualisation($scope.page);
        }
    };

    $scope.toggleSort = function(index) {
        console.info(index);
    if($scope.sortColumn === ("fields."+$scope.voies.parameters.facet[index])){
        $scope.reverse = !$scope.reverse;
    }                    
        $scope.sortColumn = "fields."+$scope.voies.parameters.facet[index];
    };

    $scope.searchValue = function(value){
        console.info("click search");
        var elem = document.getElementById('searchInput');
        elem.value = value;
    }

  });