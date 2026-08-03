import { library } from '@fortawesome/fontawesome-svg-core';

// استيراد الأيقونات اللي محتاجاها من الـ Solid
import { faUser, faEnvelope, faLock, faHome } from '@fortawesome/free-solid-svg-icons';
import { 
  faMagnifyingGlass, // ضفنا دي
  faHeart,           // ضفنا دي
  faCartShopping,    // ضفنا دي     // ضفنا دي
} from '@fortawesome/free-solid-svg-icons';

// استيراد الأيقونات اللي محتاجاها من الـ Regular (الاختيارية)
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

// إضافة الأيقونات للمكتبة عشان تسمع في المشروع كله
library.add(
  faUser,
  faEnvelope,
  faLock,
  faHome,
  faCircleCheck,
  faMagnifyingGlass, 
  faHeart, 
  faCartShopping,
  faHouse
);