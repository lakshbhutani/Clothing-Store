import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionsLoaded } from './../../redux/shop/shop.selector'
import WithSpinner from './../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
})

const CollectionContainer = connect(mapStateToProps)(WithSpinner(CollectionPage))
export default CollectionContainer;