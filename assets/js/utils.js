const i18n = {
  en: {
    heroTitle: 'Senior Mobile App Architect',
    heroSubtitle: 'Building production-grade Android experiences with Jetpack Compose, Clean Architecture & CI/CD',
    exploreWork: 'Explore My Work',
    skillsTitle: 'Skills Matrix',
    roadmapTitle: 'Android Roadmap',
    composeTitle: 'Compose UI Gallery',
    architectureTitle: 'Architecture Lab',
    performanceTitle: 'Performance Benchmarks',
    cicdTitle: 'CI/CD Pipelines',
    navHome: 'Home',
    navSkills: 'Skills',
    navRoadmap: 'Roadmap',
    navCompose: 'Compose',
    navArchitecture: 'Architecture',
    navPerformance: 'Performance',
    navCICD: 'CI/CD',
  },
  mm: {
    heroTitle: 'အဆင့်မြင့် မိုဘိုင်းအပ်လက်ထက်တစ်ဦး',
    heroSubtitle: 'Jetpack Compose, Clean Architecture နှင့် CI/CD တို့ဖြင့် ထုတ်လုပ်ရေးအဆင့် Android အတွေ့အကြုံများကို တည်ဆောက်ခြင်း',
    exploreWork: 'ကျွန်ုပ်၏ လုပ်ငန်းများကို လေ့လာပါ',
    skillsTitle: 'ကျွမ်းကျင်မှု မက်ထရစ်',
    roadmapTitle: 'Android လမ်းညွှန်',
    composeTitle: 'Compose UI ပြခန်း',
    architectureTitle: 'တည်ဆောက်ပုံ လက်တွေ့ခန်း',
    performanceTitle: 'စွမ်းဆောင်ရည် စံနှုန်းများ',
    cicdTitle: 'CI/CD ပိုက်လိုင်းများ',
    navHome: 'ပင်မစာမျက်နှာ',
    navSkills: 'ကျွမ်းကျင်မှုများ',
    navRoadmap: 'လမ်းညွှန်',
    navCompose: 'Compose',
    navArchitecture: 'တည်ဆောက်ပုံ',
    navPerformance: 'စွမ်းဆောင်ရည်',
    navCICD: 'CI/CD',
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

export function t(key) {
  return i18n[currentLang][key] || key;
}

export function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
}

export function getLanguage() {
  return currentLang;
}

export function updatePageLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });
}
