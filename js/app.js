(function(){
	var app = angular.module("store",[]);
	app.config(['$sceProvider',function($sceProvider){
    $sceProvider.enabled(false);
	}]);
	var css1 = {
		boot:"bower_components/bootstrap/dist/css/bootstrap.min.css",
		my:"mystyle.css"
	};
	var gem = [
		{
			name:'tarun', 
			age:22,
			image:"mypic.jpg"
		},
		{
			name:'raja',
			age:22,
			image:"mypic.jpg"
		}
		];
	var head = {
		heading:"blog"
	}
	var nav =[
		{ 
			name :"Home",
			url : "index.html"

		},
		{
			name:"About",
			url : "about.html"
		},
		{
			name:"Photography",
			url : "photo.html"
		},
		{
			name:"Contact",
			url : "contact.html"
		},{
			name:"Blog",
			url : "blog.html"
		}
		];
	var footnav =[
		{ 
			name :"Home",
			url : "index.html"

		},
		{
			name:"About",
			url : "about.html"
		},
		{
			name:"Photography",
			url : "photo.html"
		},
		{
			name:"Contact",
			url : "contact.html"
		},{
			name:"Blog",
			url : "blog.html"
		}
		];
	var photos = [
		{
			name:"nature1",
			url:"https://s3.amazonaws.com/tarunblog/nature1.JPG",
			GPSAltitude: "403.0 m",
			ShutterSpeedValue: "1/60 s",
			FocalLength: "4.2 mm",
			DateTimeDigitized: "2015:10:31 14:02:04",
			ApertureValue: "F2.2"
		},
		{
			name:"nature2",
			url:"https://s3.amazonaws.com/tarunblog/nature2.JPG",
			ShutterSpeedValue: "1/30 s",
			FocalLength: "4.2 mm",
			DateTimeDigitized: "2015:09:26 19:09:10",
			ApertureValue: "F2.2",
			GPSAltitude: "443.4 m"
		},
		{
			name:"nature3",
			url:"https://s3.amazonaws.com/tarunblog/nature3.JPG",
			ShutterSpeedValue: "1/30 s",
			FocalLength: "4.2 mm",
			DateTimeDigitized: "2015:09:27 13:07:29",
			ApertureValue: "F2.2",

		},
		{
			name:"nature4",
			url:"https://s3.amazonaws.com/tarunblog/nature4.JPG",
			ShutterSpeedValue: "1/15 s",
			PixelXDimension: "3264",
			FocalLength: "4.2 mm",
			DateTimeDigitized: "2015:08:30 19:38:48",
			ApertureValue: "F2.2",
			GPSAltitude: "0 m"


		},
		{
			name:"nature5",
			url:"https://s3.amazonaws.com/tarunblog/nature5.JPG",
			ShutterSpeedValue: "1/1522 s",
			PixelXDimension: "3264",
			FocalLength: "4.2 mm",
			DateTimeDigitized: "2015:10:11 15:30:48",
			ApertureValue: "F2.2",
			GPSAltitude: "403.6 m"

		},
		{
			name:"nature6",
			url:"https://s3.amazonaws.com/tarunblog/nature6.JPG",
			ShutterSpeedValue: '1/120 s',
			FocalLength: '4.2 mm',
			DateTimeDigitized: '2015:08:31 14:11:35',
			ApertureValue: 'F2.2',
			GPSAltitude: '253.8 m'


		},	
		{
			name:"nature7",
			url:"https://s3.amazonaws.com/tarunblog/nature7.JPG",
			ShutterSpeedValue: "1/30 s",
			FocalLength: "4.2 mm",
			DateTimeDigitized: "2015:10:28 18:17:45",
			ApertureValue: "F2.2",
			GPSAltitude: "268.0 m"

		},
		{
			name:"nature8",
			url:"https://s3.amazonaws.com/tarunblog/nature8.JPG",
			ShutterSpeedValue: "1/120 s",
			FocalLength: "4.2 mm",
			DateTimeDigitized: "2015:08:31 14:11:57",
			ApertureValue: "F2.2",
			GPSAltitude: "252.9 m"

		},
		{
			name:"nature9",
			url:"https://s3.amazonaws.com/tarunblog/nature9.JPG",
			ShutterSpeedValue: "1/30 s",
			FocalLength: "4.2 mm",
			DateTimeDigitized: "2015:09:20 18:52:04",
			ApertureValue: "F2.2"
		}																		
	];
	var mydata = {
		name: "Tarun Raja",
		college : "SUNY Binghamton",
		mypic :"https://s3.amazonaws.com/tarunblog/mypic.jpg"

	};
	var career = [
  {
    "title": "Ten Career Moves To Make Before 2016",
    "content": "We are two months from the end of the year - the perfect time to start thinking about your 2016 career plans!Here are ten career moves to make now, before year-end fever and the holidays overtake us.",
    "url": "http://www.forbes.com//sites//lizryan//2015//10//27//ten-career-moves-to-make-before-2016//"
  },
  {
    "title": "Eight Things Job-Seekers Are Sick Of Hearing",
    "content": "Job seekers put up with a lot of grief. They take a tremendous amount of abuse from thoughtless recruiters and clueless corporate interviewers.",
    "url": "http://www.forbes.com//sites//lizryan//2015//10//25//eight-things-job-seekers-are-sick-of-hearing//"
  },
  {
    "title": "If Hard Work Doesn't Guarantee Success, What Does?",
    "content": "For decades we heard that hard work was the number-one factor in a person's success or failure, in business or in any other arena.",
    "url": "https://www.linkedin.com//pulse//hard-work-doesnt-guarantee-success-what-does-liz-ryanfsd"
  }
];
	var contact ={

	};
	var articles = [
		{
			img:"http://graphics8.nytimes.com/images/2015/11/06/us/00mississippi3/00mississippi3-sfSpan.jpg",
			des:"With the closing of the polls on Tuesday night, what could turn out to be last battle over the Confederate battle flag in Mississippi has begun in earnest."
		}	
	];
	var fonts = ["https://fonts.googleapis.com/css?family=Pacifico", 
					"https://fonts.googleapis.com/css?family=Arizonia",
					"https://fonts.googleapis.com/css?family=Great+Vibes",
					"https://fonts.googleapis.com/css?family=Monoton",
					"https://fonts.googleapis.com/css?family=Londrina+Solid",
					"https://fonts.googleapis.com/css?family=Raleway",
					"https://fonts.googleapis.com/css?family=Bubblegum+Sans",
					"https://fonts.googleapis.com/css?family=Spinnaker",
					];
	var fonts1 = {   "fa":"https://fonts.googleapis.com/css?family=Pacifico", 
					"fb":"https://fonts.googleapis.com/css?family=Arizonia",
					"fc":"https://fonts.googleapis.com/css?family=Great+Vibes",
					"fd":"https://fonts.googleapis.com/css?family=Monoton",
					"fe":"https://fonts.googleapis.com/css?family=Londrina+Solid",
					"ff":"https://fonts.googleapis.com/css?family=Raleway",
					"fg":"https://fonts.googleapis.com/css?family=Bubblegum+Sans",
					"fh":"https://fonts.googleapis.com/css?family=Spinnaker",
					"fi":"https://fonts.googleapis.com/css?family=Roboto+Condensed"
					};
  	var usercomments = [];
	var mywork = {
		email:"rajatarun12@gmail.com",
		linkedin:"https://www.linkedin.com/in/tarunraja1",
		github:"https://github.com/rajatarun",
		facebook:"https://www.facebook.com/studentconnect"
	};

	app.controller("NewsController",function($scope,$http){
		$http.get("http://api.nytimes.com/svc/news/v3/content/all/world/1.json?limit=50&api-key=14ffa0c3d5869d898956dbae65bd5601%3A4%3A72071069")
   		.success(function (response) {$scope.names = response.records;
   			$scope.data = response;});
   		this.product = career;
   		$scope.singleSelect = 'title';
   		$scope.select = function(){
   			return $scope.singleSelect;
   		};
   		$scope.count = 0;
   		$scope.getCount = function(){
   			return $scope.count();
   		}

	});

   	app.controller('FormController', function($scope) {
     $scope.master= {};

     $scope.update = function(user) {
       // Example with 1 argument
       $scope.master= $scope.master.push({user:$scope.user.name});
     };
     var masterget=function(){
     	return master;
     };
     $scope.reset = function() {
       // Example with 2 arguments
       $scope.user = angular.copy($scope.master);
     };

     $scope.reset();
   });
	app.controller("VideoController",function($scope,$http){
		$http.get("https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,player,statistics&chart=mostPopular&key=AIzaSyDjP5XAHXD4VfjbfpAzK5n3RB5sp0xl7KM")
   		.success(function (response) {
   			$scope.data = response;});
   		this.product = "http://www.youtube.com/embed/";
	});
	app.controller("FontController",function(){
		//this.product = fonts[Math.floor((Math.random() * fonts.length))];
		this.product = fonts1.fi;
	});
	app.controller("BodyFontController",function(){
		this.product = fonts1;
	});
	app.controller("MyWorkController",function(){
		this.product = mywork;
	});
	app.controller("MyDataController",function(){
		this.product = mydata;
	});
	app.controller("ArticleController",function(){
		this.product= articles;
	});
	app.controller("ContactController",function(){
		this.product = contact;
	});
	app.controller("PhotoController",function(){
		this.product = photos;
	});
	app.controller("NavController",function(){
		this.product = nav;
	});
	app.controller("FooterNavController",function(){
		this.product = footnav;
	});
	app.controller("HeadingController",function(){
		this.product = head;
	});
	app.controller("CssController",function(){
		this.product = css1;
	});
	app.controller("StoreController",function(){
		this.product = gem;
	});
	app.controller("CalcController",function($scope){
		$scope.val = function(inp){
			$scope.value += inp.toString();
		}
	});


})();
