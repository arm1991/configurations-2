import { useEffect, useState } from 'react';
import api from '@/services/api';
import './styles.scss';
// import IncomingRequestTable from "./IncomingRequestTable";
// import MembersTable from "./MembersTable";
// import VolunteerTable from "./VolunteerTable";
// import "./user-management.css";

function UserManagement() {
  const [showIncomingRequests, setShowIncomingRequests] = useState(true);
  const [incomingRequests, setIncomingRequests] = useState([]);
  //   const [teamMembers, setTeamMembers] = useState([]);
  //   const [showVolunteers, setShowVolunteers] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchIncomingRequests = async () => {
    try {
      const data = await api.team.getMembers();
      setIncomingRequests(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error('undefined Error'));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIncomingRequests();
    // fetchTeamMembers();
  }, []);

  const handleClick = () => {
    setShowIncomingRequests((prev) => !prev);
  };

  // Fetch functions and other logic here...

  return (
    <div className="user-management-main-container">
      <button type="button" onClick={handleClick}>
        Click to toggle showIncomingRequests
      </button>
      {error && <div>{error.message}</div>}
      {loading && <div>Loading...</div>}
      {showIncomingRequests && incomingRequests.length > 0
        ? incomingRequests.map((req) => (
            <div className="user" key={req}>
              {req}
            </div>
          ))
        : null}
    </div>
  );
}

export default UserManagement;
