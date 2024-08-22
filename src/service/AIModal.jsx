import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

   export  const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for tocation: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with around 4 to 5 options which align with the budget with HotelName, Hotel address, Approximate Pricing for one night for a room in the hotel, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Rating, best time of day to travel each of the location for 3 days with each day plan with best time to visit and order the places to visit according to the time to visit JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"hotels\": [\n    {\n      \"hotelName\": \"The D Las Vegas\",\n      \"hotelAddress\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$100-$200\",\n      \"hotelImageUrl\": \"https://www.thedonlinecasino.com/sites/default/files/styles/hero_slider/public/images/hero-slider-images/the-d-hero-banner.jpg?itok=sC5d6x0N\",\n      \"geoCoordinates\": \"36.1699, -115.1425\",\n      \"rating\": 4.0,\n      \"description\": \"A budget-friendly casino hotel located in the heart of Fremont Street Experience, offering affordable rooms, a lively casino, and a variety of dining options.\"\n    },\n    {\n      \"hotelName\": \"Golden Nugget Las Vegas\",\n      \"hotelAddress\": \"129 E Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$$$\",\n      \"hotelImageUrl\": \"https://www.goldennugget.com/las-vegas/media/images/gnl-hotel-exterior-hero.jpg\",\n      \"geoCoordinates\": \"36.1694, -115.1421\",\n      \"rating\": 4.5,\n      \"description\": \"A historic and glamorous hotel with a vibrant casino, multiple restaurants, and a world-famous shark tank.\"\n    },\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"price\": \"$$\",\n      \"hotelImageUrl\": \"https://www.circuscircus.com/media/images/hero-images/circus-circus-las-vegas-hotel-hero-image.jpg\",\n      \"geoCoordinates\": \"36.1126, -115.1724\",\n      \"rating\": 3.5,\n      \"description\": \"A family-friendly hotel with a carnival theme, offering affordable rooms, a large casino, and a variety of entertainment options.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": 1,\n      \"title\": \"Fremont Street Experience & Downtown Delights\",\n      \"description\": \"Start your day with a walk down the vibrant Fremont Street Experience, a pedestrian-friendly street adorned with an impressive canopy of lights. Explore the historic downtown area, with its vintage casinos and neon signs. Enjoy a budget-friendly meal at one of the many restaurants along Fremont Street.\",\n      \"places\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"A vibrant pedestrian mall with a canopy of lights, live entertainment, and vintage casinos.\",\n          \"placeImageUrl\": \"https://www.visitlasvegas.com/sites/default/files/styles/hero_slider/public/images/hero-slider-images/downtown-las-vegas-fremont-street-experience-canopy-lights.jpg?itok=9Q62Qj2r\",\n          \"geoCoordinates\": \"36.1699, -115.1425\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"timeToVisit\": \"11am to 1pm\"\n          \"timeToTravel\": \"2 hours\"\n        },\n        {\n          \"placeName\": \"The Golden Nugget\",\n          \"placeDetails\": \"A historic casino hotel with a vibrant atmosphere and a world-famous shark tank.\",\n          \"placeImageUrl\": \"https://www.goldennugget.com/las-vegas/media/images/gnl-hotel-exterior-hero.jpg\",\n          \"geoCoordinates\": \"36.1694, -115.1421\",\n          \"ticketPricing\": \"Free entry, attraction fees may apply\",\n          \"rating\": 4.0,\n            \"timeToVisit\": \"9am to 11am\"\n              \"timeToTravel\": \"1 hour\"\n        },\n        {\n          \"placeName\": \"Neon Museum\",\n          \"placeDetails\": \"A museum showcasing the iconic neon signs of Las Vegas history.\",\n          \"placeImageUrl\": \"https://www.neonmuseum.org/wp-content/uploads/2023/04/Neon-Museum-Sign-Collection.jpg\",\n          \"geoCoordinates\": \"36.1703, -115.1428\",\n          \"ticketPricing\": \"$25 per person\",\n          \"rating\": 4.5,\n            \"timeToVisit\": \"2pm to 4pm\"\n                \"timeToTravel\": \"1 hour  30 mins\"\n        }\n      ],\n      \"bestTimeToVisit\": \"Evening for the Fremont Street Experience lightshow\"\n    },\n    {\n      \"day\": 2,\n      \"title\": \"Exploring the Strip & Budget-Friendly Entertainment\",\n      \"description\": \"Take a walk along the iconic Las Vegas Strip, admiring the grand hotels and casinos. Enjoy free entertainment, such as the Bellagio fountains, the Volcano at The Mirage, and the Sirens of TI show at Treasure Island. Find affordable dining options at food courts or local restaurants.\",\n      \"places\": [\n        {\n          \"placeName\": \"Bellagio Fountains\",\n          \"placeDetails\": \"A spectacular water and light show in front of the Bellagio Hotel.\",\n          \"placeImageUrl\": \"https://www.bellagio.com/content/dam/bellagio/images/hero-images/bellagio-fountains-show-las-vegas.jpg\",\n          \"geoCoordinates\": \"36.1122, -115.1720\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n                \"timeToVisit\": \"1pm to 2pm\"\n                     \"timeToTravel\": \"30 minutes\"\n        },\n        {\n          \"placeName\": \"The Mirage Volcano\",\n          \"placeDetails\": \"A dramatic fire and water show featuring a volcano eruption.\",\n          \"placeImageUrl\": \"https://www.mirage.com/content/dam/mirage/images/hero-images/volcano-show-las-vegas.jpg\",\n          \"geoCoordinates\": \"36.1100, -115.1740\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.0,\n                \"timeToVisit\": \"4pm to 6pm\"\n                  \"timeToTravel\": \"30 minutes\"\n        },\n        {\n          \"placeName\": \"Sirens of TI Show\",\n          \"placeDetails\": \"A free pirate-themed show at Treasure Island Hotel.\",\n          \"placeImageUrl\": \"https://www.treasureisland.com/media/images/hero-images/ti-sirens-show-las-vegas.jpg\",\n          \"geoCoordinates\": \"36.1099, -115.1727\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.0,\n         \"timeToVisit\": \"10am to 12pm\"\n                        \"timeToTravel\": \"30 minutes\"\n        }\n      ],\n      \"bestTimeToVisit\": \"Evening for the shows\"\n    },\n    {\n      \"day\": 3,\n      \"title\": \"Hidden Gems & Local Flavor\",\n      \"description\": \"Discover hidden gems in Las Vegas, like the Arts District, Container Park, or the Mob Museum. Enjoy a local experience with a delicious meal at a food truck park or a casual restaurant known for its authentic cuisine.\",\n      \"places\": [\n        {\n          \"placeName\": \"Arts District\",\n          \"placeDetails\": \"A vibrant neighborhood with art galleries, murals, and unique shops.\",\n          \"placeImageUrl\": \"https://www.visitlasvegas.com/sites/default/files/styles/hero_slider/public/images/hero-slider-images/arts-district-las-vegas.jpg?itok=c5l37lX4\",\n          \"geoCoordinates\": \"36.1670, -115.1373\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n                  \"timeToVisit\": \"12pm to 2pm\"\n         \"timeToTravel\": \"2 hours\"\n        },\n        {\n          \"placeName\": \"Container Park\",\n          \"placeDetails\": \"A unique outdoor shopping and dining area made of shipping containers.\",\n          \"placeImageUrl\": \"https://www.visitlasvegas.com/sites/default/files/styles/hero_slider/public/images/hero-slider-images/container-park-las-vegas.jpg?itok=08hZ6T7K\",\n          \"geoCoordinates\": \"36.1681, -115.1465\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.0,\n       \"timeToVisit\": \"3pm to 5pm\"\n          \"timeToTravel\": \"1 hour\"\n        },\n        {\n          \"placeName\": \"Mob Museum\",\n          \"placeDetails\": \"A museum dedicated to the history of organized crime in Las Vegas and beyond.\",\n          \"placeImageUrl\": \"https://www.themobmuseum.org/media/images/mob-museum-hero-image-v4.jpg\",\n          \"geoCoordinates\": \"36.1699, -115.1423\",\n          \"ticketPricing\": \"$25 per person\",\n          \"rating\": 4.5,\n        \"timeToVisit\": \"5pm to 7pm\"\n       \"timeToTravel\": \"2 hours\"\n        }\n      ],\n      \"bestTimeToVisit\": \"Afternoon or evening for a relaxed pace\"\n    }\n  ]\n}\n```\n\n**Notes:**\n\n* This itinerary is just a suggestion and can be customized to your preferences.\n* Prices for hotels and attractions are approximate and can vary depending on the time of year and availability.\n* Consider using public transportation or ride-sharing services to get around Las Vegas to save on parking and gas costs.\n* Look for deals and discounts online and at the hotels for food, entertainment, and attractions.\n\n**Have a wonderful trip to Las Vegas!** \n"},
          ],
        },
      ],
    });

