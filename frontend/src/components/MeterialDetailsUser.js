import formatDistanceToNow from 'date-fns/formatDistanceToNow';


const MeterialDetails = ({ meterial }) => {
  return (
    <div className="meterial-details">
      <h4>{meterial.title}</h4>
        <p><strong>Content :</strong> {meterial.content}</p>
        <p>{formatDistanceToNow(new Date(meterial.createdAt),{addSuffix: true})}</p>
      
    </div>
  );
};

export default MeterialDetails;