import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import ColectionContainer from '../category/collection.container';

import { fetchCollectiionsStart } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  unsubscribeFromCollectionsFirebase = null;

  componentDidMount() {
    const { fetchCollectionStart } = this.props;
    fetchCollectionStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          // render={(props) => (
          //   <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          // )}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          // render={(props) => (
          //   <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
          // )}
          component={ColectionContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectiionsStart()),
});


export default connect(null, mapDispatchToProps)(ShopPage);
