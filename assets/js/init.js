url = window.location.href;
console.log(url);
position = url.search("http://"); 
if (position==0) {
  url = url.replace("http://", "https://");
}
console.log(url);
//window.location.href = url;
