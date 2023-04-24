import { useState } from 'react';
import { useCoursesContext } from '../hooks/useCoursesContext';

const CourseForm = () => {
  const { dispatch } = useCoursesContext();
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [day, setDay] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !duration || !day || !price) {
      setEmptyFields(['title', 'duration', 'day', 'price']);
      setError('Please fill in all fields.');
      return;
    }

    const course = { title, duration, day, price };

    const response = await fetch('/api/courses', {
      method: 'POST',
      body: JSON.stringify(course),
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
      setDuration('');
      setDay('');
      setPrice('');
      setError(null);
      setEmptyFields([]);
      console.log('new course added', json);
      dispatch({ type: 'CREATE_COURSE', payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Course</h3>

      <label>Course Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Duration (months):</label>
      <input
        type="number"
        onChange={(e) => setDuration(e.target.value)}
        value={duration}
        className={emptyFields.includes('duration') ? 'error' : ''}
      />

      <label>Day:</label>
      <input
        type="text"
        onChange={(e) => setDay(e.target.value)}
        value={day}
        className={emptyFields.includes('day') ? 'error' : ''}
      />
      <label>Price ($):</label>
      <input
        type="number"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        className={emptyFields.includes('price') ? 'error' : ''}
      />

      <button>Add Course</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default CourseForm;
