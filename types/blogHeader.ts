export interface HeaderProps extends NavListOnly {
  logo: string | null;
  blogName: string;
}

export interface FooterProps {
  ownerName: string;
  logo: string;
  footerInfo: string;
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
