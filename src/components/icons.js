import { 
  faUser, 
  faDeleteLeft, 
  faArrowRightFromBracket, 
  faUserGear,
  faUnlock
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

const Icons = () => {
  return library.add(
    faUser,
    faDeleteLeft,
    faArrowRightFromBracket,
    faUserGear,
    faUnlock
  );
}

export default Icons;