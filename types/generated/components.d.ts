import type { Schema, Struct } from '@strapi/strapi';

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'botones';
  };
  attributes: {
    colorButton: Schema.Attribute.Enumeration<
      [
        'on-primary-container',
        'on-secondary-fixed',
        'primary-fixed',
        'on-secondary-container',
        'primary-fixed-dim',
        'on-secondary-fixed-variant',
        'error',
        'primary-container',
        'background',
        'inverse-surface',
        'outline-variant',
        'on-error-container',
        'surface-container-high',
        'outline',
        'inverse-on-surface',
        'primary',
        'on-primary',
        'surface-container-lowest',
        'on-surface-variant',
        'tertiary-fixed',
        'tertiary-fixed-dim',
        'on-tertiary-fixed',
        'on-tertiary-container',
        'on-background',
        'error-container',
        'on-tertiary-fixed-variant',
        'on-tertiary',
        'on-surface',
        'tertiary',
        'surface-dim',
        'on-primary-fixed-variant',
        'surface-bright',
        'secondary',
        'secondary-fixed',
        'surface-container-highest',
        'surface',
        'on-error',
        'inverse-primary',
        'surface-variant',
        'surface-container',
        'on-primary-fixed',
        'secondary-container',
        'tertiary-container',
        'surface-tint',
        'secondary-fixed-dim',
        'surface-container-low',
      ]
    >;
    colorText: Schema.Attribute.Enumeration<
      [
        'on-primary-container',
        'on-secondary-fixed',
        'primary-fixed',
        'on-secondary-container',
        'primary-fixed-dim',
        'on-secondary-fixed-variant',
        'error',
        'primary-container',
        'background',
        'inverse-surface',
        'outline-variant',
        'on-error-container',
        'surface-container-high',
        'outline',
        'inverse-on-surface',
        'primary',
        'on-primary',
        'surface-container-lowest',
        'on-surface-variant',
        'tertiary-fixed',
        'tertiary-fixed-dim',
        'on-tertiary-fixed',
        'on-tertiary-container',
        'on-background',
        'error-container',
        'on-tertiary-fixed-variant',
        'on-tertiary',
        'on-surface',
        'tertiary',
        'surface-dim',
        'on-primary-fixed-variant',
        'surface-bright',
        'secondary',
        'secondary-fixed',
        'surface-container-highest',
        'surface',
        'on-error',
        'inverse-primary',
        'surface-variant',
        'surface-container',
        'on-primary-fixed',
        'secondary-container',
        'tertiary-container',
        'surface-tint',
        'secondary-fixed-dim',
        'surface-container-low',
      ]
    >;
    name: Schema.Attribute.String;
  };
}

export interface SharedCompositionProduct extends Struct.ComponentSchema {
  collectionName: 'components_shared_composition_products';
  info: {
    displayName: 'Composicion de productos';
  };
  attributes: {
    composition: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String;
  };
}

export interface SharedConsumoDelProducto extends Struct.ComponentSchema {
  collectionName: 'components_shared_consumo_del_productos';
  info: {
    displayName: 'Consumo del producto';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedIcons extends Struct.ComponentSchema {
  collectionName: 'components_shared_icons';
  info: {
    displayName: 'Icons';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      [
        'activity',
        'apple',
        'atom',
        'banana',
        'bar',
        'batteryFull',
        'beaker',
        'beer',
        'bike',
        'bird',
        'brain',
        'bug',
        'cake',
        'cat',
        'cherry',
        'chevronRight',
        'cloud',
        'cloudLightning',
        'cloudMoon',
        'cloudRain',
        'cloudSnow',
        'cloudSun',
        'coffee',
        'cookie',
        'dna',
        'dog',
        'droplet',
        'dumbbell',
        'eye',
        'eyeOff',
        'fingerprint',
        'fish',
        'flame',
        'flaskConical',
        'flaskRound',
        'flower',
        'flower2',
        'grape',
        'haze',
        'heart',
        'heartPulse',
        'iceCream',
        'leaf',
        'microscope',
        'moon',
        'mountain',
        'pill',
        'pillBottle',
        'pipette',
        'pizza',
        'rabbit',
        'rainbow',
        'ruler',
        'salad',
        'sandwich',
        'shield',
        'shieldCheck',
        'snowflake',
        'sprout',
        'stethoscope',
        'strong',
        'sun',
        'sunset',
        'syringe',
        'testTube',
        'thermometer',
        'timer',
        'tornado',
        'trees',
        'truck',
        'turtle',
        'waves',
        'wind',
        'wine',
        'zap',
        'rule',
        'rose',
        'laugh',
      ]
    >;
  };
}

export interface SharedImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    url: Schema.Attribute.String;
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

export interface SharedProductBenefits extends Struct.ComponentSchema {
  collectionName: 'components_shared_product_benefits';
  info: {
    displayName: 'Beneficios de productos';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Component<'shared.icons', false>;
    name: Schema.Attribute.String;
  };
}

export interface SharedProductPrice extends Struct.ComponentSchema {
  collectionName: 'components_shared_product_prices';
  info: {
    displayName: 'Precio y presentaci\u00F3n';
  };
  attributes: {
    presentation: Schema.Attribute.String;
    price: Schema.Attribute.Integer;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.button': SharedButton;
      'shared.composition-product': SharedCompositionProduct;
      'shared.consumo-del-producto': SharedConsumoDelProducto;
      'shared.icons': SharedIcons;
      'shared.image': SharedImage;
      'shared.media': SharedMedia;
      'shared.product-benefits': SharedProductBenefits;
      'shared.product-price': SharedProductPrice;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
