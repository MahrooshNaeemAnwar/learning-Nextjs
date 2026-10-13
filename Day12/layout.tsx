import type{Metadata} from "next";
export const metadata:Metadata={
  title:"my first next.js app",
  description:"this is my first next.js app",
  keywords:['next.js','react','typescript'],
  authors:[{name:'mahroosh'}]
};
export default function RootLayout({children}:{children:React.ReactNode}){
  return(
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
              
