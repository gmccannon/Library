import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function NestedModal(props) {
  const title = props.book;
    
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <AddShoppingCartIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
            <h2 id="parent-modal-title">Added {title} to cart</h2>
            <IconButton onClick={() => navigate('../cart')}>
                <Typography style={{ fontWeight: 'bold', textAlign: 'center' }}>Go to cart</Typography>
            </IconButton>
        </Box>
      </Modal>
    </div>
  );
}