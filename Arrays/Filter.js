// Source - https://stackoverflow.com/q/68827571
// Posted by Akash kumar, modified by community. See post 'Timeline' for change history
// Retrieved 2026-07-30, License - CC BY-SA 4.0

async function getData(){
   let myData = await fetch("http://34.198.81.140/attendance.json")
     .then((respose) => {
       return respose.json() 
     })
     .then((data) => {
       return data;
     });
   let startDate ="Feb 1, 2020";
   let endDate = "Feb 29, 2020";
   let result = myData.filter((data) => {
     return data.date >= startDate && data.date <=endDate;
   })
   console.log(result);
}
getData()