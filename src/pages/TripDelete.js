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
            <div className="delete-trip-conf">
                <h2 className="page-title">Confirm trip deletion</h2>
                <p className="page-intro">Use the trip planner tool to log and track your next adventure! The form below will help you determine the distance you'll be traveling and the number of charging stops required based on your vehicle type.</p>
                <Link to='/trip-planner'>
                    <button class="delete btn btn-danger" onClick={deleteMyTrip}>Yes, delete</button>
                </Link>
                <Link to={`/trip-planner/${id}`}>
                    <button class="cancel btn btn-secondary">No, cancel</button>
                </Link>
            </div>
        </>
    )
}

export default TripDelete;