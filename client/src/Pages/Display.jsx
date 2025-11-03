// const Display=()=>{
//     return(
//         <>
//         <h1>Welcome to Display page</h1>
//         </>
//     )
// }
// export default Display;
import { useState, useEffect } from "react";
import axios from "axios";
const Display = () => {
    const [mydata, setMydata] = useState([]);
    const loadData = async () => {
        // let api = "http://localhost:8000/employees/display";
        let api=`${import.meta.env.VITE_BACKEND_URL}/employees/display`
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
    useEffect(() => {
        loadData();
    }, []);
    const ans = mydata.map((key) => {
        return (
            <>
                <tr>
                    <td> {key.empno} </td>
                    <td> {key.name} </td>
                    <td> {key.designation} </td>
                    <td> {key.salary} </td>
                </tr>

            </>
        )
    })
    return (
        <>
            <h1> Display Data</h1>
            <hr />
            <table>
                <tr>
                    <th>Empno</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Salary</th>
                </tr>
                {ans}
            </table>
        </>
    )
}
export default Display;