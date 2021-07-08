var start = new Date("january 1, 2021");
var end = new Date();
var diff = 0;
var days = 1000 * 60 * 60 * 24;

diff = end - start;
document.write(Math.floor(diff / days) + " days has passed since the begenning of the year.")