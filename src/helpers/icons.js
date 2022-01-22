import { 
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPlusCircle, 
    faPhoneVolume,
    faEnvelopeOpenText,
    faEnvelope,
    faKey
    
} from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle, faPhoneVolume, faEnvelopeOpenText, faLinkedin, faEnvelope, faKey);
};

export default Icons;