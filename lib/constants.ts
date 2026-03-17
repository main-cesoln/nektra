import {
  CompanyInfo,
  NavItem,
  Product,
  Industry,
  Service,
  BlogPost,
  FAQItem,
  Stat,
  TechFeature,
  AccessoryProduct,
} from "./types";

// ─── Company Info ────────────────────────────────────────────────────────────

export const COMPANY: CompanyInfo = {
  name: "Nektra Energy Solutions",
  tagline: "Powering Industries. Enabling Reliability.",
  phones: ["+91 9963739107", "+91 9246838235"],
  whatsapp: "919963739107",
  email: "info@nektraenergy.com",
  address:
    "Chandanagar, Hyderabad, Telangana 500099",
  city: "Hyderabad",
  state: "Telangana",
  pincode: "500099",
  hours: "Mon-Sat 9:00 AM - 8:00 PM",
  coordinates: { lat: 17.4933, lng: 78.3222 },
  url: "https://nektraenergy.com",
};

export const SERVICE_AREAS = [
  "Hyderabad",
  "Secunderabad",
  "Chandanagar",
  "Kukatpally",
  "Miyapur",
  "Gachibowli",
  "HITEC City",
  "Medchal",
  "Shamshabad",
  "Uppal",
  "LB Nagar",
  "Kompally",
  "Bolarum",
  "Patancheru",
  "All of Telangana",
];

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Motive Power Flooded Tubular", href: "/products/motive-power-flooded-tubular" },
      { label: "Motive Power Gel", href: "/products/motive-power-gel" },
      { label: "HSP Classic", href: "/products/hsp-classic" },
      { label: "Gen-X", href: "/products/gen-x" },
      { label: "BCI Range", href: "/products/bci-range" },
      { label: "Accessories", href: "/products/accessories" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Pharmaceutical & Healthcare", href: "/industries/pharmaceutical" },
      { label: "Engineering & Manufacturing", href: "/industries/engineering-manufacturing" },
      { label: "Warehouse & Logistics", href: "/industries/warehouse-logistics" },
      { label: "Food & Beverage Processing", href: "/industries/food-beverage" },
      { label: "Steel & Metal Industry", href: "/industries/steel-metal" },
      { label: "Cement & Construction", href: "/industries/cement-construction" },
      { label: "Airports & Aviation", href: "/industries/airports-aviation" },
      { label: "E-commerce & Distribution", href: "/industries/ecommerce-distribution" },
      { label: "Automotive Manufacturing", href: "/industries/automotive" },
      { label: "Paper & Textile Mills", href: "/industries/paper-textile" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// ─── Stats ───────────────────────────────────────────────────────────────────

export const STATS: Stat[] = [
  { value: "35+", numericValue: 35, suffix: "+", label: "Years of Experience" },
  { value: "10+", numericValue: 10, suffix: "+", label: "Industries Served" },
  { value: "500+", numericValue: 500, suffix: "+", label: "Clients Pan-Telangana" },
  { value: "1", numericValue: 1, suffix: "", label: "Authorized Exide Dealer" },
];

// ─── Shared Tech Features ────────────────────────────────────────────────────

export const SHARED_TECH_FEATURES: TechFeature[] = [
  {
    title: "Positive Plate — 5% Antimony Alloy",
    description:
      "Thick tubular positive plates cast from 5% antimony lead alloy for superior corrosion resistance and extended cycle life, even under deep discharge conditions.",
  },
  {
    title: "Negative Plate — Pasted Grid",
    description:
      "Pasted negative grids designed for optimum current collection and uniform active material utilization, ensuring consistent performance throughout the battery's life.",
  },
  {
    title: "Gauntlet — Multi-Tube Design",
    description:
      "Woven polyester gauntlets encase the positive active material, preventing shedding and maintaining structural integrity through thousands of charge-discharge cycles.",
  },
  {
    title: "Bolt-On Terminals",
    description:
      "Robust bolt-on inter-cell connectors provide low-resistance connections, minimizing voltage drops and heat generation during high-current discharge operations.",
  },
  {
    title: "Grommets — Acid-Resistant Seals",
    description:
      "Specially formulated acid-resistant grommets prevent electrolyte leakage while allowing safe gas venting during charging cycles.",
  },
  {
    title: "Container — PP Case",
    description:
      "Impact-resistant polypropylene containers withstand the rigors of industrial environments including vibration, temperature extremes, and occasional impacts.",
  },
  {
    title: "Standards Compliance",
    description:
      "Manufactured in full compliance with DIN/EN 60254 and IEC 254-2 international standards, ensuring global quality benchmarks for traction battery performance.",
  },
];

// ─── Products ────────────────────────────────────────────────────────────────

export const PRODUCTS: Product[] = [
  {
    slug: "motive-power-flooded-tubular",
    name: "Motive Power Flooded Tubular Batteries",
    shortName: "Flooded Tubular",
    image: "/images/products/flooded-tubular.jpg",
    tagline: "The Industry Workhorse — Built for Heavy-Duty Traction",
    description:
      "Exide's flagship motive power battery range featuring tubular positive plates with 5% antimony alloy, designed for demanding material handling applications. Available in both DIN (IPzS) and BS (IPzB) configurations to fit all major forklift brands. These batteries deliver exceptional cycle life exceeding 1500 cycles at 80% DoD, making them the most cost-effective solution for multi-shift warehousing and manufacturing operations.",
    features: [
      "Tubular positive plates with 5% antimony alloy",
      "1500+ cycles at 80% depth of discharge",
      "Available in DIN (IPzS) and BS (IPzB) standards",
      "Compatible with all major forklift brands",
      "Bolt-on inter-cell connectors for low resistance",
      "DIN/EN 60254 and IEC 254-2 compliant",
    ],
    techFeatures: SHARED_TECH_FEATURES,
    specTables: [
      {
        title: "DIN Standard (IPzS) Range",
        headers: ["Cell Type", "Capacity (Ah) C5", "Length (mm)", "Width (mm)", "Height (mm)", "Weight (kg)", "Electrolyte (L)", "Plates/Cell"],
        rows: [
          { "Cell Type": "2 IPzS 160", "Capacity (Ah) C5": 160, "Length (mm)": 198, "Width (mm)": 83, "Height (mm)": 720, "Weight (kg)": 16.5, "Electrolyte (L)": 2.8, "Plates/Cell": 2 },
          { "Cell Type": "3 IPzS 240", "Capacity (Ah) C5": 240, "Length (mm)": 198, "Width (mm)": 119, "Height (mm)": 720, "Weight (kg)": 23.5, "Electrolyte (L)": 4.2, "Plates/Cell": 3 },
          { "Cell Type": "4 IPzS 320", "Capacity (Ah) C5": 320, "Length (mm)": 198, "Width (mm)": 155, "Height (mm)": 720, "Weight (kg)": 30.5, "Electrolyte (L)": 5.6, "Plates/Cell": 4 },
          { "Cell Type": "5 IPzS 400", "Capacity (Ah) C5": 400, "Length (mm)": 198, "Width (mm)": 191, "Height (mm)": 720, "Weight (kg)": 37.5, "Electrolyte (L)": 7.0, "Plates/Cell": 5 },
          { "Cell Type": "6 IPzS 480", "Capacity (Ah) C5": 480, "Length (mm)": 198, "Width (mm)": 227, "Height (mm)": 720, "Weight (kg)": 44.5, "Electrolyte (L)": 8.4, "Plates/Cell": 6 },
          { "Cell Type": "7 IPzS 560", "Capacity (Ah) C5": 560, "Length (mm)": 198, "Width (mm)": 263, "Height (mm)": 720, "Weight (kg)": 51.5, "Electrolyte (L)": 9.8, "Plates/Cell": 7 },
          { "Cell Type": "8 IPzS 640", "Capacity (Ah) C5": 640, "Length (mm)": 198, "Width (mm)": 299, "Height (mm)": 720, "Weight (kg)": 58.5, "Electrolyte (L)": 11.2, "Plates/Cell": 8 },
          { "Cell Type": "9 IPzS 720", "Capacity (Ah) C5": 720, "Length (mm)": 198, "Width (mm)": 335, "Height (mm)": 720, "Weight (kg)": 65.5, "Electrolyte (L)": 12.6, "Plates/Cell": 9 },
        ],
      },
      {
        title: "BS Standard (IPzB) Range",
        headers: ["Cell Type", "Capacity (Ah) C5", "Length (mm)", "Width (mm)", "Height (mm)", "Weight (kg)", "Electrolyte (L)", "Plates/Cell"],
        rows: [
          { "Cell Type": "2 IPzB 130", "Capacity (Ah) C5": 130, "Length (mm)": 158, "Width (mm)": 81, "Height (mm)": 580, "Weight (kg)": 11.0, "Electrolyte (L)": 1.9, "Plates/Cell": 2 },
          { "Cell Type": "3 IPzB 195", "Capacity (Ah) C5": 195, "Length (mm)": 158, "Width (mm)": 115, "Height (mm)": 580, "Weight (kg)": 16.0, "Electrolyte (L)": 2.8, "Plates/Cell": 3 },
          { "Cell Type": "4 IPzB 260", "Capacity (Ah) C5": 260, "Length (mm)": 158, "Width (mm)": 149, "Height (mm)": 580, "Weight (kg)": 21.0, "Electrolyte (L)": 3.7, "Plates/Cell": 4 },
          { "Cell Type": "5 IPzB 325", "Capacity (Ah) C5": 325, "Length (mm)": 158, "Width (mm)": 183, "Height (mm)": 580, "Weight (kg)": 26.0, "Electrolyte (L)": 4.6, "Plates/Cell": 5 },
          { "Cell Type": "6 IPzB 390", "Capacity (Ah) C5": 390, "Length (mm)": 158, "Width (mm)": 217, "Height (mm)": 580, "Weight (kg)": 31.0, "Electrolyte (L)": 5.5, "Plates/Cell": 6 },
          { "Cell Type": "7 IPzB 455", "Capacity (Ah) C5": 455, "Length (mm)": 158, "Width (mm)": 251, "Height (mm)": 580, "Weight (kg)": 36.0, "Electrolyte (L)": 6.4, "Plates/Cell": 7 },
          { "Cell Type": "8 IPzB 520", "Capacity (Ah) C5": 520, "Length (mm)": 158, "Width (mm)": 285, "Height (mm)": 580, "Weight (kg)": 41.0, "Electrolyte (L)": 7.3, "Plates/Cell": 8 },
          { "Cell Type": "9 IPzB 585", "Capacity (Ah) C5": 585, "Length (mm)": 158, "Width (mm)": 319, "Height (mm)": 580, "Weight (kg)": 46.0, "Electrolyte (L)": 8.2, "Plates/Cell": 9 },
        ],
      },
    ],
    applications: [
      "Counterbalance Forklifts",
      "Reach Trucks",
      "Pallet Trucks",
      "Order Pickers",
      "Tow Tractors",
      "Automated Guided Vehicles (AGVs)",
    ],
    relatedIndustries: [
      "warehouse-logistics",
      "engineering-manufacturing",
      "food-beverage",
      "ecommerce-distribution",
      "automotive",
    ],
  },
  {
    slug: "motive-power-gel",
    name: "Motive Power Gel Batteries (CEIL)",
    shortName: "Gel Batteries",
    image: "/images/products/gel-tubular.png",
    tagline: "Zero-Maintenance Power for Clean Environments",
    description:
      "CEIL Gel technology batteries are the ultimate maintenance-free solution for industries where cleanliness, safety, and uptime are paramount. Using gelled electrolyte and advanced valve-regulated design, these batteries eliminate water topping, acid spills, and corrosive fumes — making them ideal for food processing, pharmaceutical, and cold storage facilities. The bolted terminal design provides superior connectivity even under constant vibration.",
    features: [
      "CEIL Gel cell technology — fully sealed VRLA design",
      "Bolted terminal connections for maximum reliability",
      "Absolutely zero maintenance — no water topping ever",
      "No acid fumes or spills — safe for clean environments",
      "Deep cycle capability for demanding applications",
      "Suitable for temperature-controlled environments",
    ],
    specTables: [
      {
        title: "CEIL Gel Range",
        headers: ["Model", "Voltage (V)", "Capacity (Ah) C5", "Length (mm)", "Width (mm)", "Height (mm)", "Weight (kg)"],
        rows: [
          { Model: "CEIL 6V 180", "Voltage (V)": 6, "Capacity (Ah) C5": 180, "Length (mm)": 311, "Width (mm)": 181, "Height (mm)": 360, "Weight (kg)": 35 },
          { Model: "CEIL 6V 240", "Voltage (V)": 6, "Capacity (Ah) C5": 240, "Length (mm)": 311, "Width (mm)": 181, "Height (mm)": 440, "Weight (kg)": 45 },
          { Model: "CEIL 6V 320", "Voltage (V)": 6, "Capacity (Ah) C5": 320, "Length (mm)": 311, "Width (mm)": 181, "Height (mm)": 520, "Weight (kg)": 58 },
          { Model: "CEIL 12V 100", "Voltage (V)": 12, "Capacity (Ah) C5": 100, "Length (mm)": 330, "Width (mm)": 173, "Height (mm)": 220, "Weight (kg)": 32 },
          { Model: "CEIL 12V 150", "Voltage (V)": 12, "Capacity (Ah) C5": 150, "Length (mm)": 485, "Width (mm)": 173, "Height (mm)": 240, "Weight (kg)": 47 },
        ],
      },
    ],
    applications: [
      "Food Processing Plants",
      "Pharmaceutical Facilities",
      "Cold Storage Warehouses",
      "Clean Room Operations",
      "Hospitals & Healthcare",
      "Electronics Manufacturing",
    ],
    relatedIndustries: [
      "pharmaceutical",
      "food-beverage",
      "warehouse-logistics",
      "ecommerce-distribution",
    ],
  },
  {
    slug: "hsp-classic",
    image: "/images/products/hsp-classic.png",
    name: "HSP Classic Batteries",
    shortName: "HSP Classic",
    tagline: "Reliable Flooded Performance with 12-Month Warranty",
    description:
      "The HSP Classic range is Exide's proven flooded traction battery line, delivering dependable performance for standard-duty material handling applications. Available in both BS (58–841 Ah) and DIN (120–1400 Ah) configurations, these batteries come with a 12-month warranty and offer an excellent balance of performance and value for operations that don't require the extended cycle life of premium ranges.",
    features: [
      "Flooded lead-acid traction battery design",
      "12-month manufacturer warranty",
      "BS range: 58 to 841 Ah capacity",
      "DIN range: 120 to 1400 Ah capacity",
      "Compatible with standard traction chargers",
      "Proven technology with reliable performance",
    ],
    specTables: [
      {
        title: "BS Standard Range (58–841 Ah)",
        headers: ["Type", "Capacity Range (Ah)", "Voltage Options", "Warranty"],
        rows: [
          { Type: "BS Standard", "Capacity Range (Ah)": "58 – 841", "Voltage Options": "12V / 24V / 36V / 48V / 72V / 80V", Warranty: "12 Months" },
        ],
      },
      {
        title: "DIN Standard Range (120–1400 Ah)",
        headers: ["Type", "Capacity Range (Ah)", "Voltage Options", "Warranty"],
        rows: [
          { Type: "DIN Standard", "Capacity Range (Ah)": "120 – 1400", "Voltage Options": "24V / 36V / 48V / 72V / 80V", Warranty: "12 Months" },
        ],
      },
    ],
    applications: [
      "Standard Duty Forklifts",
      "Warehouse Pallet Trucks",
      "Light-Duty Material Handling",
      "Single-Shift Operations",
      "Small-Scale Warehouses",
    ],
    relatedIndustries: [
      "warehouse-logistics",
      "engineering-manufacturing",
      "paper-textile",
    ],
  },
  {
    slug: "gen-x",
    image: "/images/products/gen-x.png",
    name: "Gen-X Batteries",
    shortName: "Gen-X",
    tagline: "15% Extra Capacity — Next-Gen Performance",
    description:
      "The Gen-X range represents Exide's next generation of traction batteries, delivering 15% extra capacity over conventional batteries through advanced electrode chemistry. Featuring higher diameter gauntlets and a proprietary Red Lead + Grey Oxide formula, these batteries push the boundaries of flooded technology to deliver longer run times, faster recharging, and extended cycle life for demanding multi-shift operations.",
    features: [
      "15% extra capacity vs. conventional batteries",
      "Higher diameter gauntlets for better active material retention",
      "Red Lead + Grey Oxide proprietary formula",
      "Enhanced cycle life for multi-shift operations",
      "Faster recharging capability",
      "Superior deep discharge recovery",
    ],
    applications: [
      "Multi-Shift Warehouses",
      "High-Throughput Distribution Centers",
      "Heavy-Duty Manufacturing",
      "24/7 Operations",
      "Large Fleet Applications",
    ],
    relatedIndustries: [
      "warehouse-logistics",
      "ecommerce-distribution",
      "automotive",
      "steel-metal",
      "engineering-manufacturing",
    ],
  },
  {
    slug: "bci-range",
    image: "/images/products/bci-range.png",
    name: "BCI Range Batteries",
    shortName: "BCI Range",
    tagline: "American Standard — Manufactured on Demand",
    description:
      "Exide's BCI (Battery Council International) range is manufactured to American standard specifications, specifically designed for imported material handling equipment that requires BCI-format batteries. These batteries are produced against specific customer demands, ensuring exact compatibility with American-brand forklifts and AGVs operating in Indian conditions.",
    features: [
      "American BCI standard compliance",
      "Manufactured against specific customer demands",
      "Compatible with US-brand forklifts",
      "Customized to exact equipment specifications",
      "Reliable performance in Indian operating conditions",
      "Full technical support from Exide engineering",
    ],
    applications: [
      "US-Brand Forklifts",
      "Imported Material Handling Equipment",
      "American-Spec AGVs",
      "Specialized Industrial Vehicles",
    ],
    relatedIndustries: [
      "automotive",
      "warehouse-logistics",
      "engineering-manufacturing",
    ],
  },
  {
    slug: "accessories",
    image: "/images/products/accessories.jpg",
    name: "Battery Accessories & Monitoring Systems",
    shortName: "Accessories",
    tagline: "Maximize Battery Life with Smart Accessories",
    description:
      "Complement your battery investment with Exide's range of intelligent accessories designed to extend battery life, reduce maintenance costs, and provide real-time monitoring. From automated watering systems that eliminate manual topping to advanced battery monitoring that prevents costly deep discharges, these accessories deliver significant ROI.",
    features: [
      "Battery Watering Monitors for optimal electrolyte levels",
      "Electrolyte Circulation System for uniform charging",
      "Single Point Watering for quick, safe maintenance",
      "Battery Monitoring System for fleet-wide insights",
      "Smart Clamp technology for accurate measurements",
    ],
    applications: [
      "Fleet Battery Management",
      "Warehouse Battery Rooms",
      "Multi-Shift Operations",
      "Preventive Maintenance Programs",
    ],
    relatedIndustries: [
      "warehouse-logistics",
      "ecommerce-distribution",
      "engineering-manufacturing",
    ],
  },
];

export const ACCESSORY_PRODUCTS: AccessoryProduct[] = [
  {
    name: "Battery Watering Monitor",
    description:
      "LED-based electrolyte level indicator that alerts when batteries need water topping. Eliminates guesswork and prevents both under-filling and overfilling.",
    specs: [
      "Operating voltage: 4.0V",
      "Voltage range: 3.0V – 5.5V",
      "Current draw: 60mA",
      "LED status indicators",
    ],
  },
  {
    name: "Electrolyte Circulation System",
    description:
      "Air-pump driven system that circulates electrolyte during charging, ensuring uniform acid density across all cells. Dramatically reduces charging time and extends battery life.",
    specs: [
      "30% savings in charging time",
      "20% reduction in electricity consumption",
      "75% reduction in water consumption",
      "Uniform acid density across cells",
    ],
  },
  {
    name: "Single Point Watering System",
    description:
      "Centralized watering system that allows all cells to be filled to the exact correct level through a single connection point, reducing watering time from 30 minutes to under 3 minutes.",
    image: "/images/products/auto-fill.jpg",
  },
  {
    name: "Battery Monitoring System (BMS)",
    description:
      "Fleet-wide monitoring solution that tracks individual battery voltage, temperature, state of charge, and discharge depth in real time. Provides alerts for abuse conditions and generates maintenance reports.",
    image: "/images/products/epoxy-coating.jpg",
  },
  {
    name: "Smart Clamp",
    description:
      "Precision measurement clamp for accurate voltage, current, and temperature readings on individual cells and battery packs. Essential tool for diagnostic testing and preventive maintenance.",
  },
];

// ─── Industries ──────────────────────────────────────────────────────────────

export const INDUSTRIES: Industry[] = [
  {
    slug: "pharmaceutical",
    name: "Pharmaceutical & Healthcare",
    shortName: "Pharma & Healthcare",
    description:
      "Pharmaceutical and healthcare facilities demand zero-contamination environments where even trace acid fumes can compromise product integrity. Our battery solutions, especially CEIL Gel technology, deliver silent, emission-free power for material handling in clean rooms, drug manufacturing zones, and hospital logistics areas.",
    painPoints: [
      "Clean room contamination from battery acid fumes",
      "Strict GMP compliance requires zero spill risk",
      "Temperature-sensitive drug storage needs reliable cold chain logistics",
      "24/7 hospital operations require uninterrupted power for logistics vehicles",
      "Regulatory audits demand documented maintenance records",
    ],
    solutions: [
      "CEIL Gel batteries eliminate acid fumes and spill risks entirely",
      "Zero-maintenance design supports GMP compliance documentation",
      "Reliable deep-cycle performance for temperature-controlled logistics",
      "Fast-charge capability minimizes vehicle downtime in critical operations",
      "Battery Monitoring System provides audit-ready maintenance logs",
    ],
    recommendedProducts: ["motive-power-gel", "motive-power-flooded-tubular", "accessories"],
    icon: "Pill",
  },
  {
    slug: "engineering-manufacturing",
    name: "Engineering & Manufacturing",
    shortName: "Engineering & Mfg",
    description:
      "Engineering and manufacturing plants run material handling equipment across multiple shifts, often in harsh environments with metal dust, extreme temperatures, and constant vibration. Our flooded tubular and Gen-X batteries are engineered to thrive in these demanding conditions.",
    painPoints: [
      "Multi-shift operations drain batteries rapidly",
      "Harsh environments with dust, heat, and vibration",
      "Heavy loads require sustained high-current discharge",
      "Downtime costs thousands per hour in production losses",
      "Large fleets need centralized maintenance management",
    ],
    solutions: [
      "Gen-X batteries deliver 15% extra capacity for extended shifts",
      "Tubular plate design withstands vibration and harsh conditions",
      "High-current discharge capability for heavy load handling",
      "AMC plans minimize unplanned downtime with preventive maintenance",
      "Battery Monitoring System enables fleet-wide management",
    ],
    recommendedProducts: ["gen-x", "motive-power-flooded-tubular", "accessories"],
    icon: "Settings",
  },
  {
    slug: "warehouse-logistics",
    name: "Warehouse & Logistics",
    shortName: "Warehouse & Logistics",
    description:
      "Warehousing and logistics operations are the backbone of modern supply chains, running forklifts, reach trucks, and pallet jacks around the clock. Battery reliability directly impacts throughput, order fulfillment rates, and delivery timelines.",
    painPoints: [
      "24/7 operations require batteries that can handle multi-shift cycling",
      "Fleet size management and battery rotation planning",
      "Charging infrastructure costs and space requirements",
      "Inconsistent battery performance across the fleet",
      "High replacement costs from premature battery failure",
    ],
    solutions: [
      "Flooded tubular batteries deliver 1500+ cycles at 80% DoD",
      "Electrolyte Circulation System reduces charging time by 30%",
      "Battery Monitoring System enables optimized rotation planning",
      "Single Point Watering reduces maintenance time by 90%",
      "AMC plans provide predictable costs with full warranty coverage",
    ],
    recommendedProducts: ["motive-power-flooded-tubular", "gen-x", "accessories"],
    icon: "Warehouse",
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage Processing",
    shortName: "Food & Beverage",
    description:
      "Food and beverage processing plants must adhere to FSSAI and international food safety standards that prohibit contamination sources. Gel batteries provide the emission-free, spill-proof solution these facilities need while delivering reliable power for cold storage and production line logistics.",
    painPoints: [
      "FSSAI compliance prohibits contamination sources near food",
      "Cold storage operations demand reliable performance at low temperatures",
      "Hygiene requirements limit traditional flooded battery use",
      "Wet floors and washdown areas create safety concerns",
      "Strict traceability requirements for all equipment maintenance",
    ],
    solutions: [
      "CEIL Gel batteries are completely sealed — no fumes, no spills",
      "Proven cold storage performance down to -20°C environments",
      "Sealed design eliminates contamination risk near food products",
      "Non-spill design is safe for wet and washdown environments",
      "BMS provides complete maintenance traceability documentation",
    ],
    recommendedProducts: ["motive-power-gel", "motive-power-flooded-tubular", "accessories"],
    icon: "UtensilsCrossed",
  },
  {
    slug: "steel-metal",
    name: "Steel & Metal Industry",
    shortName: "Steel & Metal",
    description:
      "Steel plants and metal foundries represent some of the harshest operating environments for industrial batteries — extreme heat, metal dust, heavy vibration, and massive loads. Our batteries are built to survive and perform where others fail.",
    painPoints: [
      "Extreme ambient temperatures up to 50°C+",
      "Metal dust and particulate contamination",
      "Ultra-heavy loads requiring sustained high-current output",
      "Corrosive atmospheres accelerate battery degradation",
      "Remote locations within plants make maintenance challenging",
    ],
    solutions: [
      "Robust PP containers withstand extreme heat and impacts",
      "Sealed grommets prevent dust and particulate ingress",
      "High-capacity cells support sustained heavy-load operations",
      "Antimony alloy plates resist corrosion in harsh atmospheres",
      "On-site service teams available Pan-Telangana",
    ],
    recommendedProducts: ["motive-power-flooded-tubular", "gen-x", "hsp-classic"],
    icon: "Flame",
  },
  {
    slug: "cement-construction",
    name: "Cement & Construction",
    shortName: "Cement & Construction",
    description:
      "Cement plants and construction sites operate material handling equipment in environments filled with abrasive dust, extreme temperatures, and rugged terrain. Our batteries are purpose-built for these challenging conditions.",
    painPoints: [
      "Abrasive cement dust infiltrates equipment and batteries",
      "Outdoor operations expose batteries to temperature extremes",
      "Rough terrain causes severe vibration and physical stress",
      "Remote site locations complicate battery service and replacement",
      "Heavy payload requirements for bulk material movement",
    ],
    solutions: [
      "Sealed containers prevent dust ingress and damage",
      "Temperature-resilient design for outdoor operations",
      "Vibration-resistant tubular plate construction",
      "Doorstep delivery service anywhere in India",
      "High-capacity configurations for heavy material handling",
    ],
    recommendedProducts: ["motive-power-flooded-tubular", "gen-x", "hsp-classic"],
    icon: "Building",
  },
  {
    slug: "airports-aviation",
    name: "Airports & Aviation",
    shortName: "Airports & Aviation",
    description:
      "Airport ground support equipment operates under strict safety regulations with zero tolerance for operational delays. From baggage tractors to pushback tugs, reliable battery power is critical to maintaining flight schedules and passenger satisfaction.",
    painPoints: [
      "Flight schedule dependency — equipment downtime causes cascading delays",
      "Strict aviation safety regulations for ground equipment",
      "24/7 operations across all weather conditions",
      "High-visibility environment demands clean, professional equipment",
      "Security restrictions complicate maintenance logistics",
    ],
    solutions: [
      "Ultra-reliable tubular batteries minimize unplanned downtime",
      "Gel batteries for emission-sensitive enclosed terminal areas",
      "Deep cycle capability for continuous 24/7 operations",
      "Clean, sealed designs for professional ground operations",
      "Emergency service response for critical equipment",
    ],
    recommendedProducts: ["motive-power-gel", "motive-power-flooded-tubular", "gen-x"],
    icon: "Plane",
  },
  {
    slug: "ecommerce-distribution",
    name: "E-commerce & Distribution Centres",
    shortName: "E-commerce & Distribution",
    description:
      "E-commerce fulfillment and distribution centers operate at breakneck speed with peak seasons demanding 24/7 multi-shift operations. Battery reliability directly impacts order fulfillment rates, delivery promises, and customer satisfaction scores.",
    painPoints: [
      "Peak season demands 24/7 multi-shift operations",
      "Rapid scaling requires quick battery procurement",
      "Cost per order pressure demands energy efficiency",
      "Multiple forklift types need different battery specifications",
      "High turnover workforce needs simple maintenance procedures",
    ],
    solutions: [
      "Gen-X 15% extra capacity extends shift coverage during peaks",
      "Fast delivery and installation for rapid scaling needs",
      "Electrolyte Circulation System reduces electricity costs by 20%",
      "Complete DIN and BS range covers all forklift specifications",
      "Single Point Watering simplifies maintenance for any operator",
    ],
    recommendedProducts: ["gen-x", "motive-power-flooded-tubular", "accessories"],
    icon: "Package",
  },
  {
    slug: "automotive",
    name: "Automotive Manufacturing",
    shortName: "Automotive Mfg",
    description:
      "Automotive manufacturing plants demand precision, reliability, and uninterrupted material flow across assembly lines. From JIT component delivery to finished vehicle movement, battery-powered material handling is the circulatory system of auto manufacturing.",
    painPoints: [
      "JIT manufacturing leaves zero margin for equipment downtime",
      "Assembly line stops cost lakhs per minute",
      "Multiple vehicle types across the plant need different battery specs",
      "Precision operations require smooth, consistent power delivery",
      "OEM-level quality standards for all plant equipment",
    ],
    solutions: [
      "Premium tubular batteries deliver consistent, reliable power",
      "AMC with 5-year full warranty eliminates downtime risk",
      "Complete product range covers all MHE specifications",
      "Smooth deep-discharge curves for precision handling operations",
      "Exide's OEM partnerships (Jungheinrich) prove automotive-grade quality",
    ],
    recommendedProducts: ["motive-power-flooded-tubular", "gen-x", "bci-range"],
    icon: "Car",
  },
  {
    slug: "paper-textile",
    name: "Paper & Textile Mills",
    shortName: "Paper & Textile",
    description:
      "Paper mills and textile factories handle heavy raw material rolls, fiber bales, and finished goods using forklifts that operate in dusty, humid environments. Battery solutions for these industries must balance durability with cost-effectiveness.",
    painPoints: [
      "Dusty, humid environments challenge battery longevity",
      "Heavy raw material rolls require high-capacity batteries",
      "Cost-sensitive industries need maximum value per cycle",
      "Large facility footprints mean extensive material movement",
      "Seasonal production variations affect battery utilization",
    ],
    solutions: [
      "Durable PP containers resist humidity and dust ingress",
      "High-capacity cells handle heavy raw material loads",
      "HSP Classic range offers excellent cost-per-cycle economics",
      "Long cycle life minimizes total cost of ownership",
      "Flexible AMC plans adapt to seasonal operation patterns",
    ],
    recommendedProducts: ["hsp-classic", "motive-power-flooded-tubular", "gen-x"],
    icon: "ScrollText",
  },
];

// ─── Services ────────────────────────────────────────────────────────────────

export const SERVICES: Service[] = [
  {
    slug: "battery-installation",
    name: "Battery Installation",
    description:
      "Professional battery installation by trained technicians, completely free with every battery purchase. We ensure proper fitment, connector setup, initial charging, and operator training.",
    details: [
      "Free installation with every battery purchase",
      "Professional fitment by Exide-trained technicians",
      "Connector and cable verification",
      "Initial charging setup and monitoring",
      "Operator training on basic maintenance",
    ],
    icon: "Wrench",
    highlight: true,
  },
  {
    slug: "testing-diagnostics",
    name: "Testing & Diagnostics",
    description:
      "Comprehensive battery health assessment including load testing, cell voltage measurement, specific gravity checks, and capacity verification — completely free of charge.",
    details: [
      "Free diagnostic testing for all battery brands",
      "Individual cell voltage measurement",
      "Specific gravity checks across all cells",
      "Load testing under real-world conditions",
      "Written diagnostic report with recommendations",
    ],
    icon: "Activity",
    highlight: true,
  },
  {
    slug: "battery-replacement",
    name: "Battery Replacement",
    description:
      "Seamless battery replacement service with proper disposal of old batteries. We handle everything from assessment to installation of the new battery.",
    details: [
      "Assessment of current battery condition",
      "Recommendation for optimal replacement",
      "Professional removal and installation",
      "Proper disposal of old batteries",
      "New battery setup and commissioning",
    ],
    icon: "RefreshCw",
  },
  {
    slug: "old-battery-exchange",
    name: "Old Battery Exchange",
    description:
      "Trade in your old industrial batteries for attractive credit towards new Exide batteries. We handle safe removal, transport, and environmentally responsible recycling.",
    details: [
      "Attractive exchange value for old batteries",
      "Credit applied towards new Exide batteries",
      "Safe removal and transport",
      "Environmentally responsible recycling",
      "Applicable to all industrial battery types",
    ],
    icon: "ArrowLeftRight",
  },
  {
    slug: "doorstep-delivery",
    name: "Doorstep Delivery",
    description:
      "We deliver industrial batteries to your facility anywhere in India. Professional handling, secure transport, and on-time delivery guaranteed.",
    details: [
      "Delivery anywhere in India",
      "Professional handling and secure transport",
      "On-time delivery commitment",
      "Real-time tracking updates",
      "Installation available at delivery location",
    ],
    icon: "Truck",
  },
  {
    slug: "emergency-service",
    name: "Emergency Service",
    description:
      "When your operations can't wait, neither do we. Our emergency service team responds rapidly to minimize your downtime with temporary battery solutions and expedited repairs.",
    details: [
      "Rapid response for critical breakdowns",
      "Temporary battery solutions available",
      "Expedited repair and replacement",
      "Priority scheduling for emergency calls",
      "24/7 phone support for emergencies",
    ],
    icon: "Zap",
    highlight: true,
  },
  {
    slug: "amc",
    name: "Annual Maintenance Contract (AMC)",
    description:
      "Our comprehensive AMC ensures your batteries perform at peak efficiency throughout their lifecycle. With AMC: 5 years full warranty. Without AMC: 2 years full warranty + 3 years pro-rata.",
    details: [
      "With AMC: 5-year full replacement warranty",
      "Without AMC: 2-year full + 3-year pro-rata warranty",
      "Scheduled preventive maintenance visits",
      "Priority response for service calls",
      "Complete maintenance documentation for audits",
      "Battery health monitoring and reporting",
    ],
    icon: "Shield",
    highlight: true,
  },
  {
    slug: "equalizing-charge",
    name: "Equalizing Charge Service",
    description:
      "Professional equalizing charge service to balance cell voltages and restore battery capacity. Essential for maintaining uniform performance across all cells in your traction battery pack.",
    details: [
      "Controlled overcharge to balance cell voltages",
      "Restores capacity lost due to stratification",
      "Recommended every 5-10 cycles for optimal performance",
      "Prevents premature cell failure from imbalance",
      "Extends overall battery pack life",
    ],
    icon: "BarChart3",
  },
  {
    slug: "onsite-service",
    name: "Onsite Service (Pan-Telangana)",
    description:
      "Our service teams operate across all of Telangana, providing regular maintenance, emergency repairs, and technical support at your facility — no need to transport batteries to a workshop.",
    details: [
      "Complete coverage across Telangana",
      "Regular scheduled maintenance visits",
      "On-site repair and troubleshooting",
      "Trained technicians with mobile workshop",
      "Same-day response in Hyderabad metro area",
    ],
    icon: "MapPin",
  },
];

// ─── Blog Posts ──────────────────────────────────────────────────────────────

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-choose-forklift-battery",
    title: "How to Choose the Right Forklift Battery for Your Warehouse",
    excerpt:
      "Selecting the perfect forklift battery involves understanding your operational demands, shift patterns, and equipment specifications. This guide walks you through every factor.",
    content: `Choosing the right forklift battery is one of the most impactful decisions a warehouse manager can make. The battery typically represents 30% of a forklift's total cost of ownership, and selecting the wrong one leads to reduced productivity, increased maintenance costs, and premature replacement.

## Understand Your Operation

Start by mapping your operational profile. How many shifts do you run? What's the average duty cycle — light picking or heavy palletizing? The answers determine whether you need a standard-capacity HSP Classic or a high-performance Gen-X battery.

**Single-shift operations** (up to 8 hours) can typically use standard flooded batteries like the HSP Classic range, which offers excellent value per cycle.

**Multi-shift operations** (16-24 hours) benefit significantly from Gen-X batteries with 15% extra capacity, allowing extended run times between charges.

## DIN vs BS: Choose Your Standard

Your forklift manufacturer determines which battery standard you need:
- **DIN standard (IPzS)**: Used by most European brands — Jungheinrich, Linde, Still, Toyota
- **BS standard (IPzB)**: Used by many Japanese and some European brands
- **BCI standard**: Used by American brands — Crown, Hyster, Yale

## Capacity Sizing

Never undersize a battery. The rule of thumb: your battery should have enough capacity to complete your shift with 20% reserve. Running a battery below 80% depth of discharge regularly will dramatically reduce its cycle life.

## Flooded vs Gel

For most warehouse applications, flooded tubular batteries offer the best cost-per-cycle economics. However, if your facility handles food, pharmaceuticals, or operates in temperature-controlled environments, CEIL Gel batteries eliminate contamination risks entirely.

## Consider Total Cost of Ownership

Don't just compare purchase prices. Factor in:
- Cycle life (how many charge-discharge cycles before replacement)
- Maintenance costs (water topping, equalization, cleaning)
- Energy costs (charging efficiency)
- Downtime costs (reliability and warranty coverage)

An AMC from Nektra Energy Solutions transforms your battery from a variable cost to a predictable expense with 5-year full warranty coverage.

## Need Help Deciding?

Our battery experts have helped hundreds of Hyderabad-area warehouses optimize their battery investments. Contact us for a free consultation and battery assessment.`,
    date: "2025-12-15",
    readTime: "8 min read",
    category: "Guides",
  },
  {
    slug: "flooded-vs-gel-batteries",
    title: "Flooded vs Gel Batteries: Which is Right for Your Industry?",
    excerpt:
      "A comprehensive comparison of flooded tubular and gel battery technologies, helping you determine the best fit based on your industry, environment, and budget.",
    content: `The choice between flooded tubular and gel battery technology isn't just about price — it's about matching your battery to your operational environment, maintenance capabilities, and industry requirements.

## Flooded Tubular Batteries: The Industry Workhorse

Flooded tubular batteries (like Exide's Motive Power Flooded Tubular range) use liquid sulfuric acid electrolyte and tubular positive plates. They've been the backbone of industrial material handling for decades.

**Advantages:**
- Lower upfront cost (20-30% less than gel equivalents)
- Proven technology with predictable performance
- Higher energy density per kilogram
- 1500+ cycle life at 80% depth of discharge
- Easier to diagnose issues (specific gravity testing)

**Considerations:**
- Require regular water topping (every 1-2 weeks)
- Produce hydrogen gas during charging (ventilation required)
- Potential for acid spills if damaged or tipped
- Not suitable for clean rooms or food processing areas

## Gel Batteries: Zero-Maintenance Clean Power

CEIL Gel technology uses gelled electrolyte (silica mixed with sulfuric acid) in a completely sealed, valve-regulated design.

**Advantages:**
- Absolutely zero maintenance — no water topping ever
- No acid fumes or spill risk
- Safe for food processing, pharma, and clean environments
- Can operate in any orientation
- No dedicated charging room ventilation required

**Considerations:**
- Higher upfront cost
- Requires gel-specific charging profiles
- Slightly lower energy density

## Industry Recommendations

| Industry | Recommended | Why |
|----------|-------------|-----|
| Warehouse & Logistics | Flooded Tubular | Best cost-per-cycle for high-volume operations |
| Food & Beverage | Gel | FSSAI compliance, zero contamination risk |
| Pharmaceutical | Gel | GMP compliance, clean room compatibility |
| Steel & Metal | Flooded Tubular | Robust design handles extreme conditions |
| E-commerce | Flooded Tubular + Gen-X | Maximum capacity for peak season demands |
| Airports | Gel (terminals) + Flooded (outdoor) | Environment-specific deployment |

## The Bottom Line

If your facility handles food, drugs, or operates in clean environments — go gel. For everything else, flooded tubular batteries deliver the best value per cycle, especially when paired with an AMC for worry-free operation.`,
    date: "2025-11-28",
    readTime: "7 min read",
    category: "Comparison",
  },
  {
    slug: "battery-maintenance-tips",
    title: "Battery Maintenance Tips to Maximize Cycle Life",
    excerpt:
      "Practical, actionable maintenance tips that can extend your industrial battery's life by 30-50%. From watering schedules to charging best practices.",
    content: `Proper maintenance is the single biggest factor in determining how long your industrial battery will last. A well-maintained traction battery can deliver 1500+ cycles, while a neglected one might fail at 500. Here are the practices that make the difference.

## 1. Follow a Strict Watering Schedule

Water topping is the most critical maintenance task for flooded batteries. Use only distilled or deionized water — never tap water.

**When to water:** After charging, never before. The electrolyte expands during charging, and adding water beforehand causes overflow and acid dilution.

**How much:** Fill to approximately 15mm above the plate tops, or to the marked level indicator.

**Pro tip:** Install a Single Point Watering system to reduce watering time from 30 minutes to under 3 minutes while ensuring consistent fill levels.

## 2. Charge Correctly

- **Don't opportunity charge** — partial charges create "memory effect" and reduce capacity
- **Complete full charge cycles** — always charge to 100% before returning to service
- **Don't over-discharge** — avoid going below 80% depth of discharge
- **Use the right charger** — match charger output to battery capacity (recommended: 14-18% of C5 capacity)

## 3. Perform Equalizing Charges

Equalizing charges (controlled overcharge) balance cell voltages across the battery pack. Unbalanced cells are the #1 cause of premature battery failure.

**Frequency:** Every 5-10 regular cycles, or when cell voltage deviation exceeds 0.1V

## 4. Keep Batteries Clean

Acid residue on battery tops creates conductive paths that cause self-discharge and corrosion. Clean battery tops monthly with a baking soda solution and rinse with clean water.

## 5. Monitor Battery Temperature

Never charge a battery with electrolyte temperature above 45°C. High-temperature charging accelerates grid corrosion and shortens life dramatically.

## 6. Implement Battery Rotation

For multi-battery fleets, implement a FIFO (First In, First Out) rotation system. This ensures all batteries get equal use and age evenly.

## 7. Keep Records

Document every watering, charging, and maintenance event. This data is invaluable for warranty claims and helps identify batteries that need attention before they fail.

## Consider an AMC

Nektra Energy Solutions offers Annual Maintenance Contracts that handle all of the above professionally, with the bonus of extending your warranty to 5 years full replacement coverage.`,
    date: "2025-11-10",
    readTime: "6 min read",
    category: "Maintenance",
  },
  {
    slug: "why-equalizing-charge-matters",
    title: "Why Equalizing Charge Matters for Traction Batteries",
    excerpt:
      "Equalizing charges are often overlooked but critical for battery health. Learn why cell imbalance develops and how controlled overcharging prevents premature failure.",
    content: `If there's one maintenance practice that separates batteries that last from batteries that fail early, it's regular equalizing charges. Yet it's the most commonly skipped maintenance step in industrial battery management.

## What is an Equalizing Charge?

An equalizing charge is a controlled overcharge applied to a fully charged battery. It pushes all cells to their maximum voltage, bringing weaker cells up to match stronger ones.

## Why Cells Become Unbalanced

In a 24-cell (48V) traction battery, each cell should maintain identical voltage and specific gravity. But over time, small differences accumulate:

- **Temperature variations** across the battery pack (center cells run hotter)
- **Electrolyte stratification** where acid concentrates at the bottom
- **Manufacturing tolerances** mean cells aren't perfectly identical
- **Uneven water levels** from inconsistent maintenance

## What Happens Without Equalization

When cells are unbalanced, the charger sees the average voltage — not individual cells. This means:
- Strong cells get overcharged (accelerating corrosion)
- Weak cells remain undercharged (losing capacity permanently)
- The weakest cell limits the entire battery's output
- Cell reversal can occur during deep discharge, destroying the cell

## How to Perform an Equalizing Charge

1. Start with a fully charged battery
2. Switch charger to equalize mode (typically 2.65-2.70V per cell)
3. Continue charging for 3-4 hours beyond normal cutoff
4. Monitor electrolyte temperature — stop if it exceeds 55°C
5. Check specific gravity of all cells — they should be within 0.010 of each other

## Recommended Frequency

- **Standard operations:** Every 5-10 normal charge cycles
- **Multi-shift operations:** Weekly
- **When voltage spread exceeds 0.1V** between highest and lowest cells

## Professional Equalization Service

Nektra Energy Solutions offers professional equalizing charge service with cell-level monitoring and documented results. This is included in our AMC plans or available as a standalone service.`,
    date: "2025-10-22",
    readTime: "5 min read",
    category: "Technical",
  },
  {
    slug: "top-industries-industrial-batteries-india",
    title: "Top 10 Industries That Rely on Industrial Batteries in India",
    excerpt:
      "From pharmaceutical clean rooms to steel plant furnaces, discover how different industries across India depend on industrial traction batteries for their material handling needs.",
    content: `India's industrial sector is booming, and at the heart of every efficient factory, warehouse, and distribution center are battery-powered material handling vehicles. Here are the top 10 industries driving demand for industrial traction batteries.

## 1. Warehouse & Logistics
The backbone of India's supply chain revolution. With e-commerce growing at 25%+ annually, warehouses run forklifts, reach trucks, and pallet jacks around the clock.

## 2. Automotive Manufacturing
India is now the world's 3rd largest auto market. Plants run by Hyundai, Kia, Tata, and Mahindra depend on battery-powered MHE for JIT component delivery.

## 3. Pharmaceutical & Healthcare
India produces 60% of the world's vaccines. Clean room requirements make gel batteries essential for drug manufacturing and hospital logistics.

## 4. Food & Beverage Processing
FSSAI regulations demand contamination-free environments. Gel batteries are the only compliant option for material handling near food production.

## 5. E-commerce & Distribution
Amazon, Flipkart, and Reliance distribution centers in Hyderabad alone operate thousands of forklifts, with peak season demanding 24/7 multi-shift operations.

## 6. Steel & Metal Industry
India is the world's 2nd largest steel producer. Harsh conditions in steel plants demand the most robust battery solutions available.

## 7. Engineering & Manufacturing
From heavy engineering to precision manufacturing, factories across Telangana rely on battery-powered forklifts for material movement.

## 8. Cement & Construction
With massive infrastructure projects across India, cement plants and construction sites need reliable battery power for material handling.

## 9. Airports & Aviation
Hyderabad's Rajiv Gandhi International Airport and others use battery-powered ground support equipment for baggage, cargo, and aircraft servicing.

## 10. Paper & Textile Mills
Heavy rolls of raw material and finished goods require powerful forklifts with high-capacity batteries for continuous operations.

## The Common Thread

Every industry on this list needs:
- **Reliability** — downtime kills productivity
- **Safety** — from clean room compliance to heavy-duty durability
- **Support** — expert service and maintenance

Nektra Energy Solutions serves all 10 of these industries across Telangana with Exide's complete product range and our unmatched 35+ years of expertise.`,
    date: "2025-10-05",
    readTime: "6 min read",
    category: "Industry",
  },
  {
    slug: "din-vs-bs-battery-standards",
    title: "Understanding DIN vs BS Battery Standards",
    excerpt:
      "DIN and BS are the two primary battery standards for industrial traction batteries. Learn the key differences and how to identify which standard your forklift requires.",
    content: `One of the most common questions we receive is: "My forklift needs a new battery — do I need DIN or BS?" Understanding these standards is essential to getting the right battery for your equipment.

## What Are DIN and BS Standards?

**DIN (Deutsches Institut für Normung)** is the German industrial standard, widely adopted across Europe. In traction batteries, DIN-standard cells are designated as **IPzS** (flooded) or **IPzV** (gel).

**BS (British Standard)** originated in the UK and is used by many Japanese and some European manufacturers. BS-standard cells are designated as **IPzB**.

## Key Physical Differences

| Feature | DIN (IPzS) | BS (IPzB) |
|---------|-----------|-----------|
| Cell Height | ~720mm (taller) | ~580mm (shorter) |
| Cell Width | Narrower per plate | Wider per plate |
| Connector Type | Bolt-on top | Bolt-on top |
| Capacity Range | 160 – 720+ Ah | 130 – 585+ Ah |

## How to Know Which You Need

The simplest way: **check your forklift's battery compartment dimensions and the existing battery label.**

- **European forklifts** (Jungheinrich, Linde, Still): Usually DIN
- **Japanese forklifts** (Toyota, Komatsu, Mitsubishi): Usually BS
- **American forklifts** (Crown, Hyster, Yale): Usually BCI
- **Indian forklifts** (Godrej): Can be either DIN or BS

## Can I Switch Standards?

Generally, no. The battery compartment is designed for specific cell dimensions. A DIN battery won't fit in a BS compartment and vice versa. However, within the same standard, you can often upgrade capacity by choosing cells with more plates.

## Exide's Range

Exide manufactures complete ranges in both standards:
- **DIN (IPzS):** 2 IPzS 160 through 9 IPzS 720
- **BS (IPzB):** 2 IPzB 130 through 9 IPzB 585
- **BCI:** Manufactured on demand for American-standard equipment

## Still Unsure?

Send us a photo of your battery label and forklift model number, and our team will identify the exact replacement you need — free of charge. Call +91 9963739107 or WhatsApp us.`,
    date: "2025-09-18",
    readTime: "5 min read",
    category: "Technical",
  },
];

// ─── FAQs ────────────────────────────────────────────────────────────────────

export const FAQS: FAQItem[] = [
  {
    question: "What types of industrial batteries does Nektra Energy Solutions supply?",
    answer:
      "We supply the complete range of Exide industrial traction batteries including Motive Power Flooded Tubular (DIN & BS), CEIL Gel batteries, HSP Classic, Gen-X, and BCI Range batteries. We also provide battery accessories like watering monitors, electrolyte circulation systems, and battery monitoring systems.",
    category: "General",
  },
  {
    question: "Is Nektra Energy Solutions an authorized Exide dealer?",
    answer:
      "Yes, Nektra Energy Solutions is an authorized dealer of Exide Industrial Batteries. With over 35 years of experience, we are one of the most trusted Exide partners in the Hyderabad and Telangana region.",
    category: "General",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We provide doorstep delivery and service across all of Telangana including Hyderabad, Secunderabad, Chandanagar, Kukatpally, Miyapur, Gachibowli, HITEC City, Medchal, Shamshabad, and all other areas. For battery delivery, we ship anywhere in India.",
    category: "General",
  },
  {
    question: "What are your business hours?",
    answer:
      "We are open Monday through Saturday, 9:00 AM to 8:00 PM. For emergency battery service, you can reach us on our WhatsApp number +91 9963739107 outside business hours.",
    category: "General",
  },
  {
    question: "What is the difference between DIN and BS battery standards?",
    answer:
      "DIN (IPzS) and BS (IPzB) are two international battery form factor standards. DIN cells are taller (~720mm) and narrower, while BS cells are shorter (~580mm) and wider. Your forklift manufacturer determines which standard you need — European brands typically use DIN, while Japanese brands often use BS.",
    category: "Products",
  },
  {
    question: "What is the difference between flooded and gel batteries?",
    answer:
      "Flooded batteries use liquid electrolyte and require regular water topping, but offer lower cost per cycle. Gel batteries use gelled electrolyte, are completely sealed and maintenance-free, produce no acid fumes, and are ideal for clean environments like food processing and pharmaceutical facilities.",
    category: "Products",
  },
  {
    question: "What is the Gen-X battery range?",
    answer:
      "Gen-X is Exide's next-generation traction battery that delivers 15% extra capacity compared to conventional batteries. It uses higher diameter gauntlets and a proprietary Red Lead + Grey Oxide formula for longer run times, faster recharging, and extended cycle life.",
    category: "Products",
  },
  {
    question: "What is the BCI range?",
    answer:
      "BCI (Battery Council International) range batteries are manufactured to American standards, specifically for imported material handling equipment from US brands like Crown, Hyster, and Yale. These are produced against specific customer demands.",
    category: "Products",
  },
  {
    question: "Which battery is best for food processing facilities?",
    answer:
      "CEIL Gel batteries are the recommended choice for food processing facilities. They are completely sealed, produce no acid fumes or spills, and meet FSSAI compliance requirements for equipment used near food products.",
    category: "Products",
  },
  {
    question: "Do you provide free battery installation?",
    answer:
      "Yes, we provide completely free professional installation with every battery purchase. Our trained technicians handle fitment, connector setup, initial charging, and operator training at no extra cost.",
    category: "Services",
  },
  {
    question: "Do you offer free battery testing?",
    answer:
      "Yes, we offer free battery testing and diagnostics for all battery brands. Our comprehensive assessment includes load testing, cell voltage measurement, specific gravity checks, and a written diagnostic report with recommendations.",
    category: "Services",
  },
  {
    question: "What is included in your AMC (Annual Maintenance Contract)?",
    answer:
      "Our AMC includes scheduled preventive maintenance visits, priority service response, battery health monitoring, complete documentation for audits, and most importantly — extends your warranty to 5 years full replacement coverage (vs. 2 years full + 3 years pro-rata without AMC).",
    category: "Services",
  },
  {
    question: "Do you offer emergency battery service?",
    answer:
      "Yes, we offer emergency service with rapid response for critical breakdowns. This includes temporary battery solutions, expedited repair and replacement, and 24/7 phone support for emergencies.",
    category: "Services",
  },
  {
    question: "Can you deliver batteries outside Hyderabad?",
    answer:
      "Yes, we provide doorstep delivery anywhere in India. For the Telangana region, we offer same-day or next-day delivery. For other states, delivery typically takes 3-5 business days depending on location.",
    category: "Services",
  },
  {
    question: "What is the warranty on Exide industrial batteries?",
    answer:
      "Without AMC: 2 years full replacement warranty + 3 years pro-rata warranty. With AMC: 5 years full replacement warranty. The AMC warranty is significantly more valuable as it covers complete replacement at no cost for the full 5-year period.",
    category: "Warranty",
  },
  {
    question: "What voids the battery warranty?",
    answer:
      "Warranty may be voided by: using incorrect chargers, chronic under-watering (flooded types), operating beyond specified temperature limits, physical abuse/damage, unauthorized modifications, or using non-approved additives in the electrolyte.",
    category: "Warranty",
  },
  {
    question: "Do you accept old batteries for exchange?",
    answer:
      "Yes, we have an old battery exchange program where you receive attractive credit towards your new Exide battery purchase. We handle safe removal, transport, and environmentally responsible recycling of old batteries.",
    category: "Warranty",
  },
  {
    question: "How often should I add water to my battery?",
    answer:
      "For flooded batteries, check water levels weekly and top up as needed with distilled or deionized water. Always add water after charging, never before. The electrolyte level should be approximately 15mm above the plate tops. Consider a Single Point Watering system to simplify this process.",
    category: "Technical",
  },
  {
    question: "What is an equalizing charge and why is it important?",
    answer:
      "An equalizing charge is a controlled overcharge applied to balance voltage across all cells. Without it, cells become unbalanced — weak cells lose capacity permanently while strong cells get over-stressed. We recommend equalizing every 5-10 regular charge cycles.",
    category: "Technical",
  },
  {
    question: "How long does a traction battery last?",
    answer:
      "A well-maintained Exide traction battery delivers 1500+ charge-discharge cycles at 80% depth of discharge, which translates to 5-7 years in typical single-shift operations. With AMC and proper maintenance, many batteries exceed this lifespan significantly.",
    category: "Technical",
  },
  {
    question: "What charger should I use for my battery?",
    answer:
      "Use a charger matched to your battery's voltage and capacity. The charging current should be 14-18% of the battery's C5 capacity. For gel batteries, you must use a gel-specific charging profile — standard flooded chargers can damage gel batteries.",
    category: "Technical",
  },
  {
    question: "Can I use my forklift while the battery is charging?",
    answer:
      "No, never operate a forklift connected to a charger. This practice, called opportunity charging, damages the battery by creating incomplete charge cycles. Always complete a full charge cycle before returning the battery to service.",
    category: "Technical",
  },
];

// ─── Exide Manufacturer Info ─────────────────────────────────────────────────

export const EXIDE_INFO = {
  name: "Exide Industries Limited",
  headquarters: "Kolkata, India",
  established: 1947,
  ranking: "#1 in South and Southeast Asia",
  capacityRange: "2.5Ah to 20,000Ah",
  plants: 9,
  turnover: "USD 1.3 Billion",
  certifications: ["ISO 9001", "ISO 14001", "OHSAS 18001"],
  countries: "45+",
  tractionExported: "85%",
  oemPartners: ["Jungheinrich"],
  brands: [
    "Exide",
    "CEIL",
    "Standard Furukawa",
    "Chloride",
    "Prestolite",
    "Index-Free",
  ],
  description:
    "Exide Industries Limited, headquartered in Kolkata, is India's largest and South/Southeast Asia's #1 battery manufacturer. Established in 1947, Exide operates 9 manufacturing plants across India with an annual turnover exceeding USD 1.3 Billion. The company manufactures batteries ranging from 2.5Ah to 20,000Ah, serving 45+ countries worldwide. In the traction battery segment, 85% of production is exported, with Jungheinrich as a key OEM partner. Exide holds ISO 9001, ISO 14001, and OHSAS 18001 certifications.",
};

// ─── Testimonials (Placeholder) ──────────────────────────────────────────────

export const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    company: "Hyderabad Logistics Hub",
    industry: "Warehouse & Logistics",
    quote:
      "Nektra has been our battery partner for over 8 years. Their AMC service keeps our 40+ forklift fleet running without unexpected downtime. The Gen-X batteries gave us the extra shift coverage we desperately needed during peak season.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "PharmaCure Industries",
    industry: "Pharmaceutical",
    quote:
      "When we needed gel batteries for our clean room operations, Nektra delivered and installed within 48 hours. Their team understood our GMP requirements perfectly. Zero contamination incidents since switching.",
    rating: 5,
  },
  {
    name: "Mohammed Rizwan",
    company: "Deccan Steel Works",
    industry: "Steel & Metal",
    quote:
      "Our steel plant is one of the harshest environments for batteries. Nektra's flooded tubular batteries have consistently outperformed other brands we've tried. Their onsite service team responds same-day — critical for our 24/7 operations.",
    rating: 5,
  },
];
