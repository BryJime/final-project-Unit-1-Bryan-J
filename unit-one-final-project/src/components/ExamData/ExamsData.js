
const ExamsData = [
    {
        id: 1,
        procedure: "CLAVICLE 2 VIEW",
        anatomy: "CLAVICLE",
        views: "AP, AXIAL",
        alias: ["clavicle", "collarbone"],
        region: "UPPER EXTREMITY",
        common: true,
        shortcut: false
    },
    {
        id: 2,
        procedure: "SCAPULA 2 VIEW",
        anatomy: "SCAPULA",
        views: "AP, LATERAL",
        alias: ["scapula"],
        region: "UPPER EXTREMITY",
        common: true,
        shortcut: false
    },

    {
        id: 3,
        procedure: "SHOULDER 2 VIEW",
        anatomy: "SHOULDER",
        views: "AP, LATERAL",
        alias: ["shoulder"],
        region: "UPPER EXTREMITY",
        common: false,
        shortcut: false
    },
    {
        id: 4,
        procedure: "SHOULDER 3 VIEW",
        anatomy: "SHOULDER",
        views: "AP (Internal), AP (External), LATERAL",
        alias: ["shoulder"],
        region: "UPPER EXTREMITY",
        common: true,
        shortcut: false
    },
    {
        id: 5,
        procedure: "SHOULDER 3 VIEW",
        anatomy: "SHOULDER",
        views: "AP (NEUTRAL), GRASHEY, LATERAL",
        alias: ["shoulder"],
        region: "UPPER EXTREMITY",
        common: false,
        shortcut: false
    },
    {
        id: 6,
        procedure: "HUMERUS 2 VIEW",
        anatomy: "HUMERUS",
        views: "AP, LATERAL",
        alias: ["humerus"],
        region: "UPPER EXTREMITY",
        common: true,
        shortcut: false
    },
    {
        id: 7,
        procedure: "ELBOW 2 VIEW",
        anatomy: "ELBOW",
        views: "AP, LATERAL",
        alias: ["elbow"],
        region: "UPPER EXTREMITY",
        common: false,
        shortcut: false
    },
    {
        id: 8,
        procedure: "ELBOW 3 VIEW",
        anatomy: "ELBOW",
        views: "AP, OBLIQUE(EXTERNAL), LATERAL",
        alias: ["elbow"],
        region: "UPPER EXTREMITY",
        common: true,
        shortcut: false
    },
    {
        id: 9,
        procedure: "ELBOW 4 VIEW",
        anatomy: "ELBOW",
        views: "AP, OBLIQUES(EXTERNAL&INTERNAL), LATERAL",
        alias: ["elbow"],
        region: "UPPER EXTREMITY",
        common: false,
        shortcut: false
    },
    {
        id: 10,
        procedure: "FOREARM 2 VIEW",
        anatomy: "FOREARM",
        views: "AP, LATERAL",
        alias: ["forearm"],
        region: "UPPER EXTREMITY",
        common: true,
        shortcut: false
    },
    {
        id: 11,
        procedure: "WRIST 2 VIEW",
        anatomy: "WRIST",
        views: "AP, LATERAL",
        alias: ["wrist"],
        region: "UPPER EXTREMITY",
        common: false,
        shortcut: false
    },
    {
        id: 12,
        procedure: "WRIST 3 VIEW",
        anatomy: "WRIST",
        views: "AP, OBLIQUE, LATERAL",
        alias: ["wrist"],
        region: "UPPER EXTREMITY",
        common: true,
        shortcut: true
    },
    {
        id: 13,
        procedure: "WRIST 4 VIEW",
        anatomy: "WRIST",
        views: "AP, OBLIQUE, LATERAL, NAVICULAR",
        alias: ["wrist"],
        region: "UPPER EXTREMITY",
        common: false,
        shortcut: false
    },
    {
        id: 14,
        procedure: "HAND 3 VIEW",
        anatomy: "HAND",
        views: "AP, OBLIQUE, LATERAL",
        alias: ["hand"],
        region: "UPPER EXTREMITY",
        common: true,
        shortcut: false
    },
    {
        id: 15,
        procedure: "HAND 2 VIEW",
        anatomy: "HAND",
        views: "AP, LATERAL",
        alias: ["hand"],
        region: "UPPER EXTREMITY",
        common: false,
        shortcut: false
    },
    {
        id: 16,
        procedure: "FINGER 3 VIEW",
        anatomy: "FINGER",
        views: "AP, OBLIQUE, LATERAL",
        alias: ["lower arm, finger, ring finger, index finger, thumb"],
        region: "UPPER EXTREMITY",
        common: true,
        shortcut: false
    },
    {
        id: 17,
        procedure: "CERVICAL 3 VIEW",
        anatomy: "CERVICAL SPINE",
        views: "AP, LATERAL, SWIMMERS",
        alias: ["cervical"],
        region: "SPINE",
        common: false,
        shortcut: false
    },
    {
        id: 18,
        procedure: "CERVICAL 5 VIEW",
        anatomy: "CERVICAL SPINE",
        views: "AP, LATERAL, OBLIQUES, SWIMMERS",
        alias: ["cervical"],
        region: "SPINE",
        common: true,
        shortcut: false
    },
    {
        id: 19,
        procedure: "THORACIC 2 VIEW",
        anatomy: "THORACIC SPINE",
        views: "AP, LATERAL",
        alias: ["thoracic"],
        region: "SPINE",
        common: true,
        shortcut: false
    },
    {
        id: 20,
        procedure: "LUMBAR 5 VIEW",
        anatomy: "LUMBAR SPINE",
        views: "AP, OBLIQUES, LATERAL, SPOT",
        alias: ["lumbar"],
        region: "SPINE",
        common: true,
        shortcut: false
    },
    {
        id: 21,
        procedure: "LUMBAR 3 VIEW",
        anatomy: "LUMBAR SPINE",
        views: "AP, LATERAL, SPOT",
        alias: ["lumbar"],
        region: "SPINE",
        common: false,
        shortcut: false
    },
    {
        id: 22,
        procedure: "SACRUM & COCCYX 3 VIEW",
        anatomy: "SACRUM & COCCYX",
        views: "AP, AP, LATERAL",
        alias: ["sacrum"],
        region: "SPINE",
        common: true,
        shortcut: false
    },
    {
        id: 23,
        procedure: "PELVIS 1 VIEW",
        anatomy: "PELVIS",
        views: "AP",
        alias: ["pelvis"],
        region: "PELVIS",
        common: true,
        shortcut: false
    },
    {
        id: 24,
        procedure: "PELVIS 3 VIEW",
        anatomy: "PELVIS",
        views: "AP, AP INLET, AP OUTLET",
        alias: ["pelvis"],
        region: "PELVIS",
        common: false,
        shortcut: false
    },
    {
        id: 25,
        procedure: "TOE 3 VIEW",
        anatomy: "TOE",
        views: "AP, OBLIQUE, LATERAL",
        alias: ["toe"],
        region: "LOWER EXTREMITY",
        common: true,
        shortcut: false
    },
    {
        id: 26,
        procedure: "FOOT 3 VIEW",
        anatomy: "FOOT",
        views: "AP, OBLIQUE, LATERAL",
        alias: ["foot"],
        region: "LOWER EXTREMITY",
        common: true,
        shortcut: false
    },
    {
        id: 27,
        procedure: "FOOT 2 VIEW",
        anatomy: "FOOT",
        views: "AP, LATERAL",
        alias: ["foot"],
        region: "LOWER EXTREMITY",
        common: true,
        shortcut: false
    },
    {
        id: 28,
        procedure: "CALCANEUS 2 VIEW",
        anatomy: "CALCANEUS",
        views: "AXIAL, LATERAL",
        alias: ["heel"],
        region: "LOWER EXTREMITY",
        common: true,
        shortcut: false
    },
    {
        id: 29,
        procedure: "ANKLE 3 VIEW",
        anatomy: "ANKLE",
        views: "AP, OBLIQUE, LATERAL",
        alias: ["ankle"],
        region: "LOWER EXTREMITY",
        common: true,
        shortcut: false
    },
    {
        id: 30,
        procedure: "TIB-FIB 2 VIEW",
        anatomy: "TIB-FIB",
        views: "AP, LATERAL",
        alias: ["tib-fib"],
        region: "LOWER EXTREMITY",
        common: true,
        shortcut: false
    },
    {
        id: 31,
        procedure: "KNEE 3 VIEW",
        anatomy: "KNEE",
        views: "AP, OBLIQUE, LATERAL",
        alias: ["knee"],
        region: "LOWER EXTREMITY",
        common: true,
        shortcut: false
    },
    {
        id: 32,
        procedure: "KNEE 2 VIEW",
        anatomy: "KNEE",
        views: "AP, LATERAL",
        alias: ["knee"],
        region: "LOWER EXTREMITY",
        common: false,
        shortcut: false
    },
    {
        id: 33,
        procedure: "KNEE 4 VIEW",
        anatomy: "KNEE",  
        views: "AP, OBLIQUE, LATERAL, SUNRISE",
        alias: ["knee"],
        region: "LOWER EXTREMITY",
        common: false,
        shortcut: false
    },
    {
        id: 34,
        procedure: "KNEE 4 VIEW",
        anatomy: "KNEE",
        views: "AP, OBLIQUE, LATERAL, TUNNEL",
        alias: ["knee"],
        region: "LOWER EXTREMITY",
        common: false,
        shortcut: false
    },
    {
        id: 35,
        procedure: "FEMUR 2 VIEW",
        anatomy: "FEMUR",
        views: "AP, LATERAL",
        alias: ["femur"],
        region: "LOWER EXTREMITY",
        common: true,
        shortcut: false
    },
    {
        id: 36,
        procedure: "HIP 3 VIEW",
        anatomy: "HIP",
        views: "PELVIS, AP, LATERAL",
        alias: ["hip"],
        region: "LOWER EXTREMITY",
        common: true,
        shortcut: false
    },
    {
        id: 37,
        procedure: "HIP 2 VIEW",
        anatomy: "HIP",
        views: "AP, LATERAL",
        alias: ["hip"],
        region: "LOWER EXTREMITY",
        common: false,
        shortcut: false
    },
    {
        id: 38,
        procedure: "CHEST 2 VIEW",
        anatomy: "CHEST",
        views: "PA, LATERAL",
        alias: ["chest"],
        region: "CHEST",
        common: true,
        shortcut: false
    },
    {
        id: 39,
        procedure: "CHEST 1 VIEW",
        anatomy: "CHEST",
        views: "AP",
        alias: ["chest"],
        region: "CHEST",
        common: true,
        shortcut: false
    },
    {
        id: 40,
        procedure: "ABDOMEN KUB",
        anatomy: "ABDOMEN",
        views: "AP",
        alias: ["abdomen"],
        region: "ABDOMEN",
        common: true,
        shortcut: false
    },
    {
        id: 41,
        procedure: "ABDOMEN 2 VIEW",
        anatomy: "ABDOMEN",
        views: "UPRIGHT, KUB",
        alias: ["abdomen"],
        region: "ABDOMEN",
        common: true,
        shortcut: false
    },
    {
        id: 42,
        procedure: "ABDOMEN ACUTE SERIES",
        anatomy: "ABDOMEN",
        views: "UPRIGHT, KUB, CHEST",
        alias: ["abdomen, kub"],
        region: "ABDOMEN",
        common: false,
        shortcut: false
    },
    {
        id: 43,
        procedure: "RIBS UNILATERAL W/ CHEST",
        anatomy: "RIBS",
        views: "AP (UPPER & LOWER), OBLIQUE (UPPER & LOWER), CHEST",
        alias: ["ribs"],
        region: "CHEST",
        common: true,
        shortcut: false
    },
    {
        id: 44,
        procedure: "STERNUM 2 VIEW",
        anatomy: "STERNUM",
        views: "PA (RAO), LATERAL",
        alias: ["sternum"],
        region: "CHEST",
        common: true,
        shortcut: false
    },
    {
        id: 46,
        procedure: "SKULL 3 VIEW",
        anatomy: "SKULL",
        views: "PA (Caldwell), Lateral, AP (Towne)",
        alias: ["skull", "head x-ray"],
        region: "HEAD",
        common: false,
        shortcut: false
    },
    {
        id: 47,
        procedure: "FACIAL BONES 3 VIEW",
        anatomy: "FACIAL BONES",
        views: "Waters, Caldwell, LATERAL",
        alias: ["face", "orbits"],
        region: "HEAD",
        common: false,
        shortcut: false
    },
    {
        id: 48,
        procedure: "SINUSES 3 VIEW",
        anatomy: "SINUSES",
        views: "Waters, Caldwell, Lateral",
        alias: ["sinus", "paranasal sinuses"],
        region: "HEAD",
        common: false,
        shortcut: false
    },
    {
        id: 49,
        procedure: "AC JOINTS 2 VIEW",
        anatomy: "AC JOINTS",
        views: "AP w/o weights, AP w/ weights",
        alias: ["ac joints"],
        region: "UPPER EXTREMITY",
        common: false,
        shortcut: false
    },
    {
        id: 50,
        procedure: "SC JOINTS 2 VIEW",
        anatomy: "STERNOCLAVICULAR",
        views: "AP, PA (Serendipity)",
        alias: ["sc joint"],
        region: "UPPER EXTREMITY",
        common: false,
        shortcut: false
    },
    {
        id: 51,
        procedure: "SI JOINTS 2 VIEW",
        anatomy: "SACROILIAC JOINTS",
        views: "AP w/o rotation, AP w/ rotation",
        alias: ["si joint"],
        region: "PELVIS",
        common: false,
        shortcut: false
    },
];



export default ExamsData; 