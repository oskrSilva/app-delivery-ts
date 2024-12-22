import { useParams } from "react-router-dom"

const Store = () => {
  const { category } = useParams()
  return (
    <div>Store: { category }</div>
  )
}

export default Store