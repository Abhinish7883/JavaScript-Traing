let fdate = prompt('Enter StartDate : mm-dd-yyyy OR mm/dd/yyyy', '');

let todate = prompt('Enter toDate : mm-dd-yyyy OR mm/dd/yyyy', '');

let datef = new Date(fdate);
let datet = new Date(todate);

let diff_in_Time = datet.getTime() - datef.getTime();

let diff_in_Year = Math.floor(diff_in_Time / (1000 * 3600 * 24 * 365.5));

let diff_in_month = Math.floor((diff_in_Time / (1000 * 3600 * 24 * 365.5)) - Math.floor(diff_in_Time / (1000 * 3600 * 24 * 365.5)));

let diff_in_Days = Math.floor((diff_in_Time / (1000 * 3600 * 24 * 365.5) )- (365.5 * diff_in_month));

console.log(diff_in_Year + "Year" + diff_in_month + "Month" + diff_in_Days + "Days");




