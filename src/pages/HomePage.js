import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export const HomePage = () => {
  return (
    <div>
      <button>
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <button>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};