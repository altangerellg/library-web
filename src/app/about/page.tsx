"use client";
import Image from "next/image";
import React, { FC } from "react";

const AboutPage: FC<any> = () => {
    return (
        <div>
            <div>
                <p className="text-center text-4xl font-bold mb-12 mt-5">
                    Бидний тухай
                </p>
                <Image
                    className=""
                    alt="about"
                    src="/about.jpg"
                    width={2000}
                    height={10}
                />
            </div>
            <div className="flex justify-center">
                <div className="w-[80%] flex justify-center bg-white -mt-24">
                    <div className="w-[80%] py-8 text-justify">
                        <p className="flex text-3xl mb-12">Welcome to Bookstore</p> 
                        <p className="flex mb-12">“
                            Many desktop publishing packages
                            and web page editors now use Lorem Ipsum as their
                            default model search for eolved over sometimes by
                            accident, sometimes on purpose ”</p> 
                        <p className="flex text-xl mb-4">What we really do?</p>
                        <p className="flex mb-6">
                            Mauris tempus erat laoreet turpis lobortis, eu tincidunt
                            erat fermentum. Aliquam non tincidunt urna. Integer
                            tincidunt nec nisl vitae ullamcorper. Proin sed ultrices
                            erat. Praesent varius ultrices massa at faucibus. Aenean
                            dignissim, orci sed faucibus pharetra, dui mi dignissim
                            tortor, sit amet condimentum mi ligula sit amet augue.
                            Pellentesque vitae eros eget enim mollis placerat.
                            Aliquam non tincidunt urna. Integer tincidunt nec nisl
                            vitae ullamcorper. Proin sed ultrices erat. Praesent
                            varius ultrices massa at faucibus. Aenean dignissim,
                            orci sed faucibus pharetra, dui mi dignissim tortor, sit
                            amet condimentum mi ligula sit amet augue. Pellentesque
                            vitae eros eget enim mollis placerat. </p>
                        <div className="flex">
                        <div className="w-[50%] py-3 mr-4">
                            <p className="text-xl mb-3">
                                Our Vision
                            </p>
                            <p>
                                Pellentesque sodales augue eget ultricies ultricies. Cum
                                sociis natoque penatibus et magnis dis parturient
                                montes, nascetur ridiculus mus. Curabitur sagittis
                                ultrices condimentum.</p>
                        </div>
                        <div className="w-[50%] py-3 ml-4">
                            <p className="text-xl mb-3">
                                Our Vision
                            </p>
                            <p>
                                Pellentesque sodales augue eget ultricies ultricies. Cum sociis natoque
                                penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus. Curabitur sagittis ultrices condimentum.
                            </p>
                        </div>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
