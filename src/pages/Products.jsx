import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 22px 0px;
    overflow-y: scroll;
`;
const Card = styled.div`
  min-width: 300px;
  max-width: 300px;
  max-height: 550px;
  overflow-y: scroll;
  padding: 16px 18px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 600px) {
    padding: 12px 14px;
  }
`;
const Title = styled.div`
    padding: 0px 0px;
    font-size: 22px;
    color: ${({ theme }) => theme.text_primary}
    font-weight: 500;
`;
const Title2 = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: ${({ theme }) => theme.primary};
    @media (max-width: 600px) {
        font-size: 14px;
    }
`;
const FlexWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 22px;
    padding: 0px 76px;
    @media (max-width: 600px) {
    gap: 12px;
    }
`;

const Products = () => {
  // Example products data
  const products = [
    {
      id: 1,
      name: "Protein Powder",
      description: "Whey protein powder for muscle growth and recovery.",
      price: "$₹4,499",
      imageUrl: "https://img3.hkrtcdn.com/27426/prd_2742542-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Rich-Chocolate_c_s.jpg",
      buyLink: "https://www.muscleblaze.com/sv/muscleblaze-biozyme-performance-whey/SP-88093?navKey=VRNT-164773&itracker=w:menuLanding||;p:1|;e:164773|;", // External buy link
    },
    {
      id: 2,
      name: "Resistance Bands",
      description: "Set of resistance bands for home workouts.",
      price: "₹279",
      imageUrl: "https://m.media-amazon.com/images/I/61nBCBzgc9L._AC_UL480_FMwebp_QL65_.jpg",
      buyLink: "https://www.amazon.in/Boldfit-Resistance-Theraband-Multicolor-RMiniloopLightSet3/dp/B09TR82NXB/ref=sr_1_5?dib=eyJ2IjoiMSJ9.DcPdFIXIZnRgXDkypO3N9-78NV3xpsVGX021C6lwQpd24LL2P_av71NcB9Pk4zB73n8jIpQxZQMd7turJ00X-4HvpknsAI0ljsR3WABvyLmctPCXaKvbtu_ZxT8KLUSvQRaoZ8zjSjCJ-2t7i5rg0bLtdODBoudCcGyuQLotkJdcVKDQddL6JTdzu98yQTm6hUIErh8GM24F7Y-ENL4sBf3XC5MQv7XpIA_EIOgJOqGUwd7fmYk9UoEmgK3lvRWp4Fo4HOujtX4ioycAiEgx7uNQ2BvAJ99s3BMUgTdXOwA.kLODAx-kDN5N-u4Bt2tQ99NzklmBBimZzg9PNUVw73c&dib_tag=se&keywords=resistance+bands&qid=1713840687&sr=8-5", // External buy link
    },
    {
      id: 3,
      name: "Yoga Mat",
      description: "High-quality yoga mat for comfortable yoga sessions.",
      price: "₹698",
      imageUrl: "https://m.media-amazon.com/images/I/71pjMgVnFUL._AC_UL480_FMwebp_QL65_.jpg",
      buyLink: "https://www.amazon.in/Fitness-Mantra%C2%AE-Anti-Slip-Workout-Exercise/dp/B0CP8C86B1/ref=sr_1_14?crid=1U4I785QVH9SN&dib=eyJ2IjoiMSJ9.DjW7D0LfIbk3pmX2cXCHgATEN2Do6MBazNzHfrvFx-4DieHC5dqjn69qts914-sD2AQon9E5OupmqrUUt2VZ6pTAWZqEVBkuAQSosLA2XPEwMeVi-1Czc3mfstKOEWTd9k3tyfxgpR5_EOgBedUMMCjFeaOdxA-3mIEYjUYiNAVsDgl5zH8rQwoEM0Yfa-QMww-2-MgtJRxMoWW6T373rHxTCsReioAAzwhcKmoD3AxOTO_oTjqrkV8zkDr2sJWQT3Vnt09wYH6Iizv42L6M0K7aLJCPZZ6BSX4NEb-KVKA.unlMlf0k2zgNgtJGgexMBAwx7QgqMTBilX4eqsb5lv0&dib_tag=se&keywords=yoga+mat&qid=1713840761&sprefix=yoga+mat%2Caps%2C692&sr=8-14", // External buy link
    },
    // Add more products as needed
  ];

  return (
    <Container>
      <Title>Supplementary Products</Title>
      <FlexWrap>
        {products.map(product => (
          <Card>
            <div className="card">
              <div className="card-image">
                <img src={product.imageUrl} alt={product.name} style={{ height: '250px', width: '100%' }} />
                <Title2>{product.name}</Title2>
              </div>
              <div className="card-content">
                <p>{product.description}</p>
                <p><strong>Price:</strong> {product.price}</p>
              </div>
              <div className="card-action">
                <a
                  href={product.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Buy Now
                </a>
              </div>
            </div>
          </Card>
        ))}
      </FlexWrap>
    </Container>
  );
};

export default Products;
