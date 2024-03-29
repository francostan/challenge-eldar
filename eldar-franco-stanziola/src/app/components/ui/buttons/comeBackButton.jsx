import { useRouter } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackButton = ({handleClose}) => {
  const router = useRouter();

  const handleBack = () => {
    if(handleClose) handleClose();
    else router.back();
  };

  return (
    <IconButton aria-label="Volver" onClick={handleBack}>
      <ArrowBackIcon />
    </IconButton>
  );
};

export default BackButton;