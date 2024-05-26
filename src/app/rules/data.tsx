import { link } from "node:fs";
import { title } from "node:process";
import { describe } from "node:test";

interface Subjects {
    id: number;
    name: string;
    link: string;
    description: string;
    created_at: string;
    updated_at: string;
}

export const EnglishRules = [
    {
        description: "Complete English Grammar ebook",
        title: 'Complete English Grammar',
        link: "https://drive.google.com/file/d/1OHoPAfhB5jFgjEDdqCJ2qj-UCYZ9rP4Y/view?usp=sharing"
    },
    {
        description: "ALGEBRA SSC CGL 2023 T-1 all 88 Questions",
        title: 'ALGEBRA',
        link: "https://drive.google.com/file/d/1WsGzdRA-cWcVbFCYG2pN88aELsnRr4_F/view?usp=sharing"
    },
    {
        description: "Average SSC CGL 2023 T-1",
        title: 'Average',
        link: "https://drive.google.com/file/d/1XWYiM_zY4fas-sLDbvp_VV3S-pXMzTgM/view?usp=sharing"
    }, {
        description: "Boat & Stream SSC CGL 2023 T-1",
        title: 'Boat & Stream',
        link: "https://drive.google.com/file/d/1XXNLkR7oouu6nyVrag7OZfkg0Q9sMVtV/view?usp=sharing"
    }, {
        description: "Computerengone liner SSC Delhi police constable 2023",
        title: 'SSC Delhi police',
        link: "https://drive.google.com/file/d/1Xtbyn5ijfbSWgu9n4Y7ngpAqfTgAEeVK/view?usp=sharing"
    }
    , {
        description: "Geometry(triangle) SSC CGL 2023 Tier-1 all quesitons",
        title: 'Geometry',
        link: "https://drive.google.com/file/d/1Wtd6OHvirmrfXwi69NL9EjQ7GPi2Qbl_/view?usp=sharing"
    },
    {
        description: "Mensuration 3D SSC CGL",
        title: 'Mens.',
        link: "https://drive.google.com/file/d/1WbZruvfo2k61i2LgxJgLKAZoY1k4vkBT/view?usp=sharing"
    }, {
        description: "Mixture & Alligation SSC CGL 2023",
        title: 'Mixture & Alligation',
        link: "https://drive.google.com/file/d/1XaCMJl-FiHipkIHrN2PHa9WAbGAe_rkN/view?usp=sharing"
    }, {
        description: "Number System SSC CGL 2023",
        title: 'Number System',
        link: "https://drive.google.com/file/d/1WsvQCC0cIf40EkzeMMDaK1dJDBbYV-pv/view?usp=sharing"
    },
    {
        description: "Police & Thief SSC CGL 2023 T-1",
        title: 'Police & Thief',
        link: "https://drive.google.com/file/d/1XfsmhJij4iwLnYb1nG-2-EngycN3t6lV/view?usp=sharing"
    }
    ,
    {
        description: "Profit Loss and Discount SSC CGL 2023",
        title: 'P & L & Discount',
        link: "https://drive.google.com/file/d/1XmFZB6eoMMPnuOWpEPHoG2e5tjYaeDQs/view?usp=sharing"
    }
    ,
    {
        description: "Race SSC CGL 2023 T-1",
        title: 'Race',
        link: "https://drive.google.com/file/d/1XW3KotqYnCrWVPcdJZsh5zB8QCNMdFWt/view?usp=sharing"
    }
    ,
    {
        description: "Ratio & Proportion SSC CGL 2023",
        title: 'Ratio & Proportion',
        link: "https://drive.google.com/file/d/1XR7d9sXWUJxVPNQB-cNd6VBUZhxK4lkX/view?usp=sharing"
    }
    ,
    {
        description: "SI AND CI (Eng) SSC CGL 2023",
        title: 'SI AND CI',
        link: "https://drive.google.com/file/d/1WfrkWTozQoR5yljMfEbuQ9oDsPpN_MsI/view?usp=sharing"
    }
    ,
    {
        description: "Time Speed & Distance SSC CGL 2023",
        title: 'Time Speed & Distance',
        link: "https://drive.google.com/file/d/1X2KQuaEvyFJ67xSeSTx3030EY-xCpb2G/view?usp=sharing"
    }]

export const GK_GS = [{
    description: 1,
    title: '2020',
    link: ""
},
{
    description: 2,
    title: '2021',
    link: ""
}, {
    description: 3,
    title: '2022',
    link: ""
}, {
    description: 4,
    title: '2023',
    link: ""
}]

export const Reasoning = [{
    description: "Reasoning DSSSB JJA Mar 2024 compilation_RBE_compressed",
    title: 'Reasoning DSSSB',
    link: "https://drive.google.com/file/d/1_eUfR5yibFDQewnCtx0-KDwd_FqFfMuP/view?usp=sharing"
},
{
    description: "SSC_CGL2021_REASONING(English)_topic-wise_RBE (optimized)",
    title: 'SSC_CGL2021_REASONING',
    link: "https://drive.google.com/file/d/1ABULsUPqnlGKGGtazjGafycufBzAz-TV/view?usp=sharing"
}]


export const Englishrule = [
    {
        description: "Complete English Grammar ebook ",
        title: "Complete English Grammar",
        link: "https://drive.google.com/file/d/1OHoPAfhB5jFgjEDdqCJ2qj-UCYZ9rP4Y/view?usp=sharing"
    },
    {
        description: "Phrasal Verbs eBook",
        title: "Phrasal Verbs eBook.pdf",
        link: "https://drive.google.com/file/d/1OUlefQuiv2d4cF6WVn-lJ49tFuTYn955/view?usp=sharing"
    },
    {
        description: "Narration e-book - Copy",
        title: "Narration e-book - Copy",
        link: "https://drive.google.com/file/d/1OZz_MujEOqmc13N8EhpTyF88oLGKq8di/view?usp=sharing"
    },
    {
        description: "Parajumbles ebook",
        title: "Parajumbles ebook",
        link: "https://drive.google.com/file/d/1ObegaeRKfTDZGk6ww867szL95OyPl-QR/view?usp=sharing"
    },

    {
        description: "Antonyms_and_Synonyms_A_to_Z_bilingual_with_100",
        title: "Antonyms_and_Synonyms",
        link: "https://drive.google.com/file/d/1OjeEuWElZtJb4wArxfPithkDYlDzNGvZ/view?usp=sharing"
    },

    {
        description: "Idioms and Phrases ebook",
        title: "Idioms and Phrases",
        link: "https://drive.google.com/file/d/1P-M7liyAXdgM0xcqJt3yKCz3dUh3wSig/view?usp=sharing"
    },

    {
        description: "Active Passive Voice 1000 MCQ ebook",
        title: "Active Passive Voice",
        link: "https://drive.google.com/file/d/1OlRBJBS89fk2JTZ31xgqa6iG7nQnzmH4/view?usp=sharing"
    },
    {
        description: "English Comprehension 250 Passages ebook",
        title: "English Comprehension",
        link: "https://drive.google.com/file/d/1P1UpZkYx0Ok5w7Hy9QbeuFEL4-CeNTl3/view?usp=sharing"
    },
    {
        description: "English 250 Cloze Test ebook",
        title: "English 250 Cloze Test ebook",
        link: "https://drive.google.com/file/d/1P4tgSsaPaKiAt6cKBxwuGwxephgIFHZf/view?usp=sharing"
    },
    {
        description: "Sentence Improvement ebook",
        title: 'Sentence Improvement',
        link: "https://drive.google.com/file/d/1PBWZr0g9j031MdUy5UH5yN38BR9bQOjq/view?usp=sharing"
    },
    {
        description: "Spot the error ebook Neeru Madam",
        title: 'Spot the error',
        link: "https://drive.google.com/file/d/1PCgTAZqZFdYTODLepn4IG6hx35jFdJTi/view?usp=sharing"
    }, {
        description: "SSC_CGL_Tier_1_English_100_practice_sets_TCS",
        title: 'SSC_CGL_Tier_1_English_100_practice_sets_TCS',
        link: "https://drive.google.com/file/d/1PDlOoNLfTD_QPRpzF9lFWXt9js79zzoN/view?usp=sharing"
    }, {
        description: "One word substitution ebook",
        title: 'One word substitution',
        link: "https://drive.google.com/file/d/1PIOfIr57uYVOLn1a4dSUmC86kahjABRz/view?usp=sharing"
    }
    , {
        description: "SSC_CGL_Tier_2_Math_40_practice_sets_ebook",
        title: 'SSC_CGL_Tier_2_Math_40_practice_sets_ebook',
        link: "https://drive.google.com/file/d/1PKxdpGZVruTaNETYL-F6I1Do9zfus2hb/view?usp=sharing"
    }
]


export const CurrentAffairs = [{
    description: "RBE Revolutionary Current Affairs",
    title: 'RBE',
    link: "https://drive.google.com/file/d/1CZOCs6skQWiRwfgJTmVrxZ9UWCPW3mQd/view?usp=sharing"
},
{
    description: "Parmar",
    title: 'Parmar',
    link: "https://drive.google.com/file/d/13a84Zkvx7tEBgaaoil70jOWX2b9c1uky/view?usp=sharing"
}
    ,
{
    description: "Parmar",
    title: 'Parmar',
    link: "https://drive.google.com/file/d/13a84Zkvx7tEBgaaoil70jOWX2b9c1uky/view?usp=sharing"
}
]

export const MathsData = [
    {
        description: "Maths Concept King Book",
        title: 'Maths Concept King Book',
        link: "https://drive.google.com/file/d/1R8acU7ymFVApIH9hOs5lW35E87zByvBv/view?usp=sharing"
    },
    {
    description: "Inspector_chalisa",
    title: 'Inspector_chalisa',
    link: "https://drive.google.com/file/d/1Qqjc_RoLcTvLtxGCBvuQEDD_gQhNk2gq/view?usp=sharing"
}
]