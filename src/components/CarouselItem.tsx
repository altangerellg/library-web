import IBook from "@library/types/IBook";
import axios from "axios";
import { motion } from "framer-motion";
import React, { FC, useEffect, useState } from "react";
import Book from "./Book";

interface CarouselItemProps extends IBook {

}

const CarouselItem: FC<CarouselItemProps> = ({author, name, coverUrl}) => {
    
    return (
        <div
      style={{
        background: "#fff6f6",
        padding: "20px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between",
        paddingLeft:"220px",
        paddingRight:"220px"
      }}
    >
      <div
        style={{
            flexGrow:"2",
          marginRight: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        
        <motion.div  
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4 }}>
            <div
          style={{
            whiteSpace: "initial",
            display:"flex",
            flexWrap:"wrap",
            fontWeight: "bold",
            fontSize: "40px",
            marginBottom: "5px",
          }}
        >
          {name}
          </div>
        
        <div
          
          style={{
            fontSize: "16px",
            marginBottom: "15px",
          }}
        >
          {author?.firstname + " " + author?.lastname}
        </div>
        </motion.div>
        <div>
            
        <button
          style={{
            backgroundColor: "#ff6347",
            color: "white",
            padding: "8px 16px",
            border: "none",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          Дэлгэрэнгүй...
        </button>
        </div>
      </div>
      <div className="w-[300px] h-auto grow-1">
        <img
          className="w-full h-auto"
          src={`/public/uploads/${coverUrl}`}
          alt={`Book Cover`}
        />
      </div>
    </div>
    );
};

export default CarouselItem;

