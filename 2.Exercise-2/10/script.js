

let fdate = "01-07-2018"//prompt('Enter StartDate : mm-dd-yyyy OR mm/dd/yyyy', '');

let todate = "03/05/2020"//prompt('Enter toDate : mm-dd-yyyy OR mm/dd/yyyy', '');

let datef = new Date(fdate);
let datet = new Date(todate);
let diff_in_Time = datet.getTime() - datef.getTime();

let diff_in_Year = Math.floor(diff_in_Time / (1000 * 3600 * 24 * 365.5));

let diff_in_month = Math.floor((diff_in_Time / (1000 * 3600 * 24 * 365.5)) - Math.floor(diff_in_Time / (1000 * 3600 * 24 * 365.5)));

let diff_in_Days = Math.floor((diff_in_Time / (1000 * 3600 * 24 * 365.5)) - (365.5 * diff_in_month));

document.writeln(diff_in_Year + "Year" + diff_in_month + "Month" + diff_in_Days + "Days<br>");

let diff_in_min = Math.floor(diff_in_Time / (1000 * 60));

let diff_in_hour = Math.floor(diff_in_Time / (1000 * 3600));

let diff_in_Daysd = Math.floor(diff_in_Time / (1000 * 3600 * 24));

let diff_in_week = Math.floor(diff_in_Time / (1000 * 3600 * 24 * 7));

let diff_in_monthm = Math.floor(diff_in_Time / (1000 * 3600 * 24 * 7 * 4));

let diff_in_Daysw = Math.floor((diff_in_Time / (1000 * 3600 * 24 * 7))-Math.floor(diff_in_Time / (1000 * 3600 * 24 * 7)));

let diff_in_Daysm = Math.floor((diff_in_Time / (1000 * 3600 * 24 * 7 * 4)) - Math.floor(diff_in_Time / (1000 * 3600 * 24 * 7 * 4)));

document.writeln(diff_in_monthm + "Month" + diff_in_Daysm + "Days<br>");

document.writeln(diff_in_week + "weeks" + diff_in_Daysw + "Days<br>");

document.writeln(diff_in_Daysd + "Days<br>");

document.writeln(diff_in_hour + "Hours<br>");

document.writeln(diff_in_min + " min <br>" );