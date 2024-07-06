export interface MultimediaObjectProp {
  caption: string;
  copyright: string;
  // TO DO: FORMAT
  format: string;
  height: number;
  subtype: string;
  type: 'image' | 'video';
  url: string;
  width: number;
}

export interface TopStoryProp {
  title: string;
  abstract: string;
  byline: string;
  published_date: string;
  multimedia: MultimediaObjectProp[];
  url: string;
}

export interface WireStoryProp {
  title: string;
  abstract: string;
  url: string;
  byline: string;
  published_date: string;
  multimedia: MultimediaObjectProp[];

}