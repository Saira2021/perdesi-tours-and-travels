import type { StaticImageData } from "next/image";
import tourKalam from "@/assets/tour-kalam.jpg";
import tourHunza from "@/assets/tour-hunza.jpg";
import tourSkardu from "@/assets/tour-skardu.jpg";
import tourFairy from "@/assets/tour-fairy-meadows.jpg";
import tourMahodand from "@/assets/tour-mahodand.jpg";
import tourNaran from "@/assets/tour-naran.jpg";
import tourKashmir from "@/assets/tour-kashmir.jpg";
import tourKumrat from "@/assets/tour-kumrat.jpg";
import tourMusa from "@/assets/tour-musa-ka-musala.jpg";
import tourShogran from "@/assets/tour-shogran.jpg";
import tourMurree from "@/assets/tour-murree.jpg";
import tourIslamabad from "@/assets/tour-islamabad.jpg";
import tourMushkpuri from "@/assets/tour-mushkpuri.jpg";

export const includedServices = [
  "Transport (All toll & taxes)",
  "Food (Breakfast & Dinner)",
  "Hotel",
  "Bonefire",
  "Professional tour guide",
];

export const excludedServices = [
  "Personal expenses — lunch, snacks and beverages",
  "Activities or sightseeing not mentioned in the itinerary",
  "Entry fees, porters, shopping and souvenirs",
  "Travel insurance",
  "Unforeseen expenses due to roadblocks, weather or emergencies",
];

export const bookingSteps = [
  { step: "Step 1", title: "Share details", text: "Name, contact number, CNIC and number of travellers." },
  { step: "Step 2", title: "Choose & confirm", text: "Select your package, stay preference and any special requests." },
  { step: "Step 3", title: "Pay 50% advance", text: "Secure your booking with a 50% advance payment." },
  { step: "Step 4", title: "Send proof", text: "Share the payment screenshot and your seat is confirmed." },
];

export const termsAndConditions = [
  "Guests must bring their original CNIC and arrive at least 30 minutes before departure.",
  "Please follow the group leader's instructions and maintain respectful behaviour throughout the journey.",
  "The itinerary is subject to change due to weather or road conditions.",
  "Shared accommodation is provided unless a private room is requested in advance.",
  "Air-conditioning in vehicles depends on availability in hilly areas.",
  "Timing adjustments of 2–3 hours may occur due to traffic or road conditions.",
  "The company is not responsible for personal injuries, lost belongings or additional expenses.",
  "Cancellations within three days of departure are non-refundable.",
  "A 50% advance payment is required to confirm a booking.",
];

export type ItineraryDay = { day: string; title: string; text: string };

export type Tour = {
  slug: string;
  img: StaticImageData;
  name: string;
  region: string;
  days: string;
  audience: string;
  summary: string;
  itinerary?: ItineraryDay[];
  highlights?: string[];
  note?: string;
};

export const tours: Tour[] = [
  {
    slug: "hunza-valley-5-days",
    img: tourNaran,
    name: "Hunza Valley — 5 Days",
    region: "Gilgit-Baltistan • Hunza",
    days: "5 Days",
    audience: "Family • Women-only • Group",
    summary:
      "A five-day Hunza Valley expedition from Islamabad through Babusar Top, Naltar, Attabad Lake, ancient forts and Khunjerab Pass — returning via Naran and Lake Saif-ul-Malook.",
    highlights: [
      "Luxury transport from Islamabad via Hazara Expressway",
      "Naran, Babusar Top and Chilas gateway route",
      "Naltar Valley — Zero Point, Satrangi Lake and Blue Lake",
      "Attabad Lake, Altit Fort, Baltit Fort and Khunjerab Pass",
      "Nanga Parbat Viewpoint and Mountain Ranges Junction",
      "Lake Saif-ul-Malook jeep ride on the return",
    ],
    itinerary: [
      {
        day: "Day 0",
        title: "Departure & Pickup",
        text: "Depart from Islamabad at 10:00 PM via luxury transport, beginning an exciting journey toward the mountains.",
      },
      {
        day: "Day 1",
        title: "Gateway to the Mountains",
        text: "Stop at Bhera Interchange for breakfast, then continue to Chilas via Hazara Expressway, passing through Naran and Babusar Top. Enjoy scenic views before settling in Chilas for dinner and an overnight stay.",
      },
      {
        day: "Day 2",
        title: "Exploring Hunza's Heart",
        text: "Transfer to jeeps for an off-road adventure to Naltar Valley, exploring Zero Point and Satrangi Lake. Relax by Blue Lake before returning to Hunza for dinner and an overnight stay.",
      },
      {
        day: "Day 3",
        title: "Adventure Through Ancient Forts & Lakes",
        text: "Visit Attabad Lake and Tunnels, explore Altit and Baltit Forts, and travel to Khunjerab Pass at the China border. End the day with a BBQ, bonfire, and a night stay in Hunza.",
      },
      {
        day: "Day 4",
        title: "Cultural Immersion",
        text: "Tour Altit Fort, then begin the return journey, stopping at Nanga Parbat Viewpoint and Mountain Ranges Junction before reaching Chilas for dinner and a night stay.",
      },
      {
        day: "Day 5",
        title: "Naran to Lahore via Islamabad",
        text: "Start the day with breakfast, followed by a jeep ride to Lake Saif-ul-Malook. Depart for Islamabad, where Islamabad guests are dropped off before continuing to Lahore. The journey concludes with beautiful memories and new friendships.",
      },
    ],
    note:
      "In case the Naran route is closed or blocked, we will take the Besham route as an alternative. Please note that this route may take additional travel time, but we will ensure a smooth and comfortable journey to our destination. Your safety and convenience remain our top priority.",
  },
  {
    slug: "skardu-valley-6-days",
    img: tourSkardu,
    name: "Skardu Valley — 6 Days",
    region: "Gilgit-Baltistan • Skardu",
    days: "6 Days",
    audience: "Family • Women-only • Group",
    summary:
      "Six days from Lahore and Islamabad to Skardu — Upper Kachura Lake, Shangrila, Manthokha Waterfall, Shigar Fort, cold desert and the Karakoram Highway homeward.",
    highlights: [
      "Overnight departure from Lahore with Bhera refreshment stop",
      "Karakoram Highway drive via Besham to Chilas",
      "Nanga Parbat Viewpoint, Upper Kachura Lake and Shangrila Resort",
      "Manthokha Waterfall, Sarfaranga Cold Desert and Shigar Fort",
      "Astak Nala, River Indus and Roundu Haramosh sightseeing",
      "Return via Islamabad with Lahore drop-off",
    ],
    itinerary: [
      {
        day: "Day 0",
        title: "Departure & Pickup",
        text: "Depart from Lahore at 9:00 PM, with a refreshment stop at Bhera Rest Area, before continuing the overnight journey to Islamabad.",
      },
      {
        day: "Day 1",
        title: "Onward to Chilas",
        text: "Pick up participants from Rawalpindi at 2:30 AM, then travel to Chilas via Hazara Motorway and Karakoram Highway. Stop for breakfast in Besham and enjoy scenic views before arriving in Chilas for an overnight stay.",
      },
      {
        day: "Day 2",
        title: "Exploring Skardu Valley",
        text: "After breakfast in Chilas, visit the Nanga Parbat Viewpoint and travel through Skardu Road. Explore Upper Kachura Lake and Shangrila Resort before settling in Skardu for the night.",
      },
      {
        day: "Day 3",
        title: "The Beauty of Kharmang & Shigar",
        text: "Visit Manthokha Waterfall in Kharmang Valley, then explore Sarfaranga Cold Desert and Shigar Fort. Return to Skardu in the evening for an overnight stay.",
      },
      {
        day: "Day 4",
        title: "Adventure in Deosai",
        text: "Spend the morning visiting remaining spots in Skardu, then travel back to Chilas with sightseeing stops at Astak Nala, River Indus, and Roundu Haramosh. Enjoy a group dinner and overnight stay in Chilas.",
      },
      {
        day: "Day 5",
        title: "Final Explorations & Return to Chilas",
        text: "Spend the morning visiting remaining spots in Skardu, then travel back to Chilas with sightseeing stops at Astak Nala, River Indus, and Roundu Haramosh. Enjoy a group dinner and overnight stay in Chilas.",
      },
      {
        day: "Day 6",
        title: "Journey Back to Lahore",
        text: "Begin the return journey early, with breakfast en route. Arrive in Islamabad by 6:00 PM and reach Lahore by midnight, concluding the tour with beautiful memories and new friendships.",
      },
    ],
  },
  {
    slug: "hunza-skardu-8-days",
    img: tourFairy,
    name: "Hunza & Skardu — 8 Days",
    region: "Gilgit-Baltistan • Hunza & Skardu",
    days: "8 Days / 7 Nights",
    audience: "Family • Women-only • Group",
    summary:
      "Our signature 8-day journey from Lahore and Islamabad along the Karakoram Highway to Skardu, Deosai, Shigar, Hunza and the Pak–China border at Khunjerab Pass.",
    highlights: [
      "Nanga Parbat Viewpoint & 3 Mountain Junction",
      "Shangrila Resort and Upper Kachura Lake",
      "Deosai National Park jeep safari & Sheosar Lake",
      "Shigar Fort, Cold Desert and Manthokha Waterfall",
      "Altit Fort, Baltit Fort and Karimabad Bazaar",
      "Khunjerab Pass, Attabad Lake, Passu Cones & Hussaini Bridge",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Lahore – Islamabad – Chilas",
        text: "Depart from Lahore to Islamabad, meet & greet, then continue towards Chilas via the Karakoram Highway. Enjoy breakfast at Besham and scenic views along the way. Dinner and overnight stay in Chilas. (1st Night Stay)",
      },
      {
        day: "Day 2",
        title: "Chilas – Skardu",
        text: "After breakfast, journey to Skardu, stopping at Nanga Parbat Viewpoint, 3 Mountain Junction, and Astak Nalla. Explore Shangrila Resort & Upper Kachura Lake, with an optional boat ride. Overnight stay in Skardu. (2nd Night Stay)",
      },
      {
        day: "Day 3",
        title: "Skardu – Shigar Valley",
        text: "Visit the Manthokha Waterfall, then explore Shigar Valley, including Bab-e-Shigar, Cold Desert, and Shigar Fort. Enjoy a BBQ dinner & bonfire at the hotel. (3rd Night Stay)",
      },
      {
        day: "Day 4",
        title: "Skardu – Deosai National Park",
        text: "Embark on a jeep safari to Deosai National Park, stopping at Sadpara Lake, Bara Pani, Kalla Pani, and Sheosar Lake. Return to Skardu for dinner and rest. (4th Night Stay)",
      },
      {
        day: "Day 5",
        title: "Skardu – Hunza",
        text: "Travel to Hunza Valley, visiting Altit Fort, Baltit Fort, and Royal Garden. Stroll through Karimabad Bazaar before an overnight stay in Hunza. (5th Night Stay)",
      },
      {
        day: "Day 6",
        title: "Hunza – Khunjerab Pass",
        text: "Visit the Pak-China border at Khunjerab Pass, with stops at Attabad Lake, Hussaini Suspension Bridge, Passu Cones, and Sost Border. Return to Hunza for the night. (6th Night Stay)",
      },
      {
        day: "Day 7",
        title: "Hunza – Chilas / Besham",
        text: "Depart for Chilas/Besham, making scenic and refreshment stops along the way. Dinner and overnight stay. (7th Night Stay)",
      },
      {
        day: "Day 8",
        title: "Chilas / Besham – Islamabad – Lahore",
        text: "Journey back to Islamabad, with drop-offs for Islamabad travelers. Those continuing to Lahore complete the adventure with a farewell.",
      },
    ],
  },
  {
    slug: "swat-kalam-3-days",
    img: tourKalam,
    name: "Swat & Kalam — 3 Days",
    region: "Swat • Kalam Valley",
    days: "3 Days / 2 Nights",
    audience: "Family • Women-only • Group",
    summary:
      "A refreshing three-day escape through Swat Valley to Malam Jabba, Kalam and the alpine Mahodand Lake, with pine forests, rivers and mountain roads all the way.",
    highlights: [
      "Malam Jabba chairlift and zipline",
      "Drive along the Swat River to Kalam",
      "Mahodand Lake jeep safari",
      "Ushu Forest and Matiltan views",
      "Shamozai riverside and Swat Bazaar",
      "Bonfire evening with the group",
    ],
    itinerary: [
      { day: "Day 1", title: "Lahore / Islamabad – Malam Jabba – Kalam", text: "Depart at night from Lahore, pick-up in Islamabad, and reach Swat by morning. Enjoy breakfast, then explore Malam Jabba with its chairlift and zipline before driving along the Swat River to Kalam for dinner and an overnight stay." },
      { day: "Day 2", title: "Mahodand Lake & Ushu Forest", text: "After breakfast, take a jeep safari to Mahodand Lake through Ushu Forest and Matiltan. Enjoy boating, photography and free time by the lake, then return to Kalam for a bonfire, dinner and overnight stay." },
      { day: "Day 3", title: "Kalam – Shamozai – Return", text: "Check out after breakfast and stop at Shamozai and the Swat Bazaar for local shopping. Depart for Islamabad and Lahore with drop-offs along the way." },
    ],
  },
  {
    slug: "naran-kaghan-3-days",
    img: tourNaran,
    name: "Naran & Kaghan — 3 Days",
    region: "Khyber Pakhtunkhwa • Kaghan Valley",
    days: "3 Days / 2 Nights",
    audience: "Family • Honeymoon • Group",
    summary:
      "The classic Kaghan valley road trip covering Shogran, Siri Paye meadows, Babusar Top, Lulusar Lake and the legendary Lake Saif-ul-Malook.",
    highlights: [
      "Siri Paye Meadows jeep ride from Shogran",
      "Babusar Top at 13,690 ft",
      "Lulusar Lake photo stops",
      "River rafting in Naran",
      "Lake Saif-ul-Malook jeep safari",
      "Balakot and Kaghan riverside views",
    ],
    itinerary: [
      { day: "Day 1", title: "Lahore / Islamabad – Shogran – Naran", text: "Night departure from Lahore with an Islamabad pick-up. Breakfast at Balakot, then a jeep ride to Shogran and Siri Paye Meadows. Continue to Naran for dinner and an overnight stay." },
      { day: "Day 2", title: "Babusar Top & Lulusar Lake", text: "Drive to Babusar Top with stops at Lulusar Lake and Batakundi. Enjoy the views and photography, then return to Naran for optional river rafting, dinner and rest." },
      { day: "Day 3", title: "Lake Saif-ul-Malook – Return", text: "Morning jeep safari to Lake Saif-ul-Malook, then check out and depart for Islamabad and Lahore with drop-offs along the way." },
    ],
  },
  {
    slug: "kashmir-valley-3-days",
    img: tourKashmir,
    name: "Kashmir Valley — 3 Days",
    region: "Azad Kashmir • Neelum Valley",
    days: "3 Days / 2 Nights",
    audience: "Family • Women-only • Group",
    summary:
      "Three days through Neelum Valley — Kutton waterfalls, Sharda, the emerald meadows of Arang Kel and views across the Line of Control.",
    highlights: [
      "Dhani and Kutton (Jagran) Waterfalls",
      "Sharda ruins and riverside stay",
      "Arang Kel chairlift and trek",
      "Kel village and Neelum River views",
      "Line of Control viewpoint",
      "Kundal Shahi Waterfall",
    ],
    itinerary: [
      { day: "Day 1", title: "Lahore / Islamabad – Kutton – Sharda", text: "Night departure with an Islamabad pick-up, breakfast en route, then on to Dhani and Kutton Waterfalls. Continue along the Neelum River to Sharda for dinner and an overnight stay." },
      { day: "Day 2", title: "Arang Kel", text: "Travel to Kel, take the chairlift and trek up to Arang Kel. Spend the day in the meadows and wooden villages before returning for dinner and an overnight stay." },
      { day: "Day 3", title: "LOC Viewpoint – Kundal Shahi – Return", text: "Visit the Line of Control viewpoint and Kundal Shahi Waterfall on the way back, then depart for Islamabad and Lahore." },
    ],
  },
  {
    slug: "kumrat-valley-3-days",
    img: tourKumrat,
    name: "Kumrat Valley — 3 Days",
    region: "Upper Dir • Kumrat",
    days: "3 Days / 2 Nights",
    audience: "Family • Camping • Group",
    summary:
      "A forest and river retreat in Kumrat Valley — deodar woods, Kala Chashma, waterfalls and riverside camping under the stars.",
    highlights: [
      "Jeep ride from Thal into Kumrat",
      "Kala Chashma natural spring",
      "Kumrat Waterfall",
      "Deodar forest walks along the Panjkora River",
      "Riverside camping and bonfire",
      "Dir Bazaar stop on the way back",
    ],
    itinerary: [
      { day: "Day 1", title: "Lahore / Islamabad – Thal – Kumrat", text: "Night departure with an Islamabad pick-up and breakfast on the way. Reach Thal by afternoon and take a jeep into Kumrat Valley. Settle in for a bonfire, dinner and an overnight stay." },
      { day: "Day 2", title: "Kala Chashma & Kumrat Waterfall", text: "Full day exploring Kumrat — Kala Chashma, the waterfall and long walks through the deodar forest beside the river. Return for dinner and an overnight stay." },
      { day: "Day 3", title: "Kumrat – Return", text: "Check out after breakfast, jeep back to Thal and depart for Islamabad and Lahore with a shopping stop in Dir Bazaar." },
    ],
  },
  {
    slug: "musa-ka-musala-summit",
    img: tourMusa,
    name: "Musa Ka Musala Summit — 3 Days",
    region: "Kaghan • Sharan Forest",
    days: "3 Days / 2 Nights",
    audience: "Trekking • Adventure • Group",
    summary:
      "A guided summit trek to Musa Ka Musala (13,378 ft) through Sharan Forest, with a high-altitude camp at Dhor and a sunrise ascent.",
    highlights: [
      "Sharan Forest jeep track and pine woods",
      "Camping at Dhor campsite",
      "Sunrise summit ascent to 13,378 ft",
      "Panoramic Kaghan and Kashmir ranges",
      "Guided trek with an experienced leader",
      "Bonfire nights under clear skies",
    ],
    itinerary: [
      { day: "Day 1", title: "Lahore / Islamabad – Sharan – Dhor Campsite", text: "Night departure with an Islamabad pick-up and breakfast at Balakot. Jeep ride to Sharan Forest, then trek to the Dhor campsite for dinner, a bonfire and an overnight stay in tents." },
      { day: "Day 2", title: "Summit Day", text: "An early start for the ascent to Musa Ka Musala. Enjoy the summit views and photography, then descend to the campsite for dinner and rest." },
      { day: "Day 3", title: "Descent – Return", text: "Trek back down to Sharan after breakfast, then jeep out and depart for Islamabad and Lahore." },
    ],
  },
  {
    slug: "fairy-meadows-5-days",
    img: tourFairy,
    name: "Fairy Meadows — 5 Days",
    region: "Nanga Parbat Base • Gilgit-Baltistan",
    days: "5 Days / 4 Nights",
    audience: "Trekking • Family • Group",
    summary:
      "Five days to the meadows beneath Nanga Parbat — jeep transfers from Raikot Bridge, the Tatoo Village trek, Beyal Camp and the Nanga Parbat Base Camp hike.",
    highlights: [
      "Karakoram Highway drive to Chilas",
      "Raikot Bridge jeep track to Tatoo Village",
      "Trek up to Fairy Meadows",
      "Beyal Camp and Nanga Parbat Base Camp hike",
      "Bonfire nights facing the Killer Mountain",
      "Lake Saif-ul-Malook on the way home",
    ],
    itinerary: [
      { day: "Day 1", title: "Lahore / Islamabad – Chilas", text: "Night departure from Lahore with an Islamabad pick-up. Travel along the Karakoram Highway with scenic stops, reaching Chilas for dinner and an overnight stay." },
      { day: "Day 2", title: "Chilas – Tatoo Village – Fairy Meadows", text: "Jeep ride from Raikot Bridge to Tatoo Village, then trek up to Fairy Meadows. Settle into huts with dinner, a bonfire and views of Nanga Parbat." },
      { day: "Day 3", title: "Beyal Camp & Nanga Parbat Base Camp", text: "Full-day guided hike to Beyal Camp and on towards Nanga Parbat Base Camp, returning to Fairy Meadows for dinner and an overnight stay." },
      { day: "Day 4", title: "Fairy Meadows – Chilas – Naran", text: "Free time in the meadows after breakfast, then trek back to Tatoo Village. Travel to Chilas and on to Naran for dinner and an overnight stay." },
      { day: "Day 5", title: "Naran – Islamabad – Lahore", text: "Morning jeep ride to Lake Saif-ul-Malook, then depart for Islamabad and Lahore. Note: if the Naran route is closed, the Besham route is used as an alternative." },
    ],
  },
  {
    slug: "shogran-valley-2-days",
    img: tourShogran,
    name: "Shogran Valley — 2 Days",
    region: "Kaghan • Shogran",
    days: "2 Days / 1 Night",
    audience: "Family • Weekend • Group",
    summary:
      "A short weekend break to Shogran and the Siri Paye Meadows, with pine forests, Balakot riverside stops and a bonfire evening.",
    highlights: [
      "Balakot and Kunhar River stops",
      "Jeep ride to Siri Paye Meadows",
      "Horse riding in the meadows",
      "Pine forest walks in Shogran",
      "Bonfire and BBQ evening",
      "Easy two-day weekend format",
    ],
    itinerary: [
      { day: "Day 1", title: "Lahore / Islamabad – Balakot – Shogran", text: "Night departure with an Islamabad pick-up and breakfast at Balakot. Drive up to Shogran, settle into the hotel and enjoy the evening with a bonfire and dinner." },
      { day: "Day 2", title: "Siri Paye Meadows – Return", text: "Early jeep ride to Siri Paye Meadows for photography and horse riding. Return to Shogran, check out and depart for Islamabad and Lahore." },
    ],
  },
  {
    slug: "murree-3-days",
    img: tourMurree,
    name: "Murree & Galiyat — 3 Days",
    region: "Punjab • Murree, Nathia Gali",
    days: "3 Days / 2 Nights",
    audience: "Family • Honeymoon • Group",
    summary:
      "Three easy days across Islamabad and the Galiyat — Faisal Mosque, Mall Road Murree, Nathia Gali, Ayubia chairlift and the Patriata cable car.",
    highlights: [
      "Faisal Mosque and Daman-e-Koh",
      "Mall Road Murree evening walk",
      "Nathia Gali pine forests",
      "Ayubia chairlift",
      "Patriata (New Murree) cable car",
      "Pir Sohawa viewpoint",
    ],
    itinerary: [
      { day: "Day 1", title: "Lahore – Islamabad – Murree", text: "Night departure from Lahore with an Islamabad pick-up. Visit Faisal Mosque and Daman-e-Koh, then drive to Murree for a Mall Road evening, dinner and an overnight stay." },
      { day: "Day 2", title: "Nathia Gali, Ayubia & Patriata", text: "After breakfast, explore Nathia Gali and Ayubia with a chairlift ride, then continue to Patriata for the cable car. Return to Murree for dinner and an overnight stay." },
      { day: "Day 3", title: "Murree – Return", text: "Check out after breakfast, enjoy last stops and shopping, then depart for Islamabad and Lahore." },
    ],
  },
  {
    slug: "mushkpuri-top-day-trip",
    img: tourMushkpuri,
    name: "Mushkpuri Top — 1 Day",
    region: "Galiyat • Dunga Gali",
    days: "1 Day",
    audience: "Trekking • Day Trip • Group",
    summary:
      "A single-day guided hike from Dunga Gali to Mushkpuri Top (9,200 ft) through thick pine forest, with sweeping Galiyat views.",
    highlights: [
      "Dunga Gali trailhead",
      "2–3 hour guided forest trek",
      "Mushkpuri Top summit views",
      "Nathia Gali tea stop",
      "Beginner-friendly day hike",
      "Same-day return to Islamabad and Lahore",
    ],
    itinerary: [
      { day: "Day 1", title: "Dunga Gali – Mushkpuri Top – Return", text: "Early morning departure with an Islamabad pick-up and breakfast en route. Begin the 2–3 hour trek from Dunga Gali to Mushkpuri Top, enjoy the summit views, then descend, stop at Nathia Gali and return the same evening." },
    ],
  },
  {
    slug: "islamabad-day-tour",
    img: tourIslamabad,
    name: "Islamabad City Tour — 1 Day",
    region: "Islamabad • Margalla Hills",
    days: "1 Day",
    audience: "Family • Day Trip • Group",
    summary:
      "A relaxed one-day city tour of Islamabad covering Faisal Mosque, Daman-e-Koh, the Pakistan Monument and Savour Foods.",
    highlights: [
      "Faisal Mosque",
      "Daman-e-Koh viewpoint",
      "Pakistan Monument and museum",
      "Lok Virsa and Shakarparian",
      "Savour Foods lunch stop",
      "Centaurus Mall shopping",
    ],
    itinerary: [
      { day: "Day 1", title: "Islamabad Highlights", text: "Morning departure and breakfast, then a full day across Islamabad — Faisal Mosque, Daman-e-Koh, the Pakistan Monument and Shakarparian, with a lunch stop at Savour Foods and time for shopping before the return journey." },
    ],
  },
  {
    slug: "mahodand-alpine-lakes",
    img: tourMahodand,
    name: "Mahodand Alpine Lakes",
    region: "Upper Swat",
    days: "4 Days",
    audience: "Family • Jeep Safari",
    summary: "A short alpine escape to Mahodand Lake and the high valleys above Kalam.",
  },
  {
    slug: "skardu-wilderness",
    img: tourSkardu,
    name: "Skardu Wilderness",
    region: "Gilgit-Baltistan • Skardu",
    days: "10 Days",
    audience: "Adventure • Private",
    summary: "An extended Skardu expedition across Deosai, Shigar and the cold deserts of Baltistan.",
  },
];

export const getTour = (slug: string) => tours.find((t) => t.slug === slug);

export function getRelatedTours(slug: string, count = 3): Tour[] {
  const index = tours.findIndex((t) => t.slug === slug);
  if (index === -1) return tours.slice(0, count);
  const related: Tour[] = [];
  for (let i = 1; related.length < count && i < tours.length; i += 1) {
    related.push(tours[(index + i) % tours.length]);
  }
  return related;
}
