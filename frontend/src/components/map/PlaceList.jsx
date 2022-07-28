// import axios from "axios";
// import React from "react";

// function PlaceList(){
//     const [places, setPlaces] = useState([]);

//     // function placesApi(){
//     //     const url = "http://localhost:8080/places";
//     //     axios.get(url)
//     //     .then(function(response){
//     //         setPlaces(response.data);
//     //         console.log("장소 데이터 로드 성공!");
//     //     })
//     //     .catch(function(error){
//     //         console.log("실패");
//     //     })
//     // }

//     const placeApi(()=> {
//         const placeApi = async() => {

//         }
//     })
//     if(places.length > 0) {
//         return(
//             places.map(place =>{
//                 (place.contentid<264120)?(
//                     <div key={place.contentid}>
//                         <img src={place.firstimage} alt="img"/>
//                         <p>{place.title}</p>
//                         <p>{place.addr1}</p>
//                     </div>
//                 ) : null
//             })
//         );
//     } else{
//         return(
//             <div>
//                 <button onClick = {placeApi}> 불러오기 </button>
//             </div>
//         )
//     }
// }

// export default PlaceList;