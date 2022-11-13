import "./Map.css"
import React from "react";
import {
    MapContainer,
    TileLayer,
    useMapEvents
} from "react-leaflet";
import { useState, useEffect } from "react"
import * as L from "leaflet";
import Navbar from "../Navbar/Navbar";

const data = {
    "html_attributions": [],
    "next_page_token": "AW30NDzEyNqFGKYxBAOlOolrYnL9Q1bOHI9yBfONIKjDlUE-O-a63g6YJMz2ptRuyh_yNc-dtmoeb5qXUMQrKAJOtzH0yPkXjgMGLKntHnSjtq7gRd6uW-AGluqFoLrusRkdNCp98-Zjt2YBmznaLO0UZ7t9HjTAMDoWya8lViOPrl5rLo2vkne1dceVBxfi1FkxoXLlar18mPno6eZMcwqLrI9kGMyfrDpxtyy3DzXomVpxTn8m01K3p5xCEchXC8VM1SHS-KPE2qm6PLg_hRuQiniKyplv9poMLwUqn6MYu-OukdURnjN29NNx41cA6bgGbvhyOlPpGiWXGZSFxHvZNll-bStvw4JFZx_Eut8IdM6GuKoCiSgGc3xvyaFMcYvAPG90ZrvH-bDzAhAA2_o4R7hcV1UYhmXsjaCR9fnOIr89iJ6IkyFuQVFRvZFFpCVr",
    "results": [
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 32.8419982,
                    "lng": -96.66355969999999
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.84337567989272,
                        "lng": -96.66224207010727
                    },
                    "southwest": {
                        "lat": 32.84067602010727,
                        "lng": -96.6649417298927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
            "icon_background_color": "#4B96F3",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
            "name": "[ MY - STORE ]",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 422,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/117577020206898492290\">My Store</a>"
                    ],
                    "photo_reference": "AW30NDw7Fg5ox9o3_Jypz61Q7Pq2PWuXAbpVEN8kc8R4skuTdID-WdrPtPisBDguqlNghnEgB6Jw6fv2cK2fyhdUXAHdyWkP4ceH6GsYdFH6PX5h8tdZ9gFFVwg1MF9ZcJlEyyv9nZ3ka1yTDYhw2Rud1lQXxSF5N6oFy-ylKQyBS4nRqv4S",
                    "width": 750
                }
            ],
            "place_id": "ChIJU9Uy0symToYRILGfdQFM3CU",
            "plus_code": {
                "compound_code": "R8RP+QH Dallas, Texas",
                "global_code": "8645R8RP+QH"
            },
            "rating": 4.6,
            "reference": "ChIJU9Uy0symToYRILGfdQFM3CU",
            "scope": "GOOGLE",
            "types": [
                "convenience_store",
                "liquor_store",
                "jewelry_store",
                "grocery_or_supermarket",
                "store",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 16,
            "vicinity": "10810 Ferguson Rd #2616, Dallas"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 32.7855684,
                    "lng": -96.7560261
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.78690242989272,
                        "lng": -96.75466552010727
                    },
                    "southwest": {
                        "lat": 32.78420277010728,
                        "lng": -96.7573651798927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
            "icon_background_color": "#4B96F3",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
            "name": "Stuff More Groceries Store",
            "opening_hours": {
                "open_now": true
            },
            "place_id": "ChIJGe4-ObeZToYRNucpD6nu4H8",
            "plus_code": {
                "compound_code": "Q6PV+6J Dallas, Texas",
                "global_code": "8645Q6PV+6J"
            },
            "rating": 5,
            "reference": "ChIJGe4-ObeZToYRNucpD6nu4H8",
            "scope": "GOOGLE",
            "types": [
                "convenience_store",
                "travel_agency",
                "grocery_or_supermarket",
                "store",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 5,
            "vicinity": "4702 E Grand Ave, Dallas"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 32.832588,
                    "lng": -97.01017709999999
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.83396532989272,
                        "lng": -97.00869117010727
                    },
                    "southwest": {
                        "lat": 32.83126567010728,
                        "lng": -97.01139082989272
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
            "icon_background_color": "#4B96F3",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
            "name": "Shop N Go",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 2268,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111714660110381891027\">biplab wagle</a>"
                    ],
                    "photo_reference": "AW30NDw2kYbgj-lSdjlfd3HoufxYlam7pf0P5pL01hTKmjI1hdQvMnAj5miAotGHxYDvMr5dL1K24n0axvzFP7SZVJzAxIir38dSBOeHyuuku5DuYHcl1yUMVFvqwPsQFyJ7GUlwm5kbW1Az77VcYOwgLvPYZDwCJ5KBw5k0tg55RRTp-URR",
                    "width": 4032
                }
            ],
            "place_id": "ChIJo290hX6BToYRk07fnzDHLxE",
            "plus_code": {
                "compound_code": "RXMQ+2W Irving, Texas",
                "global_code": "8644RXMQ+2W"
            },
            "rating": 4.9,
            "reference": "ChIJo290hX6BToYRk07fnzDHLxE",
            "scope": "GOOGLE",
            "types": [
                "convenience_store",
                "liquor_store",
                "grocery_or_supermarket",
                "store",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 10,
            "vicinity": "1885 Esters Rd #110, Irving"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 32.7088727,
                    "lng": -97.0126904
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.71022012989273,
                        "lng": -97.01125222010728
                    },
                    "southwest": {
                        "lat": 32.70752047010728,
                        "lng": -97.01395187989273
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
            "icon_background_color": "#4B96F3",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
            "name": "Shop & Save",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 810,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114167277283019234475\">A Google User</a>"
                    ],
                    "photo_reference": "AW30NDwRsYyWTwiijCVDi0Egy5mp-tMoRvduw9wmNoZq_YiMr7E72kHaUMKTEjRuBa8hKUrSSCGSEy7-V6u7lbEd8FsPAjVTnLnehuk5y8x0_BV988alC2hgEXKP6g5DqEcfsMgbfjjItGMgLS90EgJn5zGk8gNh_fO82bT-3JiRR5yQZ0Zo",
                    "width": 1440
                }
            ],
            "place_id": "ChIJH193rQ2HToYRamO9V5txWtk",
            "plus_code": {
                "compound_code": "PX5P+GV Grand Prairie, Texas",
                "global_code": "8644PX5P+GV"
            },
            "rating": 5,
            "reference": "ChIJH193rQ2HToYRamO9V5txWtk",
            "scope": "GOOGLE",
            "types": [
                "convenience_store",
                "liquor_store",
                "grocery_or_supermarket",
                "store",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 1,
            "vicinity": "2410 Brady Ln, Grand Prairie"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 32.7013258,
                    "lng": -96.8057692
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.70272807989272,
                        "lng": -96.80454517010727
                    },
                    "southwest": {
                        "lat": 32.70002842010728,
                        "lng": -96.80724482989272
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
            "icon_background_color": "#4B96F3",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
            "name": "Stop 'n Save Market",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 1080,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/104640409552273485018\">Ayman Sharif</a>"
                    ],
                    "photo_reference": "AW30NDyk3MuwfXmByDjhr82Zwj741GdL_iIhiYoOu0m5CRnMmuoiAnzj_YiPSfQAA2eE0Xr2oNI816GPncar93cMNqn7W-O9k_5e3HPTCyUFbosFmTiwggXJoMcRPFdin-zX442-WRwriMFHCEJIfUvquBnhOMN42Nz20hCNLYQr41Gk9EQA",
                    "width": 1920
                }
            ],
            "place_id": "ChIJgalRCm-XToYRzSCjex9C_0I",
            "plus_code": {
                "compound_code": "P52V+GM Dallas, Texas",
                "global_code": "8645P52V+GM"
            },
            "rating": 4.5,
            "reference": "ChIJgalRCm-XToYRzSCjex9C_0I",
            "scope": "GOOGLE",
            "types": [
                "convenience_store",
                "store",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 12,
            "vicinity": "1406 E Overton Rd, Dallas"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 32.7019953,
                    "lng": -96.78486669999999
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.70335467989272,
                        "lng": -96.78346732010728
                    },
                    "southwest": {
                        "lat": 32.70065502010728,
                        "lng": -96.78616697989271
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
            "icon_background_color": "#4B96F3",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
            "name": "P & S Corner Store",
            "opening_hours": {
                "open_now": true
            },
            "place_id": "ChIJp5sbEJuXToYRb1L2UZB-1Rw",
            "plus_code": {
                "compound_code": "P628+Q2 Dallas, Texas",
                "global_code": "8645P628+Q2"
            },
            "rating": 4.6,
            "reference": "ChIJp5sbEJuXToYRb1L2UZB-1Rw",
            "scope": "GOOGLE",
            "types": [
                "convenience_store",
                "store",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 13,
            "vicinity": "4203 Dalton Dr, Dallas"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 32.8119732,
                    "lng": -96.8119543
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.81327112989272,
                        "lng": -96.81061862010729
                    },
                    "southwest": {
                        "lat": 32.81057147010727,
                        "lng": -96.81331827989273
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
            "icon_background_color": "#4B96F3",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
            "name": "C-Store 12",
            "opening_hours": {
                "open_now": true
            },
            "place_id": "ChIJJ653s8meToYRkvmGDZWVDz4",
            "plus_code": {
                "compound_code": "R56Q+Q6 Dallas, Texas",
                "global_code": "8645R56Q+Q6"
            },
            "rating": 3,
            "reference": "ChIJJ653s8meToYRkvmGDZWVDz4",
            "scope": "GOOGLE",
            "types": [
                "convenience_store",
                "store",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 2,
            "vicinity": "Cedar Springs Rd, Dallas"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 32.6974069,
                    "lng": -96.76394649999999
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.69866862989272,
                        "lng": -96.76258427010728
                    },
                    "southwest": {
                        "lat": 32.69596897010727,
                        "lng": -96.76528392989273
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
            "icon_background_color": "#4B96F3",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
            "name": "Stop & Shop Food Store",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 4128,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/117290828946924490489\">Asaad Ahmad</a>"
                    ],
                    "photo_reference": "AW30NDyxhq0PHXS3sxW14C_QI1V1gwWrBrhHI-4MiA8z0Mlup5copAvZRPBZ534ip00iGwgNT_SG5c6yFLhAL5IxDveASLHjJckOgM4vWYC2eHAXdDe2J2pf_BayZAmMAGelBX5NjG2tOFP8haSEFuJJOMmpBwFrp9f9ieiESQuaE_57JXGp",
                    "width": 3096
                }
            ],
            "place_id": "ChIJf9g3bOmXToYR0KTN-zQLhhw",
            "plus_code": {
                "compound_code": "M6XP+29 Dallas, Texas",
                "global_code": "8645M6XP+29"
            },
            "rating": 4.2,
            "reference": "ChIJf9g3bOmXToYR0KTN-zQLhhw",
            "scope": "GOOGLE",
            "types": [
                "convenience_store",
                "store",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 5,
            "vicinity": "3195 S Great Trinity Forest Way, Dallas"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 32.8179129,
                    "lng": -96.94201009999999
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.81921827989272,
                        "lng": -96.94066142010728
                    },
                    "southwest": {
                        "lat": 32.81651862010727,
                        "lng": -96.94336107989271
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
            "icon_background_color": "#4B96F3",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
            "name": "STOP AND SHOP 2",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/116912755968825710642\">A Google User</a>"
                    ],
                    "photo_reference": "AW30NDyO1AT7uKJLAYCQ9It0n4Qg_euN4iujGx7Z_NHpsOmuVjZt9hDr3w3Tskgn80iCPXA2AvYvbA6H4WT0hjhxeik3zGjDfVNoPQf8rTKAaPEP2UPlFFAbrLfMuZWiSMVDWU6Qej7nvZWYxV35hAj6T9KfHF9296qJogNqCZHQgdjgoBD8",
                    "width": 3024
                }
            ],
            "place_id": "ChIJ7T76G0CDToYRuLb7KH6Z7v4",
            "plus_code": {
                "compound_code": "R395+65 Irving, Texas",
                "global_code": "8645R395+65"
            },
            "rating": 4,
            "reference": "ChIJ7T76G0CDToYRuLb7KH6Z7v4",
            "scope": "GOOGLE",
            "types": [
                "convenience_store",
                "store",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 7,
            "vicinity": "401 E Pioneer Dr, Irving"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 32.6462887,
                    "lng": -96.90141629999999
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.64765832989271,
                        "lng": -96.89998117010728
                    },
                    "southwest": {
                        "lat": 32.64495867010727,
                        "lng": -96.90268082989272
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
            "icon_background_color": "#4B96F3",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
            "name": "Just Stop Convenience Store LLC",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/100710372345520475275\">A Google User</a>"
                    ],
                    "photo_reference": "AW30NDy4UfTQ8kahrW5Hz5ZZXhJzmsHAJ9Su6TuCdl0zpBTEqw6rBh7TxbwTP9VI5Kjp-zf8z0fSKBccIJ61Igy4w41jvcr1NKOLjJuUkYKQWY7D1GSeYmBM33iXepQEKPW-L0XblVQgW8SSxVup5dyogJfcA6dgLQHRhAB31AhkreoNAEvL",
                    "width": 3024
                }
            ],
            "place_id": "ChIJ3UwmAaCRToYRihEK4A0jHDA",
            "plus_code": {
                "compound_code": "J3WX+GC Duncanville, Texas",
                "global_code": "8645J3WX+GC"
            },
            "rating": 0,
            "reference": "ChIJ3UwmAaCRToYRihEK4A0jHDA",
            "scope": "GOOGLE",
            "types": [
                "convenience_store",
                "store",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 0,
            "vicinity": "454 E Wheatland Rd, Duncanville"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 32.7901331,
                    "lng": -96.7878094
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.79143852989272,
                        "lng": -96.78642042010728
                    },
                    "southwest": {
                        "lat": 32.78873887010727,
                        "lng": -96.78912007989273
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
            "icon_background_color": "#4B96F3",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
            "name": "Corner Store",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/104381731036278054017\">A Google User</a>"
                    ],
                    "photo_reference": "AW30NDx_WhhxuiKIgDvtrLVy3cddmGI6CgTlrDIGjwGLObALTn5AsSZh-4K6YxelnGJCVofZexK3CtW-_YK56OjI30eu-ANEzXRE7SjUg7eeMOVSE-paBpEkFOru6i7AyxJudrnI8943JJW8d_S0jp4HzdVEfJpeKy3F-1nsBe6944CKv0N2",
                    "width": 4032
                }
            ],
            "place_id": "ChIJF5cTWFCZToYRA6gb2o5V2YQ",
            "plus_code": {
                "compound_code": "Q6R6+3V Dallas, Texas",
                "global_code": "8645Q6R6+3V"
            },
            "rating": 5,
            "reference": "ChIJF5cTWFCZToYRA6gb2o5V2YQ",
            "scope": "GOOGLE",
            "types": [
                "convenience_store",
                "liquor_store",
                "store",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 1,
            "vicinity": "2827 Live Oak St, Dallas"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 32.8622185,
                    "lng": -96.6488344
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.86360027989273,
                        "lng": -96.64746117010728
                    },
                    "southwest": {
                        "lat": 32.86090062010728,
                        "lng": -96.65016082989273
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
            "icon_background_color": "#4B96F3",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/shoppingcart_pinlet",
            "name": "1 Stop Food Store",
            "opening_hours": {
                "open_now": true
            },
            "place_id": "ChIJvwl3nSanToYRJYtuzdpCFFs",
            "plus_code": {
                "compound_code": "V962+VF Garland, Texas",
                "global_code": "8645V962+VF"
            },
            "rating": 3.9,
            "reference": "ChIJvwl3nSanToYRJYtuzdpCFFs",
            "scope": "GOOGLE",
            "types": [
                "grocery_or_supermarket",
                "store",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 32,
            "vicinity": "750415702, 4517 Saturn Rd, Garland"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 32.7519011,
                    "lng": -96.756208
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.75330347989271,
                        "lng": -96.75490842010728
                    },
                    "southwest": {
                        "lat": 32.75060382010727,
                        "lng": -96.75760807989273
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
            "icon_background_color": "#4B96F3",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
            "name": "Allen's Grocery Market",
            "opening_hours": {
                "open_now": false
            },
            "place_id": "ChIJH0bdanqYToYRL4ET5hxtPxs",
            "plus_code": {
                "compound_code": "Q62V+PG Dallas, Texas",
                "global_code": "8645Q62V+PG"
            },
            "rating": 4.8,
            "reference": "ChIJH0bdanqYToYRL4ET5hxtPxs",
            "scope": "GOOGLE",
            "types": [
                "convenience_store",
                "grocery_or_supermarket",
                "store",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 4,
            "vicinity": "2500 Lawrence St, Dallas"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 32.6747411,
                    "lng": -96.8071253
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.67615057989273,
                        "lng": -96.80576772010728
                    },
                    "southwest": {
                        "lat": 32.67345092010729,
                        "lng": -96.80846737989273
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
            "icon_background_color": "#4B96F3",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
            "name": "Victor's One Stop Shop",
            "opening_hours": {
                "open_now": true
            },
            "place_id": "ChIJ50ul9RuXToYRmJ_Di7NzmJY",
            "plus_code": {
                "compound_code": "M5FV+V5 Dallas, Texas",
                "global_code": "8645M5FV+V5"
            },
            "rating": 0,
            "reference": "ChIJ50ul9RuXToYRmJ_Di7NzmJY",
            "scope": "GOOGLE",
            "types": [
                "convenience_store",
                "store",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 0,
            "vicinity": "1120 E Red Bird Ln, Dallas"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 32.9776699,
                    "lng": -96.83053480000001
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.97898007989272,
                        "lng": -96.82913757010728
                    },
                    "southwest": {
                        "lat": 32.97628042010728,
                        "lng": -96.83183722989273
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
            "icon_background_color": "#4B96F3",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
            "name": "C Store",
            "opening_hours": {
                "open_now": true
            },
            "place_id": "ChIJwQ4SDlQhTIYRBW8Fpaw_fV4",
            "plus_code": {
                "compound_code": "X5H9+3P Addison, Texas",
                "global_code": "8645X5H9+3P"
            },
            "rating": 2.3,
            "reference": "ChIJwQ4SDlQhTIYRBW8Fpaw_fV4",
            "scope": "GOOGLE",
            "types": [
                "convenience_store",
                "store",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 3,
            "vicinity": "Sunbelt Dr, Addison"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 32.8077631,
                    "lng": -96.8749124
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.80911247989271,
                        "lng": -96.87356122010728
                    },
                    "southwest": {
                        "lat": 32.80641282010727,
                        "lng": -96.87626087989271
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
            "icon_background_color": "#4B96F3",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
            "name": "Texas Convenience Store",
            "opening_hours": {
                "open_now": true
            },
            "place_id": "ChIJ8w4VTnycToYR0dwIGVh4dDA",
            "plus_code": {
                "compound_code": "R45G+42 Dallas, Texas",
                "global_code": "8645R45G+42"
            },
            "rating": 0,
            "reference": "ChIJ8w4VTnycToYR0dwIGVh4dDA",
            "scope": "GOOGLE",
            "types": [
                "convenience_store",
                "store",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 0,
            "vicinity": "3326 Irving Blvd, Dallas"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 32.8385792,
                    "lng": -97.2650761
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.83996142989272,
                        "lng": -97.26370862010728
                    },
                    "southwest": {
                        "lat": 32.83726177010728,
                        "lng": -97.26640827989272
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
            "icon_background_color": "#4B96F3",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/shoppingcart_pinlet",
            "name": "STOREKING Food Mart",
            "opening_hours": {
                "open_now": true
            },
            "place_id": "ChIJe15_YCd4ToYR3XblDJ-QrqQ",
            "plus_code": {
                "compound_code": "RPQM+CW Haltom City, Texas",
                "global_code": "8644RPQM+CW"
            },
            "rating": 4.3,
            "reference": "ChIJe15_YCd4ToYR3XblDJ-QrqQ",
            "scope": "GOOGLE",
            "types": [
                "grocery_or_supermarket",
                "store",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 6,
            "vicinity": "Haltom City"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 32.7850187,
                    "lng": -97.06567889999999
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.78648252989272,
                        "lng": -97.06431157010728
                    },
                    "southwest": {
                        "lat": 32.78378287010728,
                        "lng": -97.06701122989273
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
            "icon_background_color": "#4B96F3",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/shopping_pinlet",
            "name": "Store",
            "photos": [
                {
                    "height": 4000,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/104828923617249238134\">fidel Guerrero</a>"
                    ],
                    "photo_reference": "AW30NDwSxQ7kp8MKBMGWCGCmwKVg1awbdXlb90oNZvbM3KOpz0SNln7136it79P4ap4wRq_bKLWo5dOedyxo5cf_vQi0-q8LnW_D7VeqElKqWPaQIqYMMgkioK7LIeFkJFKKGllt8z9iiyrCPWGzof8TpJZymyVs8chHuFsU-oCF1C5Tw7mN",
                    "width": 3000
                }
            ],
            "place_id": "ChIJ8SBFwa2HToYRP-_WyHAiuoM",
            "plus_code": {
                "compound_code": "QWPM+2M Arlington, Texas",
                "global_code": "8644QWPM+2M"
            },
            "rating": 0,
            "reference": "ChIJ8SBFwa2HToYRP-_WyHAiuoM",
            "scope": "GOOGLE",
            "types": [
                "store",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 0,
            "vicinity": "2800 Forestwood Dr, Arlington"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 32.7440492,
                    "lng": -96.78715819999999
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.74543487989272,
                        "lng": -96.78593347010727
                    },
                    "southwest": {
                        "lat": 32.74273522010728,
                        "lng": -96.7886331298927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
            "icon_background_color": "#4B96F3",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
            "name": "Mac & Will Convenience Store LLc",
            "opening_hours": {
                "open_now": true
            },
            "place_id": "ChIJaYejHEyYToYRfVgbEZ3CVw0",
            "plus_code": {
                "compound_code": "P6V7+J4 Dallas, Texas",
                "global_code": "8645P6V7+J4"
            },
            "rating": 0,
            "reference": "ChIJaYejHEyYToYRfVgbEZ3CVw0",
            "scope": "GOOGLE",
            "types": [
                "convenience_store",
                "store",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 0,
            "vicinity": "3140 Cedar Crest Blvd, Dallas"
        },
        {
            "business_status": "OPERATIONAL",
            "geometry": {
                "location": {
                    "lat": 32.7936102,
                    "lng": -96.80381819999999
                },
                "viewport": {
                    "northeast": {
                        "lat": 32.79518897989272,
                        "lng": -96.80234432010727
                    },
                    "southwest": {
                        "lat": 32.79248932010728,
                        "lng": -96.80504397989272
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
            "icon_background_color": "#4B96F3",
            "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/convenience_pinlet",
            "name": "Express Shop",
            "opening_hours": {
                "open_now": false
            },
            "photos": [
                {
                    "height": 2048,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108447498626615774452\">Taylor Beach</a>"
                    ],
                    "photo_reference": "AW30NDz6cT2PO1SCyKJq3M_FW5S9Qewu0kGVbHY3qp7wNJvKQ6NtwdpaukyO_NQ_DWDQGMPgMTOWSspqQTub2RCeTvCDXAOa-6R1VR5UnaZXyFI9rSWjj6Lb8TWvbMtpnog6-36O2N4URk8QE-6DXkAIXxOE4jrqqchxggNyRKyS7KbgeJMN",
                    "width": 1541
                }
            ],
            "place_id": "ChIJN0M9qRiZToYRwhF9172vX_w",
            "plus_code": {
                "compound_code": "Q5VW+CF Dallas, Texas",
                "global_code": "8645Q5VW+CF"
            },
            "price_level": 2,
            "rating": 4,
            "reference": "ChIJN0M9qRiZToYRwhF9172vX_w",
            "scope": "GOOGLE",
            "types": [
                "convenience_store",
                "store",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "user_ratings_total": 3,
            "vicinity": "The Crescent, 200 Crescent Ct, Dallas"
        }
    ],
    "status": "OK"
}

export default function Map() {
    const [render, setRender] = useState(null)

    const [lat, setLat] = useState(32.98704180272128);
    const [lng, setLng] = useState(-96.75010732867524);

    navigator.geolocation.getCurrentPosition(
        function (position) {
            console.log(position);
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
        }
    );

    const GetLatLngFromClick = () => {
        const map = useMapEvents({
            click(e) {
                const latLng = e.latlng;
                setLat(latLng.lat); //set the latitude
                setLng(latLng.lng); //and the longitude based on where the user clicked on the map
            },
        });
        return <></>;
    };

    const [storeData, setStoreData] = useState([]);
    const getStoreData = () => {
        const API_KEY = process.env.REACT_APP_GOOGLE_MAP
        const URL = `https://glacial-bastion-99092.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/`;
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        fetch(URL, {
            method: 'POST',
            body: JSON.stringify({
                key: API_KEY,
                location: [{ lat }, { lng }],
                radius: 10000,
                type: "grocery store"
            }),
            headers: {headers}
        })
            .then((res) => {
                res.json();
                console.log(res.json())
            })
            .then((post) => {
                console.log(post)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    useEffect(() => {
        getStoreData();

    })

    navigator.geolocation.getCurrentPosition(
        function (position) {
            console.log(position);
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
        }
    );



    return (
        <>
            <Navbar></Navbar>
            <h1 id="MapTitle">Find locations Near You!</h1>
            <div id="map">
                <MapContainer center={L.latLng(lat, lng)} zoom={15} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position=
                    {<GetLatLngFromClick />}
                </MapContainer>
            </div>
            <p id="MapText">
                To better help you find resources, we have marked all food banks and
                supermarkets that are currently open near your location. If you wish to be notified
                when pantries and food banks are going to open up near you, sign up for our email notifications today.
            </p>
        </>
    );

}