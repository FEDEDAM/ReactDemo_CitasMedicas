

export default function apiSetLogin( loginData ) 
{
    console.log("LOGIN DATA: ");
    console.log( loginData );

     return fetch('http://127.0.0.1:8086/auth/login' , {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify( loginData )
     })
    .then( res => res.json())
    .catch( error => console.error( error ))
    .then( json => {
        const { entity } = json;
        console.log(entity);
        return entity;
    });

}