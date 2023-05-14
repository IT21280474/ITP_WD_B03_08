import { useState } from 'react';
import { useNotificationsContext } from '../hooks/uesNotificationsContext';
import "../pages/notifications/notification.css"

const NotificationForm = () => {
  const { dispatch } = useNotificationsContext();
  const [headline, setHeadline] = useState('');
  const [details, setDetails] = useState('');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!headline || !details) {
      setEmptyFields(['headline', 'details']);
      setError('Please fill in all fields.');
      return;
    }

    const Notification = { headline, details };

    const response = await fetch('/api/Notifications', {
      method: 'POST',
      body: JSON.stringify(Notification),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    } else {
      setHeadline('');
      setDetails('');
      setError(null);
      setEmptyFields([]);
      console.log('new Notification added', json);
      dispatch({ type: 'CREATE_Notification', payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Notification</h3>

      <label>Notification Headline:</label>
      <input
        type="text"
        onChange={(e) => setHeadline(e.target.value)}
        value={headline}
        className={emptyFields.includes('headline') ? 'error' : ''}
        pattern="[A-Za-z]+"
        title="Only letters (A-Z or a-z) are allowed."
      />

      <label>Details:</label>
      <input
        type="text" id ="details"
        onChange={(e) => setDetails(e.target.value)}
        value={details}
        className={emptyFields.includes('details') ? 'error' : ''}
      />


      <button>Add Notification</button>
      {error && <div className="error">{error}</div>}
      
    </form>
  );
};

export default NotificationForm;
