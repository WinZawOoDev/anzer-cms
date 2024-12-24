import ContactForm from '@/components/common/contact/form'
import NavigationBanner from '@/components/common/contact/navigation-banner'
import PageContainer from '@/components/common/page-container'
import Image from 'next/image'
import DoctorPointing from '@/assets/imgs/doctor-pointing.png'


export default function ContactPage() {
    return (
        <PageContainer className='mx-auto'>
            <NavigationBanner />
            <div className='flex items-center justify-around mx-9'>
                <ContactForm />
                <Image
                    src={DoctorPointing}
                    alt='Doctor Pointing'
                    height={300}
                    width={300}
                    className='w-2/5 max-h-[35em]'
                />
            </div>
        </PageContainer>
    )
}
