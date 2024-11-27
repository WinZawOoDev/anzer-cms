import ContactForm from '@/components/common/contact/form'
import NavigationBanner from '@/components/common/contact/navigation-banner'
import PageContainer from '@/components/common/page-container'

export default function ContactPage() {
    return (
        <PageContainer>
            <NavigationBanner />
            <div className='mx-auto'>
                <ContactForm />
            </div>
        </PageContainer>
    )
}
