import { useParams } from "react-router-dom"

export const UserPage = () => {
    const { id } = useParams();
    return (
        <div>
            User <h2>{id}</h2>
        </div>
    )
}
