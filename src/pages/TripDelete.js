import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function TripDelete() {
    const {id} = useParams();

    async function deleteMyTrip() {
        try {
            await fetch(`http://localhost:4000/trip-planner/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <>
            <h2>Confirm trip deletion</h2>
            <Link to='/trip-planner'>
                <button onClick={deleteMyTrip}>Yes, delete</button>
            </Link>
            <Link to={`/trip-planner/${id}`}>
                <button>No, cancel</button>
            </Link>
        </>
    )
}

export default TripDelete;