export interface IProjectDetails {
  titleOurProjectsAr: string;
  titleOurProjectsEn: string;
  descriptionOurProjectsAr: string;
  descriptionOurProjectsEn: string;
  business: IBusiness;
}

export interface IBusiness {
  id: number;
  title_ar: string;
  title_en: string;
  status: string;
  created_at: string;
  updated_at: string;
  projects: IProjectItem[];
}

export interface IProjectItem {
  id: number;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  master_image: string;
  sub_image_ar: string;
  sub_image_en: string;
  business_id: number;
  status: string;
  created_at: string;
  updated_at: string;
}
