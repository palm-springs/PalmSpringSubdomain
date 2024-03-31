export interface HeaderProps extends NavListOnly {
  logo: string | null;
  blogName: string;
}

export interface FooterProps {
  ownerName: string | null;
  logo: string | null;
  footerInfo: string | null;
}

export interface subscribeData {
  email: string;
  blogUrl: string;
}

export interface NavListOnly {
  navList: {
    id: number;
    name: string;
    navUrl: string;
    isPage: boolean;
  }[];
}
