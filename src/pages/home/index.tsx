import React, { useEffect, useState } from "react"
import PropertySearchForm from "../../components/search"
import propertyTypes from "../../services/propertyType.json"

const HomePage = () => {

    return (
        <React.Fragment>
            <section className="w-full bg-hero-image bg-no-repeat bg-origin-content bg-scroll bg-center h-[800px]">
                <div className="container mx-auto px-4 flex items-end justify-center h-full">
                    <PropertySearchForm propertyType={propertyTypes} />
                </div>
            </section>
        </React.Fragment>
    )
}

export default HomePage