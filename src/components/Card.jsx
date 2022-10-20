import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(() => ({
  minHeight: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

function ShopCard({ item, onClick }) {
  return (
    <StyledCard onClick={onClick}>
      <CardMedia
        height="140"
        component="img"
        className="card-img"
        image={item.img}
        sx={{ objectFit: 'contain' }}
      />
    </StyledCard>
  );
}

export default ShopCard;
