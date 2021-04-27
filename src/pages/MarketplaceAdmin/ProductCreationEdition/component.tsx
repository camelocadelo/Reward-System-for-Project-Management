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
import SizeTag from 'components/atoms/SizeTag/component';
import { DEFAULT_NOTIFICATION_DATA } from 'components/molecules/Notification/consts';
import useNotification from 'components/molecules/Notification/useNotification';
import withNotificationProvider from 'components/molecules/Notification/withNotificationProvider';
import { useHistory, withRouter } from 'react-router-dom';
function ProductCreationEdition(props: any): JSX.Element {
  const { onAddMarketplaceProduct } = props;
  const notification = useNotification();
  const history = useHistory();
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

  const handleAddImage = () => {
    console.log('it is handle add image');
  };

  const newProductData = new FormData();
  // newProductData.append('name', '');
  // newProductData.append('description', '');
  // newProductData.append('category', '');
  // newProductData.append('price', '');
  // newProductData.append('sizes_available', 'xs');

  const handleImageUpload = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const offerImage = event.target.files[0];
      const reader = new FileReader();
      // reader.onload = (e: any) => {
      //   setImgPreview({ src: e.target.result });
      // };
      reader.readAsDataURL(offerImage);
      newProductData.set('photo', offerImage);
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

  console.log('the product data: ', newProductData);
  const handleAddProduct = () => {
    // const data = new FormData();
    const isError = validate();
    if (!isError) {
      newProductData.append('name', name);
      newProductData.append('description', description);
      newProductData.append('category', category);
      newProductData.append('price', price);
      size.map((s) => {
        newProductData.append('sizes_available', s);
      });
      // newProductData.append('sizes_available', 'xs');
      onAddMarketplaceProduct(newProductData, {
        onSuccess: () => {
          notification.add({
            ...DEFAULT_NOTIFICATION_DATA,
            title: 'Product created successfully!',
            // description: 'Приз создан успешно',
          });
          setTimeout(() => {
            history?.push('/admin-marketplace');
          }, 400);
          // onGetUserProjects();
          // setPageLoading(false);
          console.log('success 2');
        },
        onError: () => {
          console.log('the one error part');
        },
      });
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    newProductData.set('name', event.target.value);
    setProductData({ ...productData, name: event.target.value });
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
    newProductData.set('description', event.target.value);
    setProductData({ ...productData, description: event.target.value });
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
    newProductData.set('price', event.target.value);
    setProductData({ ...productData, price: event.target.value });
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
    newProductData.set('category', event.target.value);
    setProductData({ ...productData, category: event.target.value });
  };

  const handleSizeChange = (event: any) => {
    const newSize = [...size];
    if (!size.includes(event.target.value)) {
      newSize.push(event.target.value);
    } else {
      const index = newSize.indexOf(event.target.value);
      newSize.splice(index, 1);
    }
    setSize(newSize);
    setProductData({ ...productData, sizes_available: newSize });
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
            <select onChange={handleSizeChange} className="sizes-select">
              <option value="" disabled selected style={{ color: 'gray' }}></option>
              <option value="xs"> xs </option>
              <option value="s"> s </option>
              <option value="m"> m </option>
              <option value="l"> l </option>
              <option value="xl"> xl </option>
            </select>
            <div style={{ marginTop: '10px', display: 'flex' }}>
              {size.map((size) => (
                <div key={size} style={{ marginRight: '5px' }}>
                  <SizeTag size={size} />
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: '15px' }}>
            <span
              className="typography__variant-subtext"
              style={{ fontSize: '16px', color: '#282828' }}
            >
              Images
            </span>
            <div style={{ marginTop: '10px' }}>
              {/*<AddImageButton text="Add image">*/}
              <input name="photo" type="file" onChange={handleImageUpload} />
              {/*</AddImageButton>*/}
            </div>
          </div>
        </div>
      </div>
      <div className="product-creation-footer">
        <div style={{ marginBottom: '120px' }}>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNotificationProvider(ProductCreationEdition));
