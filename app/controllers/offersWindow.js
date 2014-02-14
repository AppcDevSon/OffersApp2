var api = require('api');
var data = [];
var alldata = [];
var parentTab;
exports.setTab = function(t) {
	parentTab = t;
};
api.showRow({
	order : "title"
}, function(e) {
	if (e.success) {
		//alert("Done");
		Ti.API.info(JSON.stringify(e));
		for (var i = 0; i < e.posts.length; i++) {
			var post = e.posts[i];
			//alert(post.title);

			var row = Ti.UI.createTableViewRow({
				backgroundColor : "#ffffff",
				height : Ti.UI.SIZE,
				width : Ti.UI.SIZE,
				title : post.id,
				//width : 300,
				//height : 100
			});
			var viewRow = Ti.UI.createView({
				top : 0,
				height : Ti.UI.SIZE,
				width : Ti.UI.SIZE,
				left : 0

			});

			// Create an ImageView.
			var imgView = Ti.UI.createImageView({
				image : post.photo.urls.square_75,
				width : Ti.UI.SIZE,
				height : Ti.UI.SIZE,
				top : 0,
				left : 3
			});

			var title = Ti.UI.createLabel({
				text : post.title,
				width : 300,
				height : 30,
				top : 0,
				left : 100,
				font : {
					color : "#000000"
				}
			});

			var desc = Ti.UI.createLabel({
				text : post.custom_fields.Description,
				width : 300,
				height : 30,
				top : 40,
				left : 100,
				font : {
					color : "#000000"
				}
			});
			var lbl = Ti.UI.createLabel({
				visible : false,
				text : post.id

			});

			row.add(viewRow);
			viewRow.add(title);
			viewRow.add(desc);
			viewRow.add(imgView);
			data.push(row);
			alldata[i] = {
				"id" : post.id,
				"title" : post.title,
				"desc" : post.custom_fields.Description,
				"photo" : post.photo.urls.original,
				"content" : post.content
			};
			//alldata.push(post.id,post.title, post.custom_fields.Description,post.photo.urls.original,post.content);
		}

		$.table.setData(data);
		//$.table.setData(alldata);

	} else {
		alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
	}
});
$.table.addEventListener('click', function(e) {
	var id = e.row.title;
	var detailController = Alloy.createController('offerDetails', {
		data : alldata[e.index],
		idr : id
	});
	parentTab.open(detailController.getView());
});

