import type { Struct, Schema } from '@strapi/strapi';

export interface SharedText extends Struct.ComponentSchema {
  collectionName: 'components_shared_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Schema.Attribute.String;
    body: Schema.Attribute.Text;
  };
}

export interface SharedPieChart extends Struct.ComponentSchema {
  collectionName: 'components_shared_pie_charts';
  info: {
    displayName: 'PieChart';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    first: Schema.Attribute.Component<'shared.info-list', false>;
    second: Schema.Attribute.Component<'shared.info-list', false>;
    third: Schema.Attribute.Component<'shared.info-list', false>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_infos';
  info: {
    displayName: 'Info';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    phone: Schema.Attribute.String;
  };
}

export interface SharedInfoWithTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_info_with_titles';
  info: {
    displayName: 'InfoWithTitle';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    infos: Schema.Attribute.Component<'shared.info', true>;
    image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SharedInfoList extends Struct.ComponentSchema {
  collectionName: 'components_shared_info_lists';
  info: {
    displayName: 'InfoList';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    list: Schema.Attribute.Component<'shared.text', true>;
    image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SharedEssentialModules extends Struct.ComponentSchema {
  collectionName: 'components_shared_essential_modules';
  info: {
    displayName: 'EssentialModules';
  };
  attributes: {
    title: Schema.Attribute.String;
    labels: Schema.Attribute.Component<'shared.text', true>;
  };
}

export interface SharedConversationWithBenefits extends Struct.ComponentSchema {
  collectionName: 'components_shared_conversation_with_benefits';
  info: {
    displayName: 'ConversationWithBenefits';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    conversation_1: Schema.Attribute.Text;
    conversation_2: Schema.Attribute.Text;
    benefits_title: Schema.Attribute.String;
    text: Schema.Attribute.Component<'shared.text', true>;
    image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SharedContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_contents';
  info: {
    displayName: 'content';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SharedContentWithTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_content_with_titles';
  info: {
    displayName: 'ContentWithTitle';
  };
  attributes: {
    title: Schema.Attribute.String;
    contents: Schema.Attribute.Component<'shared.content', true>;
  };
}

export interface SharedCommercialFeatures extends Struct.ComponentSchema {
  collectionName: 'components_shared_commercial_features';
  info: {
    displayName: 'CommercialFeatures';
  };
  attributes: {
    title: Schema.Attribute.String;
    sub_title: Schema.Attribute.String;
    text: Schema.Attribute.Component<'shared.text', true>;
  };
}

export interface SharedBlogsWithTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_blogs_with_titles';
  info: {
    displayName: 'BlogsWithTitle';
  };
  attributes: {
    title: Schema.Attribute.String;
    blogs: Schema.Attribute.Component<'shared.blog', true>;
  };
}

export interface SharedBlog extends Struct.ComponentSchema {
  collectionName: 'components_shared_blogs';
  info: {
    displayName: 'blog';
  };
  attributes: {
    title: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    description: Schema.Attribute.RichText;
  };
}

export interface SharedAddress extends Struct.ComponentSchema {
  collectionName: 'components_shared_addresses';
  info: {
    displayName: 'Address';
  };
  attributes: {
    country: Schema.Attribute.String;
    address: Schema.Attribute.Text;
    phone: Schema.Attribute.String;
    lat: Schema.Attribute.Decimal;
    lng: Schema.Attribute.Decimal;
  };
}

export interface SharedAccorSec extends Struct.ComponentSchema {
  collectionName: 'components_shared_accor_secs';
  info: {
    displayName: 'AccorSec';
  };
  attributes: {
    title: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    infos: Schema.Attribute.Component<'shared.info', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.text': SharedText;
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.pie-chart': SharedPieChart;
      'shared.media': SharedMedia;
      'shared.info': SharedInfo;
      'shared.info-with-title': SharedInfoWithTitle;
      'shared.info-list': SharedInfoList;
      'shared.essential-modules': SharedEssentialModules;
      'shared.conversation-with-benefits': SharedConversationWithBenefits;
      'shared.content': SharedContent;
      'shared.content-with-title': SharedContentWithTitle;
      'shared.commercial-features': SharedCommercialFeatures;
      'shared.blogs-with-title': SharedBlogsWithTitle;
      'shared.blog': SharedBlog;
      'shared.address': SharedAddress;
      'shared.accor-sec': SharedAccorSec;
    }
  }
}
