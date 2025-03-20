'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Banner() {
    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg'];
    const [index, setIndex] = useState(0);
    const router = useRouter();

    const { data: session } = useSession();


    return (
        <div className='block p-[5px] m-0 w-screen h-[60vh] relative bg-beige' onClick={() => { setIndex(index + 1) }}>
            <Image src={covers[index % 3]}
                alt='cover'
                fill={true}
                priority
                objectFit='cover' />
            <div className='relative top-[100px] z-20 text-center'>
                <h1 className='text-4xl font-medium'>Your Travel Partner</h1>
                <h3 className='text-xl font-serif'>Explore Your World with Us</h3>
            </div>
            {
                session ? <div className="z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl">
                    Hello {session.user?.name}</div>
                    : null
            }
            <button className="bg-white text-cyan-600 border border-cyan-600
          font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
          hover:bg-cyan-600 hover:text-white hover:border-transparent"
                onClick={(e) => { e.stopPropagation(); router.push('/car') }}>
                Select Your Travel Partner NOW
            </button>
        </div>
    );
}