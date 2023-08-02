import { apiEndPoints } from '../constants';
import { IService } from './services';

type Keys = keyof typeof apiEndPoints;
export type ApiEndPointsValues = (typeof apiEndPoints)[Keys];

export interface HeaderData {
  TimesOfWorkAr: string;
  TimesOfWorkEn: string;
  darkLogoAr: string;
  darkLogoEn: string;
  whiteLogoAr: string;
  whiteLogoEn: string;
  TitleHomeAr: string;
  TitleHomeEn: string;
  TitleAboutUsAr: string;
  TitleAboutUsEn: string;
  TitleOurServicesAr: string;
  TitleOurServicesEn: string;
  TitleOurAchievementsAr: string;
  TitleOurAchievementsEn: string;
  TitleOurProjectsAr: string;
  TitleOurProjectsEn: string;
  TitleOurClientsAr: string;
  TitleOurClientsEn: string;
  TitleOurConnectWithUsAr: string;
  TitleOurConnectWithUsEn: string;
  whatsApp: string;
  phone: string;
  email: string;
}
export interface FooterData {
  darkLogoAr: string;
  darkLogoEn: string;
  whiteLogoAr: string;
  whiteLogoEn: string;
  footerAr: string;
  footerEn: string;
  instagram: string;
  snapChat: string;
  twitter: string;
}

// models of body request
export interface BodySliderData {
  businesprojectsHome: BusinesprojectsHome[];
  titleOurSayAboutUsAr: string;
  titleOurSayAboutUsEn: string;
  achievement: Achievement[];
  TitleAboutUsAr: string;
  TitleAboutUsEr: string;
  TitleOurClientsAr: string;
  TitleOurClientsEn: string;
  TitleOurProjectsAr: string;
  TitleOurProjectsEn: string;
  TitleCvEn: string;
  TitleCvAr: string;
  titleSliderAr: string;
  titleSliderEn: string;
  sliderTextAr: string;
  sliderTextEn: string;
  cvAr: string;
  cvEn: string;
  sliders: Slider[];
  businesServicesHome: IService[];
  aboutHome: AboutHome[];
  TitleOurServicesAr: string;
  TitleOurServicesEn: string;
  descriptionOurServicesAr: string;
  descriptionOurServicesEn: string;
  facility: string;
  maintenanceService: string;
  certifiedEmployee: string;
  successRate: string;
  descriptionOurProjectsAr: string;
  descriptionOurProjectsEn: string;
  projectsHome: ProjectsHome[];
  clients: Client[];
  descriptionOurSayAboutUsAr: string;
  descriptionOurSayAboutUsEn: string;
  sayAboutUs: SayAboutU[];
}

export interface Slider {
  id: number;
  image: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface AboutHome {
  id: number;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  image: string;
  show: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface ServicesItem {
  id: number;
  title_ar: string;
  title_en: string;
  status: string;
  created_at: string;
  updated_at: string;
  description_ar: string;
  description_en: string;
  icon: string;
}

export interface ProjectsHome {
  id: number;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  master_image: string;
  sub_image: string;
  business_id: number;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface Client {
  id: number;
  image: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface SayAboutU {
  id: number;
  name: string;
  jop_name: string;
  message: string;
  image: string;
  status: string;
  created_at: string;
  updated_at: string;
}

// TYPE DATA OF ABOUT
export interface About {
  titleAboutUsAr: string;
  titleAboutUsEn: string;
  descriptionAboutUsAr: string;
  descriptionAboutUsEn: string;
  whyDiffixEn: WhyDiffixEn;
  vision: Vision;
  goals: Goals;
  commitment: Commitment;
}

export interface WhyDiffixEn {
  titleWhyDiffixAr: string;
  titleWhyDiffixEn: string;
  descriptionWhyDiffixAr: string;
  descriptionWhyDiffixEn: string;
  aboutWhyDiffix: AboutWhyDiffix[];
}

export interface AboutWhyDiffix {
  id: number;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  image: string;
  show: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface Vision {
  titleVisionAr: string;
  titleVisionEn: string;
  descriptionVisionAr: string;
  descriptionVisionEn: string;
  aboutVision: AboutVision[];
}

export interface AboutVision {
  id: number;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  image: string;
  show: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface Goals {
  titleGoalsAr: string;
  titleGoalsEn: string;
  descriptionGoalsAr: string;
  descriptionGoalsEn: string;
  aboutGoals: AboutGoal[];
}

export interface AboutGoal {
  id: number;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  image: string;
  show: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface Commitment {
  titleCommitmentAr: string;
  titleCommitmentEn: string;
  descriptionCommitmentAr: string;
  descriptionCommitmentEn: string;
  aboutCommitment: AboutCommitment[];
}

export interface AboutCommitment {
  id: number;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  image: string;
  show: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface Achievement {
  id: number;
  title_ar: string;
  title_en: string;
  icon: string;
  value: number;
  is_plus: number;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface BusinesprojectsHome {
  id: number;
  title_ar: string;
  title_en: string;
  status: string;
  created_at: string;
  updated_at: string;
  projects_home: ProjectsHome[];
}

export interface ProjectsHome {
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
