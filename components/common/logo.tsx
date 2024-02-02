import React from 'react'
import logo from '../../public/images/logo-white.svg';
import Image from 'next/image';

export default function Logo() {
    return (
        <a href="/" className="inline-block" aria-label="">
            <Image src={logo} width={100} height={100} alt="" />
        </a>
    );
}