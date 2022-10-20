import { useRef, useState } from 'react';
import { Container, Grid } from '@mui/material';
import data from './common/data';
import Card from './components/Card';
import Header from './components/Header';
import useFlyImg from './hooks/useFlyImg';

function App() {
  const cart = useRef();
  const flyImg = useFlyImg(cart);
  const [count, setCount] = useState(0);

  const handleClick = (event) => {
    const targetParent = event.target.parentNode;
    const img = targetParent.querySelector('img');
    const clone = img.cloneNode();
    targetParent.appendChild(clone);
    flyImg(clone, () => {
      setCount((c) => c + 1);
    });
  };

  return (
    <Container>
      <Header cartRef={cart} count={count} />
      <Grid container spacing={2} my={12}>
        {data.map((item, i) => (
          <Grid key={i} item xs={6} sm={4} md={2}>
            <Card item={item} onClick={handleClick} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
