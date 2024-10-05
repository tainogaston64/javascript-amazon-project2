import{Product, Clothing, Appliance} from '../../data/products.js';

describe('test suite: Product', () => {
  let product;

  beforeEach(() => {
    product =new Product({
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    });
  });

  it('has the correct properties', () => {
    expect(product.id).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
  })
  
});

describe('test:suite: Clothing', () => {
  let clothing;

  beforeEach(() => {
    clothing = new Clothing({
      id: '',
      image:'',
      name: '',
      sizeChartLink: 'images/clothing-size-chart.png'
    });
  });
  it('has the correct properties', () => {
    expect(clothing.sizeChartLink).toEqual('images/clothing-size-chart.png')
  })
})

describe('test suite: Appliance', () => {
  let appliance;

  beforeEach(() => {
    appliance = new Appliance({
      id: '',
      image:'',
      name: '',
      instructionsLink: '',
      warrantyLink: 'images/appliance-warranty.png'
    });
  });
  it('has the correct properties', () => {
    expect(appliance.warrantyLink).toEqual('images/appliance-warranty.png')
  })
})