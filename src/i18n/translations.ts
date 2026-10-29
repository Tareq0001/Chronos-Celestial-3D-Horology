export interface TranslationSchema {
  brandTitle: string;
  brandSubtitle: string;
  creatorTag: string;
  architectName: string;
  movementCaliber: string;
  jewelsCount: string;
  frequency: string;
  powerReserve: string;
  
  // Navigation & Tabs
  navObservatory: string;
  navMovement: string;
  navExploded: string;
  navChronograph: string;
  navCosc: string;
  navSpecifications: string;
  
  // View Controls
  explodeSliderLabel: string;
  explodeBtn: string;
  assembleBtn: string;
  resetCameraBtn: string;
  toggleWireframe: string;
  autoRotate: string;
  soundToggle: string;
  soundVolume: string;
  
  // Customization
  customizerTitle: string;
  caseMaterial: string;
  matPlatinum: string;
  matRoseGold: string;
  matTitanium: string;
  matCarbon: string;
  dialPattern: string;
  patternClousDeParis: string;
  patternSunburst: string;
  patternSkeleton: string;
  patternNavyGuilloche: string;
  screwsColor: string;
  screwBlued: string;
  screwPolished: string;
  screwGold: string;

  // Layer Inspector
  layerInspectorTitle: string;
  layerCrystal: string;
  layerCrystalDesc: string;
  layerHands: string;
  layerHandsDesc: string;
  layerDial: string;
  layerDialDesc: string;
  layerMoonPhase: string;
  layerMoonPhaseDesc: string;
  layerTourbillon: string;
  layerTourbillonDesc: string;
  layerBridges: string;
  layerBridgesDesc: string;
  layerGears: string;
  layerGearsDesc: string;
  layerEscapement: string;
  layerEscapementDesc: string;
  layerMainplate: string;
  layerMainplateDesc: string;
  layerCaseback: string;
  layerCasebackDesc: string;
  
  // Chronograph
  chronoTitle: string;
  chronoStart: string;
  chronoStop: string;
  chronoReset: string;
  chronoFlyback: string;
  chronoLap: string;
  chronoRunning: string;
  chronoStopped: string;
  
  // COSC Simulator
  coscTitle: string;
  coscSubtitle: string;
  coscPosition: string;
  posDialUp: string;
  posDialDown: string;
  posCrownUp: string;
  posCrownDown: string;
  posCrownLeft: string;
  coscTemperature: string;
  tempAlpine: string;
  tempRoom: string;
  tempBody: string;
  coscCurrentRate: string;
  coscRateUnit: string;
  coscStatus: string;
  coscPass: string;
  coscFail: string;
  coscRun15DayTest: string;
  coscTestingInProgress: string;
  coscExportCert: string;
  coscCertificateTitle: string;
  coscCertSerial: string;
  coscCertCaliber: string;
  coscCertDate: string;
  coscCertMeanRate: string;
  coscCertMeanVariation: string;
  coscCertMaxVariation: string;
  coscCertThermalCoefficient: string;
  coscOfficialSeal: string;
  coscPrintCert: string;
  coscCloseModal: string;
  
  // Specifications
  specsTitle: string;
  specDiameter: string;
  specThickness: string;
  specFrequency: string;
  specBalance: string;
  specHairspring: string;
  specTourbillon: string;
  specComponents: string;
  specJewels: string;
  specWaterResistance: string;
  specFinishing: string;
  specFinishingDesc: string;
  
  // Footer
  footerRights: string;
  footerCraftsmanship: string;
}

export const translations: Record<'ar' | 'en', TranslationSchema> = {
  ar: {
    brandTitle: "كـرونـوس",
    brandSubtitle: "المرصد الميكانيكي الحركي الفلكي ثلاثي الأبعاد",
    creatorTag: "المبتكر وكبير مهندسي النظم المعمارية",
    architectName: "أ. طارق ابوعشي",
    movementCaliber: "عيار CH-915 الفلكي المعقد",
    jewelsCount: "٣٨ ياقوتة كوراندم اصطناعي",
    frequency: "٢٨,٨٠٠ ذبذبة/ساعة (٤ هرتز)",
    powerReserve: "احتياطي طاقة ٧٢ ساعة",

    navObservatory: "المرصد الحركي",
    navMovement: "حركة العيار",
    navExploded: "العرض التفكيكي",
    navChronograph: "الكرونوغراف",
    navCosc: "فحص الكرونومتر COSC",
    navSpecifications: "المواصفات التقنية",

    explodeSliderLabel: "تفكيك الطبقات الميكانيكية في الفضاء الثلاثي",
    explodeBtn: "تفكيك كامل للمنظومة",
    assembleBtn: "إعادة تجميع العيار",
    resetCameraBtn: "إعادة ضبط المنظور",
    toggleWireframe: "الهيكل الشبكي",
    autoRotate: "دوران بانورامي مستمر",
    soundToggle: "صوت الدقات الميكانيكية",
    soundVolume: "مستوى الرنين الصوتي",

    customizerTitle: "تخصيص الخامات الحرفية الراقية",
    caseMaterial: "سبيكة العلبة الفاخرة",
    matPlatinum: "بلاتين 950 نقي",
    matRoseGold: "ذهب وردي 18 قيراط 5N",
    matTitanium: "تيتانيوم الدرجة 5 الجوي",
    matCarbon: "كربون مركب مشكل حرارياً",
    dialPattern: "زخرفة الميناء الحرفية (Guilloché)",
    patternClousDeParis: "مسامير باريس (Clous de Paris)",
    patternSunburst: "أشعة الشمس السديمية",
    patternSkeleton: "هيكل مفرغ مكشوف بالكامل",
    patternNavyGuilloche: "أمواج جنيف الملكية الزرقاء",
    screwsColor: "معالجة المسامير الميكانيكية",
    screwBlued: "فولاذ معالج حرارياً بالزرقة الملكية",
    screwPolished: "بلاتين مصقول بمرآة سوداء",
    screwGold: "ذهب عيار 18 مصقول يدوياً",

    layerInspectorTitle: "مستكشف الطبقات الميكانيكية الحركية",
    layerCrystal: "البلورة الزفيرية المقببة (Sapphire Crystal)",
    layerCrystalDesc: "زفير سويسري نقي بدرجة صلادة 9 موس، مع معالجة ثنائية مضادة للانعكاس وانكسار فرينل عالي الدقة.",
    layerHands: "عقارب بريجيه الزرقاء (Breguet Hands)",
    layerHandsDesc: "عقارب مفرغة بتشطيب حراري أزرق بوزن متوازن فائق الخفة لتقليل القصور الذاتي.",
    layerDial: "الميناء الفلكي المزخرف (Guilloché Dial)",
    layerDialDesc: "نقوش يدوية هندسية دقيقة مع فتحة كاشفة للتوربيون وقرص أطوار القمر المرصع بالنجوم.",
    layerMoonPhase: "مؤشر أطوار القمر الكروي (Moon Phase)",
    layerMoonPhaseDesc: "كرة قمرية ثلاثية الأبعاد بدقة تضاريس مجهرية تدور بدورة فلكية قدرها 29.53 يوماً متزامنة مع الشهر القمري.",
    layerTourbillon: "التوربيون الطائر ثلاثي المحاور (Tri-Axial Tourbillon)",
    layerTourbillonDesc: "قفص كروي خفيف الوزن يدور على 3 محاور لإلغاء تأثير الجاذبية الأرضية بالكامل على عجلة التوازن.",
    layerBridges: "جسور الحركة المزخرفة (Côtes de Genève Bridges)",
    layerBridgesDesc: "جسور مزينة بخطوط جنيف اليدوية وشطف حواف زوايا الذهب، مثبتة بحجارة ياقوتية خالية من الاحتكاك.",
    layerGears: "سلسلة التروس الحسابية (Precision Gear Train)",
    layerGearsDesc: "تروس نحاسية مسننة بحسابات ميكانيكية دقيقة تنقل العزم من خزان الطاقة إلى ميزان الساعة بنسبة 1:60.",
    layerEscapement: "الميزان السويسري والزنبرك الشعري (Escapement & Hairspring)",
    layerEscapementDesc: "نبضات منتظمة بمعدل 8 تكات في الثانية (28,800 ذبذبة/ساعة) بفضل سبيكة النيفاروكس المقاومة للمغناطيسية.",
    layerMainplate: "الصفيحة الرئيسية المحببة (Perlage Mainplate)",
    layerMainplateDesc: "قاعدة العيار المشغولة بتقنية الدوائر اللؤلؤية المتراكبة لتوزيع زيوت التشحيم وحماية الأجزاء.",
    layerCaseback: "ظهر العلبة الاستعراضي الشفاف (Exhibition Caseback)",
    layerCasebackDesc: "حلقة فولاذية محفورة برقم الإصدار المعتمد للمصمم والمهندس أ. طارق ابوعشي وشهادة الكرونومتر.",

    chronoTitle: "كرونوغراف الدقة المتناهية مع العودة اللحظية (Flyback)",
    chronoStart: "تشغيل العداد",
    chronoStop: "إيقاف مؤقت",
    chronoReset: "تصفير",
    chronoFlyback: "قفزة العودة المباشرة (Flyback)",
    chronoLap: "تسجيل دورة",
    chronoRunning: "الكرونوغراف يعمل بنبضات ميكانيكية حية",
    chronoStopped: "الكرونوغراف متوقف",

    coscTitle: "محاكي فحص الاعتماد السويسري (COSC Chronometer Lab)",
    coscSubtitle: "المعيار الصارم للهيئة السويسرية لاختبارات الكرونومتر (ISO 3159)",
    coscPosition: "الوضعية الاختبارية للعيار:",
    posDialUp: "الميناء لأعلى (Dial Up - CH)",
    posDialDown: "الميناء لأسفل (Dial Down - FH)",
    posCrownUp: "التاج لأعلى (Crown Up - 12H)",
    posCrownDown: "التاج لأسفل (Crown Down - 6H)",
    posCrownLeft: "التاج لليسار (Crown Left - 9H)",
    coscTemperature: "درجة الحرارة الاختبارية:",
    tempAlpine: "٨ درجات مئوية (البرودة الألبية)",
    tempRoom: "٢٣ درجة مئوية (المختبر القياسي)",
    tempBody: "٣٨ درجة مئوية (حرارة معصم الإنسان)",
    coscCurrentRate: "معدل الانحراف اليومي اللحظي",
    coscRateUnit: "ثانية / يوم",
    coscStatus: "حالة المطابقة للمعايير السويسرية",
    coscPass: "مطابق لمعيار الكرونومتر السويسري (-٤ إلى +٦ ث/يوم)",
    coscFail: "خارج حدود الاعتماد الرسمي",
    coscRun15DayTest: "تشغيل فحص الـ 15 يوماً المعتمد",
    coscTestingInProgress: "جاري محاكاة بروتوكول الاختبار عبر 5 وضعيات و3 حرارات...",
    coscExportCert: "إصدار وتوثيق شهادة الكرونومتر الرسمية",
    coscCertificateTitle: "شهادة اعتماد الكرونومتر الرسمية السويسرية",
    coscCertSerial: "الرقم التسلسلي للقطعة الفريدة",
    coscCertCaliber: "العيار الميكانيكي المعتمد",
    coscCertDate: "تاريخ الفحص والمصادقة",
    coscCertMeanRate: "متوسط الانحراف اليومي (M)",
    coscCertMeanVariation: "متوسط التباين في الوضعيات (V)",
    coscCertMaxVariation: "أقصى تباين في يومين متتاليين (Vmax)",
    coscCertThermalCoefficient: "المعامل الحراري للانحراف (C)",
    coscOfficialSeal: "الختم الرسمي للمرصد الميكانيكي",
    coscPrintCert: "طباعة وحفظ الشهادة الرسمية (PDF)",
    coscCloseModal: "إغلاق نافذة التوثيق",

    specsTitle: "دفتر الشروط والمواصفات الميكانيكية للعيار",
    specDiameter: "قطر العلبة: 42.5 ملم | سُمك العيار: 11.8 ملم",
    specThickness: "الزجاج: بلورة زفيرية مقببة مزدوجة مع معالجة AR داخلية وخارجية",
    specFrequency: "التردد: 4 هرتز (28,800 ذبذبة بالساعة) لدقة لا تضاهى",
    specBalance: "عجلة التوازن: غلوسيدور بـ 4 براغي ضبط دقيقة من الذهب الأبيض",
    specHairspring: "الزنبرك الشعري: منحنى بريجيه الفلكي من سبيكة السيليكون المقاومة للحقول الكهرومغناطيسية",
    specTourbillon: "التوربيون: ثلاثي المحاور بوزن 0.38 غرام فقط من التيتانيوم المؤكسد",
    specComponents: "مجموع الأجزاء الميكانيكية: 348 قطعة مجمعة يدوياً",
    specJewels: "الأحجار الوظيفية: 38 ياقوتة حمراء اصطناعية داخل شاتون ذهبي",
    specWaterResistance: "مقاومة الضغط والماء: 50 متراً (5 بار)",
    specFinishing: "التشطيبات الحرفية الراقية:",
    specFinishingDesc: "شطف يدوي بزاوية 45 درجة (Anglage)، وخطوط جنيف المتوازية (Côtes de Genève)، والتنعيم اللؤلؤي (Perlage)، وحفر شعار المرصد بالليزر الفائق.",

    footerRights: "جميع الحقوق محفوظة للمبتكر وكبير مهندسي النظم المعمارية أ. طارق ابوعشي © 2026",
    footerCraftsmanship: "صُممت وطُوّرت المنظومة البرمجية الحركية كتحفة فلكية تقنية تجمع بين فن الساعات السويسرية العليا ومحاكاة الفيزياء ثلاثية الأبعاد."
  },
  en: {
    brandTitle: "CHRONOS",
    brandSubtitle: "Celestial 3D Kinetic Horology & Tourbillon Observatory",
    creatorTag: "Creator & Lead Systems Architect",
    architectName: "Tareq Abuashi",
    movementCaliber: "Calibre CH-915 Celestial Grand Complication",
    jewelsCount: "38 Synthetic Corundum Jewels",
    frequency: "28,800 vph (4 Hz)",
    powerReserve: "72-Hour Power Reserve",

    navObservatory: "Kinetic Observatory",
    navMovement: "Calibre Engine",
    navExploded: "Exploded View",
    navChronograph: "Chronograph",
    navCosc: "COSC Chronometer Lab",
    navSpecifications: "Technical Specs",

    explodeSliderLabel: "Explode Mechanical Assemblies along Spatial Z-Axis",
    explodeBtn: "Explode Full Calibre",
    assembleBtn: "Assemble Movement",
    resetCameraBtn: "Reset Viewport",
    toggleWireframe: "Toggle Wireframe",
    autoRotate: "Panoramic Orbit",
    soundToggle: "Mechanical Escapement Tick",
    soundVolume: "Acoustic Resonance Volume",

    customizerTitle: "Haute Horlogerie Materials & Finishes",
    caseMaterial: "Precious Case Alloy",
    matPlatinum: "Pure 950 Platinum",
    matRoseGold: "18K 5N Rose Gold",
    matTitanium: "Aerospace Grade 5 Titanium",
    matCarbon: "Forged Carbon Composite",
    dialPattern: "Guilloché Dial Artistry",
    patternClousDeParis: "Clous de Paris (Hobnail)",
    patternSunburst: "Nebula Sunburst Brushed",
    patternSkeleton: "Fully Openworked Skeleton",
    patternNavyGuilloche: "Royal Navy Geneva Waves",
    screwsColor: "Screw Thermal Treatment",
    screwBlued: "Flame-Blued Royal Steel",
    screwPolished: "Black-Polished Mirror Platinum",
    screwGold: "Hand-Beveled 18K Yellow Gold",

    layerInspectorTitle: "Mechanical Sub-Assembly Architecture",
    layerCrystal: "Domed Sapphire Crystal",
    layerCrystalDesc: "Pure 9 Mohs scratchproof Swiss sapphire with double anti-reflective coating and micro-Fresnel edge refraction.",
    layerHands: "Thermal Blued Breguet Hands",
    layerHandsDesc: "Featherweight open-tipped blued steel hands with poise counterweights to eradicate inertia lag.",
    layerDial: "Guilloché Astronomical Dial",
    layerDialDesc: "Engine-turned geometrical guilloché with grand aperture framing the multi-axis tourbillon and starry moon disk.",
    layerMoonPhase: "Spherical 3D Lunar Moon Phase",
    layerMoonPhaseDesc: "Photorealistic 3D cratered lunar sphere accurately tracking the 29.53-day synodic lunar progression.",
    layerTourbillon: "Tri-Axial Flying Tourbillon Cage",
    layerTourbillonDesc: "Ultralight titanium cage continuously revolving across three orthogonal axes, neutralizing gravitational delta.",
    layerBridges: "Côtes de Genève Decorated Bridges",
    layerBridgesDesc: "Parallel wave graining with hand-anglage beveled flanks, gold chatons, and friction-free ruby bearings.",
    layerGears: "Mathematically Calculated Gear Train",
    layerGearsDesc: "Cycloidal brass gear wheels stepping kinetic torque from mainspring barrel to escape wheel at exact 1:60 ratio.",
    layerEscapement: "Swiss Lever Escapement & Balance",
    layerEscapementDesc: "Pulsing at 8 ticks per second (28,800 vph) anchored by an anti-magnetic silicon hairspring.",
    layerMainplate: "Circular Grained Perlage Mainplate",
    layerMainplateDesc: "Engineered solid foundation with overlapping circular graining for lubricant retention and structural rigidity.",
    layerCaseback: "Sapphire Exhibition Caseback",
    layerCasebackDesc: "Engraved steel bezel framing the movement with Creator & Lead Systems Architect Tareq Abuashi certification hallmark.",

    chronoTitle: "High-Precision Flyback Chronograph",
    chronoStart: "Start Chrono",
    chronoStop: "Pause",
    chronoReset: "Reset",
    chronoFlyback: "Instant Flyback Jump",
    chronoLap: "Record Split Lap",
    chronoRunning: "Chronograph active with authentic mechanical pulsation",
    chronoStopped: "Chronograph idle",

    coscTitle: "Official Swiss Chronometer Testing Laboratory (COSC)",
    coscSubtitle: "ISO 3159 Rigorous Testing Standard for Precision Mechanical Timepieces",
    coscPosition: "Test Position Orientation:",
    posDialUp: "Dial Up (CH)",
    posDialDown: "Dial Down (FH)",
    posCrownUp: "Crown Up (12H)",
    posCrownDown: "Crown Down (6H)",
    posCrownLeft: "Crown Left (9H)",
    coscTemperature: "Test Chamber Temperature:",
    tempAlpine: "8°C (Alpine Winter Cold)",
    tempRoom: "23°C (Standard Laboratory Ambient)",
    tempBody: "38°C (Simulated Human Body Heat)",
    coscCurrentRate: "Current Daily Rate Deviation",
    coscRateUnit: "seconds / day",
    coscStatus: "Swiss Chronometer Compliance",
    coscPass: "Complies with Swiss COSC Standard (-4 to +6 s/d)",
    coscFail: "Outside Official Tolerances",
    coscRun15DayTest: "Execute Official 15-Day COSC Protocol",
    coscTestingInProgress: "Simulating 15-day cycle across 5 positions and 3 temperatures...",
    coscExportCert: "Issue Verifiable COSC Certificate",
    coscCertificateTitle: "Official Swiss Chronometer Certificate of Precision",
    coscCertSerial: "Individual Certified Serial No.",
    coscCertCaliber: "Certified Calibre Designation",
    coscCertDate: "Certification & Verification Date",
    coscCertMeanRate: "Mean Daily Rate (M)",
    coscCertMeanVariation: "Mean Variation in Rates (V)",
    coscCertMaxVariation: "Max Rate Variation (Vmax)",
    coscCertThermalCoefficient: "Thermal Coefficient (C)",
    coscOfficialSeal: "Official Mechanical Observatory Seal",
    coscPrintCert: "Print Official Certificate (PDF)",
    coscCloseModal: "Close Verification",

    specsTitle: "Technical Specification Dossier",
    specDiameter: "Case Diameter: 42.5 mm | Movement Thickness: 11.8 mm",
    specThickness: "Crystal: Double-domed scratchproof sapphire with internal & external AR coatings",
    specFrequency: "Frequency: 4 Hz (28,800 vibrations per hour) for exceptional stability",
    specBalance: "Balance Wheel: Variable-inertia Glucydur with 4 micro-metric 18K white gold screws",
    specHairspring: "Hairspring: Silicon Breguet overcoil with thermal-expansion compensation",
    specTourbillon: "Tourbillon: 3-Axis carriage weighing only 0.38 grams crafted in anodized titanium",
    specComponents: "Total Mechanical Components: 348 individually hand-finished parts",
    specJewels: "Functional Jewels: 38 synthetic corundum rubies set in screwed gold chatons",
    specWaterResistance: "Dynamic Water Resistance: 50 meters (5 ATM / 5 Bar)",
    specFinishing: "Haute Horlogerie Hand Finishes:",
    specFinishingDesc: "45-degree hand anglage, mirror black polish, circular graining perlage, Côtes de Genève linear striping, and ultra-precision laser serial hallmark.",

    footerRights: "All Rights Reserved. Created & Engineered by Lead Systems Architect Tareq Abuashi © 2026",
    footerCraftsmanship: "Designed as an elite kinetic horology masterpiece bridging Swiss grand complication tradition with real-time 3D physics simulation."
  }
};
