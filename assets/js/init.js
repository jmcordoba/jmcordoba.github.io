url = window.location.href;
position = url.search("http://"); 
if (position==0) {
  url = url.replace("http://", "https://");
}
window.location.href = url;
