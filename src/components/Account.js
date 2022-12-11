import React,{useEffect} from 'react'
import jwt_decode from 'jwt-decode';
export default function Account() {
  useEffect(()=>{
      if(localStorage.getItem("_token")!=undefined){
          let token=localStorage.getItem("_token");
          let decode=jwt_decode(token);
          console.log(decode);
      }
  },[])
  return (
    <div>Account</div>
  )
}
