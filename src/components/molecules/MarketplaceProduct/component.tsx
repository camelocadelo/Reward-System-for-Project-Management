import React from 'react';
import { MarketplaceProductProps } from './types';
// import { Link } from 'react-router-dom';
import './index.scss';
import projectActions from 'store/project/actions';
import { connect } from 'react-redux';
import BorderedButton from 'components/atoms/BorderedButton/component';

function MarketplaceProduct(props: MarketplaceProductProps): JSX.Element {
  const { name, description, photo, onAddCart } = props;

  return (
    <>
      <div className="marketplace-product">
        <div style={{ marginTop: '18px', marginBottom: '18px' }}>
          <div className="product-top">
            <img
              src={photo}
              style={{ width: '325px', height: '160px', objectFit: 'cover' }}
              alt="Marketplace product"
            />
          </div>
          <div className="product-bottom">
            <div>
              <span className="typography__variant-h2">{name}</span>
            </div>
            <div>
              <span className="typography__variant-subtext">
                {description.substr(0, 50)}
                {description.length > 49 ? '...' : ''}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <BorderedButton text="Add to cart" onSendBonuses={onAddCart} color="#02A0FC" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    deleteProjectState: state.projectReducer.deletedProjectState.data,
  };
};

const mapDispatchToProps = {
  onDeleteProject: projectActions.deleteProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(MarketplaceProduct);
