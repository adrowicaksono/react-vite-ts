export interface NYTKeyword {
    name: string;
    value: string;
    rank: number;
}

export interface NYTByline {
    original: string;
}

export interface NYTHeadline {
    main: string;
    kicker: string;
    print_headline: string;
}

export interface NYTMultimediaImage {
    url: string;
    height: number;
    width: number;
}

export interface NYTMultimedia {
    caption: string;
    credit: string;
    default: NYTMultimediaImage;
    thumbnail: NYTMultimediaImage;
}

export interface NYTDocument {
    abstract: string;
    byline: NYTByline;
    document_type: string;
    headline: NYTHeadline;
    _id: string;
    keywords: NYTKeyword[];
    multimedia: NYTMultimedia;
    news_desk: string;
    print_page: string;
    print_section: string;
    pub_date: string;
    section_name: string;
    snippet: string;
    source: string;
    subsection_name: string;
    type_of_material: string;
    uri: string;
    web_url: string;
    word_count: number;
}

// Complete response structure
export interface NYTResponse {
    status: string;
    copyright: string;
    response: {
        docs: NYTDocument[];
        metadata: {
            hits: number;
            offset: number;
            time: number;
        };
    };
}