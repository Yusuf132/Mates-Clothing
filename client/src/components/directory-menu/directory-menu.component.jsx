import React from 'react';
import './directory-menu.styles.scss'
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectDirectorySection} from '../../redux/directory/directory.selectors';

const DirectoryMenu= ({directory}) => {
    // constructor() {
    //     super();
    //     this.state = {
    //         sections : [
    //             {
    //               title: 'hats',
    //               imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    //               id: 1,
    //               linkUrl: 'shop/hats'
    //             },
    //             {
    //               title: 'jackets',
    //               imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    //               id: 2,
    //               linkUrl: 'shop/jackets'
    //             },
    //             {
    //               title: 'sneakers',
    //               imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    //               id: 3,
    //               linkUrl: 'shop/sneakers'
    //             },
    //             {
    //               title: 'womens',
    //               imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    //               size: 'large',
    //               id: 4,
    //               linkUrl: 'shop/womens'
    //             },
    //             {
    //               title: 'mens',
    //               imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    //               size: 'large',
    //               id: 5,
    //               linkUrl: 'shop/mens'
    //             }
    //           ]
    //     };
    // }
    
    return (
        <div className="directory-menu">
        {directory.map(({id, ...sectionsParams}) => (
            <MenuItem key={id} {...sectionsParams}/>
        ))}
        </div>
    )
}
const mapsToStateProps = createStructuredSelector({
    directory: selectDirectorySection,
});
export default connect(mapsToStateProps)(DirectoryMenu);