interface WordData {
  id: number;
  word: string;
  eng: string;
  meaning: string;

}


interface national_parkss{
  id:string,
  name:string,
  established:number
}

interface NationalParkData {
  state: string;
  national_parks:national_parkss[]


}

interface WordGroup {
  title: string;
  words: WordData[];
}

interface NationalParkGroup {
  state:string
  national_parks: national_parkss[];
}


export const nationalpark: NationalParkGroup[] = [{
 
      "state": "Andaman & Nicobar Islands",
      "national_parks": [
        { "id": "ANP1", "name": "Campbell Bay National Park", "established": 1992 },
        { "id": "ANP2", "name": "Galathea Bay National Park", "established": 1992 },
        { "id": "ANP3", "name": "Mahatma Gandhi Marine National Park", "established": 1982 },
        { "id": "ANP4", "name": "Middle Button Island National Park", "established": 1987 },
        { "id": "ANP5", "name": "Mount Harriet National Park", "established": 1987 },
        { "id": "ANP6", "name": "North Button Island National Park", "established": 1987 },
        { "id": "ANP7", "name": "Rani Jhansi Marine National Park", "established": 1996 },
        { "id": "ANP8", "name": "Saddle Peak National Park", "established": 1987 },
        { "id": "ANP9", "name": "South Button Island National Park", "established": 1987 }
      ]
    },
    {
      "state": "Andhra Pradesh",
      "national_parks": [
        { "id": "AP1", "name": "Papikonda National Park", "established": 2008 },
        { "id": "AP2", "name": "Rajiv Gandhi (Rameswaram) National Park", "established": 2005 },
        { "id": "AP3", "name": "Sri Venkateswara National Park", "established": 1989 }
      ]
    },
    {
      "state": "Arunachal Pradesh",
      "national_parks": [
        { "id": "AR1", "name": "Mouling National Park", "established": 1986 },
        { "id": "AR2", "name": "Namdapha National Park", "established": 1983 }
      ]
    },
    {
      "state": "Assam",
      "national_parks": [
        { "id": "AS1", "name": "Dibru-Saikhowa National Park", "established": 1999 },
        { "id": "AS2", "name": "Kaziranga National Park", "established": 1974 },
        { "id": "AS3", "name": "Manas National Park", "established": 1990 },
        { "id": "AS4", "name": "Nameri National Park", "established": 1998 },
        { "id": "AS5", "name": "Orang National Park", "established": 1999 },
        { "id": "AS6", "name": "Dehing Patkai National Park", "established": 2021 },
        { "id": "AS7", "name": "Raimona National Park", "established": 2021 }
      ]
    },
    {
      "state": "Bihar",
      "national_parks": [
        { "id": "BI1", "name": "Valmiki National Park", "established": 1989 }
      ]
    },
    {
      "state": "Chandigarh",
      "national_parks": []
    },
    {
      "state": "Chhattisgarh",
      "national_parks": [
        { "id": "CG1", "name": "Guru Ghasidas (Sanjay) National Park", "established": 1981 },
        { "id": "CG2", "name": "Indravati (Kutru) National Park", "established": 1982 },
        { "id": "CG3", "name": "Kanger Valley National Park", "established": 1982 }
      ]
    },
    {
      "state": "Dadra & Nagar Haveli and Daman and Diu",
      "national_parks": []
    },
    {
      "state": "Delhi",
      "national_parks": []
    },
    {
      "state": "Goa",
      "national_parks": [
        { "id": "GO1", "name": "Mollem National Park", "established": 1992 }
      ]
    },
    {
      "state": "Gujarat",
      "national_parks": [
        { "id": "GU1", "name": "Vansda National Park", "established": 1979 },
        { "id": "GU2", "name": "Blackbuck (Velavadar) National Park", "established": 1976 },
        { "id": "GU3", "name": "Gir National Park", "established": 1975 },
        { "id": "GU4", "name": "Marine (Gulf of Kachchh) National Park", "established": 1982 }
      ]
    },
    {
      "state": "Haryana",
      "national_parks": [
        { "id": "HR1", "name": "Kalesar National Park", "established": 2003 },
        { "id": "HR2", "name": "Sultanpur National Park", "established": 1989 }
      ]
    },
    {
      "state": "Himachal Pradesh",
      "national_parks": [
        { "id": "HP1", "name": "Great Himalayan National Park", "established": 1984 },
        { "id": "HP2", "name": "Inderkilla National Park", "established": 2010 },
        { "id": "HP3", "name": "Khirganga National Park", "established": 2010 },
        { "id": "HP4", "name": "Pin Valley National Park", "established": 1987 },
        { "id": "HP5", "name": "Simbalbara National Park", "established": 2010 }
      ]
    },
    {
      "state": "Jammu & Kashmir",
      "national_parks": [
        { "id": "JK1", "name": "City Forest (Salim Ali) National Park", "established": 1992 },
        { "id": "JK2", "name": "Dachigam National Park", "established": 1981 },
        { "id": "JK3", "name": "Kishtwar National Park", "established": 1981 },
        { "id": "JK4", "name": "Kazinag National Park", "established": 2007 }
      ]
    },
    {
      "state": "Jharkhand",
      "national_parks": [
        { "id": "JH1", "name": "Betla National Park", "established": 1986 }
      ]
    },
    {
      "state": "Karnataka",
      "national_parks": [
        { "id": "KA1", "name": "Anshi National Park", "established": 1987 },
        { "id": "KA2", "name": "Bandipur National Park", "established": 1974 },
        { "id": "KA3", "name": "Bannerghatta National Park", "established": 1974 },
        { "id": "KA4", "name": "Kudremukh National Park", "established": 1987 },
        { "id": "KA5", "name": "Nagarahole (Rajiv Gandhi) National Park", "established": 1988 }
      ]
    },
    {
      "state": "Kerala",
      "national_parks": [
        { "id": "KL1", "name": "Anamudi Shola National Park", "established": 2003 },
        { "id": "KL2", "name": "Eravikulam National Park", "established": 1978 },
        { "id": "KL3", "name": "Mathikettan Shola National Park", "established": 2003 },
        { "id": "KL4", "name": "Pambadum Shola National Park", "established": 2003 },
        { "id": "KL5", "name": "Periyar National Park", "established": 1982 },
        { "id": "KL6", "name": "Silent Valley National Park", "established": 1984 }
      ]
    },
    {
      "state": "Ladakh",
      "national_parks": [
        { "id": "LD1", "name": "Hemis National Park", "established": 1981 }
      ]
    },
    {
      "state": "Lakshadweep",
      "national_parks": []
    },
    {
      "state": "Madhya Pradesh",
      "national_parks": [
        { "id": "MP1", "name": "Bandhavgarh National Park", "established": 1968 },
        { "id": "MP2", "name": "Fossil National Park", "established": 1983 },
        { "id": "MP3", "name": "Indira Priyadarshini Pench National Park", "established": 1975 },
        { "id": "MP4", "name": "Kanha National Park", "established": 1955 },
        { "id": "MP5", "name": "Madhav National Park", "established": 1959 },
        { "id": "MP6", "name": "Panna National Park", "established": 1981 },
        { "id": "MP7", "name": "Sanjay National Park", "established": 1981 },
        { "id": "MP8", "name": "Satpura National Park", "established": 1981 },
        { "id": "MP9", "name": "Van Vihar National Park", "established": 1979 }
      ]
    },
    {
      "state": "Maharashtra",
      "national_parks": [
        { "id": "MH1", "name": "Chandoli National Park", "established": 2004 },
        { "id": "MH2", "name": "Gugamal National Park", "established": 1975 },
        { "id": "MH3", "name": "Nawegaon National Park", "established": 1975 },
        { "id": "MH4", "name": "Pench (Jawaharlal Nehru) National Park", "established": 1975 },
        { "id": "MH5", "name": "Sanjay Gandhi (Borivali) National Park", "established": 1983 },
        { "id": "MH6", "name": "Tadoba National Park", "established": 1955 }
      ]
    },
    {
      "state": "Manipur",
      "national_parks": [
        { "id": "MN1", "name": "Keibul-Lamjao National Park", "established": 1977 }
      ]
    },
    {
      "state": "Meghalaya",
      "national_parks": [
        { "id": "MG1", "name": "Balphakram National Park", "established": 1985 },
        { "id": "MG2", "name": "Nokrek National Park", "established": 1986 }
      ]
    },
    {
      "state": "Mizoram",
      "national_parks": [
        { "id": "MZ1", "name": "Murlen National Park", "established": 1991 },
        { "id": "MZ2", "name": "Phawngpui Blue Mountain National Park", "established": 1992 }
      ]
    },
    {
      "state": "Nagaland",
      "national_parks": [
        { "id": "NG1", "name": "Intanki National Park", "established": 1993 }
      ]
    },
    {
      "state": "Odisha",
      "national_parks": [
        { "id": "OR1", "name": "Bhitarkanika National Park", "established": 1988 },
        { "id": "OR2", "name": "Simlipal National Park", "established": 1980 }
      ]
    },
    {
      "state": "Puducherry",
      "national_parks": []
    },
    {
      "state": "Punjab",
      "national_parks": []
    },
    {
      "state": "Rajasthan",
      "national_parks": [
        { "id": "RJ1", "name": "Mukundra Hills National Park", "established": 2006 },
        { "id": "RJ2", "name": "Desert National Park", "established": 1992 },
        { "id": "RJ3", "name": "Keoladeo Ghana National Park", "established": 1981 },
        { "id": "RJ4", "name": "Ranthambore National Park", "established": 1980 },
        { "id": "RJ5", "name": "Sariska National Park", "established": 1992 }
      ]
    },
    {
      "state": "Sikkim",
      "national_parks": [
        { "id": "SK1", "name": "Khangchendzonga National Park", "established": 1977 }
      ]
    },
    {
      "state": "Tamil Nadu",
      "national_parks": [
        { "id": "TN1", "name": "Guindy National Park", "established": 1976 },
        { "id": "TN2", "name": "Gulf of Mannar Marine National Park", "established": 1980 },
        { "id": "TN3", "name": "Indira Gandhi (Annamalai) National Park", "established": 1989 },
        { "id": "TN4", "name": "Mudumalai National Park", "established": 1990 },
        { "id": "TN5", "name": "Mukurthi National Park", "established": 1990 }
      ]
    },
    {
      "state": "Telangana",
      "national_parks": [
        { "id": "TG1", "name": "Kasu Brahmananda Reddy National Park", "established": 1994 },
        { "id": "TG2", "name": "Mahaveer Harina Vanasthali National Park", "established": 1994 },
        { "id": "TG3", "name": "Mrugavani National Park", "established": 1994 }
      ]
    },
    {
      "state": "Tripura",
      "national_parks": [
        { "id": "TR1", "name": "Clouded Leopard National Park", "established": 2007 },
        { "id": "TR2", "name": "Bison (Rajbari) National Park", "established": 2007 }
      ]
    },
    {
      "state": "Uttar Pradesh",
      "national_parks": [
        { "id": "UP1", "name": "Dudhwa National Park", "established": 1977 }
      ]
    },
    {
      "state": "Uttarakhand",
      "national_parks": [
        { "id": "UK1", "name": "Corbett National Park", "established": 1936 },
        { "id": "UK2", "name": "Gangotri National Park", "established": 1989 },
        { "id": "UK3", "name": "Govind National Park", "established": 1990 },
        { "id": "UK4", "name": "Nanda Devi National Park", "established": 1982 },
        { "id": "UK5", "name": "Rajaji National Park", "established": 1983 },
        { "id": "UK6", "name": "Valley of Flowers National Park", "established": 1982 }
      ]
    },
    {
      "state": "West Bengal",
      "national_parks": [
        { "id": "WB1", "name": "Buxa National Park", "established": 1992 },
        { "id": "WB2", "name": "Gorumara National Park", "established": 1992 },
        { "id": "WB3", "name": "Jaldapara National Park", "established": 2014 },
        { "id": "WB4", "name": "Neora Valley National Park", "established": 1986 },
        { "id": "WB5", "name": "Singalila National Park", "established": 1986 },
        { "id": "WB6", "name": "Sundarbans National Park", "established": 1984 }
      ]
    }
  ]


export const groups: WordGroup[] = [

  {
    title: "Day_1",
    words: [{

      id: 1001,
      word: "A bad patch",
      eng: "A difficult period",
      meaning: "मुश्किल दौर"
    },
    {

      id: 1002,
      word: "A beast of burden",
      eng: "An animal or person that does hard work",
      meaning: "बोझ ढोने वाला जानवर या व्यक्ति"
    },
    {

      id: 1003,
      word: "A bee hive",
      eng: "A busy, active place",
      meaning: "व्यस्त स्थान"
    },
    {

      id: 1004,
      word: "A big draw",
      eng: "Something that attracts many people",
      meaning: "आकर्षण का केंद्र"
    },
    {

      id: 1005,
      word: "A bird in the hand is worth two in the bush",
      eng: "It’s better to keep what you have than risk losing it",
      meaning: "हाथ का एक परिंदा झाड़ के दो से बेहतर"
    },
    {

      id: 1006,
      word: "A bird's eye view",
      eng: "A view from above; an overall perspective",
      meaning: "सार्वभौमिक दृष्टिकोण"
    },
    {

      id: 1007,
      word: "A bite at the cherry",
      eng: "An opportunity to achieve something",
      meaning: "मौका"
    },
    {

      id: 1008,
      word: "A blessing/boon in disguise",
      eng: "A good thing that initially seemed bad",
      meaning: "छुपा हुआ वरदान"
    },
    {

      id: 1009,
      word: "A blue-eyed boy",
      eng: "A favorite person",
      meaning: "पसंदीदा व्यक्ति"
    },
    {

      id: 1010

      ,
      word: "A bolt from the blue",
      eng: "A sudden, unexpected event",
      meaning: "अचानक अप्रत्याशित घटना"
    },
    {

      id: 1011

      ,
      word: "A bone of contention",
      eng: "A subject of disagreement",
      meaning: "विवाद का विषय"
    },
    {

      id: 1012

      ,
      word: "A bull in a China shop",
      eng: "A clumsy person in a delicate situation",
      meaning: "नाजुक हालात में बेढंगा व्यक्ति"
    },
    {

      id: 1013

      ,
      word: "A bull market",
      eng: "A rising financial market",
      meaning: "तेजी वाला बाजार"
    },
    {

      id: 1014

      ,
      word: "A cakewalk",
      eng: "An easy task",
      meaning: "बहुत आसान काम"
    },
    {

      id: 1015

      ,
      word: "A can of worms",
      eng: "A complex problem",
      meaning: "जटिल समस्या"
    },
    {

      id: 1016

      ,
      word: "A carrot and stick approach",
      eng: "Rewards and punishments to motivate",
      meaning: "प्रोत्साहन और दंड की नीति"
    },
    {

      id: 1017

      ,
      word: "A change of heart",
      eng: "A change in opinion/decision",
      meaning: "मन बदलना"
    },
    {

      id: 1018

      ,
      word: "A clean slate",
      eng: "A fresh start",
      meaning: "नई शुरुआत"
    },
    {

      id: 1019

      ,
      word: "A closed book",
      eng: "Something unknown or finished",
      meaning: "अज्ञात या समाप्त विषय"
    },
    {

      id: 1020

      ,
      word: "A close-fisted person",
      eng: "A stingy person",
      meaning: "कंजूस व्यक्ति"
    },
    {

      id: 1021

      ,
      word: "A cog in the machine",
      eng: "A small part of a large system",
      meaning: "बड़े तंत्र का छोटा हिस्सा"
    },
    {

      id: 1022

      ,
      word: "A cold fish",
      eng: "An unemotional person",
      meaning: "भावनाहीन व्यक्ति"
    },
    {

      id: 1023

      ,
      word: "A cuckoo in the nest",
      eng: "An unwelcome intruder",
      meaning: "अनचाहा घुसपैठिया"
    },
    {

      id: 1024

      ,
      word: "A cut above something",
      eng: "Superior in quality",
      meaning: "गुणवत्ता में बेहतर"
    },
    {

      id: 1025

      ,
      word: "A damp squib",
      eng: "A disappointing result",
      meaning: "निराशाजनक परिणाम"
    },
    {

      id: 1026

      ,
      word: "A damsel in distress",
      eng: "A woman needing rescue",
      meaning: "मुसीबत में फँसी महिला"
    },
    {

      id: 1027

      ,
      word: "A dark horse",
      eng: "Someone with hidden talents",
      meaning: "छुपी प्रतिभा वाला व्यक्ति"
    },
    {

      id: 1028

      ,
      word: "A dead letter",
      eng: "A law or rule no longer enforced",
      meaning: "निष्क्रिय नियम"
    },
    {

      id: 1029

      ,
      word: "A dead loss",
      eng: "A complete failure",
      meaning: "पूर्ण विफलता"
    },
    {

      id: 1030

      ,
      word: "A diamond in the rough",
      eng: "Potential but unrefined talent",
      meaning: "कच्चा हीरा"
    },
    {

      id: 1031

      ,
      word: "A dime a dozen",
      eng: "Common and easy to find",
      meaning: "आम बात"
    },
    {

      id: 1032

      ,
      word: "A dog's breakfast",
      eng: "A messy situation",
      meaning: "अस्त-व्यस्त स्थिति"
    },
    {

      id: 1033

      ,
      word: "A dog's life",
      eng: "A difficult, unhappy life",
      meaning: "दुखी जीवन"
    },
    {

      id: 1034

      ,
      word: "A drop in a bucket/ocean",
      eng: "A very small amount",
      meaning: "समुद्र में एक बूँद"
    },
    {

      id: 1035

      ,
      word: "A dry run",
      eng: "A rehearsal or practice",
      meaning: "रिहर्सल या अभ्यास"
    },
    {

      id: 1036

      ,
      word: "A fine state of affairs",
      eng: "A problematic situation",
      meaning: "समस्याग्रस्त स्थिति"
    },
    {

      id: 1037

      ,
      word: "A fire in someone's belly",
      eng: "Strong ambition or passion",
      meaning: "जोश या महत्वाकांक्षा"
    },
    {

      id: 1038

      ,
      word: "A fish out of water",
      eng: "Someone in an uncomfortable situation",
      meaning: "असहज व्यक्ति"
    },
    {

      id: 1039

      ,
      word: "A fly on the wall",
      eng: "An unnoticed observer",
      meaning: "गुप्त दर्शक"
    },
    {

      id: 1040

      ,
      word: "A flying visit",
      eng: "A very short visit",
      meaning: "बहुत छोटी मुलाकात"
    },
    {

      id: 1041

      ,
      word: "A fool's paradise",
      eng: "False happiness based on ignorance",
      meaning: "मूर्खतापूर्ण खुशी"
    },
    {

      id: 1042

      ,
      word: "A gentleman at large",
      eng: "A man free from responsibilities",
      meaning: "आजाद ख्याल व्यक्ति"
    },
    {

      id: 1043

      ,
      word: "A golden mean",
      eng: "A balanced approach",
      meaning: "संतुलित दृष्टिकोण"
    },
    {

      id: 1044

      ,
      word: "A Good Samaritan",
      eng: "A helpful stranger",
      meaning: "मददगार अनजान व्यक्ति"
    },
    {

      id: 1045

      ,
      word: "A green horn",
      eng: "An inexperienced person",
      meaning: "अनुभवहीन व्यक्ति"
    },
    {

      id: 1046

      ,
      word: "A grey area",
      eng: "An unclear situation",
      meaning: "अस्पष्ट स्थिति"
    },
    {

      id: 1047

      ,
      word: "A hair in the butter",
      eng: "A minor annoyance",
      meaning: "छोटी सी परेशानी"
    },
    {

      id: 1048

      ,
      word: "A hair's breadth",
      eng: "A very small distance",
      meaning: "बाल जितना फासला"
    },
    {

      id: 1049

      ,
      word: "A hairbreadth escape",
      eng: "A very narrow escape",
      meaning: "बाल-बाल बचना"
    },
    {

      id: 1050

      ,
      word: "A hard nut to crack",
      eng: "A difficult problem/person",
      meaning: "कठिन समस्या या व्यक्ति"
    },
    {

      id: 1051

      ,
      word: "A hornet's nest",
      eng: "A source of trouble",
      meaning: "मुसीबत का स्रोत"
    },
    {

      id: 1052

      ,
      word: "A hot potato",
      eng: "A controversial issue",
      meaning: "विवादास्पद मुद्दा"
    },
    {

      id: 1053

      ,
      word: "A house of cards",
      eng: "A fragile plan/system",
      meaning: "कमजोर योजना"
    },
    {

      id: 1054

      ,
      word: "A kick in the teeth",
      eng: "A sudden setback",
      meaning: "अचानक झटका"
    },
    {

      id: 1055

      ,
      word: "A lame excuse",
      eng: "A weak justification",
      meaning: "कमजोर बहाना"
    },
    {

      id: 1056

      ,
      word: "A laughing stock",
      eng: "An object of ridicule",
      meaning: "मजाक का पात्र"
    },
    {

      id: 1057

      ,
      word: "A lean patch",
      eng: "A period of poor performance",
      meaning: "मंदी का दौर"
    },
    {

      id: 1058

      ,
      word: "A left-handed compliment",
      eng: "A disguised insult",
      meaning: "छुपी हुई बेइज्जती"
    },
    {

      id: 1059

      ,
      word: "A leopard can't change its spots",
      eng: "People can’t change their nature",
      meaning: "कुदरत नहीं बदली जा सकती"
    },
    {

      id: 1060

      ,
      word: "A little bird told me",
      eng: "A secret source of information",
      meaning: "गुप्त सूत्र से पता चला"
    }]
  },
  {
    title: "Day_2",
    words: [{

      id: 1061

      ,
      word: "A little gush of gratitude",
      eng: "A heartfelt expression of thanks.",
      meaning: "दिल से धन्यवाद देने की अभिव्यक्ति।"
    },
    {

      id: 1062

      ,
      word: "A live wire",
      eng: "A person who is energetic and enthusiastic.",
      meaning: "एक व्यक्ति जो ऊर्जावान और उत्साही होता है।"
    },
    {

      id: 1063

      ,
      word: "A long shot",
      eng: "An attempt that has little chance of success.",
      meaning: "एक प्रयास जिसमें सफल होने की कम संभावना होती है।"
    },
    {

      id: 1064

      ,
      word: "A lot on your plate",
      eng: "Having many responsibilities or tasks to manage.",
      meaning: "कई जिम्मेदारियाँ या कार्यों का प्रबंधन करना।"
    },
    {

      id: 1065

      ,
      word: "A man of letters",
      eng: "A scholarly or literary person.",
      meaning: "एक विद्या या साहित्यिक व्यक्ति।"
    },
    {

      id: 1066

      ,
      word: "A man of means",
      eng: "A wealthy or financially secure person.",
      meaning: "एक अमीर या वित्तीय रूप से सुरक्षित व्यक्ति।"
    },
    {

      id: 1067

      ,
      word: "A man of spirit",
      eng: "A determined and spirited individual.",
      meaning: "एक दृढ़ और उत्साही व्यक्ति।"
    },
    {

      id: 1068

      ,
      word: "A man of straw",
      eng: "A person of no substance or influence.",
      meaning: "कोई व्यक्ति जो बिना प्रभाव या महत्व के हो।"
    },
    {

      id: 1069

      ,
      word: "A mare's nest",
      eng: "A false or deceptive situation.",
      meaning: "एक झूठी या धोखाधड़ी स्थिति।"
    },
    {

      id: 1070

      ,
      word: "A month of Sundays",
      eng: "A very long time.",
      meaning: "एक बहुत लंबा समय।"
    },
    {

      id: 1071

      ,
      word: "A moot point",
      eng: "An issue that is open to debate.",
      meaning: "एक मुद्दा जो बहस के लिए खुला है।"
    },
    {

      id: 1072

      ,
      word: "A needle in a haystack",
      eng: "Something very difficult to find.",
      meaning: "कुछ ऐसा जो ढूंढना बहुत मुश्किल है।"
    },
    {

      id: 1073

      ,
      word: "A night owl",
      eng: "A person who stays up late.",
      meaning: "एक व्यक्ति जो देर रात तक जागता है।"
    },
    {

      id: 1074

      ,
      word: "A nig-nog",
      eng: "A foolish or incompetent person.",
      meaning: "एक बेवकूफ या असक्षम व्यक्ति।"
    },
    {

      id: 1075

      ,
      word: "A pain in the neck",
      eng: "Something or someone that is annoying.",
      meaning: "कुछ या कोई जो परेशान करने वाला हो।"
    },
    {

      id: 1076

      ,
      word: "A Penelope's web",
      eng: "A complex or cunningly designed trap.",
      meaning: "एक जटिल या चालाकी से डिजाइन की गई जाल।"
    },
    {

      id: 1077

      ,
      word: "A penny for your thoughts",
      eng: "A way of asking someone what they are thinking.",
      meaning: "किसी से पूछने का एक तरीका कि वे क्या सोच रहे हैं।"
    },
    {

      id: 1078

      ,
      word: "A perfect storm",
      eng: "A particularly bad or critical situation.",
      meaning: "एक विशेष रूप से खराब या गंभीर स्थिति।"
    },
    {

      id: 1079

      ,
      word: "A picture paints a thousand words",
      eng: "A visual representation can convey a lot more information than words.",
      meaning: "एक दृश्य प्रतिनिधित्व शब्दों की तुलना में अधिक जानकारी प्रकट कर सकता है।"
    },
    {

      id: 1080

      ,
      word: "A piece of cake",
      eng: "Something very easy to do.",
      meaning: "कुछ ऐसा जो करना बहुत आसान हो।"
    },
    {

      id: 1081

      ,
      word: "A piece of the pie",
      eng: "A share of something, especially in business.",
      meaning: "कुछ का हिस्सा, विशेष रूप से व्यापार में।"
    },
    {

      id: 1082

      ,
      word: "A plum job",
      eng: "An excellent or highly desirable job.",
      meaning: "एक उत्कृष्ट या अत्यधिक वांछनीय नौकरी।"
    },
    {

      id: 1083

      ,
      word: "A queer fish",
      eng: "An odd or unconventional person.",
      meaning: "एक अजब या असामान्य व्यक्ति।"
    },
    {

      id: 1084

      ,
      word: "A rainy day",
      eng: "A time when one needs to rely on previous savings.",
      meaning: "एक समय जब किसी को पिछले बचत पर निर्भर रहना पड़ता है।"
    },
    {

      id: 1085

      ,
      word: "A ray of hope",
      eng: "A small sign of hope in a difficult situation.",
      meaning: "किसी कठिन स्थिति में आशा का छोटा संकेत।"
    },
    {

      id: 1086

      ,
      word: "A red letter day",
      eng: "An important or significant day.",
      meaning: "एक महत्वपूर्ण या विशेष दिन।"
    },
    {

      id: 1087

      ,
      word: "A red rag to a bull",
      eng: "Something that provokes someone.",
      meaning: "कुछ जो किसी को प्रेरित करता है।"
    },
    {

      id: 1088

      ,
      word: "A rolling stone gathers no moss",
      eng: "A person who is always moving will not settle down.",
      meaning: "एक व्यक्ति जो हमेशा चलता रहता है, वह स्थिर नहीं होता।"
    },
    {

      id: 1089

      ,
      word: "A rotten apple",
      eng: "A bad person who can have a negative impact on others.",
      meaning: "एक बुरा व्यक्ति जो दूसरों पर नकारात्मक प्रभाव डाल सकता है।"
    },
    {

      id: 1090

      ,
      word: "A sacred cow",
      eng: "Something that is considered immune from criticism.",
      meaning: "कुछ ऐसा जो आलोचना से सुरक्षित माना जाता है।"
    },
    {

      id: 1091

      ,
      word: "A safe pair of hands",
      eng: "A reliable person.",
      meaning: "एक विश्वसनीय व्यक्ति।"
    },
    {

      id: 1092

      ,
      word: "A sea change",
      eng: "A significant transformation.",
      meaning: "एक महत्वपूर्ण परिवर्तन।"
    },
    {

      id: 1093

      ,
      word: "A shot in the arm",
      eng: "Something that boosts morale or revitalizes.",
      meaning: "कुछ जो मनोबल बढ़ाता है या नया रंग भरता है।"
    },
    {

      id: 1094

      ,
      word: "A sight for sore eyes",
      eng: "Someone or something that is a pleasing sight.",
      meaning: "कोई व्यक्ति या चीज जो देखने में सुखद हो।"
    },
    {

      id: 1095

      ,
      word: "A skeleton in the cupboard",
      eng: "A hidden secret or undisclosed scandal.",
      meaning: "एक छिपा हुआ रहस्य या अनजान स्कैंडल।"
    },
    {

      id: 1096

      ,
      word: "A snowball effect",
      eng: "A situation that grows increasingly larger as it progresses.",
      meaning: "एक ऐसी स्थिति जो आगे बढ़ने के साथ बढ़ती जाती है।"
    },
    {

      id: 1097

      ,
      word: "A sore point with",
      eng: "A sensitive topic that causes discomfort.",
      meaning: "एक संवेदनशील विषय जो असुविधा पैदा करता है।"
    },
    {

      id: 1098

      ,
      word: "A square deal",
      eng: "A fair agreement.",
      meaning: "एक उचित समझौता।"
    },
    {

      id: 1099

      ,
      word: "A stick-in-the-mud",
      eng: "A person who is old-fashioned or resistant to change.",
      meaning: "एक व्यक्ति जो पुराना है या बदलाव को स्वीकार नहीं करता।"
    },
    {

      id: 1100,
      word: "A stiff-necked person",
      eng: "An obstinate or inflexible person.",
      meaning: "एक जिद्दी या कठोर व्यक्ति।"
    },
    {

      id: 1101,
      word: "A stitch in time saves nine",
      eng: "Addressing a problem promptly can prevent it from worsening.",
      meaning: "समय पर समस्या को हल करने से इसे बिगड़ने से रोका जा सकता है।"
    },
    {

      id: 1102,
      word: "A stone's throw away",
      eng: "Very close distance.",
      meaning: "बहुत करीबी दूरी।"
    },
    {

      id: 1103,
      word: "A storm in a teacup",
      eng: "A small issue that has been exaggerated.",
      meaning: "एक छोटी-सी समस्या जिसे बढ़ा-चढ़ा कर पेश किया गया हो।"
    },
    {

      id: 1104,
      word: "A stuffed shirt",
      eng: "An overly formal or self-important person.",
      meaning: "एक अत्यधिक औपचारिक या आत्म-गर्वित व्यक्ति।"
    },
    {

      id: 1105,
      word: "A stumbling block",
      eng: "An obstacle that hinders progress.",
      meaning: "एक बाधा जो प्रगति में रुकावट डालती है।"
    },
    {

      id: 1106,
      word: "A thorn in the flesh",
      eng: "A persistent source of annoyance.",
      meaning: "एक लगातार हेडर ने हंगामा खड़ा करना।"
    },
    {

      id: 1107,
      word: "A turning point",
      eng: "A moment when a significant change occurs.",
      meaning: "एक क्षण जब महत्वपूर्ण बदलाव होता है।"
    },
    {

      id: 1108,
      word: "A vexed question",
      eng: "A topic that causes controversy.",
      meaning: "एक विषय जो विवाद पैदा करता है।"
    },
    {

      id: 1109,
      word: "A vicious cycle",
      eng: "A situation where one problem leads to another.",
      meaning: "एक ऐसी स्थिति जहां एक समस्या दूसरी समस्या उत्पन्न करती है।"
    },
    {

      id: 1110,
      word: "A walk of life",
      eng: "A particular category of job or profession.",
      meaning: "विशिष्ट श्रेणी की नौकरी या पेशा।"
    },
    {

      id: 1111,
      word: "A wet blanket",
      eng: "A person who spoils the fun.",
      meaning: "एक व्यक्ति जो मज़ा खराब करता है।"
    },
    {

      id: 1112,
      word: "A wildcat strike",
      eng: "A spontaneous or unauthorized work stoppage.",
      meaning: "एक स्वयंसिद्ध या बिना अनुदान कार्य रुकावट।"
    },
    {

      id: 1113,
      word: "A wolf in sheep's clothing",
      eng: "A person who hides malicious intent under a friendly exterior.",
      meaning: "एक व्यक्ति जो मित्रवत बाहरी आवरण के तहत बुरे इरादे छुपाता है।"
    },
    {

      id: 1114,
      word: "ABC of something",
      eng: "The fundamentals or basics of a subject.",
      meaning: "एक विषय के मूलभूत सिद्धांत या आधार।"
    },
    {

      id: 1115,
      word: "Above board",
      eng: "Honest and transparent.",
      meaning: "ईमानदार और पारदर्शी।"
    },
    {

      id: 1116,
      word: "Above/Over one's head",
      eng: "Too difficult to understand.",
      meaning: "समझने के लिए बहुत कठिन।"
    },
    {

      id: 1117,
      word: "Achilles' heel",
      eng: "A vulnerable point.",
      meaning: "एको कमजोर बिंदु।"
    },
    {

      id: 1118,
      word: "Acid test",
      eng: "A definitive test of success.",
      meaning: "सफलता का निर्णायक परीक्षण।"
    },
    {

      id: 1119,
      word: "Actions speak louder than words",
      eng: "What people do is more important than what they say.",
      meaning: "लोग क्या करते हैं, यह उस चीज़ से अधिक महत्वपूर्ण है जो वे कहते हैं।"
    },
    {

      id: 1120,
      word: "Adam's ale",
      eng: "Water.",
      meaning: "पानी।"
    }]
  },
  {
    title: "Day_3",
    words: [{

      id: 1121,
      word: "Add fuel to the fire/flames",
      eng: "To worsen a situation.",
      meaning: "एक स्थिति को बिगाड़ना।"
    },
    {

      id: 1122,
      word: "Add insult to injury",
      eng: "To make a bad situation worse.",
      meaning: "एक बुरी स्थिति को और खराब करना।"
    },
    {

      id: 1123,
      word: "After a fashion",
      eng: "In a way; but not very good.",
      meaning: "एक तरीके से; लेकिन ज्यादा अच्छा नहीं।"
    },
    {

      id: 1124,
      word: "After one's own heart",
      eng: "In accordance with one's own feelings or values.",
      meaning: "अपनी स्वयं की भावनाओं या मूल्यों के अनुसार।"
    },
    {

      id: 1125,
      word: "Against the clock",
      eng: "To have a deadline to meet.",
      meaning: "एक समय-सीमा को पूरा करने के लिए।"
    },
    {

      id: 1126,
      word: "Aid and abet",
      eng: "To assist someone in committing a crime.",
      meaning: "किसी को अपराध करने में मदद करना।"
    },
    {

      id: 1127,
      word: "Aladdin's cave",
      eng: "A place full of valuable or beautiful things.",
      meaning: "एक स्थान जो कीमती या सुंदर चीजों से भरा हो।"
    },
    {

      id: 1128,
      word: "Alarums and excursions",
      eng: "Commotion and excitement.",
      meaning: "हलचल और उत्तेजना।"
    },
    {

      id: 1129,
      word: "Alive and kicking",
      eng: "Living and active.",
      meaning: "जीवित और सक्रिय।"
    },
    {

      id: 1130,
      word: "All agog",
      eng: "Very eager to know or do something.",
      meaning: "कुछ जानने या करने के लिए बहुत उत्सुक।"
    },
    {

      id: 1131,
      word: "All along",
      eng: "From the beginning.",
      meaning: "शुरुआत से।"
    },
    {

      id: 1132,
      word: "All and sundry",
      eng: "Everyone; all people.",
      meaning: "हर कोई; सभी लोग।"
    },
    {

      id: 1133,
      word: "All at sea / Feel at sea",
      eng: "Confused or lost.",
      meaning: "Confused या खोया हुआ।"
    },
    {

      id: 1134,
      word: "All bark and no bite",
      eng: "All talk and no action.",
      meaning: "सिर्फ बात करने वाला और कोई कार्रवाई नहीं।"
    },
    {

      id: 1135,
      word: "All eyes",
      eng: "Everyone is watching or paying attention.",
      meaning: "हर कोई देख रहा है या ध्यान दे रहा है।"
    },
    {

      id: 1136,
      word: "All eyes and ears",
      eng: "Fully attentive and observant.",
      meaning: "पूर्ण रूप से सतर्क और अवलोकनशील।"
    },
    {

      id: 1137,
      word: "All hands on deck",
      eng: "Everyone needs to help.",
      meaning: "हर किसी को मदद करनी होगी।"
    },
    {

      id: 1138,
      word: "All hat and no cattle",
      eng: "All talk, no action or substance.",
      meaning: "सिर्फ बकवास, कोई कार्रवाई या सार नहीं।"
    },
    {

      id: 1139,
      word: "All in",
      eng: "Exhausted; having no energy left.",
      meaning: "थका हुआ; कोई ऊर्जा नहीं बची।"
    },
    {

      id: 1140,
      word: "All in a day's work",
      eng: "Normal and routine activities.",
      meaning: "सामान्य और दिनचर्या गतिविधियाँ।"
    },
    {

      id: 1141,
      word: "All in all",
      eng: "Taking everything into account.",
      meaning: "सब कुछ ध्यान में रखते हुए।"
    },
    {

      id: 1142,
      word: "All moonshine",
      eng: "Nonsense or foolishness.",
      meaning: "बेतुका या मूर्खता।"
    },
    {

      id: 1143,
      word: "All of a sudden",
      eng: "Unexpectedly and quickly.",
      meaning: "अचानक और तेजी से।"
    },
    {

      id: 1144,
      word: "All our might and main",
      eng: "With all our strength.",
      meaning: "हमारी सभी ताकत के साथ।"
    },
    {

      id: 1145,
      word: "All over hell's half acre",
      eng: "In many different places.",
      meaning: "कई अलग-अलग स्थानों में।"
    },
    {

      id: 1146,
      word: "All thumbs",
      eng: "Clumsy or awkward.",
      meaning: "भयानक या अजीब।"
    },
    {

      id: 1147,
      word: "All wet",
      eng: "Completely wrong or erroneous.",
      meaning: "पूरी तरह से गलत या त्रुटिपूर्ण।"
    },
    {

      id: 1148,
      word: "All's fair in love and war",
      eng: "In certain situations, any behavior is acceptable.",
      meaning: "कुछ खास स्थितियों में, कोई भी व्यवहार स्वीकार्य है।"
    },
    {

      id: 1149,
      word: "Alma mater",
      eng: "The school, college, or university one attended.",
      meaning: "स्कूल, कॉलेज या विश्वविद्यालय जहाँ कोई पढ़ा है।"
    },
    {

      id: 1150,
      word: "Alpha and omega",
      eng: "The beginning and the end.",
      meaning: "शुरुआत और अंत।"
    },
    {

      id: 1151,
      word: "Alphabet soup",
      eng: "A confusing mixture of things.",
      meaning: "चीजों का एक भ्रमित मिश्रण।"
    },
    {

      id: 1152,
      word: "Always a bridesmaid never a bride",
      eng: "Someone who is always in a supportive role but never in the lead.",
      meaning: "कोई जो हमेशा सहायक भूमिका में होता है लेकिन कभी नहीं होता।"
    },
    {

      id: 1153,
      word: "An about turn",
      eng: "A complete reversal of action or opinion.",
      meaning: "क्रिया या राय का पूर्ण मोड़।"
    },
    {

      id: 1154,
      word: "An ace in the hole",
      eng: "A hidden advantage.",
      meaning: "एक छिपा हुआ लाभ।"
    },
    {

      id: 1155,
      word: "An arm-chair critic",
      eng: "Someone who criticizes without direct involvement.",
      meaning: "कोई जो बिना सीधे शामिल हुए आलोचना करता है।"
    },
    {

      id: 1156,
      word: "An arrow in the quiver",
      eng: "A tool or resource that can be used when needed.",
      meaning: "एक उपकरण या संसाधन जिसे आवश्यकतानुसार उपयोग किया जा सकता है।"
    },
    {

      id: 1157,
      word: "An article of faith",
      eng: "A belief that is accepted as true.",
      meaning: "एक विश्वास जिसे सच माना जाता है।"
    },
    {

      id: 1158,
      word: "An eye opener",
      eng: "Something that surprises or enlightens.",
      meaning: "कुछ जो आश्चर्यचकित करता है या ज्ञान देता है।"
    },
    {

      id: 1159,
      word: "An iron hand",
      eng: "Strict control or authority.",
      meaning: "कठोर नियंत्रण या अधिकार।"
    },
    {

      id: 1160,
      word: "An iron will",
      eng: "A strong determination.",
      meaning: "मजबूत दृढ़ संकल्प।"
    },
    {

      id: 1161,
      word: "An old head on young shoulders",
      eng: "A young person who is wise beyond their years.",
      meaning: "एक युवा व्यक्ति जो अपने वर्षों से परे समझदार होता है।"
    },
    {

      id: 1162,
      word: "An olive branch",
      eng: "An offer of peace.",
      meaning: "शांति का एक प्रस्ताव।"
    },
    {

      id: 1163,
      word: "An open book",
      eng: "A person or thing that is easy to understand or interpret.",
      meaning: "एक व्यक्ति या चीज जिसे समझना या व्याख्या करना आसान हो।"
    },
    {

      id: 1164,
      word: "An uphill task",
      eng: "A difficult and challenging job.",
      meaning: "एक कठिन और चुनौतीपूर्ण कार्य।"
    },
    {

      id: 1165,
      word: "Appeal to Caesar",
      eng: "To seek help or intervention from a higher authority.",
      meaning: "एक उच्च प्राधिकरण से मदद या हस्तक्षेप मांगना।"
    },
    {

      id: 1166,
      word: "Apple of discord",
      eng: "Something causing trouble or conflict.",
      meaning: "कुछ जो परेशानी या संघर्ष का कारण बनता है।"
    },
    {

      id: 1167,
      word: "Apple of one's eye",
      eng: "Someone's most cherished person.",
      meaning: "किसी की सबसे प्रिय व्यक्ति।"
    },
    {

      id: 1168,
      word: "Apple-cart",
      eng: "A system that can be easily upset.",
      meaning: "एक प्रणाली जो आसानी से प्रभावित हो सकती है।"
    },
    {

      id: 1169,
      word: "Apples and oranges",
      eng: "Things that are fundamentally different.",
      meaning: "ऐसे चीजें जो मौलिक रूप से भिन्न होती हैं।"
    },
    {

      id: 1170,
      word: "Apropos of nothing",
      eng: "Something that seems unrelated to the current topic.",
      meaning: "कुछ जो वर्तमान विषय से असंबंधित लगता है।"
    },
    {

      id: 1171,
      word: "Argus-eyed",
      eng: "Extremely watchful or vigilant.",
      meaning: "अत्यधिक चौकस या सतर्क।"
    },
    {

      id: 1172,
      word: "Armed to the teeth",
      eng: "Fully equipped or prepared.",
      meaning: "पूर्ण रूप से सुसज्जित या तैयार।"
    },
    {

      id: 1173,
      word: "Around the clock",
      eng: "All day and all night.",
      meaning: "सारा दिन और रात।"
    },
    {

      id: 1174,
      word: "Around the corner",
      eng: "Coming soon.",
      meaning: "जल्द ही आने वाला।"
    },
    {

      id: 1175,
      word: "As a matter of fact",
      eng: "In fact; actually.",
      meaning: "वास्तव में; वास्तव में।"
    },
    {

      id: 1176,
      word: "As bald as a cue ball",
      eng: "Completely bald.",
      meaning: "पूरी तरह से गंजा।"
    },
    {

      id: 1177,
      word: "As clear as a bell",
      eng: "Completely clear and easy to understand.",
      meaning: "पूरी तरह से स्पष्ट और समझने में आसान।"
    },
    {

      id: 1178,
      word: "As clear as mud",
      eng: "Not clear at all.",
      meaning: "बिल्कुल स्पष्ट नहीं।"
    },
    {

      id: 1179,
      word: "As daft as a brush",
      eng: "Completely silly.",
      meaning: "पूरी तरह से बेवकूफ।"
    },
    {

      id: 1180,
      word: "As dead as a doornail",
      eng: "Completely lifeless.",
      meaning: "पूरी तरह से निर्जीव।"
    }]
  },
  {
    title: "Day_4",
    words: [{

      id: 1181,
      word: "As fit as a fiddle",
      eng: "In perfect health.",
      meaning: "पूर्ण स्वास्थ्य में।"
    },
    {

      id: 1182,
      word: "As good as gold",
      eng: "Very well-behaved or reliable.",
      meaning: "बहुत ही अच्छे व्यवहार वाला या विश्वसनीय।"
    },
    {

      id: 1183,
      word: "As hard as a nail",
      eng: "Very tough or strong.",
      meaning: "बहुत कठिन या मजबूत।"
    },
    {

      id: 1184,
      word: "As high as a kite",
      eng: "Very happy or inebriated.",
      meaning: "बहुत खुश या नशे में।"
    },
    {

      id: 1185,
      word: "As keen as mustard",
      eng: "Very enthusiastic.",
      meaning: "बहुत उत्साही।"
    },
    {

      id: 1186,
      word: "As phony as a three-dollar bill",
      eng: "Very fake or not genuine.",
      meaning: "बहुत फर्जी या असली नहीं।"
    },
    {

      id: 1187,
      word: "As sly as a fox",
      eng: "Very cunning or deceitful.",
      meaning: "बहुत चालाक या धोखेबाज़।"
    },
    {

      id: 1188,
      word: "As the crow flies",
      eng: "The straight-line distance or direct route.",
      meaning: "सीधे रेखा दूरी या सीधे मार्ग।"
    },
    {

      id: 1189,
      word: "As thick as two short planks",
      eng: "Very stupid.",
      meaning: "बहुत बेवकूफ।"
    },
    {

      id: 1190,
      word: "Ask for trouble",
      eng: "To behave in a way that leads to problems.",
      meaning: "ऐसे तरीके से व्यवहार करना जो समस्याओं की ओर ले जाए।"
    },
    {

      id: 1191,
      word: "Asleep at the wheel",
      eng: "To be inattentive or not paying attention.",
      meaning: "लापरवाह होना या ध्यान न देना।"
    },
    {

      id: 1192,
      word: "Assume airs",
      eng: "To act as though one is better than others.",
      meaning: "ऐसे व्यवहार करना जैसे कोई दूसरों से बेहतर हो।"
    },
    {

      id: 1193,
      word: "At a crossroads",
      eng: "At a point where a decision must be made.",
      meaning: "एक ऐसे बिंदु पर जहाँ निर्णय लेना आवश्यक हो।"
    },
    {

      id: 1194,
      word: "At a loss",
      eng: "Unsure of what to do.",
      meaning: "क्या करना है इस पर अनिश्चित।"
    },
    {

      id: 1195,
      word: "At a snail's pace",
      eng: "Very slowly.",
      meaning: "बहुत धीमी गति से।"
    },
    {

      id: 1196,
      word: "At a stretch",
      eng: "At full capacity or extent.",
      meaning: "पूर्ण क्षमता या सीमा पर।"
    },
    {

      id: 1197,
      word: "At any cost",
      eng: "No matter the consequences.",
      meaning: "किसी भी कीमत पर।"
    },
    {

      id: 1198,
      word: "At beck and call",
      eng: "Always available to help.",
      meaning: "हमेशा मदद के लिए उपलब्ध।"
    },
    {

      id: 1199,
      word: "At cross purposes",
      eng: "Having conflicting aims.",
      meaning: "विभिन्न लक्ष्यों का होना।"
    },
    {

      id: 1200,
      word: "At daggers drawn",
      eng: "In open and hostile conflict.",
      meaning: "खुले और शत्रुतापूर्ण संघर्ष में।"
    },
    {

      id: 1201,
      word: "At each other's throats",
      eng: "In fierce or violent disagreement.",
      meaning: "शक्तिशाली या क्रूर असहमतियों में।"
    },
    {

      id: 1202,
      word: "At large",
      eng: "Free or not captured.",
      meaning: "मुक्त या समाप्त नहीं।"
    },
    {

      id: 1203,
      word: "At loggerheads",
      eng: "In disagreement or conflict.",
      meaning: "विवाद में या संघर्ष में।"
    },
    {

      id: 1204,
      word: "At loose ends",
      eng: "Not having anything specific to do.",
      meaning: "विशिष्ट करने के लिए कुछ न होना।"
    },
    {

      id: 1205,
      word: "At one's elbow",
      eng: "Very close by.",
      meaning: "बहुत करीब।"
    },
    {

      id: 1206,
      word: "At one's wit's end",
      eng: "At the limit of one's patience.",
      meaning: "अपने धैर्य की सीमा पर।"
    },
    {

      id: 1207,
      word: "At random",
      eng: "Without a specific pattern or reason.",
      meaning: "बिना किसी विशेष पैटर्न या कारण के।"
    },
    {

      id: 1208,
      word: "At short notice",
      eng: "With very little advance warning.",
      meaning: "बहुत कम पूर्व सूचना के साथ।"
    },
    {

      id: 1209,
      word: "At sixes and sevens",
      eng: "In a state of confusion.",
      meaning: "भ्रम की स्थिति में।"
    },
    {

      id: 1210,
      word: "At somebody's expense",
      eng: "To the detriment or mockery of someone.",
      meaning: "किसी के नुकसान या निंदा पर।"
    },
    {

      id: 1211,
      word: "At stake",
      eng: "At risk or in jeopardy.",
      meaning: "जोखिम में या संकट में।"
    },
    {

      id: 1212,
      word: "At the drop of a hat/dime",
      eng: "Without any hesitation or delay.",
      meaning: "किसी भी संकोच या देरी के बिना।"
    },
    {

      id: 1213,
      word: "At the eleventh hour",
      eng: "At the last possible moment.",
      meaning: "अंतिम संभव क्षण में।"
    },
    {

      id: 1214,
      word: "At the top of your lungs",
      eng: "As loud as possible.",
      meaning: "जितना ज़ोर से संभव हो।"
    },
    {

      id: 1215,
      word: "At variance with",
      eng: "In disagreement or conflict.",
      meaning: "विवाद या संघर्ष में।"
    },
    {

      id: 1216,
      word: "Average out",
      eng: "To calculate the mean of a set of numbers.",
      meaning: "संख्याओं के सेट का औसत निकालना।"
    },
    {

      id: 1217,
      word: "Babe in the woods",
      eng: "Someone who is naive or inexperienced.",
      meaning: "कोई जो naïve या अनजान है।"
    },
    {

      id: 1218,
      word: "Back in saddle",
      eng: "To return to a situation after an absence.",
      meaning: "गैर-मौजूदगी के बाद किसी स्थिति में लौटाना।"
    },
    {

      id: 1219,
      word: "Back me",
      eng: "To support someone.",
      meaning: "किसी का समर्थन करना।"
    },
    {

      id: 1220,
      word: "Back on one's feet",
      eng: "Recovering after a setback.",
      meaning: "किसी बाधा के बाद सुधार।"
    },
    {

      id: 1221,
      word: "Back out of",
      eng: "To withdraw from an agreement or commitment.",
      meaning: "एक समझौते या प्रतिबद्धता से पीछे हटना।"
    },
    {

      id: 1222,
      word: "Back to basics",
      eng: "Returning to fundamental principles.",
      meaning: "मूल सिद्धांतों में लौटना।"
    },
    {

      id: 1223,
      word: "Back to square one",
      eng: "Starting over.",
      meaning: "फिर से शुरू करना।"
    },
    {

      id: 1224,
      word: "Back to the drawing board",
      eng: "To start over after a failure.",
      meaning: "एक विफलता के बाद फिर से शुरू करना।"
    },
    {

      id: 1225,
      word: "Back up",
      eng: "To provide support or corroboration.",
      meaning: "सहायता या पुष्टि प्रदान करना।"
    },
    {

      id: 1226,
      word: "Backseat driver",
      eng: "A person who gives unsolicited advice.",
      meaning: "एक व्यक्ति जो बिना मांगे सलाह देता है।"
    },
    {

      id: 1227,
      word: "Bad blood",
      eng: "Ill feelings between people.",
      meaning: "लोगों के बीच बुरी भावनाएँ।"
    },
    {

      id: 1228,
      word: "Bad hair day",
      eng: "A day when someone feels that their hair looks unkempt.",
      meaning: "एक दिन जब कोई महसूस करता है कि उनके बाल बेतरतीब दिखते हैं।"
    },
    {

      id: 1229,
      word: "Bad hats",
      eng: "Unscrupulous or untrustworthy people.",
      meaning: "अनुचित या अप्रतिबंधित लोग।"
    },
    {

      id: 1230,
      word: "Bad iron",
      eng: "An adverse circumstance.",
      meaning: "एक प्रतिकूल परिस्थिति।"
    },
    {

      id: 1231,
      word: "Bag and baggage",
      eng: "With all personal belongings.",
      meaning: "सभी व्यक्तिगत सामान के साथ।"
    },
    {

      id: 1232,
      word: "Baker's dozen",
      eng: "Thirteen items.",
      meaning: "तेरह आइटम।"
    },
    {

      id: 1233,
      word: "Ball is in your court",
      eng: "It’s up to you to make the next decision.",
      meaning: "अगले निर्णय को लेना आपके ऊपर है।"
    },
    {

      id: 1234,
      word: "Ball of fire",
      eng: "An energetic and enthusiastic person.",
      meaning: "एक ऊर्जावान और उत्साही व्यक्ति।"
    },
    {

      id: 1235,
      word: "Banana oil",
      eng: "Nonsense or insincere talk.",
      meaning: "बेतुकी या असत्य बात।"
    },
    {

      id: 1236,
      word: "Bang for the buck",
      eng: "Value for money.",
      meaning: "पैसे के लिए मूल्य।"
    },
    {

      id: 1237,
      word: "Bark is worse than his bite",
      eng: "Someone who talks tough but isn’t actually threatening.",
      meaning: "कोई जो कठोर बात करता है लेकिन वास्तव में खतरनाक नहीं होता है।"
    },
    {

      id: 1238,
      word: "Barking up the wrong tree",
      eng: "To make a wrong assumption about something.",
      meaning: "किसी चीज़ के बारे में गलत धारणा बनाना।"
    },
    {

      id: 1239,
      word: "Batten down the hatches",
      eng: "To prepare for trouble or difficulties.",
      meaning: "कठिनाइयों के लिए तैयारी करना।"
    },
    {

      id: 1240,
      word: "Be a dab hand at something",
      eng: "To be very skilled at something.",
      meaning: "किसी चीज़ में बहुत कुशल होना।"
    }]
  },
  {
    title: "Day_5",
    words: [{

      id: 1241,
      word: "Be a dead meat",
      eng: "In serious trouble.",
      meaning: "गंभीर परेशानी में।"
    },
    {

      id: 1242,
      word: "Be afraid of one's own shadow",
      eng: "To be overly cautious or paranoid.",
      meaning: "अधिक सतर्क या पेरानॉयड होना।"
    },
    {

      id: 1243,
      word: "Be all ears",
      eng: "To be very eager to listen.",
      meaning: "सुनने के लिए बहुत उत्सुक होना।"
    },
    {

      id: 1244,
      word: "Be all one to",
      eng: "To be indifferent to something.",
      meaning: "किसी चीज़ के प्रति उदासीन होना।"
    },
    {

      id: 1245,
      word: "Be an old hat",
      eng: "To be very experienced.",
      meaning: "बहुत अनुभवी होना।"
    },
    {

      id: 1246,
      word: "Be at a loss for words",
      eng: "To be unable to think of anything to say.",
      meaning: "किसी भी बात सोचने में असमर्थ होना।"
    },
    {

      id: 1247,
      word: "Be behind the times",
      eng: "To be old-fashioned or outdated.",
      meaning: "पुराने तरीके या दिनांकित होना।"
    },
    {

      id: 1248,
      word: "Be down with",
      eng: "To be sick with a disease or problem.",
      meaning: "एक बीमारी या समस्या से बीमार होना।"
    },
    {

      id: 1249,
      word: "Be glad to see the back of",
      eng: "To be happy that someone or something is gone.",
      meaning: "यह देखकर खुश होना कि कोई या कुछ चला गया है।"
    },
    {

      id: 1250,
      word: "Be going places",
      eng: "To be successful or likely to be successful.",
      meaning: "सफल होना या सफल होने की संभावना होना।"
    },
    {

      id: 1251,
      word: "Be hard hit",
      eng: "To be severely affected by something.",
      meaning: "किसी चीज़ से गंभीर रूप से प्रभावित होना।"
    },
    {

      id: 1252,
      word: "Be hard up",
      eng: "To be in financial difficulty.",
      meaning: "वित्तीय कठिनाई में होना।"
    },
    {

      id: 1253,
      word: "Be in force",
      eng: "To be valid or applicable.",
      meaning: "मान्य या लागू होना।"
    },
    {

      id: 1254,
      word: "Be in someone's shoes",
      eng: "To understand or empathize with someone's situation.",
      meaning: "किसी की परिस्थिति को समझना या सहानुभूति रखना।"
    },
    {

      id: 1255,
      word: "Be in the red",
      eng: "To be in debt.",
      meaning: "कर्ज में होना।"
    },
    {

      id: 1256,
      word: "Be in two minds",
      eng: "To be undecided about something.",
      meaning: "किसी चीज़ के बारे में अनिर्णीत होना।"
    },
    {

      id: 1257,
      word: "Be left stranded",
      eng: "To be left helpless in a difficult situation.",
      meaning: "किसी कठिन परिस्थिति में असहाय छोड़ दिया जाना।"
    },
    {

      id: 1258,
      word: "Be like chalk and cheese",
      eng: "To be very different.",
      meaning: "बहुत अलग होने के लिए।"
    },
    {

      id: 1259,
      word: "Be my guest",
      eng: "To invite someone to do something.",
      meaning: "किसी को कुछ करने के लिए आमंत्रित करना।"
    },
    {

      id: 1260,
      word: "Be Off",
      eng: "To leave or depart.",
      meaning: "छोड़ना या प्रस्थान करना।"
    },
    {

      id: 1261,
      word: "Be on a high alert",
      eng: "To be very cautious and ready for danger.",
      meaning: "बहुत सतर्क और खतरे के लिए तैयार होना।"
    },
    {

      id: 1262,
      word: "Be on the square",
      eng: "To be honest and fair.",
      meaning: "ईमानदार और न्यायपूर्ण होना।"
    },
    {

      id: 1263,
      word: "Be out for the count",
      eng: "To be unconscious or heavily asleep.",
      meaning: "बेहोश या बेहद सोई हुई स्थिति में होना।"
    },
    {

      id: 1264,
      word: "Be out of order",
      eng: "Not functioning correctly.",
      meaning: "सही ढंग से काम नहीं करना।"
    },
    {

      id: 1265,
      word: "Be riding high",
      eng: "To be very successful or in a favorable situation.",
      meaning: "बहुत सफल होना या अनुकूल स्थिति में होना।"
    },
    {

      id: 1266,
      word: "Be under no illusions",
      eng: "To have a realistic understanding of a situation.",
      meaning: "एक स्थिति की यथार्थवादी समझ होना।"
    },
    {

      id: 1267,
      word: "Be under somebody's thumb",
      eng: "To be under someone’s control.",
      meaning: "किसी के नियंत्रण में होना।"
    },
    {

      id: 1268,
      word: "Be wet behind the ears",
      eng: "To be inexperienced.",
      meaning: "अनुभवहीन होना।"
    },
    {

      id: 1269,
      word: "Be worlds apart",
      eng: "To be very different from someone or something.",
      meaning: "किसी या किसी चीज़ से बहुत अलग होना।"
    },
    {

      id: 1270,
      word: "Bear a grudge",
      eng: "To hold resentment against someone.",
      meaning: "किसी के खिलाफ नाराजगी रखना।"
    },
    {

      id: 1271,
      word: "Bear down",
      eng: "To exert pressure or influence.",
      meaning: "दबाव या प्रभाव डालना।"
    },
    {

      id: 1272,
      word: "Bear fruit",
      eng: "To produce successful results.",
      meaning: "सफल परिणाम उत्पन्न करना।"
    },
    {

      id: 1273,
      word: "Bear garden",
      eng: "A wild and noisy scene.",
      meaning: "एक जंगली और शोरगुल भरा दृश्य।"
    },
    {

      id: 1274,
      word: "Bear in mind",
      eng: "To remember and consider.",
      meaning: "याद रखना और ध्यान में रखना।"
    },
    {

      id: 1275,
      word: "Bear the brunt of",
      eng: "To endure the worst part of something.",
      meaning: "किसी चीज़ का सबसे बुरा अनुभव करना।"
    },
    {

      id: 1276,
      word: "Bear the palm",
      eng: "To be the best in a competition.",
      meaning: "किसी प्रतिस्पर्धा में सर्वश्रेष्ठ होना।"
    },
    {

      id: 1277,
      word: "Bear up with",
      eng: "To endure or cope with something difficult.",
      meaning: "किसी कठिनाई से सहन करना या सामना करना।"
    },
    {

      id: 1278,
      word: "Bear with",
      eng: "To be patient and tolerant.",
      meaning: "धैर्य और सहिष्णुता रखना।"
    },
    {

      id: 1279,
      word: "Beat about/around the bush",
      eng: "To avoid getting to the main point.",
      meaning: "मुख्य बिंदु पर जाने से बचना।"
    },
    {

      id: 1280,
      word: "Beat one's brains out",
      eng: "To think very hard about something.",
      meaning: "किसी चीज़ के बारे में बहुत मेहनत से सोचना।"
    },
    {

      id: 1281,
      word: "Beauty is only skin deep",
      eng: "Physical beauty is superficial.",
      meaning: "शारीरिक सुंदरता सतही होती है।"
    },
    {

      id: 1282,
      word: "Bed of roses",
      eng: "A comfortable and pleasant situation.",
      meaning: "एक सुखद और आरामदायक स्थिति।"
    },
    {

      id: 1283,
      word: "Beggar description",
      eng: "Beyond any description; incredible.",
      meaning: "किसी भी विवरण से परे; अद्भुत।"
    },
    {

      id: 1284,
      word: "Behind closed doors",
      eng: "In secret or private.",
      meaning: "गोपनीय या निजी।"
    },
    {

      id: 1285,
      word: "Behind one's back",
      eng: "Done secretly and often dishonestly.",
      meaning: "गुप्त रूप से और अक्सर बेईमानी से।"
    },
    {

      id: 1286,
      word: "Behind the eight ball",
      eng: "In a difficult or precarious situation.",
      meaning: "किसी कठिन या संकट की स्थिति में।"
    },
    {

      id: 1287,
      word: "Behind the scenes",
      eng: "Things that happen in secret or out of public view.",
      meaning: "ऐसी चीजें जो गुप्त रूप से या सार्वजनिक दृष्टि से बाहर होती हैं।"
    },
    {

      id: 1288,
      word: "Bell the cat",
      eng: "To take a risk to achieve something.",
      meaning: "किसी चीज़ को प्राप्त करने के लिए जोखिम लेना।"
    },
    {

      id: 1289,
      word: "Belly laugh",
      eng: "A loud and hearty laugh.",
      meaning: "एक ऊँची और दिलदार हंसी।"
    },
    {

      id: 1290,
      word: "Below the belt",
      eng: "An unfair or unethical tactic.",
      meaning: "एक अनुचित या अनैतिक उपाय।"
    },
    {

      id: 1291,
      word: "Bend over backwards",
      eng: "To make a great effort to accommodate someone.",
      meaning: "किसी के अनुकूल होने के लिए बहुत प्रयास करना।"
    },
    {

      id: 1292,
      word: "Beside oneself",
      eng: "Extremely agitated or upset.",
      meaning: "अत्यधिक उत्तेजित या परेशान।"
    },
    {

      id: 1293,
      word: "Beside the mark",
      eng: "Not accurately or relevantly.",
      meaning: "सही या प्रासंगिक नहीं।"
    },
    {

      id: 1294,
      word: "Best of both worlds",
      eng: "The benefits of two different opportunities.",
      meaning: "दो अलग-अलग अवसरों के लाभ।"
    },
    {

      id: 1295,
      word: "Best thing since sliced bread",
      eng: "An excellent invention or innovation.",
      meaning: "एक उत्कृष्ट आविष्कार या नवाचार।"
    },
    {

      id: 1296,
      word: "Better late than never",
      eng: "It's better to do something late than to not do it at all.",
      meaning: "कुछ देर से करना बेहतर है बजाय इसके कि इसे न किया जाए।"
    },
    {

      id: 1297,
      word: "Better the devil you know than the devil you don't",
      eng: "It's preferable to deal with a difficult situation that is familiar.",
      meaning: "एक मुश्किल स्थिति से निपटना बेहतर है जो परिचित है।"
    },
    {

      id: 1298,
      word: "Between a rock and a hard place",
      eng: "In a difficult situation where one must choose between two unpleasant options.",
      meaning: "एक कठिन स्थिति में होना जहाँ किसी को दो अप्रिय विकल्पों में से चुनना है।"
    },
    {

      id: 1299,
      word: "Between Scylla and Charybdis",
      eng: "Faced with two equally bad choices.",
      meaning: "दो समान रूप से बुरे विकल्पों का सामना करना।"
    },
    {

      id: 1300,
      word: "Between the devil and the deep blue sea",
      eng: "In a dilemma between two undesirable options.",
      meaning: "दो अवांछनीय विकल्पों के बीच कष्टदायक स्थिति में होना।"
    }]
  },
  {
    title: "Day_6",
    words: [{

      id: 1301,
      word: "Beyond the pale",
      eng: "Outside the bounds of acceptable behavior.",
      meaning: "स्वीकृत व्यवहार की सीमाओं के बाहर।"
    },
    {

      id: 1302,
      word: "Beyond the shadow of a doubt",
      eng: "With complete certainty.",
      meaning: "पूर्ण निश्चितता के साथ।"
    },
    {

      id: 1303,
      word: "Bid defiance",
      eng: "To openly resist or oppose.",
      meaning: "खुलकर विरोध करना।"
    },
    {

      id: 1304,
      word: "Bid fair",
      eng: "To seem likely to happen.",
      meaning: "हाथ में हो रहा दिखता है।"
    },
    {

      id: 1305,
      word: "Big bucks",
      eng: "A large amount of money.",
      meaning: "एक बड़ी राशि।"
    },
    {

      id: 1306,
      word: "Birds of the same feather",
      eng: "People with similar interests or characteristics.",
      meaning: "समान रुचियों या विशेषताओं के लोग।"
    },
    {

      id: 1307,
      word: "Bite off more than one can chew",
      eng: "To take on a task that is way too big.",
      meaning: "ऐसे कार्य को लेना जो बहुत बड़ा हो।"
    },
    {

      id: 1308,
      word: "Bite someone's head off",
      eng: "To react angrily.",
      meaning: "गुस्से में प्रतिक्रिया देना।"
    },
    {

      id: 1309,
      word: "Bite the bullet",
      eng: "To endure a painful situation.",
      meaning: "एक दर्दनाक स्थिति को सहना।"
    },
    {

      id: 1310,
      word: "Bite the dust",
      eng: "To fail or die.",
      meaning: "असफल होना या मर जाना।"
    },
    {

      id: 1311,
      word: "Bite your tongue",
      eng: "To stop yourself from saying something.",
      meaning: "किसी चीज़ कहने से खुद को रोकना।"
    },
    {

      id: 1312,
      word: "Black and blue",
      eng: "Covered in bruises.",
      meaning: "नील और पीले धब्बों से ढका हुआ।"
    },
    {

      id: 1313,
      word: "Black out",
      eng: "To lose consciousness.",
      meaning: "बेहोश होना।"
    },
    {

      id: 1314,
      word: "Black ox",
      eng: "A person who brings bad luck.",
      meaning: "एक व्यक्ति जो दुर्भाग्य लाता है।"
    },
    {

      id: 1315,
      word: "Black sheep",
      eng: "A person who is different from the rest of the group, often in a negative way.",
      meaning: "एक व्यक्ति जो बाकी समूह से अलग है, अक्सर नकारात्मक तरीके से।"
    },
    {

      id: 1316,
      word: "Blaze a trail",
      eng: "To be the first to do something.",
      meaning: "कुछ करने के लिए पहले होना।"
    },
    {

      id: 1317,
      word: "Blind alley",
      eng: "A situation that leads nowhere.",
      meaning: "एक ऐसी स्थिति जो कहीं नहीं पहुंचती।"
    },
    {

      id: 1318,
      word: "Blow a fuse",
      eng: "To become very angry.",
      meaning: "बहुत गुस्सा होना।"
    },
    {

      id: 1319,
      word: "Blow his top",
      eng: "To lose one's temper.",
      meaning: "आपा खोना।"
    },
    {

      id: 1320,
      word: "Blow one's own trumpet",
      eng: "To boast about one's achievements.",
      meaning: "अपने उपलब्धियों का boast करना।"
    },
    {

      id: 1321,
      word: "Blow over",
      eng: "To pass without causing any lasting harm.",
      meaning: "किसी स्थायी नुकसान के बिना गुज़र जाना।"
    },
    {

      id: 1322,
      word: "Blow something out of proportion",
      eng: "To exaggerate a situation.",
      meaning: "एक स्थिति को बढ़ा-चढ़ाकर पेश करना।"
    },
    {

      id: 1323,
      word: "Blow up",
      eng: "To explode.",
      meaning: "सुरक्षित होना।"
    },
    {

      id: 1324,
      word: "Blue-blooded",
      eng: "Of noble birth.",
      meaning: "उच्च जाति का।"
    },
    {

      id: 1325,
      word: "Bob's your uncle",
      eng: "A phrase indicating that something will be easy.",
      meaning: "एक वाक्यांश जो बताता है कि कुछ आसान होगा।"
    },
    {

      id: 1326,
      word: "Body and soul",
      eng: "With complete devotion.",
      meaning: "पूर्ण समर्पण के साथ।"
    },
    {

      id: 1327,
      word: "Boil the ocean",
      eng: "To undertake an impossible task.",
      meaning: "एक असंभव कार्य करना।"
    },
    {

      id: 1328,
      word: "Boils down",
      eng: "To be summarized as.",
      meaning: "सारांश रूप में होना।"
    },
    {

      id: 1329,
      word: "Bone to pick",
      eng: "A grievance to discuss.",
      meaning: "चर्चा करने के लिए एक शिकायत।"
    },
    {

      id: 1330,
      word: "Born with a silver spoon in mouth",
      eng: "Born into a wealthy family.",
      meaning: "एक धनी परिवार में जन्मा।"
    },
    {

      id: 1331,
      word: "Bosom Friend",
      eng: "A very close friend.",
      meaning: "एक बहुत करीबी दोस्त।"
    },
    {

      id: 1332,
      word: "Bottom line",
      eng: "The most important factor.",
      meaning: "सभी का सबसे महत्वपूर्ण पहलू।"
    },
    {

      id: 1333,
      word: "Bounce something off someone",
      eng: "To discuss an idea with someone.",
      meaning: "किसी विचार पर किसी से चर्चा करना।"
    },
    {

      id: 1334,
      word: "Breach of confidence",
      eng: "Breaking a trust.",
      meaning: "विश्वास तोड़ना।"
    },
    {

      id: 1335,
      word: "Bread and butter",
      eng: "Basic means of livelihood.",
      meaning: "जीविका के साधन।"
    },
    {

      id: 1336,
      word: "Break a leg",
      eng: "Good luck.",
      meaning: "शुभकामनाएँ।"
    },
    {

      id: 1337,
      word: "Break in",
      eng: "To interrupt or intrude.",
      meaning: "रोकें या घुसपैठ करें।"
    },
    {

      id: 1338,
      word: "Break new/fresh ground",
      eng: "To innovate or pioneer.",
      meaning: "नवीनता लाना या मार्ग प्रशस्त करना।"
    },
    {

      id: 1339,
      word: "Break the bank",
      eng: "To spend all of one’s money.",
      meaning: "अपना सारा पैसा खर्च करना।"
    },
    {

      id: 1340,
      word: "Break the ice",
      eng: "To initiate conversation in a social setting.",
      meaning: "एक सामाजिक सेटिंग में बातचीत शुरू करना।"
    },
    {

      id: 1341,
      word: "Breath of fresh air",
      eng: "A welcome change.",
      meaning: "एक सुखद परिवर्तन।"
    },
    {

      id: 1342,
      word: "Breathing down someone's neck",
      eng: "To closely monitor someone.",
      meaning: "किसी पर ध्यान देना।"
    },
    {

      id: 1343,
      word: "Breathing the air",
      eng: "To enjoy life.",
      meaning: "जीवन का आनंद लेना।"
    },
    {

      id: 1344,
      word: "Bring about",
      eng: "To cause something to happen.",
      meaning: "कुछ होने का कारण बनना।"
    },
    {

      id: 1345,
      word: "Bring home the bacon",
      eng: "To earn a living.",
      meaning: "अपनी जीविका कमाना।"
    },
    {

      id: 1346,
      word: "Bring someone to book",
      eng: "To hold someone accountable.",
      meaning: "किसी को जिम्मेदार ठहराना।"
    },
    {

      id: 1347,
      word: "Bring the house down",
      eng: "To create a great deal of excitement.",
      meaning: "काफी उत्तेजना पैदा करना।"
    },
    {

      id: 1348,
      word: "Bring to one's knees",
      eng: "To cause someone to yield or submit.",
      meaning: "किसी को झुकाने या अदायगी करने का कारण बनना।"
    },
    {

      id: 1349,
      word: "Broke a lance with",
      eng: "To engage in a fight or competition.",
      meaning: "एक लड़ाई या प्रतिस्पर्धा में शामिल होना।"
    },
    {

      id: 1350,
      word: "Broke down",
      eng: "To cease to work or function.",
      meaning: "काम करना या काम करना बंद करना।"
    },
    {

      id: 1351,
      word: "Broke off",
      eng: "To come to an end suddenly.",
      meaning: "अचानक समाप्त हो जाना।"
    },
    {

      id: 1352,
      word: "Broke Priscian's head",
      eng: "To make a grammatical error.",
      meaning: "वाक्यविज्ञान की गलती करना।"
    },
    {

      id: 1353,
      word: "Broke up",
      eng: "To end a relationship.",
      meaning: "एक रिश्ते को समाप्त करना।"
    },
    {

      id: 1354,
      word: "Broken reed",
      eng: "A person who is unreliable.",
      meaning: "कोई व्यक्ति जो भरोसेमंद नहीं है।"
    },
    {

      id: 1355,
      word: "Brought up",
      eng: "To raise a subject or issue.",
      meaning: "एक विषय या मुद्दा उठाना।"
    },
    {

      id: 1356,
      word: "Brown study",
      eng: "Deeply absorbed in thought.",
      meaning: "गहरे विचार में डूबा हुआ।"
    },
    {

      id: 1357,
      word: "Bugs me",
      eng: "To annoy or irritate.",
      meaning: "परेशान या चिढ़ाना।"
    },
    {

      id: 1358,
      word: "Build castles in the air",
      eng: "To have unrealistic dreams or plans.",
      meaning: "अवास्तविक सपनों या योजनाओं का होना।"
    },
    {

      id: 1359,
      word: "Bull's-eye",
      eng: "An exact hit.",
      meaning: "एक सटीक लक्ष्य।"
    }]
  },
  {
    title: "Day_7",
    words: [{

      id: 1360,
      word: "Burn one's bridges/boats",
      eng: "To destroy all possible ways of retreat.",
      meaning: "सभी संभावित मार्गों को नष्ट करना।"
    },
    {

      id: 1361,
      word: "Burn the midnight oil",
      eng: "To work late into the night.",
      meaning: "रात में देर तक काम करना।"
    },
    {

      id: 1362,
      word: "Burning question",
      eng: "An urgent and important question.",
      meaning: "एक आपातकालीन और महत्वपूर्ण प्रश्न।"
    },
    {

      id: 1363,
      word: "Bury the hatchet",
      eng: "To make peace.",
      meaning: "शांति बनाना।"
    },
    {

      id: 1364,
      word: "Butt in",
      eng: "To interrupt a conversation.",
      meaning: "एक वार्तालाप में बाधा डालना।"
    },
    {

      id: 1365,
      word: "Butter fingers",
      eng: "To be clumsy or prone to dropping things.",
      meaning: "अव्यवस्थित होना या चीजें गिराने का।"
    },
    {

      id: 1366,
      word: "Butterflies in the stomach",
      eng: "To feel nervous.",
      meaning: "नर्वस महसूस करना।"
    },
    {

      id: 1367,
      word: "Button her lip",
      eng: "To stop talking.",
      meaning: "बात करना बंद करना।"
    },
    {

      id: 1368,
      word: "Buy a lemon",
      eng: "To purchase a faulty item.",
      meaning: "एक दोषपूर्ण वस्तु खरीदना।"
    },
    {

      id: 1369,
      word: "By a whisker",
      eng: "By a very narrow margin.",
      meaning: "बहुत संकीर्ण मार्जिन के द्वारा।"
    },
    {

      id: 1370,
      word: "By and by",
      eng: "After some time.",
      meaning: "कुछ समय बाद।"
    },
    {

      id: 1371,
      word: "By and large",
      eng: "Generally speaking.",
      meaning: "आम तौर पर बात करते हुए।"
    },
    {

      id: 1372,
      word: "By courtesy of",
      eng: "Provided by; thanks to.",
      meaning: "द्वारा प्रदान किया गया; धन्यवाद।"
    },
    {

      id: 1373,
      word: "By fair means or foul",
      eng: "By any means necessary.",
      meaning: "किसी भी आवश्यक तरीके से।"
    },
    {

      id: 1374,
      word: "By fits and starts",
      eng: "In an irregular manner.",
      meaning: "अनियमित तरीके से।"
    },
    {

      id: 1375,
      word: "By hook or by crook",
      eng: "By any means possible.",
      meaning: "किसी भी संभव तरीके से।"
    },
    {

      id: 1376,
      word: "By leaps and bounds",
      eng: "Rapidly or quickly.",
      meaning: "तेजी से या जल्दी।"
    },
    {

      id: 1377,
      word: "By the same token",
      eng: "In the same way.",
      meaning: "उसी तरह।"
    },
    {

      id: 1378,
      word: "By the skin of one's teeth",
      eng: "Narrowly successful.",
      meaning: "संकीर्ण रूप से सफल।"
    },
    {

      id: 1379,
      word: "By the sweat of one's brow",
      eng: "By hard work.",
      meaning: "कड़ी मेहनत से।"
    },
    {

      id: 1380,
      word: "Call down",
      eng: "To reprimand someone.",
      meaning: "किसी को डांटना।"
    },
    {

      id: 1381,
      word: "Call in question",
      eng: "To challenge or dispute.",
      meaning: "चुनौती देना या विवाद करना।"
    },
    {

      id: 1382,
      word: "Call it a day",
      eng: "To stop working for the day.",
      meaning: "दिन के लिए काम करना बंद करना।"
    },
    {

      id: 1383,
      word: "Call off",
      eng: "To cancel something.",
      meaning: "कुछ रद्द करना।"
    },
    {

      id: 1384,
      word: "Call on",
      eng: "To visit someone.",
      meaning: "किसी से मिलना।"
    },
    {

      id: 1385,
      word: "Call the shots",
      eng: "To make decisions.",
      meaning: "निर्णय लेना।"
    },
    {

      id: 1386,
      word: "Call upon",
      eng: "To ask someone to do something.",
      meaning: "किसी से कुछ करने के लिए कहना।"
    },
    {

      id: 1387,
      word: "Called for",
      eng: "Required or necessary.",
      meaning: "आवश्यक या अनिवार्य।"
    },
    {

      id: 1388,
      word: "Came out of his shell",
      eng: "To become more social or outgoing.",
      meaning: "और अधिक सामाजिक या बाहर निकलना।"
    },
    {

      id: 1389,
      word: "Came up",
      eng: "To be mentioned or brought to attention.",
      meaning: "ज़िक्र किया गया हो।"
    },
    {

      id: 1390,
      word: "Can't cut the mustard",
      eng: "To be unable to perform satisfactorily.",
      meaning: "संतोषजनक रूप से प्रदर्शन करने में असमर्थ होना।"
    },
    {

      id: 1391,
      word: "Cap in hand",
      eng: "In a humble or submissive manner.",
      meaning: "नम्र या समर्पण के तरीके में।"
    },
    {

      id: 1392,
      word: "Capital punishment",
      eng: "The death penalty.",
      meaning: "फांसी की सजा।"
    },
    {

      id: 1393,
      word: "Carry on",
      eng: "To continue.",
      meaning: "जारी रखना।"
    },
    {

      id: 1394,
      word: "Carry out",
      eng: "To perform or execute.",
      meaning: "करना या निष्पादित करना।"
    },
    {

      id: 1395,
      word: "Carry the ball",
      eng: "To take responsibility.",
      meaning: "जिम्मेदारी लेना।"
    },
    {

      id: 1396,
      word: "Carry the can",
      eng: "To take the blame.",
      meaning: "दोष लेना।"
    },
    {

      id: 1397,
      word: "Carry the day",
      eng: "To be successful.",
      meaning: "सफल होना।"
    },
    {

      id: 1398,
      word: "Carry weight",
      eng: "To have influence.",
      meaning: "प्रभाव होना।"
    },
    {

      id: 1399,
      word: "Carve out a niche",
      eng: "To create a specialized position.",
      meaning: "एक विशेषीकृत स्थान बनाना।"
    },
    {

      id: 1400,
      word: "Cash-strapped",
      eng: "Having little or no money.",
      meaning: "कम या बिना पैसे का होना।"
    },
    {

      id: 1401,
      word: "Cast a slur upon",
      eng: "To damage someone's reputation.",
      meaning: "किसी की प्रतिष्ठा को नुकसान पहुँचाना।"
    },
    {

      id: 1402,
      word: "Cast aside",
      eng: "To discard or ignore.",
      meaning: "फेंक देना या अनदेखा करना।"
    },
    {

      id: 1403,
      word: "Cast someone adrift",
      eng: "To leave someone in a difficult situation.",
      meaning: "किसी को कठिन स्थिति में छोड़ देना।"
    },
    {

      id: 1404,
      word: "Casting pearls before swine",
      eng: "To offer something valuable to someone who doesn't appreciate it.",
      meaning: "कुछ मूल्यवान प्रदान करना जो कोई इसकी सराहना नहीं करता है।"
    },
    {

      id: 1405,
      word: "Cat nap",
      eng: "A short sleep.",
      meaning: "एक छोटी नींद।"
    },
    {

      id: 1406,
      word: "Cat's paw",
      eng: "Someone used by another to achieve their purpose.",
      meaning: "कोई जिसे दूसरे द्वारा अपने उद्देश्य को प्राप्त करने के लिए उपयोग किया जाता है।"
    },
    {

      id: 1407,
      word: "Catch 22",
      eng: "A situation where you cannot escape because of contradictory rules.",
      meaning: "एक ऐसी स्थिति जहाँ आप विरोधाभासी नियमों के कारण नहीं बच सकते।"
    },
    {

      id: 1408,
      word: "Catch a tartar",
      eng: "To confront someone or something difficult.",
      meaning: "किसी चुनौती का सामना करना।"
    },
    {

      id: 1409,
      word: "Catch red-handed",
      eng: "To be caught in the act of doing something wrong.",
      meaning: "गलत काम करते पकड़ा जाना।"
    },
    {

      id: 1410,
      word: "Catch time by the forelock",
      eng: "To seize an opportunity early.",
      meaning: "एक अवसर को जल्दी पकड़ना।"
    },
    {

      id: 1411,
      word: "Cat's whiskers",
      eng: "Something of great importance or excellence.",
      meaning: "कुछ बहुत महत्वपूर्ण या उत्कृष्ट।"
    },
    {

      id: 1412,
      word: "Change for the better",
      eng: "An improvement.",
      meaning: "एक सुधार।"
    },
    {

      id: 1413,
      word: "Change hands",
      eng: "To be transferred from one owner to another.",
      meaning: "एक मालिक से दूसरे को स्थानांतरित करना।"
    },
    {

      id: 1414,
      word: "Change horses in midstream",
      eng: "To change plans or leaders in the middle of an endeavor.",
      meaning: "एक प्रयास के बीच में योजनाएँ या नेता बदलना।"
    },
    {

      id: 1415,
      word: "Changed colours",
      eng: "To change one's opinions or loyalties.",
      meaning: "अपनी राय या निष्ठाएँ बदलना।"
    },
    {

      id: 1416,
      word: "Chapter and verse",
      eng: "Specific details or references.",
      meaning: "विशिष्ट विवरण या संदर्भ।"
    },
    {

      id: 1417,
      word: "Charley horse",
      eng: "A painful cramp in the leg.",
      meaning: "पैर में एक दर्दनाक ऐंठन।"
    },
    {

      id: 1418,
      word: "Chase rainbows",
      eng: "To pursue unrealistic dreams.",
      meaning: "अवास्तविक सपनों का पीछा करना।"
    },
    {

      id: 1419,
      word: "Cheek by jowl",
      eng: "Very close together.",
      meaning: "बहुत करीब।"
    },
    {

      id: 1420,
      word: "Chew someone out",
      eng: "To reprimand someone angrily.",
      meaning: "किसी को गुस्से में डांटना।"
    }]
  },
  {
    title: "Day_8",
    words: [{

      id: 1421,
      word: "Chew something over",
      eng: "To think carefully about something.",
      meaning: "कुछ के बारे में सोच समझकर विचार करना।"
    },
    {

      id: 1422,
      word: "Chew the cud",
      eng: "To think about something slowly and carefully.",
      meaning: "कुछ के बारे में धीरे-धीरे और सावधानी से सोचना।"
    },
    {

      id: 1423,
      word: "Chew the fat",
      eng: "To engage in casual conversation.",
      meaning: "अप्रत्याशित बातचीत में संलग्न होना।"
    },
    {

      id: 1424,
      word: "Chew the scenery",
      eng: "To overact or behave dramatically.",
      meaning: "अतिभाषा करना या नाटकीय रूप से व्यवहार करना।"
    },
    {

      id: 1425,
      word: "Chicken feed",
      eng: "A small or insignificant amount of money.",
      meaning: "एक छोटी या महत्वहीन मात्रा।"
    },
    {

      id: 1426,
      word: "Chicken out",
      eng: "To back out of something due to fear.",
      meaning: "डर के कारण किसी चीज़ से पीछे हटना।"
    },
    {

      id: 1427,
      word: "Chicken-hearted",
      eng: "Cowardly or timid.",
      meaning: "कायर या संकोची।"
    },
    {

      id: 1428,
      word: "Child's play",
      eng: "Something very easy.",
      meaning: "कुछ जो बहुत आसान हो।"
    },
    {

      id: 1429,
      word: "Children should be seen and not heard",
      eng: "Children should be quiet and not interrupt.",
      meaning: "बच्चों को चुप रहना चाहिए और बाधा नहीं डालनी चाहिए।"
    },
    {

      id: 1430,
      word: "Chill out",
      eng: "To relax.",
      meaning: "आराम करना।"
    },
    {

      id: 1431,
      word: "Chinks in the armour",
      eng: "Weak points in someone's character or defense.",
      meaning: "किसी के चरित्र या रक्षा में कमजोर बिंदु।"
    },
    {

      id: 1432,
      word: "Chip off the old block",
      eng: "A person who resembles their parent.",
      meaning: "एक व्यक्ति जो अपने माता-पिता के समान हो।"
    },
    {

      id: 1433,
      word: "Clam up",
      eng: "To become silent suddenly.",
      meaning: "अचानक चुप हो जाना।"
    },
    {

      id: 1434,
      word: "Clean hands",
      eng: "To be innocent or not guilty.",
      meaning: "निर्दोष या दोषी नहीं होना।"
    },
    {

      id: 1435,
      word: "Clear the air",
      eng: "To reduce tension or clarify misunderstandings.",
      meaning: "तनाव को कम करना या गलतफहमियों को स्पष्ट करना।"
    },
    {

      id: 1436,
      word: "Cloak and dagger",
      eng: "Involving secrecy or espionage.",
      meaning: "गोपनीयता या जासूसी से संबंधित।"
    },
    {

      id: 1437,
      word: "Close shave",
      eng: "A narrow escape from danger.",
      meaning: "खतरे से संकीर्ण बचाव।"
    },
    {

      id: 1438,
      word: "Close to one's heart",
      eng: "Very personal or important.",
      meaning: "बहुत व्यक्तिगत या महत्वपूर्ण।"
    },
    {

      id: 1439,
      word: "Closed the book on",
      eng: "To consider something finished or resolved.",
      meaning: "किसी चीज़ को समाप्त या समाप्त करने पर विचार करना।"
    },
    {

      id: 1440,
      word: "Cloven hoof",
      eng: "To reveal one's true nature.",
      meaning: "अपनी वास्तविक प्रकृति प्रकट करना।"
    },
    {

      id: 1441,
      word: "Cock and bull story",
      eng: "A ridiculous or implausible tale.",
      meaning: "एक हास्यास्पद या अविश्वसनीय कहानी।"
    },
    {

      id: 1442,
      word: "Cold comfort",
      eng: "Something that offers little consolation.",
      meaning: "कुछ जो थोड़ा सांत्वना देता है।"
    },
    {

      id: 1443,
      word: "Comb through",
      eng: "To search thoroughly.",
      meaning: "थoroughly खोज करना।"
    },
    {

      id: 1444,
      word: "Come about",
      eng: "To happen or occur.",
      meaning: "है या होना।"
    },
    {

      id: 1445,
      word: "Come hell or high water",
      eng: "No matter the obstacles.",
      meaning: "कोई भी बाधाएँ हो।"
    },
    {

      id: 1446,
      word: "Come in handy",
      eng: "To be useful.",
      meaning: "उपयोगी होना।"
    },
    {

      id: 1447,
      word: "Come of age",
      eng: "To reach maturity.",
      meaning: "परिपक्वता प्राप्त करना।"
    },
    {

      id: 1448,
      word: "Come off",
      eng: "To succeed or happen as planned.",
      meaning: "सफल होना या योजना के अनुसार होना।"
    },
    {

      id: 1449,
      word: "Come rain or shine",
      eng: "Regardless of the situation.",
      meaning: "स्थिति के बावजूद।"
    },
    {

      id: 1450,
      word: "Come to blows",
      eng: "To get into a physical fight.",
      meaning: "शारीरिक झगड़े में जाना।"
    },
    {

      id: 1451,
      word: "Come to grief",
      eng: "To encounter failure or misfortune.",
      meaning: "विफलता या दुर्भाग्य का सामना करना।"
    },
    {

      id: 1452,
      word: "Come to light",
      eng: "To become known or revealed.",
      meaning: "ज्ञात या प्रकट होना।"
    },
    {

      id: 1453,
      word: "Come to terms with something",
      eng: "To accept a difficult situation.",
      meaning: "एक कठिन स्थिति को स्वीकार करना।"
    },
    {

      id: 1454,
      word: "Come to the point",
      eng: "To get to the main issue.",
      meaning: "मुख्य मुद्दे पर पहुँचाना।"
    },
    {

      id: 1455,
      word: "Come true",
      eng: "To become reality.",
      meaning: "वास्तविकता बनना।"
    },
    {

      id: 1456,
      word: "Come what may",
      eng: "Whatever happens.",
      meaning: "जो भी हो।"
    },
    {

      id: 1457,
      word: "Cook the books",
      eng: "To manipulate financial records dishonestly.",
      meaning: "वित्तीय रिकॉर्ड को बेईमानी से हेरफेर करना।"
    },
    {

      id: 1458,
      word: "Cool about working",
      eng: "To remain calm under pressure.",
      meaning: "दबाव में शांत रहना।"
    },
    {

      id: 1459,
      word: "Cool as a cucumber",
      eng: "Very calm and composed.",
      meaning: "बहुत शांत और संयमित।"
    },
    {

      id: 1460,
      word: "Cool it",
      eng: "To calm down.",
      meaning: "शांत होना।"
    },
    {

      id: 1461,
      word: "Cool your heels",
      eng: "To wait patiently.",
      meaning: "धैर्यपूर्वक इंतज़ार करना।"
    },
    {

      id: 1462,
      word: "Cope with",
      eng: "To deal effectively with something.",
      meaning: "किसी चीज़ से प्रभावी ढंग से निपटना।"
    },
    {

      id: 1463,
      word: "Copycat",
      eng: "Someone who imitates others.",
      meaning: "कोई जो दूसरों की नकल करता है।"
    },
    {

      id: 1464,
      word: "Cordoned off",
      eng: "To surround an area to restrict access.",
      meaning: "एक क्षेत्र को चारों ओर से बंद करना।"
    },
    {

      id: 1465,
      word: "Cost (someone) dearly",
      eng: "To have a significant cost or consequence.",
      meaning: "एक महत्वपूर्ण लागत या परिणाम।"
    },
    {

      id: 1466,
      word: "Cost an arm and a leg",
      eng: "To be very expensive.",
      meaning: "बहुत महंगा होना।"
    },
    {

      id: 1467,
      word: "Couch potato",
      eng: "A lazy person who spends too much time on the couch.",
      meaning: "एक आलसी व्यक्ति जो बहुत समय सोफे पर बिताता है।"
    },
    {

      id: 1468,
      word: "Count one's blessings",
      eng: "To be grateful for what you have.",
      meaning: "जो आपके पास है उसके लिए आभारी होना।"
    },
    {

      id: 1469,
      word: "Cover up",
      eng: "To hide the truth.",
      meaning: "सच को छिपाना।"
    },
    {

      id: 1470,
      word: "Crack someone up",
      eng: "To make someone laugh.",
      meaning: "किसी को हंसाना।"
    },
    {

      id: 1471,
      word: "Crash and burn",
      eng: "To fail spectacularly.",
      meaning: "धूमधाम से असफल होना।"
    },
    {

      id: 1472,
      word: "Creature comforts",
      eng: "The basic physical comforts.",
      meaning: "बुनियादी शारीरिक सुख।"
    },
    {

      id: 1473,
      word: "Cross one's mind",
      eng: "To think of something.",
      meaning: "किसी चीज़ के बारे में सोचना।"
    },
    {

      id: 1474,
      word: "Cross out",
      eng: "To draw a line through something.",
      meaning: "किसी चीज़ के माध्यम से रेखा खींचना।"
    },
    {

      id: 1475,
      word: "Cross swords",
      eng: "To engage in conflict.",
      meaning: "संघर्ष में शामिल होना।"
    },
    {

      id: 1476,
      word: "Cross that bridge",
      eng: "To deal with a problem when it arises.",
      meaning: "एक समस्या का सामना करना जब वह उत्पन्न हो।"
    },
    {

      id: 1477,
      word: "Cross that bridge when you come to it",
      eng: "To deal with a problem when necessary.",
      meaning: "जब आवश्यक हो तभी समस्या का सामना करना।"
    },
    {

      id: 1478,
      word: "Cross your fingers",
      eng: "To hope for a good outcome.",
      meaning: "एक अच्छे परिणाम की उम्मीद करना।"
    },
    {

      id: 1479,
      word: "Crux of the matter",
      eng: "The most important point.",
      meaning: "सबसे महत्वपूर्ण बिंदु।"
    },
    {

      id: 1480,
      word: "Cry down",
      eng: "To belittle or dismiss.",
      meaning: "कमतर आंके या अस्वीकार करें।"
    }]
  }];