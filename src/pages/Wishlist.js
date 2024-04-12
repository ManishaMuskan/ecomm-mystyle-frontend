import Carousel from '../components/UI/Carousel/Carousel';

const Wishlist = () => {
  const items = [
    {
      imageSrc: 'https://picsum.photos/id/237/1500/400',
      // title: 'picture 1',
    },
    {
      imageSrc: 'https://picsum.photos/id/238/1500/400',
      // title: 'picture 2',
    },
    {
      imageSrc: 'https://picsum.photos/id/239/1500/400',
      // title: 'picture 3',
    },
  ];

  return (
    <div>
      <Carousel items={items} />
    </div>
  );
};

export default Wishlist;
