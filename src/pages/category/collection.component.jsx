import React from "react";
import { connect } from "react-redux";

import { selectCollectionItem } from "../../redux/shop/shop.selector";

// import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss";

const CollectionPage = ({ collectionItems }) => {
  console.log(collectionItems);
  return (
    <div className="collection-page">
      <h2>Collection Page</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collectionItems: selectCollectionItem(ownProps.match.params.collectionId)(
    state
  ),
});

export default connect(mapStateToProps)(CollectionPage);
