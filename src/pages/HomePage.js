import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import Button from 'react-bootstrap/Button';

export const HomePage = () => {
  return (
    <div>
      <button className="bg-white">
        <FontAwesomeIcon icon={faEdit} className="text-blue-600"/>
      </button>
      <button>
        <FontAwesomeIcon color='red' icon={faTrashCan} />
      </button>
      <Button variant="primary">Click Me!</Button>{' '}
    </div>
  );
};