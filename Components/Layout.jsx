import React from 'react'
import Banner from './Banner'
import About from './About'
import Video from './Video'
import Usps from './Usps'
import ProductSlider from './ProductSlider'
import Certificate from './Certificate'

export default class AppLayout extends React.Component {
	render() {
        return (
            <>
                <Banner />
                <About />
                <Video />
                <Usps />
                <ProductSlider />
                <Certificate />
                {this.props.children}
            </>
        )
    }
}
