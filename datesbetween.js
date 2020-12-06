var getDatesBetween = function(start,end){
    for(var arr=[],dt=new Date(start); dt<=end;dt.setDate(dt.getDate()+1)){
        arr.push(new Date(dt));
    }
    return arr;
} 
var dayList = getDatesBetween(new Date('2020-12-09'),new Date('2020-12-29'));
dayList.map((v)=>v.toISOString().slice(0,6)).join("");