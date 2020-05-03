import React from 'react';

import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import {updateCollections} from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component{
    state = {
        Loading: true
    }


    unSubscribeFromSnapShot = null;
    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');
        this.unSubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({Loading: false});
        })
    }
    render() {
        const {match} = this.props;
        const {Loading} = this.state;
        return(
            <div className='shop-page'>
            <Route exact path= {`${match.path}`} render= {(props)=> 
                <CollectionsOverviewWithSpinner isLoading={Loading} {...props}/>
            }/>
            <Route path = {`${match.path}/:collectionId`} render ={(props) =>
                <CollectionPageWithSpinner isLoading= {Loading} {...props}/>
            }/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})

export default connect(null, mapDispatchToProps)(Shop);