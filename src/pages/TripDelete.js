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
                <p className="page-intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere at leo sit amet tempus. Donec ac volutpat lacus. Sed varius nibh nec dui viverra mollis. Fusce mattis nunc non aliquet rhoncus.</p>
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