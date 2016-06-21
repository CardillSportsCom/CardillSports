angular.module('cardillApp').controller('RedditController', [
    '$scope',
    '$sce',
    'reddit',
    'angularGridInstance',
    function($scope, $sce, reddit, angularGridInstance){   
    	$scope.vit = "raNCvto";
        $scope.anu = "https://imgur.com/raNCvto";        
    	$scope.getStreamableUrl = function (streamableSrc) {
            var splits = streamableSrc.split("/");
            return $sce.trustAsResourceUrl("https://streamable.com/e/" + splits[3] + "?muted=1&amp;autoplay=1");
		};
        $scope.getImgurDataId = function (imgurSrc) {
            var splits = imgurSrc.split("/");
            return splits[3];        
        };
        $scope.getImgurUrl = function (imgurSrc) {            
            var splits = imgurSrc.split("/");
            return "https://imgur.com/" + splits[3];
        };

        $scope.getImgurDirectUrl = function (imgurSrc) {            
            var splits = imgurSrc.split("/");        
            return "http://i.imgur.com/" + splits[3] + ".jpg";
        };

        $scope.getYoutubeEmbedUrl = function (youtubeSrc) {
            var splits = youtubeSrc.split("/");              
            return $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + splits[3]);
        };    	
        $scope.posts = reddit.posts.filter(function(post) {
            var result = post.data.domain == "imgur.com"
                    || post.data.domain == "i.imgur.com"
                    || post.data.domain == "m.imgur.com"
                    || post.data.domain == "youtu.be"
                    || post.data.domain == "youtube.com"
                    || post.data.domain == "streamable.com";

            if (result == false) {
                console.log("UNHANDLED DOMAIN: " + post.data.url);
            } 
            return result;
        });
        $scope.after = reddit.after;
        console.log("REDDIT AFTER: " + JSON.stringify($scope.after));

        //apply filter based on type
        $scope.showPostsofType  = function(){
            $scope.imageList = imageList.filter(function () {
                return obj.type == type;
            });
        }
        $scope.refresh = function(){
            angularGridInstance.gallery.refresh();
        }

        //method to load next data
        $scope.loadMore = function(){            
            reddit.getMore(reddit.after.after).then(function(nextPagePosts){
                $scope.posts = reddit.posts.filter(function(post) {
                    var result = post.data.domain == "imgur.com"
                            || post.data.domain == "i.imgur.com"
                            || post.data.domain == "m.imgur.com"
                            || post.data.domain == "youtu.be"
                            || post.data.domain == "youtube.com"
                            || post.data.domain == "streamable.com";
            
                    return result;
                });
            });
        };
    }]
);