export interface MultimediaObjectProp {
  caption: string;
  copyright: string;
  format: 'Super Jumbo' | 'mediumThreeByTwo440' | 'threeByTwoSmallAt2X';
  height: number;
  subtype: 'largeHorizontal375';
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