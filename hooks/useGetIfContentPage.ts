import { usePathname } from 'next/navigation';

const useGetIfContentPage = (): string => usePathname().split('/').slice(-1)[0] as string;

export default useGetIfContentPage;
