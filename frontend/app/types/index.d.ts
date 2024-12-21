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

type HomeSectionsType = {
  data: {
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
};

type AboutSectionsType = {
  data: {
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
};

type ProductSectionsType = {
  data: {
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
};

type NewSectionsType = {
  data: {
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
      blogs: {
        id: number;
        title: string;
        description: string;
        image: {
          formats: {
            large: Image;
          };
        };
      }[];
    };
  };
};

type ManagementPerspectiveSectionsType = {
  data: {
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
};

type ClinicalManagementSectionsType = {
  data: {
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
};

type PatientEngagementSectionsType = {
  data: {
    id: number;
    first_section: {
      id: number;
      title: string;
      conversation_1: string;
      conversation_2: string;
      benefits_title: string;
      text: Info[];
    };
    second_section: {
      id: number;
      title: string;
      conversation_1: string;
      conversation_2: string;
      benefits_title: string;
      text: Info[];
    };
    third_section: {
      id: number;
      title: string;
      conversation_1: string;
      conversation_2: string;
      benefits_title: string;
      text: Info[];
    };
  };
};
