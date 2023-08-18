import React, { FC, useEffect, useState } from "react";
import Slider from "react-slick"
import CarouselItem from "./CarouselItem";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import IBook from "@library/types/IBook";
import axios from "axios";
import { motion } from "framer-motion";

interface CarouselProps {
    [key: string]: any;
}

const Carousel: FC<CarouselProps> = (props) => {
    const [books, setBooks] = useState<Array<IBook>>([]);
    const [page, setPage] = useState<number>(0);
    const [size, setSize] = useState<number>(4);
    const [totalPage, setTotalPage] = useState<number>(1);
    const fetchNewBooks = async (values: any) => {
        try {
            const response = await axios.post("/api/book/find", values, {
                params: { page, size, order: "desc", sort: "isFeatured" },
            });
            setBooks(response.data.content);
            setTotalPage(response.data.totalPage);
        } catch (error) {
            console.log(error);
        }
        [page, size];
    };
    useEffect(() => {
        fetchNewBooks({});
        //eslint-disable-next-line
    }, [page, size]);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className="w-full truncate">
            <Slider {...settings}>
            {books.map((e: IBook, index: number) => {
                    return (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.5, duration: 0.4 }}
                            
                        >
                            {/* <Book {...e}  */}
                           
                            <CarouselItem {...e}/>
                        </motion.div>
                    );
            })}
           
            </Slider>
        </div>
    );
};

export default Carousel;
