import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get(`https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=Erk7a3jTraQqXIzAouMNhvAkmhZhvShU`, () => {
    return HttpResponse.json(
      [{
        status: "OK",
        copyright: "Copyright (c) 2024 The New York Times Company. All Rights Reserved.",
        section: "Travel",
        last_updated: "2024-07-05T10:25:43-04:00",
        num_results: 26,
        results: [
          {
            "section": "admin",
            "subsection": "",
            "title": "",
            "abstract": "",
            "url": "",
            "uri": "nyt://embeddedinteractive/6cb185ed-65ac-50a5-ace3-5bab81934245",
            "byline": "",
            "item_type": "EmbeddedInteractive",
            "updated_date": "2015-07-20T13:45:03-04:00",
            "created_date": "2015-04-16T14:13:18-04:00",
            "published_date": "2015-04-16T14:13:18-04:00",
            "material_type_facet": "",
            "kicker": "",
            "des_facet": [],
            "org_facet": [],
            "per_facet": [],
            "geo_facet": [],
            "multimedia": null,
            "short_url": ""
          },
          {
            "section": "style",
            "subsection": "",
            "title": "The Rise of the ‘Earlymoon’",
            "abstract": "Many couples are no longer waiting until after their weddings to take a trip.",
            "url": "https://www.nytimes.com/2024/07/06/style/the-rise-of-the-earlymoon.html",
            "uri": "nyt://article/331c6a1d-71d3-5fc1-bffb-0fc3600df38e",
            "byline": "By Allison Duncan",
            "item_type": "Article",
            "updated_date": "2024-07-06T13:58:09-04:00",
            "created_date": "2024-07-06T05:01:41-04:00",
            "published_date": "2024-07-06T05:01:41-04:00",
            "material_type_facet": "",
            "kicker": "Field Notes",
            "des_facet": [
              "Weddings and Engagements",
              "Travel and Vacations"
            ],
            "org_facet": [],
            "per_facet": [],
            "geo_facet": [],
            "multimedia": [
              {
                "url": "https://static01.nyt.com/images/2024/07/06/multimedia/06EARLYMOON-TREND-01-gvlq/06EARLYMOON-TREND-01-gvlq-superJumbo.jpg",
                "format": "Super Jumbo",
                "height": 1536,
                "width": 2048,
                "type": "image",
                "subtype": "photo",
                "caption": "Shrestha Maharaj and Sumeeth Suthurgam are among couples who have embraced the earlymoon trend. To unwind before their wedding last year, the couple spent a long weekend in Umdloti, a resort town on the northern coast of Kwa-Zulu Natal in South Africa, about a 45-minute drive from their house.",
                "copyright": "Shrestha Maharaj"
              },
              {
                "url": "https://static01.nyt.com/images/2024/07/06/multimedia/06EARLYMOON-TREND-01-gvlq/06EARLYMOON-TREND-01-gvlq-threeByTwoSmallAt2X.jpg",
                "format": "threeByTwoSmallAt2X",
                "height": 400,
                "width": 600,
                "type": "image",
                "subtype": "photo",
                "caption": "Shrestha Maharaj and Sumeeth Suthurgam are among couples who have embraced the earlymoon trend. To unwind before their wedding last year, the couple spent a long weekend in Umdloti, a resort town on the northern coast of Kwa-Zulu Natal in South Africa, about a 45-minute drive from their house.",
                "copyright": "Shrestha Maharaj"
              },
              {
                "url": "https://static01.nyt.com/images/2024/07/06/multimedia/06EARLYMOON-TREND-01-gvlq/06EARLYMOON-TREND-01-gvlq-thumbLarge.jpg",
                "format": "Large Thumbnail",
                "height": 150,
                "width": 150,
                "type": "image",
                "subtype": "photo",
                "caption": "Shrestha Maharaj and Sumeeth Suthurgam are among couples who have embraced the earlymoon trend. To unwind before their wedding last year, the couple spent a long weekend in Umdloti, a resort town on the northern coast of Kwa-Zulu Natal in South Africa, about a 45-minute drive from their house.",
                "copyright": "Shrestha Maharaj"
              }
            ],
            "short_url": ""
          },
          {
            "section": "t-magazine",
            "subsection": "",
            "title": "Jenna Lyons’s Favorite Beauty Products, From Eyeliner to Body Oil",
            "abstract": "Plus: a palace-inspired hotel in Jaipur, colorful French hand fans and more recommendations from T Magazine.",
            "url": "https://www.nytimes.com/2024/07/04/t-magazine/jenna-lyons-beauty-makeup-skin-care.html",
            "uri": "nyt://article/7732be68-b414-52a6-be69-820ebead78a5",
            "byline": "By Caitie Kelly",
            "item_type": "Article",
            "updated_date": "2024-07-04T20:54:55-04:00",
            "created_date": "2024-07-04T12:37:31-04:00",
            "published_date": "2024-07-04T12:37:31-04:00",
            "material_type_facet": "",
            "kicker": "",
            "des_facet": [
              "Cosmetics and Toiletries",
              "Hotels and Travel Lodgings",
              "Art",
              "Furniture",
              "Fans (Airflow)"
            ],
            "org_facet": [],
            "per_facet": [
              "Lyons, Jenna"
            ],
            "geo_facet": [],
            "multimedia": [
              {
                "url": "https://static01.nyt.com/images/2024/07/03/t-magazine/entertainment/03tmag-t-list-slide-MLR6-copy/03tmag-t-list-slide-MLR6-superJumbo.jpg",
                "format": "Super Jumbo",
                "height": 1365,
                "width": 2048,
                "type": "image",
                "subtype": "photo",
                "caption": "Left: The creative director, fashion designer and co-founder of false eyelash brand LoveSeen, Jenna Lyons, who also serves as a brand partner for skin care line Noble Panacea. Right, clockwise from top left: Dior Rosy Glow Blush in 001 Pink, $40; dior.com; Oribe Intense Conditioner for Moisture & Control; $52, oribe.com; Merit Flush Balm Cheek Color, $30, meritbeauty.com; Noble Panacea the Brilliant Glow Hydration Oil, $235, noblepanacea.com; Biologique Recherche Eye Care Concealer, mybr.com; Creed Silver Mountain Water, $470, creedboutique.com",
                "copyright": "Left: courtesy of Noble Panacea. Right: courtesy of the brands"
              },
              {
                "url": "https://static01.nyt.com/images/2024/07/03/t-magazine/entertainment/03tmag-t-list-slide-MLR6-copy/03tmag-t-list-slide-MLR6-threeByTwoSmallAt2X.jpg",
                "format": "threeByTwoSmallAt2X",
                "height": 400,
                "width": 600,
                "type": "image",
                "subtype": "photo",
                "caption": "Left: The creative director, fashion designer and co-founder of false eyelash brand LoveSeen, Jenna Lyons, who also serves as a brand partner for skin care line Noble Panacea. Right, clockwise from top left: Dior Rosy Glow Blush in 001 Pink, $40; dior.com; Oribe Intense Conditioner for Moisture & Control; $52, oribe.com; Merit Flush Balm Cheek Color, $30, meritbeauty.com; Noble Panacea the Brilliant Glow Hydration Oil, $235, noblepanacea.com; Biologique Recherche Eye Care Concealer, mybr.com; Creed Silver Mountain Water, $470, creedboutique.com",
                "copyright": "Left: courtesy of Noble Panacea. Right: courtesy of the brands"
              },
              {
                "url": "https://static01.nyt.com/images/2024/07/03/t-magazine/entertainment/03tmag-t-list-slide-MLR6-copy/03tmag-t-list-slide-MLR6-copy-thumbLarge.jpg",
                "format": "Large Thumbnail",
                "height": 150,
                "width": 150,
                "type": "image",
                "subtype": "photo",
                "caption": "Left: The creative director, fashion designer and co-founder of false eyelash brand LoveSeen, Jenna Lyons, who also serves as a brand partner for skin care line Noble Panacea. Right, clockwise from top left: Dior Rosy Glow Blush in 001 Pink, $40; dior.com; Oribe Intense Conditioner for Moisture & Control; $52, oribe.com; Merit Flush Balm Cheek Color, $30, meritbeauty.com; Noble Panacea the Brilliant Glow Hydration Oil, $235, noblepanacea.com; Biologique Recherche Eye Care Concealer, mybr.com; Creed Silver Mountain Water, $470, creedboutique.com",
                "copyright": "Left: courtesy of Noble Panacea. Right: courtesy of the brands"
              }
            ],
            "short_url": ""
          },
          {
            "section": "travel",
            "subsection": "",
            "title": "36 Hours in Boston",
            "abstract": "Soak up history, relax in beer gardens that pop open like tulips in summer, and make a pilgrimage to Fenway Park.",
            "url": "https://www.nytimes.com/interactive/2024/07/04/travel/things-to-do-boston.html",
            "uri": "nyt://interactive/66380366-4fc3-5202-8c41-3466d3028841",
            "byline": "By Jenna Russell",
            "item_type": "Interactive",
            "updated_date": "2024-07-04T05:03:26-04:00",
            "created_date": "2024-07-04T05:03:26-04:00",
            "published_date": "2024-07-04T05:03:26-04:00",
            "material_type_facet": "",
            "kicker": "36 Hours",
            "des_facet": [
              "Content Type: Service",
              "Bars and Nightclubs",
              "Coastal Areas",
              "Restaurants",
              "Historic Buildings and Sites",
              "Food",
              "Baseball",
              "Museums",
              "Travel and Vacations"
            ],
            "org_facet": [
              "Boston Red Sox",
              "Fenway Park (Boston)",
              "Kennedy, John F, Library and Museum",
              "Institute of Contemporary Art"
            ],
            "per_facet": [],
            "geo_facet": [
              "Boston (Mass)",
              "Boston Common",
              "Boston Harbor (Mass)",
              "New England States (US)",
              "Massachusetts",
              "United States"
            ],
            "multimedia": [
              {
                "url": "https://static01.nyt.com/images/2024/07/04/multimedia/04Hours-Boston-bhtv/04Hours-Boston-bhtv-superJumbo-v2.jpg",
                "format": "Super Jumbo",
                "height": 1365,
                "width": 2048,
                "type": "image",
                "subtype": "photo",
                "caption": "",
                "copyright": "Simon Simard for The New York Times"
              },
              {
                "url": "https://static01.nyt.com/images/2024/07/04/multimedia/04Hours-Boston-bhtv/04Hours-Boston-bhtv-threeByTwoSmallAt2X-v2.jpg",
                "format": "threeByTwoSmallAt2X",
                "height": 400,
                "width": 600,
                "type": "image",
                "subtype": "photo",
                "caption": "",
                "copyright": "Simon Simard for The New York Times"
              },
              {
                "url": "https://static01.nyt.com/images/2024/07/04/multimedia/04Hours-Boston-bhtv/04Hours-Boston-bhtv-thumbLarge-v2.jpg",
                "format": "Large Thumbnail",
                "height": 150,
                "width": 150,
                "type": "image",
                "subtype": "photo",
                "caption": "",
                "copyright": "Simon Simard for The New York Times"
              }
            ],
            "short_url": ""
          },
          {
            "section": "travel",
            "subsection": "",
            "title": "How to Handle Crowded Airports and Roads This Fourth of July",
            "abstract": "As record crowds hit the roads and the skies this week for the holiday, here’s what to know before traveling.",
            "url": "https://www.nytimes.com/2024/07/03/travel/travel-holiday-july-4.html",
            "uri": "nyt://article/da498547-d9bb-5513-b9d4-d5937494baea",
            "byline": "By Sara Ruberg",
            "item_type": "Article",
            "updated_date": "2024-07-03T12:50:53-04:00",
            "created_date": "2024-07-03T05:55:08-04:00",
            "published_date": "2024-07-03T05:55:08-04:00",
            "material_type_facet": "",
            "kicker": "",
            "des_facet": [
              "Independence Day (US) (July 4)",
              "Travel and Vacations",
              "Airports",
              "Fireworks"
            ],
            "org_facet": [
              "Transportation Security Administration"
            ],
            "per_facet": [],
            "geo_facet": [],
            "multimedia": [
              {
                "url": "https://static01.nyt.com/images/2024/07/02/multimedia/02xp-fourthtravel-ljhb/02xp-fourthtravel-ljhb-superJumbo.jpg",
                "format": "Super Jumbo",
                "height": 1418,
                "width": 2048,
                "type": "image",
                "subtype": "photo",
                "caption": "Travelers seen at Los Angeles International Airport on Tuesday. Experts predict Fourth of July weekend will break travel records.",
                "copyright": "Mario Tama/Getty Images"
              },
              {
                "url": "https://static01.nyt.com/images/2024/07/02/multimedia/02xp-fourthtravel-ljhb/02xp-fourthtravel-ljhb-threeByTwoSmallAt2X.jpg",
                "format": "threeByTwoSmallAt2X",
                "height": 400,
                "width": 600,
                "type": "image",
                "subtype": "photo",
                "caption": "Travelers seen at Los Angeles International Airport on Tuesday. Experts predict Fourth of July weekend will break travel records.",
                "copyright": "Mario Tama/Getty Images"
              },
              {
                "url": "https://static01.nyt.com/images/2024/07/02/multimedia/02xp-fourthtravel-ljhb/02xp-fourthtravel-ljhb-thumbLarge.jpg",
                "format": "Large Thumbnail",
                "height": 150,
                "width": 150,
                "type": "image",
                "subtype": "photo",
                "caption": "Travelers seen at Los Angeles International Airport on Tuesday. Experts predict Fourth of July weekend will break travel records.",
                "copyright": "Mario Tama/Getty Images"
              }
            ],
            "short_url": ""
          },
        ]
      }]
    )
  }),
  http.get(`https://api.nytimes.com/svc/news/v3/content/all/travel.json?api-key=Erk7a3jTraQqXIzAouMNhvAkmhZhvShU`, () => {
    return HttpResponse.json(
      [{
        status: "OK",
        copyright: "Copyright (c) 2024 The New York Times Company. All Rights Reserved.",
        section: "Travel",
        last_updated: "2024-07-05T10:25:43-04:00",
        num_results: 26,
        results: [
          {
            "section": "admin",
            "subsection": "",
            "title": "",
            "abstract": "",
            "url": "",
            "uri": "nyt://embeddedinteractive/6cb185ed-65ac-50a5-ace3-5bab81934245",
            "byline": "",
            "item_type": "EmbeddedInteractive",
            "updated_date": "2015-07-20T13:45:03-04:00",
            "created_date": "2015-04-16T14:13:18-04:00",
            "published_date": "2015-04-16T14:13:18-04:00",
            "material_type_facet": "",
            "kicker": "",
            "des_facet": [],
            "org_facet": [],
            "per_facet": [],
            "geo_facet": [],
            "multimedia": null,
            "short_url": ""
          },
          {
            "section": "style",
            "subsection": "",
            "title": "The Rise of the ‘Earlymoon’",
            "abstract": "Many couples are no longer waiting until after their weddings to take a trip.",
            "url": "https://www.nytimes.com/2024/07/06/style/the-rise-of-the-earlymoon.html",
            "uri": "nyt://article/331c6a1d-71d3-5fc1-bffb-0fc3600df38e",
            "byline": "By Allison Duncan",
            "item_type": "Article",
            "updated_date": "2024-07-06T13:58:09-04:00",
            "created_date": "2024-07-06T05:01:41-04:00",
            "published_date": "2024-07-06T05:01:41-04:00",
            "material_type_facet": "",
            "kicker": "Field Notes",
            "des_facet": [
              "Weddings and Engagements",
              "Travel and Vacations"
            ],
            "org_facet": [],
            "per_facet": [],
            "geo_facet": [],
            "multimedia": [
              {
                "url": "https://static01.nyt.com/images/2024/07/06/multimedia/06EARLYMOON-TREND-01-gvlq/06EARLYMOON-TREND-01-gvlq-superJumbo.jpg",
                "format": "Super Jumbo",
                "height": 1536,
                "width": 2048,
                "type": "image",
                "subtype": "photo",
                "caption": "Shrestha Maharaj and Sumeeth Suthurgam are among couples who have embraced the earlymoon trend. To unwind before their wedding last year, the couple spent a long weekend in Umdloti, a resort town on the northern coast of Kwa-Zulu Natal in South Africa, about a 45-minute drive from their house.",
                "copyright": "Shrestha Maharaj"
              },
              {
                "url": "https://static01.nyt.com/images/2024/07/06/multimedia/06EARLYMOON-TREND-01-gvlq/06EARLYMOON-TREND-01-gvlq-threeByTwoSmallAt2X.jpg",
                "format": "threeByTwoSmallAt2X",
                "height": 400,
                "width": 600,
                "type": "image",
                "subtype": "photo",
                "caption": "Shrestha Maharaj and Sumeeth Suthurgam are among couples who have embraced the earlymoon trend. To unwind before their wedding last year, the couple spent a long weekend in Umdloti, a resort town on the northern coast of Kwa-Zulu Natal in South Africa, about a 45-minute drive from their house.",
                "copyright": "Shrestha Maharaj"
              },
              {
                "url": "https://static01.nyt.com/images/2024/07/06/multimedia/06EARLYMOON-TREND-01-gvlq/06EARLYMOON-TREND-01-gvlq-thumbLarge.jpg",
                "format": "Large Thumbnail",
                "height": 150,
                "width": 150,
                "type": "image",
                "subtype": "photo",
                "caption": "Shrestha Maharaj and Sumeeth Suthurgam are among couples who have embraced the earlymoon trend. To unwind before their wedding last year, the couple spent a long weekend in Umdloti, a resort town on the northern coast of Kwa-Zulu Natal in South Africa, about a 45-minute drive from their house.",
                "copyright": "Shrestha Maharaj"
              }
            ],
            "short_url": ""
          },
          {
            "section": "t-magazine",
            "subsection": "",
            "title": "Jenna Lyons’s Favorite Beauty Products, From Eyeliner to Body Oil",
            "abstract": "Plus: a palace-inspired hotel in Jaipur, colorful French hand fans and more recommendations from T Magazine.",
            "url": "https://www.nytimes.com/2024/07/04/t-magazine/jenna-lyons-beauty-makeup-skin-care.html",
            "uri": "nyt://article/7732be68-b414-52a6-be69-820ebead78a5",
            "byline": "By Caitie Kelly",
            "item_type": "Article",
            "updated_date": "2024-07-04T20:54:55-04:00",
            "created_date": "2024-07-04T12:37:31-04:00",
            "published_date": "2024-07-04T12:37:31-04:00",
            "material_type_facet": "",
            "kicker": "",
            "des_facet": [
              "Cosmetics and Toiletries",
              "Hotels and Travel Lodgings",
              "Art",
              "Furniture",
              "Fans (Airflow)"
            ],
            "org_facet": [],
            "per_facet": [
              "Lyons, Jenna"
            ],
            "geo_facet": [],
            "multimedia": [
              {
                "url": "https://static01.nyt.com/images/2024/07/03/t-magazine/entertainment/03tmag-t-list-slide-MLR6-copy/03tmag-t-list-slide-MLR6-superJumbo.jpg",
                "format": "Super Jumbo",
                "height": 1365,
                "width": 2048,
                "type": "image",
                "subtype": "photo",
                "caption": "Left: The creative director, fashion designer and co-founder of false eyelash brand LoveSeen, Jenna Lyons, who also serves as a brand partner for skin care line Noble Panacea. Right, clockwise from top left: Dior Rosy Glow Blush in 001 Pink, $40; dior.com; Oribe Intense Conditioner for Moisture & Control; $52, oribe.com; Merit Flush Balm Cheek Color, $30, meritbeauty.com; Noble Panacea the Brilliant Glow Hydration Oil, $235, noblepanacea.com; Biologique Recherche Eye Care Concealer, mybr.com; Creed Silver Mountain Water, $470, creedboutique.com",
                "copyright": "Left: courtesy of Noble Panacea. Right: courtesy of the brands"
              },
              {
                "url": "https://static01.nyt.com/images/2024/07/03/t-magazine/entertainment/03tmag-t-list-slide-MLR6-copy/03tmag-t-list-slide-MLR6-threeByTwoSmallAt2X.jpg",
                "format": "threeByTwoSmallAt2X",
                "height": 400,
                "width": 600,
                "type": "image",
                "subtype": "photo",
                "caption": "Left: The creative director, fashion designer and co-founder of false eyelash brand LoveSeen, Jenna Lyons, who also serves as a brand partner for skin care line Noble Panacea. Right, clockwise from top left: Dior Rosy Glow Blush in 001 Pink, $40; dior.com; Oribe Intense Conditioner for Moisture & Control; $52, oribe.com; Merit Flush Balm Cheek Color, $30, meritbeauty.com; Noble Panacea the Brilliant Glow Hydration Oil, $235, noblepanacea.com; Biologique Recherche Eye Care Concealer, mybr.com; Creed Silver Mountain Water, $470, creedboutique.com",
                "copyright": "Left: courtesy of Noble Panacea. Right: courtesy of the brands"
              },
              {
                "url": "https://static01.nyt.com/images/2024/07/03/t-magazine/entertainment/03tmag-t-list-slide-MLR6-copy/03tmag-t-list-slide-MLR6-copy-thumbLarge.jpg",
                "format": "Large Thumbnail",
                "height": 150,
                "width": 150,
                "type": "image",
                "subtype": "photo",
                "caption": "Left: The creative director, fashion designer and co-founder of false eyelash brand LoveSeen, Jenna Lyons, who also serves as a brand partner for skin care line Noble Panacea. Right, clockwise from top left: Dior Rosy Glow Blush in 001 Pink, $40; dior.com; Oribe Intense Conditioner for Moisture & Control; $52, oribe.com; Merit Flush Balm Cheek Color, $30, meritbeauty.com; Noble Panacea the Brilliant Glow Hydration Oil, $235, noblepanacea.com; Biologique Recherche Eye Care Concealer, mybr.com; Creed Silver Mountain Water, $470, creedboutique.com",
                "copyright": "Left: courtesy of Noble Panacea. Right: courtesy of the brands"
              }
            ],
            "short_url": ""
          },
          {
            "section": "travel",
            "subsection": "",
            "title": "36 Hours in Boston",
            "abstract": "Soak up history, relax in beer gardens that pop open like tulips in summer, and make a pilgrimage to Fenway Park.",
            "url": "https://www.nytimes.com/interactive/2024/07/04/travel/things-to-do-boston.html",
            "uri": "nyt://interactive/66380366-4fc3-5202-8c41-3466d3028841",
            "byline": "By Jenna Russell",
            "item_type": "Interactive",
            "updated_date": "2024-07-04T05:03:26-04:00",
            "created_date": "2024-07-04T05:03:26-04:00",
            "published_date": "2024-07-04T05:03:26-04:00",
            "material_type_facet": "",
            "kicker": "36 Hours",
            "des_facet": [
              "Content Type: Service",
              "Bars and Nightclubs",
              "Coastal Areas",
              "Restaurants",
              "Historic Buildings and Sites",
              "Food",
              "Baseball",
              "Museums",
              "Travel and Vacations"
            ],
            "org_facet": [
              "Boston Red Sox",
              "Fenway Park (Boston)",
              "Kennedy, John F, Library and Museum",
              "Institute of Contemporary Art"
            ],
            "per_facet": [],
            "geo_facet": [
              "Boston (Mass)",
              "Boston Common",
              "Boston Harbor (Mass)",
              "New England States (US)",
              "Massachusetts",
              "United States"
            ],
            "multimedia": [
              {
                "url": "https://static01.nyt.com/images/2024/07/04/multimedia/04Hours-Boston-bhtv/04Hours-Boston-bhtv-superJumbo-v2.jpg",
                "format": "Super Jumbo",
                "height": 1365,
                "width": 2048,
                "type": "image",
                "subtype": "photo",
                "caption": "",
                "copyright": "Simon Simard for The New York Times"
              },
              {
                "url": "https://static01.nyt.com/images/2024/07/04/multimedia/04Hours-Boston-bhtv/04Hours-Boston-bhtv-threeByTwoSmallAt2X-v2.jpg",
                "format": "threeByTwoSmallAt2X",
                "height": 400,
                "width": 600,
                "type": "image",
                "subtype": "photo",
                "caption": "",
                "copyright": "Simon Simard for The New York Times"
              },
              {
                "url": "https://static01.nyt.com/images/2024/07/04/multimedia/04Hours-Boston-bhtv/04Hours-Boston-bhtv-thumbLarge-v2.jpg",
                "format": "Large Thumbnail",
                "height": 150,
                "width": 150,
                "type": "image",
                "subtype": "photo",
                "caption": "",
                "copyright": "Simon Simard for The New York Times"
              }
            ],
            "short_url": ""
          },
          {
            "section": "travel",
            "subsection": "",
            "title": "How to Handle Crowded Airports and Roads This Fourth of July",
            "abstract": "As record crowds hit the roads and the skies this week for the holiday, here’s what to know before traveling.",
            "url": "https://www.nytimes.com/2024/07/03/travel/travel-holiday-july-4.html",
            "uri": "nyt://article/da498547-d9bb-5513-b9d4-d5937494baea",
            "byline": "By Sara Ruberg",
            "item_type": "Article",
            "updated_date": "2024-07-03T12:50:53-04:00",
            "created_date": "2024-07-03T05:55:08-04:00",
            "published_date": "2024-07-03T05:55:08-04:00",
            "material_type_facet": "",
            "kicker": "",
            "des_facet": [
              "Independence Day (US) (July 4)",
              "Travel and Vacations",
              "Airports",
              "Fireworks"
            ],
            "org_facet": [
              "Transportation Security Administration"
            ],
            "per_facet": [],
            "geo_facet": [],
            "multimedia": [
              {
                "url": "https://static01.nyt.com/images/2024/07/02/multimedia/02xp-fourthtravel-ljhb/02xp-fourthtravel-ljhb-superJumbo.jpg",
                "format": "Super Jumbo",
                "height": 1418,
                "width": 2048,
                "type": "image",
                "subtype": "photo",
                "caption": "Travelers seen at Los Angeles International Airport on Tuesday. Experts predict Fourth of July weekend will break travel records.",
                "copyright": "Mario Tama/Getty Images"
              },
              {
                "url": "https://static01.nyt.com/images/2024/07/02/multimedia/02xp-fourthtravel-ljhb/02xp-fourthtravel-ljhb-threeByTwoSmallAt2X.jpg",
                "format": "threeByTwoSmallAt2X",
                "height": 400,
                "width": 600,
                "type": "image",
                "subtype": "photo",
                "caption": "Travelers seen at Los Angeles International Airport on Tuesday. Experts predict Fourth of July weekend will break travel records.",
                "copyright": "Mario Tama/Getty Images"
              },
              {
                "url": "https://static01.nyt.com/images/2024/07/02/multimedia/02xp-fourthtravel-ljhb/02xp-fourthtravel-ljhb-thumbLarge.jpg",
                "format": "Large Thumbnail",
                "height": 150,
                "width": 150,
                "type": "image",
                "subtype": "photo",
                "caption": "Travelers seen at Los Angeles International Airport on Tuesday. Experts predict Fourth of July weekend will break travel records.",
                "copyright": "Mario Tama/Getty Images"
              }
            ],
            "short_url": ""
          },
        ]
      }]
    )
  }),
  http.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=aviation&api-key=Erk7a3jTraQqXIzAouMNhvAkmhZhvShU`, () => {
    return HttpResponse.json(
      [{
        status: "OK",
        copyright: "Copyright (c) 2024 The New York Times Company. All Rights Reserved.",
        section: "Travel",
        last_updated: "2024-07-05T10:25:43-04:00",
        num_results: 26,
        results: [
          {
            "section": "admin",
            "subsection": "",
            "title": "",
            "abstract": "",
            "url": "",
            "uri": "nyt://embeddedinteractive/6cb185ed-65ac-50a5-ace3-5bab81934245",
            "byline": "",
            "item_type": "EmbeddedInteractive",
            "updated_date": "2015-07-20T13:45:03-04:00",
            "created_date": "2015-04-16T14:13:18-04:00",
            "published_date": "2015-04-16T14:13:18-04:00",
            "material_type_facet": "",
            "kicker": "",
            "des_facet": [],
            "org_facet": [],
            "per_facet": [],
            "geo_facet": [],
            "multimedia": null,
            "short_url": ""
          },
          {
            "section": "style",
            "subsection": "",
            "title": "The Rise of the ‘Earlymoon’",
            "abstract": "Many couples are no longer waiting until after their weddings to take a trip.",
            "url": "https://www.nytimes.com/2024/07/06/style/the-rise-of-the-earlymoon.html",
            "uri": "nyt://article/331c6a1d-71d3-5fc1-bffb-0fc3600df38e",
            "byline": "By Allison Duncan",
            "item_type": "Article",
            "updated_date": "2024-07-06T13:58:09-04:00",
            "created_date": "2024-07-06T05:01:41-04:00",
            "published_date": "2024-07-06T05:01:41-04:00",
            "material_type_facet": "",
            "kicker": "Field Notes",
            "des_facet": [
              "Weddings and Engagements",
              "Travel and Vacations"
            ],
            "org_facet": [],
            "per_facet": [],
            "geo_facet": [],
            "multimedia": [
              {
                "url": "https://static01.nyt.com/images/2024/07/06/multimedia/06EARLYMOON-TREND-01-gvlq/06EARLYMOON-TREND-01-gvlq-superJumbo.jpg",
                "format": "Super Jumbo",
                "height": 1536,
                "width": 2048,
                "type": "image",
                "subtype": "photo",
                "caption": "Shrestha Maharaj and Sumeeth Suthurgam are among couples who have embraced the earlymoon trend. To unwind before their wedding last year, the couple spent a long weekend in Umdloti, a resort town on the northern coast of Kwa-Zulu Natal in South Africa, about a 45-minute drive from their house.",
                "copyright": "Shrestha Maharaj"
              },
              {
                "url": "https://static01.nyt.com/images/2024/07/06/multimedia/06EARLYMOON-TREND-01-gvlq/06EARLYMOON-TREND-01-gvlq-threeByTwoSmallAt2X.jpg",
                "format": "threeByTwoSmallAt2X",
                "height": 400,
                "width": 600,
                "type": "image",
                "subtype": "photo",
                "caption": "Shrestha Maharaj and Sumeeth Suthurgam are among couples who have embraced the earlymoon trend. To unwind before their wedding last year, the couple spent a long weekend in Umdloti, a resort town on the northern coast of Kwa-Zulu Natal in South Africa, about a 45-minute drive from their house.",
                "copyright": "Shrestha Maharaj"
              },
              {
                "url": "https://static01.nyt.com/images/2024/07/06/multimedia/06EARLYMOON-TREND-01-gvlq/06EARLYMOON-TREND-01-gvlq-thumbLarge.jpg",
                "format": "Large Thumbnail",
                "height": 150,
                "width": 150,
                "type": "image",
                "subtype": "photo",
                "caption": "Shrestha Maharaj and Sumeeth Suthurgam are among couples who have embraced the earlymoon trend. To unwind before their wedding last year, the couple spent a long weekend in Umdloti, a resort town on the northern coast of Kwa-Zulu Natal in South Africa, about a 45-minute drive from their house.",
                "copyright": "Shrestha Maharaj"
              }
            ],
            "short_url": ""
          },
          {
            "section": "t-magazine",
            "subsection": "",
            "title": "Jenna Lyons’s Favorite Beauty Products, From Eyeliner to Body Oil",
            "abstract": "Plus: a palace-inspired hotel in Jaipur, colorful French hand fans and more recommendations from T Magazine.",
            "url": "https://www.nytimes.com/2024/07/04/t-magazine/jenna-lyons-beauty-makeup-skin-care.html",
            "uri": "nyt://article/7732be68-b414-52a6-be69-820ebead78a5",
            "byline": "By Caitie Kelly",
            "item_type": "Article",
            "updated_date": "2024-07-04T20:54:55-04:00",
            "created_date": "2024-07-04T12:37:31-04:00",
            "published_date": "2024-07-04T12:37:31-04:00",
            "material_type_facet": "",
            "kicker": "",
            "des_facet": [
              "Cosmetics and Toiletries",
              "Hotels and Travel Lodgings",
              "Art",
              "Furniture",
              "Fans (Airflow)"
            ],
            "org_facet": [],
            "per_facet": [
              "Lyons, Jenna"
            ],
            "geo_facet": [],
            "multimedia": [
              {
                "url": "https://static01.nyt.com/images/2024/07/03/t-magazine/entertainment/03tmag-t-list-slide-MLR6-copy/03tmag-t-list-slide-MLR6-superJumbo.jpg",
                "format": "Super Jumbo",
                "height": 1365,
                "width": 2048,
                "type": "image",
                "subtype": "photo",
                "caption": "Left: The creative director, fashion designer and co-founder of false eyelash brand LoveSeen, Jenna Lyons, who also serves as a brand partner for skin care line Noble Panacea. Right, clockwise from top left: Dior Rosy Glow Blush in 001 Pink, $40; dior.com; Oribe Intense Conditioner for Moisture & Control; $52, oribe.com; Merit Flush Balm Cheek Color, $30, meritbeauty.com; Noble Panacea the Brilliant Glow Hydration Oil, $235, noblepanacea.com; Biologique Recherche Eye Care Concealer, mybr.com; Creed Silver Mountain Water, $470, creedboutique.com",
                "copyright": "Left: courtesy of Noble Panacea. Right: courtesy of the brands"
              },
              {
                "url": "https://static01.nyt.com/images/2024/07/03/t-magazine/entertainment/03tmag-t-list-slide-MLR6-copy/03tmag-t-list-slide-MLR6-threeByTwoSmallAt2X.jpg",
                "format": "threeByTwoSmallAt2X",
                "height": 400,
                "width": 600,
                "type": "image",
                "subtype": "photo",
                "caption": "Left: The creative director, fashion designer and co-founder of false eyelash brand LoveSeen, Jenna Lyons, who also serves as a brand partner for skin care line Noble Panacea. Right, clockwise from top left: Dior Rosy Glow Blush in 001 Pink, $40; dior.com; Oribe Intense Conditioner for Moisture & Control; $52, oribe.com; Merit Flush Balm Cheek Color, $30, meritbeauty.com; Noble Panacea the Brilliant Glow Hydration Oil, $235, noblepanacea.com; Biologique Recherche Eye Care Concealer, mybr.com; Creed Silver Mountain Water, $470, creedboutique.com",
                "copyright": "Left: courtesy of Noble Panacea. Right: courtesy of the brands"
              },
              {
                "url": "https://static01.nyt.com/images/2024/07/03/t-magazine/entertainment/03tmag-t-list-slide-MLR6-copy/03tmag-t-list-slide-MLR6-copy-thumbLarge.jpg",
                "format": "Large Thumbnail",
                "height": 150,
                "width": 150,
                "type": "image",
                "subtype": "photo",
                "caption": "Left: The creative director, fashion designer and co-founder of false eyelash brand LoveSeen, Jenna Lyons, who also serves as a brand partner for skin care line Noble Panacea. Right, clockwise from top left: Dior Rosy Glow Blush in 001 Pink, $40; dior.com; Oribe Intense Conditioner for Moisture & Control; $52, oribe.com; Merit Flush Balm Cheek Color, $30, meritbeauty.com; Noble Panacea the Brilliant Glow Hydration Oil, $235, noblepanacea.com; Biologique Recherche Eye Care Concealer, mybr.com; Creed Silver Mountain Water, $470, creedboutique.com",
                "copyright": "Left: courtesy of Noble Panacea. Right: courtesy of the brands"
              }
            ],
            "short_url": ""
          },
          {
            "section": "travel",
            "subsection": "",
            "title": "36 Hours in Boston",
            "abstract": "Soak up history, relax in beer gardens that pop open like tulips in summer, and make a pilgrimage to Fenway Park.",
            "url": "https://www.nytimes.com/interactive/2024/07/04/travel/things-to-do-boston.html",
            "uri": "nyt://interactive/66380366-4fc3-5202-8c41-3466d3028841",
            "byline": "By Jenna Russell",
            "item_type": "Interactive",
            "updated_date": "2024-07-04T05:03:26-04:00",
            "created_date": "2024-07-04T05:03:26-04:00",
            "published_date": "2024-07-04T05:03:26-04:00",
            "material_type_facet": "",
            "kicker": "36 Hours",
            "des_facet": [
              "Content Type: Service",
              "Bars and Nightclubs",
              "Coastal Areas",
              "Restaurants",
              "Historic Buildings and Sites",
              "Food",
              "Baseball",
              "Museums",
              "Travel and Vacations"
            ],
            "org_facet": [
              "Boston Red Sox",
              "Fenway Park (Boston)",
              "Kennedy, John F, Library and Museum",
              "Institute of Contemporary Art"
            ],
            "per_facet": [],
            "geo_facet": [
              "Boston (Mass)",
              "Boston Common",
              "Boston Harbor (Mass)",
              "New England States (US)",
              "Massachusetts",
              "United States"
            ],
            "multimedia": [
              {
                "url": "https://static01.nyt.com/images/2024/07/04/multimedia/04Hours-Boston-bhtv/04Hours-Boston-bhtv-superJumbo-v2.jpg",
                "format": "Super Jumbo",
                "height": 1365,
                "width": 2048,
                "type": "image",
                "subtype": "photo",
                "caption": "",
                "copyright": "Simon Simard for The New York Times"
              },
              {
                "url": "https://static01.nyt.com/images/2024/07/04/multimedia/04Hours-Boston-bhtv/04Hours-Boston-bhtv-threeByTwoSmallAt2X-v2.jpg",
                "format": "threeByTwoSmallAt2X",
                "height": 400,
                "width": 600,
                "type": "image",
                "subtype": "photo",
                "caption": "",
                "copyright": "Simon Simard for The New York Times"
              },
              {
                "url": "https://static01.nyt.com/images/2024/07/04/multimedia/04Hours-Boston-bhtv/04Hours-Boston-bhtv-thumbLarge-v2.jpg",
                "format": "Large Thumbnail",
                "height": 150,
                "width": 150,
                "type": "image",
                "subtype": "photo",
                "caption": "",
                "copyright": "Simon Simard for The New York Times"
              }
            ],
            "short_url": ""
          },
          {
            "section": "travel",
            "subsection": "",
            "title": "How to Handle Crowded Airports and Roads This Fourth of July",
            "abstract": "As record crowds hit the roads and the skies this week for the holiday, here’s what to know before traveling.",
            "url": "https://www.nytimes.com/2024/07/03/travel/travel-holiday-july-4.html",
            "uri": "nyt://article/da498547-d9bb-5513-b9d4-d5937494baea",
            "byline": "By Sara Ruberg",
            "item_type": "Article",
            "updated_date": "2024-07-03T12:50:53-04:00",
            "created_date": "2024-07-03T05:55:08-04:00",
            "published_date": "2024-07-03T05:55:08-04:00",
            "material_type_facet": "",
            "kicker": "",
            "des_facet": [
              "Independence Day (US) (July 4)",
              "Travel and Vacations",
              "Airports",
              "Fireworks"
            ],
            "org_facet": [
              "Transportation Security Administration"
            ],
            "per_facet": [],
            "geo_facet": [],
            "multimedia": [
              {
                "url": "https://static01.nyt.com/images/2024/07/02/multimedia/02xp-fourthtravel-ljhb/02xp-fourthtravel-ljhb-superJumbo.jpg",
                "format": "Super Jumbo",
                "height": 1418,
                "width": 2048,
                "type": "image",
                "subtype": "photo",
                "caption": "Travelers seen at Los Angeles International Airport on Tuesday. Experts predict Fourth of July weekend will break travel records.",
                "copyright": "Mario Tama/Getty Images"
              },
              {
                "url": "https://static01.nyt.com/images/2024/07/02/multimedia/02xp-fourthtravel-ljhb/02xp-fourthtravel-ljhb-threeByTwoSmallAt2X.jpg",
                "format": "threeByTwoSmallAt2X",
                "height": 400,
                "width": 600,
                "type": "image",
                "subtype": "photo",
                "caption": "Travelers seen at Los Angeles International Airport on Tuesday. Experts predict Fourth of July weekend will break travel records.",
                "copyright": "Mario Tama/Getty Images"
              },
              {
                "url": "https://static01.nyt.com/images/2024/07/02/multimedia/02xp-fourthtravel-ljhb/02xp-fourthtravel-ljhb-thumbLarge.jpg",
                "format": "Large Thumbnail",
                "height": 150,
                "width": 150,
                "type": "image",
                "subtype": "photo",
                "caption": "Travelers seen at Los Angeles International Airport on Tuesday. Experts predict Fourth of July weekend will break travel records.",
                "copyright": "Mario Tama/Getty Images"
              }
            ],
            "short_url": ""
          },
        ]
      }]
    )
  }),
]