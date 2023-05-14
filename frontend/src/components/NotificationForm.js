import { useState } from 'react'
import { useNotificationsContext } from "../hooks/uesNotificationsContext"

const NotificationForm = () => {
    const { dispatch } = useNotificationsContext()
    const [Headline, setHeadline] = useState('')
    const [Details, setDetails] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const notification = { Headline, Details }

        const response = await fetch('/api/notifications', {
            method: 'POST',
            body: JSON.stringify(notification),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (!response.ok) {
            setHeadline('')
            setDetails('')
            setError(null)
            setEmptyFields([])
            console.log('new notification added', json)
            dispatch({ type: 'CREATE_NOTIFICATION', payDetails: json })
        }
    }
    return (

        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new notification</h3>

            <label>Headline:</label>
            <input
                type="text"
                onChange={(e) => setHeadline(e.target.value)}
                value={Headline}
                className={emptyFields.includes('Headline') ? 'error' : ''}
             />

            <label>Details:</label>
            <input
                type="text"
                onChange={(e) => setDetails(e.target.value)}
                value={Details}
                className={emptyFields.includes('Details') ? 'error' : ''}

            />

            <button>Publish</button>
            {error && <div className="error">{error}</div>}
        </form>

    )
}

export default NotificationForm
