import React from 'react';
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={400}
        height={250}
        viewBox="0 0 400 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="1" y="7" rx="0" ry="0" width="400" height="175" />
        <rect x="1" y="190" rx="0" ry="0" width="400" height="25" />
        <rect x="1" y="225" rx="0" ry="0" width="200" height="10" />
        <rect x="1" y="250" rx="0" ry="0" width="200" height="25" />
    </ContentLoader>
)
export default MyLoader;