"use client";
import Book from "@library/components/Book";
import IBook from "@library/types/IBook";
import axios from "axios";
import { log } from "console";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import PopularBooks from "@library/components/PopularBooks";
import NewReleaseBooks from "@library/components/NewRealeaseBook";
import FeaturedBooks from "@library/components/FeaturedBooks";
import FeaturedCategories from "@library/components/FeaturedCategories";
import Carousel from "@library/components/Carousel";

export default function Home() {
    return (
        <div className="flex flex-col w-screen">
            <Carousel />
            {/* <FeaturedBooks /> */}
            <FeaturedCategories />
            <PopularBooks />
            <NewReleaseBooks />
        </div>
    );
}
