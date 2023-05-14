import { useState } from 'react';
import { useMeterialsContext } from '../hooks/useMeterialsContext';

const MeterialForm = () => {
  const { dispatch } = useMeterialsContext();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      setEmptyFields(['title', 'content']);
      setError('Please fill in all fields.');
      return;
    }

    const Meterial = { title, content };

    const response = await fetch('/api/Meterials', {
      method: 'POST',
      body: JSON.stringify(Meterial),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    } else {
      setTitle('');
      setContent('');
      setError(null);
      setEmptyFields([]);
      console.log('new Meterial added', json);
      dispatch({ type: 'CREATE_Meterial', payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Meterial</h3>

      <label>Meterial Title:</label>
<input
  type="text"
  onChange={(e) => setTitle(e.target.value)}
  value={title}
  className={emptyFields.includes('title') ? 'error' : ''}
  pattern="[A-Za-z]+"
  title="Only letters (A-Z or a-z) are allowed."
/>

      <label>Content:</label>
      <textarea
        type="text"
        onChange={(e) => setContent(e.target.value)}
        value={content}
        className={emptyFields.includes('content') ? 'error' : ''}
        
      />

      <button>Add Meterial</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default MeterialForm;
