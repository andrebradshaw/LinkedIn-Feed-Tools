//this will scroll through the first thousand items in your LinkedIn feed and click like if the feed item is the from the original poster 
//(ignores likes, follows, adverts)

var doc = document;
var socialBar = doc.getElementsByClassName('feed-shared-social-actions feed-shared-social-action-bar ember-view');
function feedReader(obj, n) {
      setTimeout(() => {
        doc.getElementById(obj.getAttribute('id')).scrollIntoView();
        var likeBtn = obj.getElementsByTagName('button')[0];
		var btnStatus = obj.getElementsByClassName('visually-hidden')[0].innerText;
		if(btnStatus == 'Like' && obj.parentElement.firstElementChild.getAttribute('class') != 't-12 t-black--light t-normal ph4 pt3 pb2 feed-shared-header feed-shared-header--with-control-menu ember-view'){
			likeBtn.click();
			console.log(obj.parentElement.firstElementChild.innerText);
		}
      }, ((n + 1) * 2500));
    }
for(i=0; i<1001; i++){
	feedReader(socialBar[i], i);
}
