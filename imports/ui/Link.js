import React from 'react';

import LinksList from "./LinksList";
import PrivateHeader from "./PrivateHeader";
import AddLink from "./AddLink";
import LinksListFilters from './LinkListFilters';

// changed to a stateless functional component
export default ()=>{
    return <div>
        <PrivateHeader title='Your Links'/>
        <LinksListFilters/>
        <LinksList/>
        <AddLink/>
    </div>
}
// export default class Link extends React.Component{
//     render() {
//         return <div>
//             <PrivateHeader title='Your Links'/>
//             <LinksList/>
//             <AddLink/>
//         </div>
//     }
// }