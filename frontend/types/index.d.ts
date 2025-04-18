type MedicalFeature = {
  id: string;
  title: string;
  description: string;
};

type Image = {
  ext: string; // File extension
  url: string; // File URL path
  hash: string; // Unique hash for the file
  mime: string; // MIME type
  name: string; // File name
  path: string | null; // Path (nullable)
  size: number; // Size in KB
  width: number; // Image width in pixels
  height: number; // Image height in pixels
  sizeInBytes: number; // Size in bytes
};

type Content = {
  id: number;
  title: string;
  description: string;
  image: {
    formats: {
      large: Image;
    };
  };
};

type Info = {
  id: number;
  title: string;
  description: string;
};

type TextItem = {
  id: string;
  text: string;
};

type AddressType = {
  id: number;
  title: string;
  description: string;
  phone: string;
};

type HomeSectionsType = {
  first_section: Content[];
  second_section: {
    id: number;
    title: string;
    contents: Content[];
  };
  third_section: {
    id: number;
    title: string;
    contents: Content[];
  };
};

type AboutSectionsType = {
  id: number;
  first_section_content: Content;
  first_section_info_list: {
    id: number;
    title: string;
    list: TextItem[];
  };
  second_section: {
    id: number;
    title: string;
    infos: Info[];
  };
  third_section: {
    id: number;
    title: string;
    infos: Info[];
  };
};

type ProductSectionsType = {
  id: number;
  first_section: {
    id: number;
    title: string;
    first: {
      id: number;
      title: string;
      list: TextItem[];
    };
    second: {
      id: number;
      title: string;
      list: TextItem[];
    };
    third: {
      id: number;
      title: string;
      list: TextItem[];
    };
  };
  third_section: {
    id: number;
    title: string;
    list: TextItem[];
    image: {
      formats: {
        large: Image;
      };
    };
  };
};

type Blog = {
  id: number;
  title: string;
  description: string;
  image: {
    formats: {
      large: Image;
    };
  };
};
type NewSectionsType = {
  id: number;
  first_section: {
    id: number;
    title: string;
    image: {
      formats: {
        large: Image;
      };
    };
    infos: Info[];
  };
  second_section: {
    id: number;
    title: string;
    image: {
      formats: {
        large: Image;
      };
    };
    infos: Info[];
  };
  third_section: {
    id: number;
    title: string;
    blogs: Blog[];
  };
};

type ManagementPerspectiveSectionsType = {
  id: number;
  first_section: {
    id: number;
    title: string;
    infos: Info[];
    image: {
      formats: {
        large: Image;
      };
    };
  };
  second_section: {
    id: number;
    title: string;
    contents: Content[];
  };
  third_section: {
    id: number;
    title: string;
    contents: Content[];
  };
};

type ClinicalManagementSectionsType = {
  id: number;
  first_section: {
    id: number;
    title: string;
    sub_title: string;
    text: TextItem[];
  };
  second_section: {
    id: number;
    title: string;
    conversation_1: string;
    conversation_2: string;
    benefits_title: string;

    text: TextItem[];
    image: {
      formats: {
        large: Image;
      };
    };
  };
  third_section: {
    id: number;
    title: string;
    conversation_1: string;
    conversation_2: string;
    text: TextItem[];
    benefits_title: string;
    image: {
      formats: {
        large: Image;
      };
    };
  };
};

type PatientEngagementSectionsType = {
  id: number;
  first_section: {
    id: number;
    title: string;
    conversation_1: string;
    conversation_2: string;
    benefits_title: string;
    text: TextItem[];
  };
  second_section: {
    id: number;
    title: string;
    conversation_1: string;
    conversation_2: string;
    benefits_title: string;
    text: TextItem[];
  };
  third_section: {
    id: number;
    title: string;
    conversation_1: string;
    conversation_2: string;
    benefits_title: string;
    text: TextItem[];
  };
};

type ImageFormat = {
  formats: {
    large?: Image;
    medium?: Image;
    small?: Image;
    thumbnail?: Image;
  };
};


type CountryData = {
  name: string;
  full_name: string;
  capital: string;
  iso2: string;
  iso3: string;
  covid19: {
    total_case: string;
    total_deaths: string;
    last_updated: string;
  };
  current_president?: null;
  currency: string;
  phone_code: string;
  continent: string;
  description?: null;
  size: string;
  independence_date?: null;
  population: string;
  href: {
    self: string;
    states: string;
    presidents: string;
    flag: string;
  };
}