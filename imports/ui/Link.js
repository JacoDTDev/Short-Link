import React from 'react';

import LinksList from "./LinksList";
import PrivateHeader from "./PrivateHeader";
import AddLink from "./AddLink";
import LinksListFilters from './LinkListFilters';

export default ()=>{
    return <div>
        <PrivateHeader title='Your Links'/>
        <LinksListFilters/>
        <AddLink/>
        <LinksList/>
    </div>
}
