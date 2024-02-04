import React from 'react'
import logo from '../../public/images/herbcare-logo-top.svg';
import Image from 'next/image';

export default function Logo() {
    return (
        <a href="/" className="inline-block" aria-label="Go to Homepage">
            <Image src={logo} width={100} height={100} alt="LOGO" />
        </a>
    );
}