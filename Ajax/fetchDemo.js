// const url=`https://api.covid19api.com/summary`
// fetch(url)
// .then(
//     reponse=> response.json())
//    // .then(data=>console.log(data.Countries))

//    .then(data=>console.log(data))

   //const url =`https://api.covid19api.com/summary`
//    fetch(url)
   
//    .then(response => response.json() )
   
//     .then(data => console.log(data))

const url =`https://api.covid19api.com/summary`
async function fetchRequest(){
    const response=await fetch(url);
    const data = await response.json();
    console.log(data);
}
fetchRequest();