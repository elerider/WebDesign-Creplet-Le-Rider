'use strict';
angular.module('fifaBallonDorApp')
  .controller('GraphCtrl' , function ($scope,$http) {
    var vote;
    var ronaldo = 0;
    var messi = 0;
    var ribery = 0;
    var autres = 0;
    var ronaldo2 = 0;
    var messi2 = 0;
    var ribery2 = 0;
    var autres2 = 0;
    var ronaldo3 = 0;
    var messi3 = 0;
    var ribery3 = 0;
    var autres3 = 0;
    var getVoies = function(){
        $http.get('http://public.opendatasoft.com/api/records/1.0/search?dataset=resultat_ballon_d_or_2014&rows=1623&facet=vote&facet=country&facet=joueur&facet=point&facet=continent&facet=poste&facet=club').success(function(data){
          vote = data;
          $scope.val = data.nhits;

        });
    };
    var value = 300;
    getVoies();
    
     
    
    var setBar= function(chart,dataTest){
        var ctx = document.getElementById(chart).getContext("2d");
        var myNewChart = new Chart(ctx).Bar(dataTest);
        new Chart(ctx).Bar(dataTest, { scaleFontColor: "white"});

    }
    var setChart = function(chart,dataTest){
      var ctx = document.getElementById(chart).getContext("2d");
        var myNewChart = new Chart(ctx).Pie(dataTest);
        new Chart(ctx).Pie(dataTest);
    };
    $scope.getChart = function(){
        ronaldo=0;
        ronaldo2=0;
        ronaldo3=0;
        messi=0;
        messi2=0;
        messi3=0;
        ribery=0;
        ribery2=0;
        ribery3=0;
        for (var i = 0; i < vote.nhits; i++) {
          if(vote.records[i]){
            if(vote.records[i].fields.point == 5){
              if(vote.records[i].fields.joueur == "Cristiano Ronaldo" ){
                ronaldo++;
              }
              if(vote.records[i].fields.joueur == "Messi Lionel" ){
                messi++;
              }
              if(vote.records[i].fields.joueur == "Ribéry Franck"){
                ribery++;
              }
              else{
                autres++;
              }
            }
            if(vote.records[i].fields.point == 3){
              if(vote.records[i].fields.joueur == "Cristiano Ronaldo" ){
                ronaldo2++;
              }
              if(vote.records[i].fields.joueur == "Messi Lionel" ){
                messi2++;
              }
              if(vote.records[i].fields.joueur == "Ribéry Franck"){
                ribery2++;
              }
              else{
                autres2++;
              }
            }
            if(vote.records[i].fields.point == 1){
              if(vote.records[i].fields.joueur == "Cristiano Ronaldo" ){
                ronaldo3++;
              }
              if(vote.records[i].fields.joueur == "Messi Lionel" ){
                messi3++;
              }
              if(vote.records[i].fields.joueur == "Ribéry Franck"){
                ribery3++;
              }
              else{
                autres3++;
              }
            }
            
          }
        };
        var dataTest = [
        {value : ronaldo,color: "#C7604C"},
        {value : messi,color: "#21323D"},
        {value : ribery,color: "#9D9B7F"},
        {value : autres,color: "#7D4F6D"}];

        var dataTest2 = [
        {value : ronaldo2,color: "#C7604C"},
        {value : messi2,color: "#21323D"},
        {value : ribery2,color: "#9D9B7F"},
        {value : autres2,color: "#7D4F6D"}];

        var dataTest3 = [
        {value : ronaldo3,color: "#C7604C"},
        {value : messi3,color: "#21323D"},
        {value : ribery3,color: "#9D9B7F"},
        {value : autres3,color: "#7D4F6D"}];

        var dataTest4 = {
          labels : ["Cristiano Ronaldo","Lionel Messi","Franck Ribéry"],
          datasets : [
            {
              fillColor : "rgba(220,70,70,0.5)",
              strokeColor : "rgba(230,230,230,1)",
              data : [(ronaldo+ronaldo2+ronaldo3),(messi+messi2+messi3),(ribery+ribery2+ribery3)]
            },
            {
              fillColor : "rgba(151,187,205,0.5)",
              strokeColor : "rgba(151,187,205,1)",
              data : [ronaldo,messi,ribery]
            },
            {
              fillColor : "rgba(120,200,100,0.5)",
              strokeColor : "rgba(151,187,205,1)",
              data : [ronaldo2,messi2,ribery2]
            },
            {
              fillColor : "rgba(120,120,205,0.5)",
              strokeColor : "rgba(151,187,205,1)",
              data : [ronaldo3,messi3,ribery3]
            }
          ]
        };

        setChart("myChart1",dataTest);
        setChart("myChart2",dataTest2);
        setChart("myChart3",dataTest3);
        setBar("myChart4",dataTest4);
    };
    // Custom namespace
var modal = {};
modal.hide = function() {
  $('#overlay').fadeOut();
  $('.dialog').fadeOut();
};

$(document).ready(function() {
  // Open appropriate dialog when clicking on anything with class "dialog-open"
  $('.dialog-open').click(function() {
    modal.id = '#dialog-' + this.id;
    $('#overlay').fadeIn();
    $(modal.id).fadeIn();
  });
  // Close dialog when clicking on the "ok-dialog"
  $('.ok-dialog').click(function() {
    modal.hide();
  });
  // Require the user to click OK if the dialog is classed as "modal"
  $('#overlay').click(function() {
    if ($(modal.id).hasClass('modal')) {
      // Do nothing
    } else {
      modal.hide();
    }
  });
  // Prevent dialog closure when clicking the body of the dialog (overrides closing on clicking overlay)
  $('.dialog').click(function() {
    event.stopPropagation();
  });
});
    $scope.test = 15;
    
  });