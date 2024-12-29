type ContactContent = {
    id: string;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
    form: ContactForm
}

type ContactForm = {
    id: number;
    helpDeskPhone: string;
    projectTeamPhone: string;
    honorifics: FormLabelValue[];
    responsibility: FormLabelValue[];
    healthCareType: FormLabelValue[];
    whenToImplement: FormLabelValue[];
}

type FormLabelValue = {
    id: number;
    label: string;
    value: string;
}


type ContactFormProps = Omit<ContactForm, 'id' | 'helpDeskPhone' | 'projectTeamPhone'>
type ContactTitleAndSupportProps = Pick<ContactForm, 'helpDeskPhone' | 'projectTeamPhone'>
