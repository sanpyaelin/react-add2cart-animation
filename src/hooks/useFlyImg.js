import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(Flip);

function useFlyImg(cart) {
  const flyImg = (item, callback) => {
    if (!item || !cart) return;

    const state = Flip.getState(item, { props: 'width' });
    cart.current.appendChild(item);
    Flip.from(state, {
      duration: 0.5,
      scale: true,
      absolute: true,
      ease: 'back.in(2)',
      onComplete: () => {
        cart.current.removeChild(item);
        gsap.fromTo(cart.current, { scale: 1.3 }, { scale: 1 });
        callback();
      },
    });
  };

  return flyImg;
}

export default useFlyImg;
