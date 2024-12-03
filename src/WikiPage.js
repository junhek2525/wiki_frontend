import "./wikipage.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function WikiPage(){
    const {searchQuery} = useParams();
    const [data,setData] = useState(null);
    const [error,setError] = useState(null);
    useEffect(()=>{
        const fatchData = async() =>{
            try{
                const response = await fetch(`/api/colors/${searchQuery}`)
                if(response.ok)
                {
                    const myData = await response.json();
                setData(myData);
            }else{
                const errorMessage = await response.json()
                setError(errorMessage.message);
            }}catch(error){
                setError("데이터 실패");
            }
        };
        fatchData();
    }, [searchQuery])
    return(
        <div className="container">
        <h1>{searchQuery}</h1>
        <div className="article-container">
        {error ? (
            <p>{error}</p>
        ) : data ? (
            <div>
            <p>색상 공간: {data.색상공간}</p>
            <p>설명: {data.설명}</p>
            </div>
        ) : (
            <p>데이터를 로드 중입니다.</p>
        )}
        </div>
        </div>
    )
}
export default WikiPage;