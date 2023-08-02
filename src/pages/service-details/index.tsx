import { Container } from 'reactstrap';
import {
  ContentWithImageComp,
  PagesHeader,
  SectionsTitle,
} from '../../components';
import { useCallApi } from '../../hooks';
import { BodySliderData } from '../../models';
import { importImageByProcessEnv } from '../../utils';
import styles from './index.module.scss';

const services = [
  {
    title: 'صيانة المعدات',
    description:
      'فحص منتظم وتنظيف وصيانة معدات المطبخ مثل الأفران والشوايات والثلاجات وغسالات الأطباق والمقلاة وغيرها. تقدم Deffix خدمة إصلاح سريعة لأي معدات تعمل بشكل غير صحيح لتقليل فترات التوقف',
    imageLink: importImageByProcessEnv('service-1.png'),
  },
  {
    title: 'صيانة المعدات',
    description:
      'فحص منتظم وتنظيف وصيانة معدات المطبخ مثل الأفران والشوايات والثلاجات وغسالات الأطباق والمقلاة وغيرها. تقدم Deffix خدمة إصلاح سريعة لأي معدات تعمل بشكل غير صحيح لتقليل فترات التوقف',
    imageLink: importImageByProcessEnv('service-1.png'),
  },
  {
    title: 'خدمة السباكة والكهرباء:',
    description:
      'صيانة وإصلاح نظام السباكة بما في ذلك الحوض والحنفيات والصرف لمنع التسريبات وضمان التصريف السليم. كذلك صيانة أنظمة الكهرباء، بما في ذلك الأسلاك وأجهزة الإضاءة والمقابس، لضمان السلامة والامتثال للوائح',
    imageLink: importImageByProcessEnv('service-1.png'),
  },
  {
    title: 'صيانة نظام التدفئة والتهوية وتكييف الهواء ',
    description:
      'تنظيف وصيانة منتظمة لأنظمة التدفئة والتهوية وتكييف الهواء (HVAC) لضمان تشغيل فعال وجودة هواء داخلية مثالية. بالإضافة إلى استبدال الفلاتر في الوقت المناسب وفحص دوري لمنع الأعطال وتحقيق أقصى كفاءة للطاقة',
    imageLink: importImageByProcessEnv('service-1.png'),
  },
];

const ServiceDetails = () => {
/*   const { data, isLoading } = useCallApi<BodySliderData>('/service');
 */
  return (
    <div>
      <PagesHeader
        title='خدمات صيانة المطاعم'
        description='مرحبًا بكم في صفحة خدمات صيانة المطاعم الخاصة ب Deffix! ندرك في Deffix أهمية الحفاظ على مطعمك في حالة ممتازة لضمان تجربة تناول طعام سلسة لعملائك. يعمل فريقنا المتمرس من المتخصصين في الصيانة على تقديم خدمات صيانة موثوقة وفعالة تلبي احتياجات مطعمك الفريدة. سواء كانت خدمات صيانة وقائية منتظمة أو إصلاحات للمعدات أو ترقيات للمرافق، نحن في خدمتك.تشمل خدمات الصيانة لدى Deffix'
      />
      <div className={styles.servicesWrap}>
        <Container>
          {services.map((item, index) => (
            <ContentWithImageComp
              key={index}
              index={index}
              description={item.description}
              imgLink={item.imageLink}
              title={item.title}
            />
          ))}
          <div className={styles.whyChooseUs}>
            <SectionsTitle text='لماذا تختارونا؟' />
            <ul data-aos-delay='200' data-aos='fade-up'>
              <li>
                1.متخصصو الصيانة ذوو الخبرة والمهارة المكرسين لصناعة المطاعم
              </li>
              <li>2.خدمة في الوقت المناسب وموثوقة لتقليل الانقطاعات في عملك</li>
              <li>3.خطط صيانة مخصصة مصممة خصيصًا لتلبية احتياجاتك وميزانيتك</li>
              <li>4.الالتزام بجودة العمل ورضى العملاء</li>
            </ul>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ServiceDetails;
