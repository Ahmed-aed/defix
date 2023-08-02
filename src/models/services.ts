export interface IServiceSectionData {
  TitleOurServicesAr: string;
  TitleOurServicesEn: string;
  descriptionOurServicesAr: string;
  descriptionOurServicesEn: string;
  services: IService[];
}

export interface IService {
  id: number;
  title_ar: string;
  title_en: string;
  status: string;
  created_at: string;
  updated_at: string;
  services_home?: IServiceItem[];
  services?: IServiceItem[];
}

export interface IServiceItem {
  id: number;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  icon: string;
  image: string;
  business_id: number;
  status: string;
  created_at: string;
  updated_at: string;
  description_inside_details_ar: string;
  description_inside_details_en: string;
}

export interface IServiceDetails {
  titleOurServicesAr: string;
  titleOurServicesEn: string;
  descriptionOurServicesAr: string;
  descriptionOurServicesEn: string;
  business: IService[];
}
