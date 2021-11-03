
function getTime(){
	var obj = new Date();
	var year = obj.getFullYear();
	var month = obj.getMonth()+1;
	if (month < 10)
	{
		month = "0" + month;
		}
	var day = obj.getDate();
	if (day < 10)
	{
		day = "0" + day;
		}
	var hour = obj.getHours();
	if (hour < 10)
	{
		hour = "0" + hour;
		}
	var min = obj.getMinutes();
	if (min < 10)
	{
		min = "0" + min;
		}
	var sc = obj.getSeconds();
    if (sc < 10)
	{
		sc = "0" + sc;
		}
	var showtime = document.getElementById("showtime");
	showtime.innerHTML="时间："+year+"/"+month+"/"+day+" "+hour+":"+min+":"+sc;
}
