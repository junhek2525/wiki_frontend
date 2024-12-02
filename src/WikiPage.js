
import { useParams } from "react-router-dom";

function WikiPage(){
    const {searchQuery} = useParams();
    return(
        <div className="container">
        <h1>{searchQuery}</h1>
        
        <div className="article-container"></div>
        <h2>내용이 읎어</h2>
        </div>
    )
}
export default WikiPage;