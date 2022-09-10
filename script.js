let caldata =[{
    day:1,
    dayName: "Wed",
    hours: 8
},{
    day:2,
    dayName: "Thu",
    hours: 8
},{
    day:3,
    dayName: "Fri",
    hours: 8
},{
    day:4,
    dayName: "Sat",
    hours: 0
},{
    day:5,
    dayName: "Sun",
    hours: 0
},{
    day:6,
    dayName: "Mon",
    hours: 8
},{
    day:7,
    dayName: "Tue",
    hours: 8
},{
    day:8,
    dayName: "Wed",
    hours: 8
},{
    day:9,
    dayName: "Thu",
    hours: 8
},{
    day:10,
    dayName: "Fri",
    hours: 8
},{
    day:11,
    dayName: "Sat",
    hours: 0
},{
    day:12,
    dayName: "Sun",
    hours: 0
},{
    day:13,
    dayName: "Mon",
    hours: 8
},{
    day:14,
    dayName: "Tue",
    hours: 8
},{
    day:15,
    dayName: "Wed",
    hours: 8
},{
    day:16,
    dayName: "Thu",
    hours: 8
},{
    day:17,
    dayName: "Fri",
    hours: 8
},{
    day:18,
    dayName: "Sat",
    hours: 0
},{
    day:19,
    dayName: "Sun",
    hours: 0
},{
    day:20,
    dayName: "Mon",
    hours: 8
},{
    day:21,
    dayName: "Tue",
    hours: 8
},{
    day:22,
    dayName: "Wed",
    hours: 8
},{
    day:23,
    dayName: "Thu",
    hours: 8
},{
    day:24,
    dayName: "Fri",
    hours: 8
},{
    day:25,
    dayName: "Sat",
    hours: 0
},{
    day:26,
    dayName: "Sun",
    hours: 0
},{
    day:27,
    dayName: "Mon",
    hours: 8
},{
    day:28,
    dayName: "Tue",
    hours: 8
},{
    day:29,
    dayName: "Wed",
    hours: 8
},{
    day:30,
    dayName: "Thu",
    hours: 8
},{
    day:31,
    dayName: "Fri",
    hours: 8
}]

let template="<table>"
template+=`<tr><th style='border: 1px solid black; padding: 10px' colspan='7'>Sept 2022</th></tr>`
template+="<tr>"
let week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let remainingDays = week.indexOf(caldata[0].dayName)
for(let i=0;i<remainingDays;i++){
    caldata.unshift({
        day:0,
        dayName: "",
        hours: 0
    })
}
console.log(caldata)
for (let i = 0; i < week.length; i++) {
    template+="<th style='border: 1px solid black; padding: 10px'>"+week[i]+"</th>"
}
template+="</tr>"
for (let k = 0; k < caldata.length;) {
    template+="<tr>"
    for (let j = 0; j < 7; j++) {
        if(caldata[k]){
            //template+="<td style='border: 1px solid black; padding: 10px'>"+caldata[k].day+"<span style='background-color: red; margin: 5px;'>"+caldata[k].hours+"</span>"+"</td>"
            template+=`<td style='border: 1px solid black; padding: 10px'>${(caldata[k].day==0)?"":caldata[k].day}<span style='background-color: green; margin: 5px;'>${(caldata[k].hours==0)?"":caldata[k].hours}</span></td>`
            k++
        }
    }
    template+="</tr>"
}
template+="</table>"
console.log(template)