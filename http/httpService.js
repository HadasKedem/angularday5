
    
module.constant("urlConst", {
    url : "https://jsonplaceholder.typicode.com/posts"
})
module.value("dataService", {
    dataArr : []
})

// Simple GET request example

    module.factory("httpService", function($http,urlConst) {
        return {
            getAll: function() {
                return $http.get(urlConst.url).then(function(response) {
                    console.log(response);
                    return response.data;
                },
                function error(){
                    alert("hey wow, didnt get there");
                });
            },
            getByID: function(id) {
                return $http.get(urlConst.url+ "/" + id).then(function(response) {
                    console.log(response);
                    return response.data;
                },
                function error(){
                    alert("hey wow, didnt get there");
                });
            }
        }
    })

    