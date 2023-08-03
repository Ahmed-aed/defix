export interface IMaintenance {
    titleAr: string
    titleEn: string
    whyChooseUs: WhyChooseU[]
    descriptionAr: string
    descriptionEr: string
    serviceDetails: ServiceDetail[]
}

export interface WhyChooseU {
    id: number
    description_ar: string
    description_en: string
    status: string
    service_id: number
    created_at: string
    updated_at: string
}

export interface ServiceDetail {
    id: number
    title_ar: string
    title_en: string
    description_ar: string
    description_en: string
    image: string
    service_id: number
    status: string
    created_at: string
    updated_at: string
}
