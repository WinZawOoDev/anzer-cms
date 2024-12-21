const hostUrl = process.env.NEXT_PUBLIC_DATA_URL;
export const homeDataUrl = `${hostUrl}/api/home?populate[first_section][populate]=image&&populate[second_section][populate][contents][populate][image]=*&&populate[third_section][populate][contents][populate][image]=*`;
export const aboutDataUrl = `${hostUrl}/api/about?populate[first_section_content][populate][image]=*&&populate[first_section_info_list][populate][list]=*&&populate[second_section][populate][infos]=*&&populate[third_section][populate][infos]=*`;
export const productDataUrl = `${hostUrl}/api/product?populate[first_section][populate][first][populate][list]=true&populate[first_section][populate][second][populate][list]=true&populate[first_section][populate][third][populate][list]=true&&populate[third_section][populate][list]=*&&populate[third_section][populate][image]=*`;
export const newDataUrl = `${hostUrl}/api/new?populate[first_section][populate][image]=*&&populate[first_section][populate][infos]=*&&populate[second_section][populate][image]=*&&populate[second_section][populate][infos]=*&&populate[third_section][populate][blogs][populate][image]=*`;
export const clinicalManagementDataUrl = `${hostUrl}/api/clinical-management?populate[first_section][populate][text]=*&&populate[second_section][populate][text]=*&&populate[second_section][populate][image]=*&&populate[third_section][populate][text]=*&&populate[third_section][populate][image]=*`;
export const managementPerspectiveDataUrl = `${hostUrl}/api/management-perspective?populate[first_section][populate][infos]=*&&populate[first_section][populate][image]=*&&populate[second_section][populate][contents][populate][image]=*&&populate[third_section][populate][contents][populate][image]=*`;
export const patientEngagementDataUrl = `${hostUrl}/api/patient-engagement?populate[first_section][populate][text]=*&&populate[second_section][populate][text]=*&&populate[third_section][populate][text]=*`;

export const footerDataUrl = `${hostUrl}/api/footer?populate=*`;
