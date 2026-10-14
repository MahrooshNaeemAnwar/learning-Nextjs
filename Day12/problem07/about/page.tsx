import type{Metadata} from "next";
export const metadata:Metadata={
  title:'About',
  description:'Learn about our company',
};
export default function AboutPage(){
  return <h1>About</h1>;
}
