import React from 'react'
import logo from '../../public/images/herbcare-logo-left.svg';
import Image from 'next/image';

export default function Logo() {
    return (
        <a href="/" className="inline-block" aria-label="">
            <Image src={logo} width={150} height={100} alt="" />
        </a>
    );
}