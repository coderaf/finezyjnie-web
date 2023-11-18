import React from 'react';
import * as commonStyles from '../../../styles/commonStyles';
import * as styles from './Offers.styles';
import Text from '../../../components/Text/Text';
import pageContent from '../pageContent';
import { Product } from '../../../types/common';
import Carousel from '../../../components/Carousel/Carousel';

// todo: remove dummy data
const products: Product[] = [
  {
    id: 'dahsid76223asidy',
    name: 'Some name',
    description: 'some description',
    images: {
      small: [
        'http://localhost:8099/static/small/dahsid76asidy.jpg',
        'http://localhost:8099/static/small/dahsid76asidy2.jpg',
      ],
      large: [
        'http://localhost:8099/static/large/dahsid76asidy.jpg',
        'http://localhost:8099/static/large/dahsid76asidy2.jpg',
      ],
    },
    price: 1000,
    price_display: '10.00 zł',
    stock: 1,
    reserved: 0,
    category: {
      id: '232323',
      name: 'some category name',
    },
    tags: [
      {
        id: '545454',
        name: 'tag name',
      },
      {
        id: '45455',
        name: 'tag name2',
      },
    ],
  },
  {
    id: '454545',
    name: 'Some name',
    description: 'some description',
    images: {
      small: [
        'http://localhost:8099/static/small/dahsid76asidy.jpg',
        'http://localhost:8099/static/small/dahsid76asidy2.jpg',
      ],
      large: [
        'http://localhost:8099/static/large/dahsid76asidy.jpg',
        'http://localhost:8099/static/large/dahsid76asidy2.jpg',
      ],
    },
    price: 1000,
    price_display: '10.00 zł',
    stock: 1,
    reserved: 0,
    category: {
      id: '2433',
      name: 'some category name',
    },
    tags: [
      {
        id: '34343434',
        name: 'tag name',
      },
      {
        id: '433434',
        name: 'tag name2',
      },
    ],
  },
  {
    id: '2232233232',
    name: 'Some name',
    description: 'some description',
    images: {
      small: [
        'http://localhost:8099/static/small/dahsid76asidy.jpg',
        'http://localhost:8099/static/small/dahsid76asidy2.jpg',
      ],
      large: [
        'http://localhost:8099/static/large/dahsid76asidy.jpg',
        'http://localhost:8099/static/large/dahsid76asidy2.jpg',
      ],
    },
    price: 1000,
    price_display: '10.00 zł',
    stock: 1,
    reserved: 0,
    category: {
      id: '22323232323',
      name: 'some category name',
    },
    tags: [
      {
        id: '23233556',
        name: 'tag name',
      },
      {
        id: '67y66y6y',
        name: 'tag name2',
      },
    ],
  },
  {
    id: '34t3t3t',
    name: 'Some name',
    description: 'some description',
    images: {
      small: [
        'http://localhost:8099/static/small/dahsid76asidy.jpg',
        'http://localhost:8099/static/small/dahsid76asidy2.jpg',
      ],
      large: [
        'http://localhost:8099/static/large/dahsid76asidy.jpg',
        'http://localhost:8099/static/large/dahsid76asidy2.jpg',
      ],
    },
    price: 1000,
    price_display: '10.00 zł',
    stock: 1,
    reserved: 0,
    category: {
      id: 't3443g4',
      name: 'some category name',
    },
    tags: [
      {
        id: 'f4rt23t3t',
        name: 'tag name',
      },
      {
        id: 't2t34t4t',
        name: 'tag name2',
      },
    ],
  },
  {
    id: '532523555',
    name: 'Some name',
    description: 'some description',
    images: {
      small: [
        'http://localhost:8099/static/small/dahsid76asidy.jpg',
        'http://localhost:8099/static/small/dahsid76asidy2.jpg',
      ],
      large: [
        'http://localhost:8099/static/large/dahsid76asidy.jpg',
        'http://localhost:8099/static/large/dahsid76asidy2.jpg',
      ],
    },
    price: 1000,
    price_display: '10.00 zł',
    stock: 1,
    reserved: 0,
    category: {
      id: 'r3ef3',
      name: 'some category name',
    },
    tags: [
      {
        id: 'r33r',
        name: 'tag name',
      },
      {
        id: 'f35',
        name: 'tag name2',
      },
    ],
  },
  {
    id: '343rfgy',
    name: 'Some name',
    description: 'some description',
    images: {
      small: [
        'http://localhost:8099/static/small/dahsid76asidy.jpg',
        'http://localhost:8099/static/small/dahsid76asidy2.jpg',
      ],
      large: [
        'http://localhost:8099/static/large/dahsid76asidy.jpg',
        'http://localhost:8099/static/large/dahsid76asidy2.jpg',
      ],
    },
    price: 1000,
    price_display: '10.00 zł',
    stock: 1,
    reserved: 0,
    category: {
      id: '333',
      name: 'some category name',
    },
    tags: [
      {
        id: '444',
        name: 'tag name',
      },
      {
        id: 'oihjn32k555j4ndasd',
        name: 'tag name2',
      },
    ],
  },
];

function Offers() {
  // const { isPending, error, data } = useQuery({
  //   queryKey: ['products'],
  //   queryFn: () => fetchProducts({ page: 1, pageSize: 6, tag: 'promoted' }),
  // });
  return (
    <section css={[commonStyles.container, styles.offers]}>
      <div css={styles.offersSection}>
        <div css={commonStyles.hideMobile}>
          <Text variant="dHeadline5" uppercase color="white">
            {pageContent.offersTitle}
          </Text>
        </div>

        <div css={commonStyles.hideDesktop}>
          <Text variant="mHeadline5" uppercase color="white">
            {pageContent.offersTitle}
          </Text>
        </div>
      </div>

      <Carousel products={products} />
    </section>
  );
}

export default Offers;
