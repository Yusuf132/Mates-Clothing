import {connect} from 'react-redux';

import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import CollectionsOverview from './collections-overview.component';
import WithSpinner from '../with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
    )(CollectionsOverview);

export default CollectionOverviewContainer;