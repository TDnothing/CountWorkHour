var d = new Date();

var Arrivehour = 9;
var Arrivemin = 00;
var hour = d.getHours();
var min	 = d.getMinutes();
var sec  = d.getSeconds();
var CountHour = hour;
var CountMin = min;
var lunchTime = 30;

if (Arrivemin > min)
{
	 CountMin  = min + 60 - Arrivemin;
	 CountHour = hour - Arrivehour - 1; 
}	
else
{
	CountMin  = min - Arrivemin;
	CountHour = hour - Arrivehour;
}

if (CountMin > lunchTime)
{
	 CountMin  = CountMin - lunchTime;
}	
else
{
	CountMin  = CountMin + lunchTime;
	CountHour --;
}
	
var CountTime = CountHour + ':' + CountMin ;
alert (CountTime);
