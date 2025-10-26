import ANIMODEVLOGO from '@/public/animo-dev-logo.jpg'
import { Menu } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
    return (
        <div
            className="bg-secondary h-[3rem] py-2 px-4 flex items-center justify-between border-retro-y"
        >

            {/* LEFT SECTION  */}
            <section className='flex items-center gap-2'>
                <Image
                    src={ANIMODEVLOGO}
                    alt="Animo Dev Logo"
                    width={30}
                    height={30}
                    className='border-retro border-black'
                />
                <p className='font-bold'>
                    ANIMO.DEV 
                </p>
            </section>

            {/* RIGHT SECTION  */}
            <section>
                <Menu />
            </section>

        </div>
    )
};

export default Header;