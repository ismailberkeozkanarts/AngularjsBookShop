var app = angular.module("myModule", [])
				.controller("myController", function($scope){
				$scope.sepetler=[];
				$scope.urunler = [
					{u_id: "1", u_name: "Milenaya Mektuplar", u_image: "images/1.png", u_price: 28},
					{u_id: "2", u_name: "Semaver", u_image: "images/2.png", u_price: 38},
					{u_id: "3", u_name: "Yer Altından Notlar", u_image: "images/3.png", u_price: 45},
					{u_id: "4", u_name: "Bilinmeyen Bir Kadının Mektubu", u_image: "images/4.png", u_price: 58},
					{u_id: "5", u_name: "Uçurtma Avcısı", u_image: "images/5.png", u_price: 21},
					{u_id: "6", u_name: "Suç ve Ceza", u_image: "images/6.png", u_price: 73}
				];
	
				$scope.add_sepet = function(urun){
					if(urun){
						$scope.sepetler.push({u_id: urun.u_id, u_name: urun.u_name, u_price: urun.u_price});
					}	
				}
						
					
				$scope.toplam = 0;
				
				$scope.settoplamlar = function(sepet){
					if(sepet){
						$scope.toplam += sepet.u_price;
					}
				}
				
				$scope.remove_sepet = function(sepet){
					if(sepet){
						$scope.sepetler.splice($scope.sepetler.indexOf(sepet), 1);
						$scope.toplam -= sepet.u_price;
					}
				}
	});