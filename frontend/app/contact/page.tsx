import ContactForm from '@/components/common/contact'
import PageContainer from '@/components/common/page-container'
import Image from 'next/image'
import DoctorPointing from '@/assets/imgs/doctor-pointing.png'


export default function ContactPage() {
    return (
        <PageContainer className='mx-auto'>
            <div className='md:flex md:items-center md:justify-around mx-5 py-5 md:mx-9'>
                <ContactForm />
                <Image
                    src={DoctorPointing}
                    alt='Doctor Pointing'
                    height={300}
                    width={300}
                    className='hidden md:block w-2/5'
                />
            </div>
        </PageContainer>
    )
}
