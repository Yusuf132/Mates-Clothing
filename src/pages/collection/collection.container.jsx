import {connect} from 'react-redux';

import {selectIsCollectionLoaded} from '../../redux/shop/shop.selectors';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import CollectionsPage from './collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
    )(CollectionsPage);

export default CollectionPageContainer;