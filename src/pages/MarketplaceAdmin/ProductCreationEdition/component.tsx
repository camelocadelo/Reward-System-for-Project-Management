import React, { useState } from 'react';
import { connect } from 'react-redux';
import marketplaceActions from 'store/marketplace/actions';
import { MainTemplate } from 'components/organisms/MainTemplate';
import './index.scss';
import Input from 'components/atoms/Input/component';
import { ProductTypes } from './types';
import AddImageButton from 'components/atoms/AddImageButton/component';
import MainButton from 'components/atoms/MainButton/component';
import TagItem from 'components/atoms/TagItem/component';

function ProductCreationEdition(props: any) {
  const { onAddMarketplaceProduct } = props;

  const DEFAULT_PRODUCT_DATA: {
    name: string;
    description: string;
    category: string;
    price: string;
    photo: any;
    sizes_available: string[];
  } = {
    name: '',
    description: '',
    category: '',
    price: '',
    photo: null,
    sizes_available: [],
  };

  const [productData, setProductData] = useState(DEFAULT_PRODUCT_DATA);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [size, setSize] = useState<string[]>([]);

  // console.log('the product data: ', productData);

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value, name } = event.target;
  //   console.log(value, name);
  //   if (name === 'price') {
  //     setProductData({ ...productData, [name]: value });
  //   }
  //   setProductData({ ...productData, [name]: value });
  // };

  const handleAddImage = () => {
    console.log('it is handle add image');
  };

  const handleImageUpload = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const offerImage = event.target.files[0];
      // setProductData({ ...productData, photo: offerImage });

      // const reader = new FileReader();
      // reader.onload = (e: any) => {
      //   setImgPreview({ src: e.target.result });
      // };
      // reader.readAsDataURL(offerImage);
      // offerData.set('image', offerImage);
    }
  };

  const validate = () => {
    if (name === '') {
      return true;
    }
    if (category === '-') {
      return true;
    }
    if (description === '') {
      return true;
    }
    return false;
  };

  console.log('the product data: ', productData);

  const handleAddProduct = () => {
    // const data = new FormData();
    const isError = validate();
    if (!isError) {
      onAddMarketplaceProduct(productData);
    }
  };

  // useEffect(() => {
  //   setProductData(new FormData());
  // }, [setProductData]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setProductData({ ...productData, name: event.target.value });
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
    setProductData({ ...productData, description: event.target.value });
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
    setProductData({ ...productData, price: event.target.value });
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
    setProductData({ ...productData, category: event.target.value });
  };

  const handleSizeChange = (event: any) => {
    const newSize = [...size];
    if (!size.includes(event.target.value)) {
      newSize.push(event.target.value);
    }
    setSize(newSize);
    setProductData({ ...productData, sizes_available: size });
  };

  return (
    <MainTemplate>
      <div className="product-creation-edition">
        <span className="typography__variant-h2"> Product Description </span>
        <div style={{ marginTop: '32px', width: '45%' }}>
          <Input
            label="Prize name"
            onInputChange={handleNameChange}
            name="name"
            value={name}
            placeholder="It is preferrable to use no more than 4 words in prize name"
          />
          <div style={{ marginTop: '10px', marginBottom: '15px' }}>
            <Input
              label="Prize description"
              onInputChange={handleDescriptionChange}
              name="description"
              value={description}
              placeholder="Enter prize description"
            />
          </div>
          <Input
            label="Price"
            onInputChange={handlePriceChange}
            name="price"
            value={price}
            placeholder="Enter price of prize in bonus points"
          />
          <div style={{ marginTop: '15px', marginBottom: '15px' }}>
            <Input
              label="Category"
              onInputChange={handleCategoryChange}
              name="category"
              // value={productData.category}
              placeholder="Enter prize category"
            />
          </div>
          <div
            style={{
              marginTop: '15px',
              marginBottom: '15px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span
              className="typography__variant-subtext"
              style={{ fontSize: '16px', color: '#282828' }}
            >
              Sizes available
            </span>
            <select onChange={handleSizeChange} defaultValue="Select size" className="sizes-select">
              {/* <option value="" disabled selected style={{ color: 'gray' }}></option> */}
              <option value="xs"> xs </option>
              <option value="s"> s </option>
              <option value="m"> m </option>
              <option value="l"> l </option>
              <option value="xl"> xl </option>
            </select>
            {/* <div style={{ marginTop: '15px' }}>
              {size.length > 0 &&
                size.map((s, i) => (
                  <div key={i}>
                    <TagItem tag={s} bgColor="white" color="red" />
                  </div>
                ))}
            </div> */}
          </div>
          <div style={{ marginTop: '15px' }}>
            <span
              className="typography__variant-subtext"
              style={{ fontSize: '16px', color: '#282828' }}
            >
              Images
            </span>
            <div style={{ marginTop: '10px' }}>
              <AddImageButton text="Add image">
                <input
                  name="photo"
                  type="file"
                  style={{ display: 'none' }}
                  onChange={handleImageUpload}
                />
              </AddImageButton>
            </div>
          </div>
        </div>
      </div>
      <div className="product-creation-footer">
        <div>
          <MainButton buttonText="Create product" onCreateProject={handleAddProduct} />
        </div>
      </div>
    </MainTemplate>
  );
}

const mapStateToProps = (state: any) => {
  return {
    marketplaceProducts: state.marketplaceReducer.marketplaceProducts.data,
  };
};

const mapDispatchToProps = {
  onAddMarketplaceProduct: marketplaceActions.addMarketplaceProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCreationEdition);
