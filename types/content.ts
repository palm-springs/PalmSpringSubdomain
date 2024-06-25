export interface ContentProps {
  id: number;
  blogId: number;
  thumbnail: string;
  title: string;
  description?: string;
  teamMember?: {
    id: string;
    thumbnail: string;
    name: string;
    job: string;
    createdAt: string;
  };
  content: string;
  images: string[] | null;
  isArticle: boolean;
}
