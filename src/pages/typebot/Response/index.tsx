import { useParams } from "react-router-dom";
import axiosInstance from "../../../services/axiosInstance";
import { useEffect, useState } from "react";
import { ElementInterface } from "../../interfaces";
import styles from "./style.module.css"
interface PropTypes {
  flow: ElementInterface[]
}

const Response = ({ flow }: PropTypes) => {
  const [responses, setResponses] = useState()
  const params = useParams();
  const [flowLength, setFlowLength] = useState(0)
  const getResponsesById = () => {
    axiosInstance.get(("/typebot/responses/" + params.id)).then((res) => { setResponses(res.data); })
  }

  useEffect(() => {
    params.id !== "new" && getResponsesById()
  }, [])
  console.log("responses", responses)
  const flowInputLength = () => {
    let count = 0
    flow.map((ff) => {
      if (ff.type == "input") {
        count = count + 1
      }
    })
    return count
  }

  useEffect(() => {
    setFlowLength(flowInputLength())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[flow])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const calculateCompletion = (responses: any[]) => {
    let compRate = 0
    responses?.map((res) => { if (res.elementResponse.length == flowLength) { compRate = compRate + 1 } })
    return (compRate/responses?.length *100).toFixed(2)+"%"
  }
  return (
    <div className={styles.tableContainer}>
      <div style={{ display: "flex" ,justifyContent:"space-between",width:"300px",height:"80px"}}>
        <div className={styles.analytics}>
          Views

          <p style={{ textAlign: "center" }}>{
            //@ts-expect-error jhjuhu
            responses?.length}</p>
        </div>
        <div className={styles.analytics}>
          Starts

          <p style={{ textAlign: "center" }}>{
            //@ts-expect-error kjhj
            responses?.length}</p>
        </div>
        <div className={styles.analytics}>
          Completion Rate

          <p style={{ textAlign: "center" }}>{
            //@ts-expect-error khikhi
            calculateCompletion(responses)}</p>
        </div>
      </div>
      <table >
        <tr>
          <th></th>
          <th>Submitted at</th></tr>
        {flow?.map((head) => <th key={head.name}>{head.name}</th>)}
        {/* <tbody> */}
        {//@ts-expect-error khihi
          responses?.map((res, _index) => <tr key={res._id}>
            <td>{_index + 1}</td>
            <td>{new Date(res.submittedAt).toLocaleString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,
            })}</td>
           
            {//@ts-expect-error khkhi
              res.elementResponse.map((cell) => <td key={cell._id}>{cell.value}</td>)}
          </tr>)}

        {/* </tbody> */}
      </table></div>
  )
}

export default Response