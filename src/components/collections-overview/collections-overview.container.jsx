// import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose  } from 'redux'

import withSpinner from './../with-spinner/with-spinner.component'
import { selectIsloading } from './../../redux/shop/shop.selector'
import CollectionsOverview from './../collections-overview/collections-overview.component'

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsloading,
    // isCollectionsLoaded: selectIsCollectionsLoaded
  });

// const CollectionsOverviewContainer = connect(mapStateToProps)(withSpinner(CollectionsOverview))
const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer