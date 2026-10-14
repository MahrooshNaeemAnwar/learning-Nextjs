import type{Metadata} from "next";
export const metadata:Metadata={
  title:'Home',
  description:'Welcome to my website',
};
export default function HomePage(){
  return <h1>Home</h1>;
}
