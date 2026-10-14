import type{Metadata} from "next";
export const metadata:Metadata={
  title:'my site',
  openGraph:{
    title:'my site',
  description: 'learn nextjs with practice problems',
  url:'http://mysite.com',
  siteName:'mysite',
  images:[
    {
      url:'http://mysite.com/og.pg',
      width:1200,
      height:630,
      alt:'my site'
    },
  ],
  locale:'en_US',
  type:'website',
  },
};
export default function RootLayout({children}:{children:React.ReactNode}){
  return(
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
              
