export interface ContentProps {
  thumbnail: string;
  title: string;
  description: string;
  teamMember: {
    id: string;
    thumbnail: string | null;
    name: string;
    job: string;
    createdAt: string;
  };
  content: string;
  images: string[] | null;
}
