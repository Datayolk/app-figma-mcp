import React from 'react';
import Button from './Button';
import Image from 'next/image';
import imgFrame from '/public/hero.svg';


export default function Header() {
  return (
    <div className="box-border content-stretch flex sm:flex-row flex-col-reverse items-start justify-between px-5 sm:px-header-padding-x py-0 relative">
      <div className="content-stretch flex flex-col gap-5 sm:gap-header-content-gap items-start ">
        <div className="flex flex-col gap-2.5 sm:gap-header-content-gap">
        <h1 className="sm:text-left text-center font-space-grotesk font-medium leading-normal relative shrink-0 text-3xl sm:text-header-title text-black sm:w-header-title">
          Navigating the digital landscape for success
        </h1>
        <p className="sm:text-left text-center font-space-grotesk font-normal leading-[28px] text-md sm:text-header-description text-black sm:w-header-description">
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        </div>
        <Button >
          Book a consultation
        </Button>
      </div>
      <div className='w-full h-full'>
        <Image src={imgFrame} alt="Frame" className='w-full h-full' />
      </div>
    </div>
  );
}
