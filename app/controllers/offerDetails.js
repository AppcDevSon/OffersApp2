var args = arguments[0] || {};
var datat= [];
datat = args.data;
$.detailsWindow.title = datat.title + "Details";
$.title.text = datat.title;
$.desxhr.text = datat.desc;
$.content.text = datat.content;
$.imageView.image = datat.photo;

