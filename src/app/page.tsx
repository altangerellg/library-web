"use client";
import React, { FC, useEffect, useState } from "react";
import PopularBooks from "@library/components/PopularBooks";
import NewReleaseBooks from "@library/components/NewRealeaseBook";
import FeaturedCategories from "@library/components/FeaturedCategories";
import Carousel from "@library/components/Carousel";

export default function Home() {
    return (
        <div className="flex flex-col w-screen">
            {/* <Carousel /> */}
            {/* <FeaturedCategories /> */}
            <PopularBooks />
            <NewReleaseBooks />
        </div>
    );
}
