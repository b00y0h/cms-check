/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    pages: Page;
    posts: Post;
    media: Media;
    partners: Partner;
    'carousel-cards': CarouselCard;
    'lead-types': LeadType;
    forms: Form;
    'form-submissions': FormSubmission;
  };
  globals: {};
}
export interface User {
  id: string;
  name?: string;
  roles?: ('admin' | 'user')[];
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface Page {
  id: string;
  title: string;
  publishedDate?: string;
  hero: {
    type: 'none' | 'landingPage' | 'resultPage';
    richText: {
      [k: string]: unknown;
    }[];
    links?: {
      link: {
        type?: 'reference' | 'custom';
        newTab?: boolean;
        reference: {
          value: string | Page;
          relationTo: 'pages';
        };
        url: string;
        label: string;
        appearance?: 'default' | 'primary' | 'secondary';
      };
      id?: string;
    }[];
    title?: string;
    media: string | Media;
    animation: string | Media;
  };
  layout: (
    | {
        ctaBackgroundColor?: 'white' | 'black';
        richText: {
          [k: string]: unknown;
        }[];
        links?: {
          link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
    | {
        colorSchema?: 'blackwhite';
        enableHighlight?: boolean;
        type?: 'row' | 'column';
        rows?: {
          columns?: {
            size?: 'oneThird' | 'half' | 'twoThirds' | 'full';
            blocks: (
              | {
                  statistics?: {
                    number: string;
                    title?: string;
                    richText: {
                      [k: string]: unknown;
                    }[];
                    id?: string;
                  }[];
                  source?: string;
                  id?: string;
                  blockName?: string;
                  blockType: 'statistics';
                }
              | {
                  author?: string;
                  richText: {
                    [k: string]: unknown;
                  }[];
                  authortitle?: string;
                  alignment?: 'left' | 'center' | 'right';
                  id?: string;
                  blockName?: string;
                  blockType: 'testimonial';
                }
              | {
                  colorSchema?: 'blackwhite';
                  title?: string;
                  richText: {
                    [k: string]: unknown;
                  }[];
                  image: string | Media;
                  links?: {
                    link: {
                      type?: 'reference' | 'custom';
                      newTab?: boolean;
                      reference: {
                        value: string | Page;
                        relationTo: 'pages';
                      };
                      url: string;
                      label: string;
                      appearance?: 'primary' | 'secondary';
                    };
                    id?: string;
                  }[];
                  id?: string;
                  blockName?: string;
                  blockType: 'career';
                }
              | {
                  title?: string;
                  richText: {
                    [k: string]: unknown;
                  }[];
                  icon: string | Media;
                  links?: {
                    link: {
                      type?: 'reference' | 'custom';
                      newTab?: boolean;
                      reference: {
                        value: string | Page;
                        relationTo: 'pages';
                      };
                      url: string;
                      label: string;
                      appearance?: 'primary' | 'secondary';
                    };
                    id?: string;
                  }[];
                  id?: string;
                  blockName?: string;
                  blockType: 'comparison';
                }
              | {
                  numberedItems?: boolean;
                  accordions?: {
                    title: string;
                    richText: {
                      [k: string]: unknown;
                    }[];
                    links?: {
                      link: {
                        type?: 'reference' | 'custom';
                        newTab?: boolean;
                        reference: {
                          value: string | Page;
                          relationTo: 'pages';
                        };
                        url: string;
                        label: string;
                        appearance?: 'primary' | 'secondary';
                      };
                      id?: string;
                    }[];
                    id?: string;
                  }[];
                  id?: string;
                  blockName?: string;
                  blockType: 'accordion';
                }
              | {
                  richText: {
                    [k: string]: unknown;
                  }[];
                  id?: string;
                  blockName?: string;
                  blockType: 'richText';
                }
              | {
                  mediaBlockBackgroundColor?: 'white' | 'black';
                  position?: 'default' | 'fullscreen';
                  media: string | Media;
                  id?: string;
                  blockName?: string;
                  blockType: 'mediaBlock';
                }
              | {
                  links?: {
                    link: {
                      type?: 'reference' | 'custom';
                      newTab?: boolean;
                      reference: {
                        value: string | Page;
                        relationTo: 'pages';
                      };
                      url: string;
                      label: string;
                      appearance?: 'primary' | 'secondary';
                    };
                    id?: string;
                  }[];
                  id?: string;
                  blockName?: string;
                  blockType: 'ButtonGroup';
                }
            )[];
            id?: string;
          }[];
          id?: string;
        }[];
        columns?: {
          size?: 'oneThird' | 'half' | 'twoThirds' | 'full';
          blocks: (
            | {
                statistics?: {
                  number: string;
                  title?: string;
                  richText: {
                    [k: string]: unknown;
                  }[];
                  id?: string;
                }[];
                source?: string;
                id?: string;
                blockName?: string;
                blockType: 'statistics';
              }
            | {
                author?: string;
                richText: {
                  [k: string]: unknown;
                }[];
                authortitle?: string;
                alignment?: 'left' | 'center' | 'right';
                id?: string;
                blockName?: string;
                blockType: 'testimonial';
              }
            | {
                colorSchema?: 'blackwhite';
                title?: string;
                richText: {
                  [k: string]: unknown;
                }[];
                image: string | Media;
                links?: {
                  link: {
                    type?: 'reference' | 'custom';
                    newTab?: boolean;
                    reference: {
                      value: string | Page;
                      relationTo: 'pages';
                    };
                    url: string;
                    label: string;
                    appearance?: 'primary' | 'secondary';
                  };
                  id?: string;
                }[];
                id?: string;
                blockName?: string;
                blockType: 'career';
              }
            | {
                title?: string;
                richText: {
                  [k: string]: unknown;
                }[];
                icon: string | Media;
                links?: {
                  link: {
                    type?: 'reference' | 'custom';
                    newTab?: boolean;
                    reference: {
                      value: string | Page;
                      relationTo: 'pages';
                    };
                    url: string;
                    label: string;
                    appearance?: 'primary' | 'secondary';
                  };
                  id?: string;
                }[];
                id?: string;
                blockName?: string;
                blockType: 'comparison';
              }
            | {
                numberedItems?: boolean;
                accordions?: {
                  title: string;
                  richText: {
                    [k: string]: unknown;
                  }[];
                  links?: {
                    link: {
                      type?: 'reference' | 'custom';
                      newTab?: boolean;
                      reference: {
                        value: string | Page;
                        relationTo: 'pages';
                      };
                      url: string;
                      label: string;
                      appearance?: 'primary' | 'secondary';
                    };
                    id?: string;
                  }[];
                  id?: string;
                }[];
                id?: string;
                blockName?: string;
                blockType: 'accordion';
              }
            | {
                richText: {
                  [k: string]: unknown;
                }[];
                id?: string;
                blockName?: string;
                blockType: 'richText';
              }
            | {
                mediaBlockBackgroundColor?: 'white' | 'black';
                position?: 'default' | 'fullscreen';
                media: string | Media;
                id?: string;
                blockName?: string;
                blockType: 'mediaBlock';
              }
            | {
                links?: {
                  link: {
                    type?: 'reference' | 'custom';
                    newTab?: boolean;
                    reference: {
                      value: string | Page;
                      relationTo: 'pages';
                    };
                    url: string;
                    label: string;
                    appearance?: 'primary' | 'secondary';
                  };
                  id?: string;
                }[];
                id?: string;
                blockName?: string;
                blockType: 'ButtonGroup';
              }
          )[];
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        form: string | Form;
        enableIntro?: boolean;
        introContent: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'formBlock';
      }
    | {
        mediaBlockBackgroundColor?: 'white' | 'black';
        position?: 'default' | 'fullscreen';
        media: string | Media;
        id?: string;
        blockName?: string;
        blockType: 'mediaBlock';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        populateBy?: 'collection' | 'selection';
        relationTo?: 'pages';
        limit?: number;
        selectedDocs?:
          | {
              value: string;
              relationTo: 'pages';
            }[]
          | {
              value: Page;
              relationTo: 'pages';
            }[];
        populatedDocs?:
          | {
              value: string;
              relationTo: 'pages';
            }[]
          | {
              value: Page;
              relationTo: 'pages';
            }[];
        populatedDocsTotal?: number;
        id?: string;
        blockName?: string;
        blockType: 'archive';
      }
  )[];
  slug?: string;
  parent?: string | Page;
  breadcrumbs?: {
    doc?: string | Page;
    url?: string;
    label?: string;
    id?: string;
  }[];
  meta?: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface Media {
  id: string;
  alt: string;
  caption?: {
    [k: string]: unknown;
  }[];
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
}
export interface Form {
  id: string;
  title: string;
  fields?: (
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'text';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'textarea';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        options?: {
          label: string;
          value: string;
          id?: string;
        }[];
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'select';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'email';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'state';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'country';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'number';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        defaultValue?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'checkbox';
      }
    | {
        message?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'message';
      }
  )[];
  submitButtonLabel?: string;
  confirmationType?: 'message' | 'redirect';
  confirmationMessage: {
    [k: string]: unknown;
  }[];
  redirect?: {
    url: string;
  };
  emails?: {
    emailTo?: string;
    cc?: string;
    bcc?: string;
    replyTo?: string;
    emailFrom?: string;
    subject: string;
    message?: {
      [k: string]: unknown;
    }[];
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Post {
  id: string;
  title: string;
  publishedDate?: string;
  hero: {
    type: 'none' | 'landingPage' | 'resultPage';
    richText: {
      [k: string]: unknown;
    }[];
    links?: {
      link: {
        type?: 'reference' | 'custom';
        newTab?: boolean;
        reference: {
          value: string | Page;
          relationTo: 'pages';
        };
        url: string;
        label: string;
        appearance?: 'default' | 'primary' | 'secondary';
      };
      id?: string;
    }[];
    title?: string;
    media: string | Media;
    animation: string | Media;
  };
  layout: (
    | {
        ctaBackgroundColor?: 'white' | 'black';
        richText: {
          [k: string]: unknown;
        }[];
        links?: {
          link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              value: string | Page;
              relationTo: 'pages';
            };
            url: string;
            label: string;
            appearance?: 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
    | {
        colorSchema?: 'blackwhite';
        enableHighlight?: boolean;
        type?: 'row' | 'column';
        rows?: {
          columns?: {
            size?: 'oneThird' | 'half' | 'twoThirds' | 'full';
            blocks: (
              | {
                  statistics?: {
                    number: string;
                    title?: string;
                    richText: {
                      [k: string]: unknown;
                    }[];
                    id?: string;
                  }[];
                  source?: string;
                  id?: string;
                  blockName?: string;
                  blockType: 'statistics';
                }
              | {
                  author?: string;
                  richText: {
                    [k: string]: unknown;
                  }[];
                  authortitle?: string;
                  alignment?: 'left' | 'center' | 'right';
                  id?: string;
                  blockName?: string;
                  blockType: 'testimonial';
                }
              | {
                  colorSchema?: 'blackwhite';
                  title?: string;
                  richText: {
                    [k: string]: unknown;
                  }[];
                  image: string | Media;
                  links?: {
                    link: {
                      type?: 'reference' | 'custom';
                      newTab?: boolean;
                      reference: {
                        value: string | Page;
                        relationTo: 'pages';
                      };
                      url: string;
                      label: string;
                      appearance?: 'primary' | 'secondary';
                    };
                    id?: string;
                  }[];
                  id?: string;
                  blockName?: string;
                  blockType: 'career';
                }
              | {
                  title?: string;
                  richText: {
                    [k: string]: unknown;
                  }[];
                  icon: string | Media;
                  links?: {
                    link: {
                      type?: 'reference' | 'custom';
                      newTab?: boolean;
                      reference: {
                        value: string | Page;
                        relationTo: 'pages';
                      };
                      url: string;
                      label: string;
                      appearance?: 'primary' | 'secondary';
                    };
                    id?: string;
                  }[];
                  id?: string;
                  blockName?: string;
                  blockType: 'comparison';
                }
              | {
                  numberedItems?: boolean;
                  accordions?: {
                    title: string;
                    richText: {
                      [k: string]: unknown;
                    }[];
                    links?: {
                      link: {
                        type?: 'reference' | 'custom';
                        newTab?: boolean;
                        reference: {
                          value: string | Page;
                          relationTo: 'pages';
                        };
                        url: string;
                        label: string;
                        appearance?: 'primary' | 'secondary';
                      };
                      id?: string;
                    }[];
                    id?: string;
                  }[];
                  id?: string;
                  blockName?: string;
                  blockType: 'accordion';
                }
              | {
                  richText: {
                    [k: string]: unknown;
                  }[];
                  id?: string;
                  blockName?: string;
                  blockType: 'richText';
                }
              | {
                  mediaBlockBackgroundColor?: 'white' | 'black';
                  position?: 'default' | 'fullscreen';
                  media: string | Media;
                  id?: string;
                  blockName?: string;
                  blockType: 'mediaBlock';
                }
              | {
                  links?: {
                    link: {
                      type?: 'reference' | 'custom';
                      newTab?: boolean;
                      reference: {
                        value: string | Page;
                        relationTo: 'pages';
                      };
                      url: string;
                      label: string;
                      appearance?: 'primary' | 'secondary';
                    };
                    id?: string;
                  }[];
                  id?: string;
                  blockName?: string;
                  blockType: 'ButtonGroup';
                }
            )[];
            id?: string;
          }[];
          id?: string;
        }[];
        columns?: {
          size?: 'oneThird' | 'half' | 'twoThirds' | 'full';
          blocks: (
            | {
                statistics?: {
                  number: string;
                  title?: string;
                  richText: {
                    [k: string]: unknown;
                  }[];
                  id?: string;
                }[];
                source?: string;
                id?: string;
                blockName?: string;
                blockType: 'statistics';
              }
            | {
                author?: string;
                richText: {
                  [k: string]: unknown;
                }[];
                authortitle?: string;
                alignment?: 'left' | 'center' | 'right';
                id?: string;
                blockName?: string;
                blockType: 'testimonial';
              }
            | {
                colorSchema?: 'blackwhite';
                title?: string;
                richText: {
                  [k: string]: unknown;
                }[];
                image: string | Media;
                links?: {
                  link: {
                    type?: 'reference' | 'custom';
                    newTab?: boolean;
                    reference: {
                      value: string | Page;
                      relationTo: 'pages';
                    };
                    url: string;
                    label: string;
                    appearance?: 'primary' | 'secondary';
                  };
                  id?: string;
                }[];
                id?: string;
                blockName?: string;
                blockType: 'career';
              }
            | {
                title?: string;
                richText: {
                  [k: string]: unknown;
                }[];
                icon: string | Media;
                links?: {
                  link: {
                    type?: 'reference' | 'custom';
                    newTab?: boolean;
                    reference: {
                      value: string | Page;
                      relationTo: 'pages';
                    };
                    url: string;
                    label: string;
                    appearance?: 'primary' | 'secondary';
                  };
                  id?: string;
                }[];
                id?: string;
                blockName?: string;
                blockType: 'comparison';
              }
            | {
                numberedItems?: boolean;
                accordions?: {
                  title: string;
                  richText: {
                    [k: string]: unknown;
                  }[];
                  links?: {
                    link: {
                      type?: 'reference' | 'custom';
                      newTab?: boolean;
                      reference: {
                        value: string | Page;
                        relationTo: 'pages';
                      };
                      url: string;
                      label: string;
                      appearance?: 'primary' | 'secondary';
                    };
                    id?: string;
                  }[];
                  id?: string;
                }[];
                id?: string;
                blockName?: string;
                blockType: 'accordion';
              }
            | {
                richText: {
                  [k: string]: unknown;
                }[];
                id?: string;
                blockName?: string;
                blockType: 'richText';
              }
            | {
                mediaBlockBackgroundColor?: 'white' | 'black';
                position?: 'default' | 'fullscreen';
                media: string | Media;
                id?: string;
                blockName?: string;
                blockType: 'mediaBlock';
              }
            | {
                links?: {
                  link: {
                    type?: 'reference' | 'custom';
                    newTab?: boolean;
                    reference: {
                      value: string | Page;
                      relationTo: 'pages';
                    };
                    url: string;
                    label: string;
                    appearance?: 'primary' | 'secondary';
                  };
                  id?: string;
                }[];
                id?: string;
                blockName?: string;
                blockType: 'ButtonGroup';
              }
          )[];
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        form: string | Form;
        enableIntro?: boolean;
        introContent: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'formBlock';
      }
    | {
        mediaBlockBackgroundColor?: 'white' | 'black';
        position?: 'default' | 'fullscreen';
        media: string | Media;
        id?: string;
        blockName?: string;
        blockType: 'mediaBlock';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        populateBy?: 'collection' | 'selection';
        relationTo?: 'pages';
        limit?: number;
        selectedDocs?:
          | {
              value: string;
              relationTo: 'pages';
            }[]
          | {
              value: Page;
              relationTo: 'pages';
            }[];
        populatedDocs?:
          | {
              value: string;
              relationTo: 'pages';
            }[]
          | {
              value: Page;
              relationTo: 'pages';
            }[];
        populatedDocsTotal?: number;
        id?: string;
        blockName?: string;
        blockType: 'archive';
      }
  )[];
  slug?: string;
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface Partner {
  id: string;
  title: string;
  shortName: string;
  acroynm?: string;
  contact: {
    street1: string;
    street2?: string;
    city: string;
    state:
      | 'AL'
      | 'AK'
      | 'AZ'
      | 'AR'
      | 'CA'
      | 'CO'
      | 'CT'
      | 'DE'
      | 'FL'
      | 'GA'
      | 'HI'
      | 'ID'
      | 'IL'
      | 'IN'
      | 'IA'
      | 'KS'
      | 'KY'
      | 'LA'
      | 'ME'
      | 'MD'
      | 'MA'
      | 'MI'
      | 'MN'
      | 'MS'
      | 'MO'
      | 'MT'
      | 'NE'
      | 'NV'
      | 'NH'
      | 'NJ'
      | 'NM'
      | 'NY'
      | 'NC'
      | 'ND'
      | 'OH'
      | 'OK'
      | 'OR'
      | 'PA'
      | 'RI'
      | 'SC'
      | 'SD'
      | 'TN'
      | 'TX'
      | 'UT'
      | 'VT'
      | 'VA'
      | 'WA'
      | 'WV'
      | 'WI'
      | 'WY'
      | 'DC';
    zip: string;
    country?: string;
  };
  logo: string | Media;
  phone?: string;
  email?: string;
  links?: {
    link: {
      type?: 'reference' | 'custom';
      newTab?: boolean;
      reference: {
        value: string | Page;
        relationTo: 'pages';
      };
      url: string;
      label: string;
    };
    id?: string;
  }[];
  publishedDate?: string;
  slug?: string;
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface CarouselCard {
  id: string;
  admintitle?: string;
  partner: string | Partner;
  leadTypes: string[] | LeadType[];
  partnerState?: string;
  title: string;
  subtitle?: string;
  description: {
    [k: string]: unknown;
  }[];
  links?: {
    link: {
      type?: 'reference' | 'custom';
      newTab?: boolean;
      reference: {
        value: string | Page;
        relationTo: 'pages';
      };
      url: string;
      label: string;
    };
    id?: string;
  }[];
  image: string | Media;
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface LeadType {
  id: string;
  title: string;
  updatedAt: string;
  createdAt: string;
}
export interface FormSubmission {
  id: string;
  form: string | Form;
  submissionData?: {
    field: string;
    value: string;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
