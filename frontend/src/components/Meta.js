import React from 'react'
import {Helmet} from 'react-helmet'

const Meta = ({title, keywords, description}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps={
    title:'Welcome to E Shop',
    description:'We Sell The Best Products For Cheap',
    keywords:'electronics, buy electronics, cheap electroniccs'
}

export default Meta
