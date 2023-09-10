// import { useEffect, useState } from 'react'
import {} from 'react'
import {useLoaderData} from 'react-router-dom'
const GitHub = () => {
  /*const [data,setData]=useState([]);
  useEffect(()=>{
    fetch("https://api.github.com/users/Sakshampardesi5831")
    .then(response=>response.json())
    .then(data => setData(data));
  },[])**/
  const data=useLoaderData();

  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl' >
      GitHub Followers:{data?.followers}
      <img src={data?.avatar_url} alt="" />
    </div>
  )
}

export default GitHub


export const githubInfo= async ()=>{
  const response=  await fetch("https://api.github.com/users/Sakshampardesi5831");
   return response.json();
 }