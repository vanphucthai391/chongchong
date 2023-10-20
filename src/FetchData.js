import Axios from "axios";
import { useState ,useEffect} from "react";

function FetchData(){
    const [id, setId]=useState("");
    const [list, setList]=useState([]);
    // const fetchDataId=()=>{
    //     Axios.get("http://localhost:8080/api/creditcards/1").then((res)=>{
    //         setId(res.data)
    //     });
    // }
    const fetchDataList=()=>{
        Axios.get("http://localhost:8080/api/creditcards").then((res)=>{
            setList(res.data)
        });
    }
    useEffect(()=>{
        fetchDataList();
    }, []);
    console.log(list);
    return (
        <div>
            <button onClick={fetchDataList}> Click</button>
        <table>
          <thead>
            <tr>
              <th>Card Number</th>
              <th>Card Owner Name</th>
              <th>Expiration Date</th>
              <th>Payment Detail ID</th>
              <th>Security Code</th>
            </tr>
          </thead>
          <tbody>
            {list.map((creditCard, index) => (
              <tr key={index}>
                <td>{creditCard.cardnumber}</td>
                <td>{creditCard.cardownername}</td>
                <td>{creditCard.expirationdate}</td>
                <td>{creditCard.paymentdetailid}</td>
                <td>{creditCard.securitycode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        
    )
}
export default FetchData;