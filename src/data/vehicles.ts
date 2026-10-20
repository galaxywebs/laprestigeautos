/**
 * Vehicle Inventory Data Layer for LA Prestige Auto Group.
 * Royalty-free vehicle photo URLs are provided as high-fidelity placeholders.
 * All placeholder URLs are marked with // REPLACE for client asset replacement.
 */

export interface Vehicle {
  id: string;
  slug: string;
  vin: string;
  stockNumber: string;
  year: number;
  make: string;
  model: string;
  trim: string;
  type: 'New' | 'Used';
  bodyType: 'SUV' | 'Sedan' | 'Coupe' | 'Truck' | 'Electric' | 'Convertible' | 'Wagon';
  price: number;
  originalMsrp?: number;
  monthlyEstimate: number; // calculated at standard 60-mo tier 1
  mileage: number;
  transmission: 'Automatic' | 'Manual' | 'Dual-Clutch' | 'Direct Drive';
  drivetrain: 'AWD' | 'RWD' | 'FWD' | '4WD';
  fuelType: 'Gasoline' | 'Hybrid' | 'Electric' | 'Plug-in Hybrid';
  engine: string;
  horsepower: number;
  exteriorColor: string;
  interiorColor: string;
  mpgCityHwy: string;
  isFeatured: boolean;
  isHotDeal?: boolean;
  status: 'In Stock' | 'Pending Sale' | 'Reserved';
  carfaxOneOwner: boolean;
  warranty: string;
  description: string;
  images: string[];
  keyFeatures: string[];
  highlights: {
    label: string;
    value: string;
  }[];
}

export const vehiclesData: Vehicle[] = [
  {
    id: "la-bmw-x1-2026-01",
    slug: "2026-bmw-x1-xdrive28i-m-sport",
    vin: "WBA73EF02T5K91823", // // REPLACE with real VIN
    stockNumber: "LAP-2601",
    year: 2026,
    make: "BMW",
    model: "X1",
    trim: "xDrive28i M Sport Package",
    type: "New",
    bodyType: "SUV",
    price: 43850,
    originalMsrp: 45200,
    monthlyEstimate: 589,
    mileage: 18,
    transmission: "Dual-Clutch",
    drivetrain: "AWD",
    fuelType: "Gasoline",
    engine: "2.0L BMW TwinPower Turbo 4-Cylinder",
    horsepower: 241,
    exteriorColor: "Alpine White / Black Shadowline",
    interiorColor: "Mocha Vernasca Leather",
    mpgCityHwy: "25 / 34 MPG",
    isFeatured: true,
    isHotDeal: true,
    status: "In Stock",
    carfaxOneOwner: true,
    warranty: "4-Year / 50,000 Mile BMW Factory Warranty",
    description: "Brand new 2026 BMW X1 xDrive28i with the coveted M Sport Package. Features BMW Curved Display running Operating System 9, panoramic sunroof, adaptive M suspension, active driving assistant, and Harman Kardon premium audio. Available for competitive lease or custom VIP delivery.",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80", // REPLACE
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80", // REPLACE
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80", // REPLACE
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80", // REPLACE
    ],
    keyFeatures: [
      "M Sport Aerodynamics Package",
      "BMW Curved Display with OS 9",
      "Harman Kardon Premium Sound",
      "Panoramic Glass Sunroof",
      "19\" M Double-Spoke Bi-Color Wheels",
      "Wireless Apple CarPlay & Android Auto",
      "Wireless Device Charging",
      "Active Blind Spot & Lane Departure Alert"
    ],
    highlights: [
      { label: "Acceleration (0-60)", value: "6.2 sec" },
      { label: "Cargo Capacity", value: "25.7 - 57.2 cu ft" },
      { label: "Wheelbase", value: "106.0 in" },
      { label: "Curb Weight", value: "3,750 lbs" },
    ]
  },
  {
    id: "la-porsche-911-2024-02",
    slug: "2024-porsche-911-carrera-s",
    vin: "WP0AB2A97RS218392", // // REPLACE
    stockNumber: "LAP-2402",
    year: 2024,
    make: "Porsche",
    model: "911",
    trim: "Carrera S (992)",
    type: "Used",
    bodyType: "Coupe",
    price: 134900,
    originalMsrp: 148500,
    monthlyEstimate: 1980,
    mileage: 5840,
    transmission: "Dual-Clutch",
    drivetrain: "RWD",
    fuelType: "Gasoline",
    engine: "3.0L Twin-Turbocharged Boxer 6",
    horsepower: 443,
    exteriorColor: "Agate Grey Metallic",
    interiorColor: "Bordeaux Red / Black Leather",
    mpgCityHwy: "18 / 24 MPG",
    isFeatured: true,
    status: "In Stock",
    carfaxOneOwner: true,
    warranty: "Porsche Certified Pre-Owned Active Warranty",
    description: "Exquisite 2024 Porsche 911 Carrera S in pristine condition. Finished in Agate Grey Metallic over two-tone Bordeaux Red and Black extended leather. Equipped with the Sport Chrono Package, Sport Exhaust System, Front Axle Lift, and 20/21-inch Carrera Classic Wheels. Single owner, California car, full front PPF.",
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80", // REPLACE
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80", // REPLACE
      "https://images.unsplash.com/photo-1611245452295-a229cba4ba87?auto=format&fit=crop&w=1200&q=80", // REPLACE
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80", // REPLACE
    ],
    keyFeatures: [
      "Sport Chrono Package with Mode Switch",
      "Sport Exhaust System with Silver Tailpipes",
      "Front Axle Lift System",
      "BOSE Surround Sound System",
      "14-Way Power Sport Seats with Memory",
      "Full Paint Protection Film (PPF)",
      "20\"/21\" Carrera Classic Alloy Wheels",
      "Porsche Dynamic Light System Plus (PDLS+)"
    ],
    highlights: [
      { label: "0-60 mph", value: "3.5 sec (with Chrono)" },
      { label: "Top Speed", value: "191 mph" },
      { label: "Torque", value: "390 lb-ft @ 2300 rpm" },
      { label: "Fuel Tank", value: "16.9 gal" },
    ]
  },
  {
    id: "la-merc-amg-c43-2025-03",
    slug: "2025-mercedes-amg-c43-4matic",
    vin: "W1KWF8HB6SF084920", // // REPLACE
    stockNumber: "LAP-2503",
    year: 2025,
    make: "Mercedes-Benz",
    model: "C-Class AMG",
    trim: "AMG C 43 4MATIC Sedan",
    type: "New",
    bodyType: "Sedan",
    price: 66950,
    originalMsrp: 68800,
    monthlyEstimate: 925,
    mileage: 45,
    transmission: "Automatic",
    drivetrain: "AWD",
    fuelType: "Gasoline",
    engine: "Handcrafted AMG 2.0L Turbo with Electric Exhaust Gas Turbo",
    horsepower: 402,
    exteriorColor: "Obsidian Black Metallic",
    interiorColor: "AMG Sienna Brown / Black Nappa",
    mpgCityHwy: "20 / 28 MPG",
    isFeatured: true,
    status: "In Stock",
    carfaxOneOwner: true,
    warranty: "4-Year / 50,000 Mile Mercedes-Benz Warranty",
    description: "The 2025 AMG C 43 4MATIC brings Formula 1 electric exhaust-gas turbocharger technology to the Los Angeles streets. Finished in deep Obsidian Black Metallic with AMG Night Package II and 20-inch matte black AMG wheels. Features AMG RIDE CONTROL suspension with rear-axle steering and Burmester 3D Sound.",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80", // REPLACE
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80", // REPLACE
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80", // REPLACE
    ],
    keyFeatures: [
      "Handcrafted AMG 402-hp Turbo Engine",
      "AMG RIDE CONTROL Sport Suspension",
      "Standard Rear-Axle Steering (Up to 2.5 deg)",
      "Burmester 3D Surround Sound System",
      "11.9\" OLED Center Touchscreen Display",
      "AMG Night Package II with Dark Chrome",
      "Head-Up Display with AMG Telemetry",
      "Panoramic Sliding Sunroof"
    ],
    highlights: [
      { label: "0-60 mph", value: "4.6 sec" },
      { label: "Drivetrain", value: "AMG Performance 4MATIC" },
      { label: "Brakes", value: "AMG 4-Piston Fixed Calipers" },
      { label: "Rear Steering", value: "Active 2.5°" },
    ]
  },
  {
    id: "la-toyota-camry-2026-04",
    slug: "2026-toyota-camry-xse-hybrid",
    vin: "4T1B31HK9RU894102", // // REPLACE
    stockNumber: "LAP-2604",
    year: 2026,
    make: "Toyota",
    model: "Camry",
    trim: "XSE Hybrid AWD",
    type: "New",
    bodyType: "Sedan",
    price: 37820,
    originalMsrp: 38900,
    monthlyEstimate: 495,
    mileage: 12,
    transmission: "Automatic",
    drivetrain: "AWD",
    fuelType: "Hybrid",
    engine: "2.5L 4-Cylinder Hybrid Synergy Drive",
    horsepower: 232,
    exteriorColor: "Wind Chill Pearl / Midnight Black Metallic Roof",
    interiorColor: "Cockpit Red Leather-Trimmed",
    mpgCityHwy: "47 / 44 MPG",
    isFeatured: true,
    isHotDeal: true,
    status: "In Stock",
    carfaxOneOwner: true,
    warranty: "Toyota 3-Yr/36k Comprehensive + 8-Yr/100k Hybrid Warranty",
    description: "All-new 2026 Toyota Camry XSE Hybrid featuring Electronic On-Demand All-Wheel Drive. Stunning dual-tone Wind Chill Pearl exterior with Cockpit Red leather interior. Loaded with Toyota Safety Sense 3.0, 12.3-inch multimedia display, 9-speaker JBL audio, and head-up display. Supreme fuel economy for LA commuters.",
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1200&q=80", // REPLACE
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80", // REPLACE
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80", // REPLACE
    ],
    keyFeatures: [
      "5th Generation Toyota Hybrid System",
      "Electronic On-Demand All-Wheel Drive (AWD)",
      "12.3-Inch Toyota Audio Multimedia Screen",
      "Cockpit Red Perforated Leather Seats",
      "19\" Smoke Gray Machined Finish Alloy Wheels",
      "Panoramic Glass Roof with Power Sunshade",
      "Toyota Safety Sense 3.0 Suite",
      "JBL Premium Audio with 9 Speakers"
    ],
    highlights: [
      { label: "Combined MPG", value: "46 MPG" },
      { label: "Total System HP", value: "232 HP" },
      { label: "Range", value: "598 Miles per Tank" },
      { label: "Safety Rating", value: "IIHS Top Safety Pick+" },
    ]
  },
  {
    id: "la-range-rover-velar-2025-05",
    slug: "2025-land-rover-range-rover-velar-dynamic-se",
    vin: "SALYA2V88SA739103", // // REPLACE
    stockNumber: "LAP-2505",
    year: 2025,
    make: "Land Rover",
    model: "Range Rover Velar",
    trim: "Dynamic SE P340 AWD",
    type: "New",
    bodyType: "SUV",
    price: 74500,
    originalMsrp: 76900,
    monthlyEstimate: 1040,
    mileage: 32,
    transmission: "Automatic",
    drivetrain: "AWD",
    fuelType: "Hybrid",
    engine: "3.0L Turbocharged i6 MHEV",
    horsepower: 335,
    exteriorColor: "Carpathian Grey Metallic",
    interiorColor: "Cloud / Ebony Windsor Leather",
    mpgCityHwy: "19 / 25 MPG",
    isFeatured: true,
    status: "In Stock",
    carfaxOneOwner: true,
    warranty: "4-Year / 50,000 Mile Land Rover Factory Warranty",
    description: "The epitome of modern British reductionist luxury. The 2025 Range Rover Velar Dynamic SE features flush deployable door handles, curved glass 11.4-inch Pivi Pro screen, Meridian 3D Surround Sound, Adaptive Dynamics air suspension, and sliding panoramic roof. Available with white-glove LA delivery.",
    images: [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80", // REPLACE
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80", // REPLACE
    ],
    keyFeatures: [
      "Electronic Air Suspension with Adaptive Dynamics",
      "11.4\" Curved Glass Touchscreen Pivi Pro",
      "Meridian 3D Surround Sound 750W",
      "Flush Deployable Exterior Door Handles",
      "21\" Style 5109 Satin Dark Grey Wheels",
      "Black Contrast Roof and Roof Rails",
      "3D Surround Camera with Wade Sensing",
      "Heated & Ventilated Front Massage Seats"
    ],
    highlights: [
      { label: "Towing Capacity", value: "5,511 lbs" },
      { label: "Wading Depth", value: "22.8 inches" },
      { label: "Ground Clearance", value: "9.9 inches" },
      { label: "0-60 mph", value: "6.0 sec" },
    ]
  },
  {
    id: "la-lexus-rx350-2024-06",
    slug: "2024-lexus-rx-350-f-sport-handling",
    vin: "2T2HZCAA7RC109482", // // REPLACE
    stockNumber: "LAP-2406",
    year: 2024,
    make: "Lexus",
    model: "RX",
    trim: "RX 350 F SPORT Handling AWD",
    type: "Used",
    bodyType: "SUV",
    price: 52900,
    originalMsrp: 61500,
    monthlyEstimate: 745,
    mileage: 12400,
    transmission: "Automatic",
    drivetrain: "AWD",
    fuelType: "Gasoline",
    engine: "2.4L Turbo Inline-4",
    horsepower: 275,
    exteriorColor: "Iridium Silver",
    interiorColor: "Rioja Red NuLuxe with Dark Graphite",
    mpgCityHwy: "21 / 28 MPG",
    isFeatured: false,
    status: "In Stock",
    carfaxOneOwner: true,
    warranty: "Lexus L/Certified Comprehensive 2-Year Unlimited Miles",
    description: "Exceptionally well maintained 2024 Lexus RX 350 F SPORT Handling with AWD. Features Adaptive Variable Suspension, Mark Levinson 21-speaker PurePlay sound system, panoramic glass roof, head-up display, and 14-inch Lexus Interface touchscreen. Single private Beverly Hills owner, garage kept.",
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80", // REPLACE
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80", // REPLACE
    ],
    keyFeatures: [
      "F SPORT Adaptive Variable Suspension (AVS)",
      "Mark Levinson 21-Speaker PurePlay Sound",
      "14-Inch Lexus Interface Touchscreen",
      "Color Head-Up Display (HUD)",
      "21\" 10-Spoke Alloy Wheels in Gloss Black",
      "Panoramic View Monitor with Backup Camera",
      "Lexus Safety System+ 3.0",
      "Heated and Ventilated F SPORT Front Seats"
    ],
    highlights: [
      { label: "Torque", value: "317 lb-ft @ 1700 rpm" },
      { label: "Cargo Volume", value: "29.6 cu ft" },
      { label: "Curb Weight", value: "4,310 lbs" },
      { label: "Warranty", value: "L/Certified" },
    ]
  },
  {
    id: "la-tesla-model-s-2024-07",
    slug: "2024-tesla-model-s-plaid",
    vin: "5YJSA1E67RF902831", // // REPLACE
    stockNumber: "LAP-2407",
    year: 2024,
    make: "Tesla",
    model: "Model S",
    trim: "Plaid Tri-Motor All-Wheel Drive",
    type: "Used",
    bodyType: "Electric",
    price: 78500,
    originalMsrp: 91000,
    monthlyEstimate: 1120,
    mileage: 7950,
    transmission: "Direct Drive",
    drivetrain: "AWD",
    fuelType: "Electric",
    engine: "Tri-Motor All-Wheel Drive (Carbon-Sleeved Rotors)",
    horsepower: 1020,
    exteriorColor: "Solid Black with Satin Ceramic Coating",
    interiorColor: "All Black Premium with Carbon Fiber Décor",
    mpgCityHwy: "119 / 112 MPGe",
    isFeatured: true,
    status: "In Stock",
    carfaxOneOwner: true,
    warranty: "Tesla Battery & Drive Unit Warranty through 2032",
    description: "The fastest accelerating production sedan on the planet. 1,020 horsepower 2024 Tesla Model S Plaid in triple-black configuration with Full Self-Driving capability capability, 21-inch Arachnid wheels, yoke steering, 22-speaker audio system, and rear 8-inch entertainment screen. 0-60 in 1.99 seconds.",
    images: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80", // REPLACE
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80", // REPLACE
    ],
    keyFeatures: [
      "1,020 HP Tri-Motor All-Wheel Drive",
      "0-60 mph in 1.99 seconds",
      "21\" Arachnid Turbine Wheels",
      "Full Self-Driving Capability Included",
      "17\" Cinematic Touchscreen with 10-teraflop Gaming",
      "Rear 8-Inch Passenger Touchscreen",
      "22-Speaker 960W Audio with Active Noise Reduction",
      "Carbon Fiber Spoiler and Interior Accents"
    ],
    highlights: [
      { label: "EPA Range", value: "359 Miles" },
      { label: "Top Speed", value: "200 mph" },
      { label: "0-60 mph", value: "1.99 sec" },
      { label: "Peak Power", value: "1,020 hp" },
    ]
  },
  {
    id: "la-bmw-m4-2025-08",
    slug: "2025-bmw-m4-competition-xdrive-coupe",
    vin: "WBS43AY09SF384029", // // REPLACE
    stockNumber: "LAP-2508",
    year: 2025,
    make: "BMW",
    model: "M4",
    trim: "Competition xDrive Coupe",
    type: "New",
    bodyType: "Coupe",
    price: 88900,
    originalMsrp: 91400,
    monthlyEstimate: 1290,
    mileage: 24,
    transmission: "Automatic",
    drivetrain: "AWD",
    fuelType: "Gasoline",
    engine: "3.0L BMW M TwinPower Turbo Inline-6",
    horsepower: 523,
    exteriorColor: "Isle of Man Green Metallic",
    interiorColor: "Kyalami Orange / Black Extended Merino Leather",
    mpgCityHwy: "16 / 22 MPG",
    isFeatured: true,
    status: "In Stock",
    carfaxOneOwner: true,
    warranty: "4-Year / 50,000 Mile BMW Factory Warranty",
    description: "Iconic 2025 BMW M4 Competition with intelligent M xDrive all-wheel drive offering pure rear-wheel-drive drift mode. Features Isle of Man Green over Kyalami Orange Merino leather, carbon fiber roof, M Carbon bucket seats, and M Drive Professional with 10-stage traction control.",
    images: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80", // REPLACE
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80", // REPLACE
    ],
    keyFeatures: [
      "523 Horsepower M TwinPower Turbo Engine",
      "M xDrive with 2WD Track Drift Mode",
      "M Carbon Fiber Exterior Package & Roof",
      "M Carbon Front Bucket Seats",
      "M Drive Professional with Drift Analyzer",
      "Harman Kardon Surround Sound System",
      "Adaptive LED Headlights with Laser Accents",
      "Active M Differential"
    ],
    highlights: [
      { label: "0-60 mph", value: "3.4 sec" },
      { label: "Torque", value: "479 lb-ft" },
      { label: "Curb Weight", value: "3,979 lbs" },
      { label: "Redline", value: "7,200 rpm" },
    ]
  },
  {
    id: "la-ford-lightning-2025-09",
    slug: "2025-ford-f-150-lightning-platinum",
    vin: "1FT6W1EV4SW920194", // // REPLACE
    stockNumber: "LAP-2509",
    year: 2025,
    make: "Ford",
    model: "F-150 Lightning",
    trim: "Platinum Extended Range AWD",
    type: "New",
    bodyType: "Truck",
    price: 84900,
    originalMsrp: 89900,
    monthlyEstimate: 1195,
    mileage: 38,
    transmission: "Direct Drive",
    drivetrain: "4WD",
    fuelType: "Electric",
    engine: "Dual e-Motor Extended Range Battery",
    horsepower: 580,
    exteriorColor: "Star White Metallic Tri-Coat",
    interiorColor: "Black Onyx Nirvana Leather",
    mpgCityHwy: "73 / 60 MPGe",
    isFeatured: false,
    status: "In Stock",
    carfaxOneOwner: true,
    warranty: "Ford 3-Yr/36k Bumper-to-Bumper + 8-Yr/100k EV Components",
    description: "The peak of electric truck capability and luxury. 2025 Ford F-150 Lightning Platinum with 580 hp, 775 lb-ft of instant torque, BlueCruise hands-free highway driving, 9.6kW Pro Power Onboard generator, 15.5-inch SYNC 4A screen, and power mega front frunk.",
    images: [
      "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=1200&q=80", // REPLACE
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80", // REPLACE
    ],
    keyFeatures: [
      "580 HP / 775 lb-ft Instant Torque",
      "9.6 kW Pro Power Onboard with 11 Outlets",
      "Ford BlueCruise Hands-Free Driving",
      "B&O Unleashed 18-Speaker Audio System",
      "14.1 cu ft Lockable Mega Power Frunk",
      "Max Recline Heated & Cooled Leather Seats",
      "Twin Panel Panoramic Power Moonroof",
      "22\" Bright Machined with Ebony Black Pockets"
    ],
    highlights: [
      { label: "EPA Range", value: "300 Miles" },
      { label: "Towing", value: "8,500 lbs" },
      { label: "Payload", value: "1,952 lbs" },
      { label: "0-60 mph", value: "3.8 sec" },
    ]
  },
  {
    id: "la-merc-g63-2023-10",
    slug: "2023-mercedes-amg-g-63-4matic",
    vin: "W1NYU7HJ8PX492019", // // REPLACE
    stockNumber: "LAP-2310",
    year: 2023,
    make: "Mercedes-Benz",
    model: "G-Class AMG",
    trim: "G 63 4MATIC SUV",
    type: "Used",
    bodyType: "SUV",
    price: 178500,
    originalMsrp: 198000,
    monthlyEstimate: 2650,
    mileage: 14200,
    transmission: "Automatic",
    drivetrain: "4WD",
    fuelType: "Gasoline",
    engine: "Handcrafted AMG 4.0L V8 Biturbo",
    horsepower: 577,
    exteriorColor: "G manufaktur Magno Night Black (Matte)",
    interiorColor: "Exclusive Nappa Bengal Red / Black",
    mpgCityHwy: "13 / 16 MPG",
    isFeatured: true,
    status: "In Stock",
    carfaxOneOwner: true,
    warranty: "Mercedes-Benz Certified Pre-Owned Active Warranty",
    description: "The Hollywood kingpin: 2023 Mercedes-AMG G 63 in factory G manufaktur Magno Night Black matte finish over Bengal Red exclusive interior. Features AMG Night Package, 22-inch forged cross-spoke wheels, side-exit sport exhaust, carbon fiber steering wheel, and three lockable differentials. Beverly Hills history, impeccable condition.",
    images: [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1200&q=80", // REPLACE
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80", // REPLACE
    ],
    keyFeatures: [
      "Handcrafted 577 HP AMG 4.0L V8 Biturbo",
      "G Manufaktur Matte Night Black Finish",
      "AMG Side-Pipe Sport Exhaust with Valve Control",
      "Three 100% Differential Locks (Center, Rear, Front)",
      "22\" Forged Cross-Spoke Matte Black Wheels",
      "AMG Night Package with Tinted Lights",
      "Burmester Surround Sound System",
      "AMG RIDE CONTROL with Adaptive Damping"
    ],
    highlights: [
      { label: "0-60 mph", value: "4.5 sec" },
      { label: "Torque", value: "627 lb-ft" },
      { label: "Differentials", value: "3 Mechanical Locks" },
      { label: "Finish", value: "Factory Matte Magno" },
    ]
  }
];

// Data Access Layer Functions
export function getVehicles(): Vehicle[] {
  return vehiclesData;
}

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return vehiclesData.find((v) => v.slug === slug);
}

export function getFeaturedVehicles(): Vehicle[] {
  return vehiclesData.filter((v) => v.isFeatured);
}

export function getNewVehicles(): Vehicle[] {
  return vehiclesData.filter((v) => v.type === "New");
}

export function getUsedVehicles(): Vehicle[] {
  return vehiclesData.filter((v) => v.type === "Used");
}

export function getRelatedVehicles(currentSlug: string, make: string, bodyType: string, limit = 3): Vehicle[] {
  return vehiclesData
    .filter((v) => v.slug !== currentSlug && (v.make === make || v.bodyType === bodyType))
    .slice(0, limit);
}
