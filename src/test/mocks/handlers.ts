
import { http, HttpResponse } from 'msw'
import type { NYTResponse } from '../../types/article'

const mockNYTResponse: NYTResponse = {
    status: "OK",
    copyright: "Copyright (c) 2025 The New York Times Company. All Rights Reserved.",
    response: {
        docs: [{
            "abstract": "Erik Agard returns to the Saturday puzzle, in regal fashion.",
            "byline": {
                "original": "By Caitlin Lovinger"
            },
            "document_type": "article",
            "headline": {
                "main": "Leader Before the King?",
                "kicker": "Wordplay, The CROSSWORD COLUMN",
                "print_headline": ""
            },
            "_id": "nyt://article/6eab88a9-d45a-5468-a520-68fedb434391",
            "keywords": [
                {
                    "name": "Subject",
                    "value": "Crossword Puzzles",
                    "rank": 1
                },
                {
                    "name": "Person",
                    "value": "Agard, Erik (Crossword Constructor)",
                    "rank": 2
                }
            ],
            "multimedia": {
                "caption": "Relish is interviewed after a mascot race at a Brooklyn Cyclones game in 2023. (Ketchup came from behind to win, of course.)",
                "credit": "Monique Jaques for The New York Times",
                "default": {
                    "url": "https://static01.nyt.com/images/2025/07/19/multimedia/19wordplay-mascot-tvzg/19wordplay-mascot-tvzg-articleLarge.jpg",
                    "height": 400,
                    "width": 600
                },
                "thumbnail": {
                    "url": "https://static01.nyt.com/images/2025/07/19/multimedia/19wordplay-mascot-tvzg/19wordplay-mascot-tvzg-thumbStandard.jpg",
                    "height": 75,
                    "width": 75
                }
            },
            "news_desk": "Games",
            "print_page": "",
            "print_section": "",
            "pub_date": "2025-07-19T02:00:04Z",
            "section_name": "Gameplay",
            "snippet": "Erik Agard returns to the Saturday puzzle, in regal fashion.",
            "source": "The New York Times",
            "subsection_name": "",
            "type_of_material": "News",
            "uri": "nyt://article/6eab88a9-d45a-5468-a520-68fedb434391",
            "web_url": "https://www.nytimes.com/2025/07/18/crosswords/daily-puzzle-2025-07-19.html",
            "word_count": 674
        },
        {
            "abstract": "A little-noticed plan for an “infertility training center” signals that the administration intends to take a new approach with Title X, which has long helped low-income women access contraception.",
            "byline": {
                "original": ""
            },
            "document_type": "article",
            "headline": {
                "main": "",
                "kicker": "",
                "print_headline": ""
            },
            "_id": "nyt://article/4ad8231b-926d-535e-9cae-ada546549d33",
            "keywords": [
                {
                    "name": "Person",
                    "value": "Trump, Donald J",
                    "rank": 1
                },
                {
                    "name": "Subject",
                    "value": "Birth Control and Family Planning",
                    "rank": 2
                },
                {
                    "name": "Subject",
                    "value": "In Vitro Fertilization",
                    "rank": 3
                }
            ],
            "multimedia": {
                "caption": "",
                "credit": "Kent Nishimura for The New York Times",
                "default": {
                    "url": '',
                    "height": 0,
                    "width": 0
                },
                "thumbnail": {
                    "url": "https://static01.nyt.com/images/2025/07/18/multimedia/dc-trump-infertility-2-htfm/dc-trump-infertility-2-htfm-thumbStandard.jpg",
                    "height": 75,
                    "width": 75
                }
            },
            "news_desk": "Washington",
            "print_page": "",
            "print_section": "",
            "pub_date": "2025-07-19T00:46:23Z",
            "section_name": "U.S.",
            "snippet": "A little-noticed plan for an “infertility training center” signals that the administration intends to take a new approach with Title X, which has long helped low-income women access contraception.",
            "source": "The New York Times",
            "subsection_name": "Politics",
            "type_of_material": "News",
            "uri": "nyt://article/4ad8231b-926d-535e-9cae-ada546549d33",
            "web_url": "https://www.nytimes.com/2025/07/18/us/politics/under-trump-a-new-focus-for-a-birth-control-program-helping-women-get-pregnant.html",
            "word_count": 1201
        }],
        metadata: {
            hits: 10000,
            offset: 0,
            time: 354
        }
    }
}

export const handlers = [
    http.get(`${import.meta.env.VITE_NYT_API_BASE_URL}?q=&api-key=${import.meta.env.VITE_NYT_API_KEY}`, () => {
        return HttpResponse.json(mockNYTResponse)
    }),
]