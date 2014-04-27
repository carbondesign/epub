angular.module('myApp.controllers', []).
controller('FeatureCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('json/features.json')
	.then(function(res){
		$scope.features = res.data;
		$scope.predicate = '';
     	//poorly written
     	$scope.epub_partial = [];
     	$scope.epub_no = [];
     	$scope.pdf_partial = [];
     	$scope.pdf_no = [];
     	$scope.replica_partial = [];
     	$scope.replica_no = [];
     	$scope.app_partial = [];
     	$scope.app_no = [];
     	$scope.html_partial = [];
     	$scope.html_no = [];

		
		$scope.checkTotal = function (index){
			if($scope.features[index].EPUB == "partially"){
				$scope.epub_partial.push(
					$scope.features[index].EPUB
					)				
			}else if($scope.features[index].EPUB == "no"){
				$scope.epub_no.push(
					$scope.features[index].EPUB
					);
			}
			if($scope.features[index].PDF == "partially"){
				$scope.pdf_partial.push(
					$scope.features[index].PDF
					);				
			}else if($scope.features[index].PDF == "no"){
				$scope.pdf_no.push(
					$scope.features[index].PDF
					);
			}
			if($scope.features[index].Replica == "partially"){
				$scope.replica_partial.push(
					$scope.features[index].Replica
					);				
			}else if($scope.features[index].Replica == "no"){
				$scope.replica_no.push(
					$scope.features[index].Replica
					);
			}
			if($scope.features[index].App == "partially"){
				$scope.app_partial.push(
					$scope.features[index].App
					);				
			}else if($scope.features[index].App == "no"){
				$scope.app_no.push(
					$scope.features[index].App
					);
			}
			if($scope.features[index].HTML == "partially"){
				$scope.html_partial.push(
					$scope.features[index].HTML
					);				
			}else if($scope.features[index].HTML == "no"){
				$scope.html_no.push(
					$scope.features[index].HTML
					);

			};

		}	
	});
}])
.controller('DeviceCtrl', [function($scope, $http) {
	$http.get('json/device.json')
	.then(function(res){
		$scope.device = res.data;
		$scope.deviceModel = function () {	
				//might fix this with a do while ? runs three times				
				$scope.checkTotal();

				var deviceList = ["yes","yes","yes", "yes", "yes"];
				if ($scope.deviceDesktop == true){
					deviceList.splice(3, 1, "no");  						 
				}if ($scope.devicePhone == true){
					deviceList.splice(1, 1, "no"); deviceList.splice(2, 1, "no");
					if(deviceList[2]=="yes"){deviceList.splice(2, 1, "depends");}
				}if ($scope.deviceTablet == true){
					if(deviceList[1]=="yes"){deviceList.splice(1, 1, "depends"); deviceList.splice(2, 1, "depends");}
				};

			return	deviceList; 
		};
	})
}])


				

