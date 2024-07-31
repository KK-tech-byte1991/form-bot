import { useParams } from "react-router-dom";
import axiosInstance from "../../../services/axiosInstance";
import { useEffect, useState } from "react";
import { ElementInterface } from "../../interfaces";
interface PropTypes {
  flow: ElementInterface[]
}

const Response = ({ flow }: PropTypes) => {
  const [responses, setResponses] = useState()
  const params = useParams();
  const getResponsesById = () => {
    axiosInstance.get(("/typebot/responses/" + params.id)).then((res) => { setResponses(res.data); })
  }

  useEffect(() => {
    params.id !== "new" && getResponsesById()
  }, [])
  console.log("responses", responses)
  return (
    <div><table>
      <th></th>
      <th>Submitted at</th>
      {flow?.map((head)=><th>{head.name}</th>)}
    </table></div>
  )
}

export default Response