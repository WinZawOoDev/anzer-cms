export const imgHostUrl = "";

const backendUrl = process.env.NEXT_PUBLIC_DATA_URL;

export const homeDataUrl = `${backendUrl}/api/home?populate[first_section][populate]=image&&populate[second_section][populate][contents][populate][image]=*&&populate[third_section][populate][contents][populate][image]=*`;
export const aboutDataUrl = `${backendUrl}/api/about?populate[first_section_content][populate][image]=*&&populate[first_section_info_list][populate][list]=*&&populate[second_section][populate][infos]=*&&populate[third_section][populate][infos]=*`;
export const productDataUrl = `${backendUrl}/api/product?populate[first_section][populate][first][populate][list]=true&populate[first_section][populate][second][populate][list]=true&populate[first_section][populate][third][populate][list]=true&&populate[third_section][populate][list]=*&&populate[third_section][populate][image]=*`;
export const newDataUrl = `${backendUrl}/api/new?populate[first_section][populate][image]=*&&populate[first_section][populate][infos]=*&&populate[second_section][populate][image]=*&&populate[second_section][populate][infos]=*&&populate[third_section][populate][blogs][populate][image]=*`;
export const clinicalManagementDataUrl = `${backendUrl}/api/clinical-management?populate[first_section][populate][text]=*&&populate[second_section][populate][text]=*&&populate[second_section][populate][image]=*&&populate[third_section][populate][text]=*&&populate[third_section][populate][image]=*`;
export const managementPerspectiveDataUrl = `${backendUrl}/api/management-perspective?populate[first_section][populate][infos]=*&&populate[first_section][populate][image]=*&&populate[second_section][populate][contents][populate][image]=*&&populate[third_section][populate][contents][populate][image]=*`;
export const patientEngagementDataUrl = `${backendUrl}/api/patient-engagement?populate[first_section][populate][text]=*&&populate[second_section][populate][text]=*&&populate[third_section][populate][text]=*`;
export const contactDataUrl = `${backendUrl}/api/contact?populate[form][populate][honorifics]=*&[populate][form][populate][responsibility]=*&[populate][form][populate][healthCareType]=*&[populate][form][populate][whenToImplement]=*`;
export const footerDataUrl = `${backendUrl}/api/footer?populate[Country][populate][mapAddress]=*&&populate[FollowUp]=*`;

