 let data;
 async function fetchData(title){
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`;
    try{
        const response=await fetch(url);
        if(!response.ok){
            throw Error(response.statusText);
        }else{
             data=await response.json();
            console.log(data["meals"]);
            return data;
        }
    }catch(e){
        throw Error(e.message);
    }
}
