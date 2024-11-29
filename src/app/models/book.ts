export type BookResponse = {
  items: Book[];
};

export type VolumeInfo = {
  title: string;
  authors: string[];
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
};

export type Book = {
  id: string;
  volumeInfo: VolumeInfo;
};
