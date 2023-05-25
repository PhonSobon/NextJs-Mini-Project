import BannerHomePage from "@/components/BannerHomePage";
import Card from "@/components/Card";
import CardCategory from "@/components/CardCategory";
import CardUser from "@/components/CardUser";
import Image from "next/image";

export const metadata = {
  title: "Home Page",
  description:"Start your life",
    locale: 'en-US',
    category: 'education',
    type: 'website',
    siteName: 'start',
    manifest: '/manifest.json',
    openGraph:{
        title: 'Home -page',
        description: "Start your life",
        url: '/',
        siteName: 'Start',
        images: [
            {
                url: "/og-image.jpg",
                width: 800,
                height: 600,
            },
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: {
            template: 'Home - page'
        },
        description: "Start your life",
        creator: '@start',
        images: ["/og-image.jpg"],
    }
};

// get data from API
export async function getData() {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/products?limit=20&offset=0", {cache: "no-store"}
  );
  const data = await res.json();
  return data;
}
//get data API Category
export async function getCategoryList() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories")
  const categoryData = await res.json();
  return categoryData;
}
// get data API User
export async function getUsers(){
  const res =await fetch("https://api.escuelajs.co/api/v1/users?limit=8")
  const usersData = await res.json();
  return usersData;
}


export default async function Home() {
  const products = await getData();
  const categories =await getCategoryList();
  const users = await getUsers();
  return (
    <main className="p-16">
      <BannerHomePage/>
      <h1 className=" text-center mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-black border-b-4">Product</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid xl:grid-cols-4 ">
          {products.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.images[0]}
              />
            ))}
        </div>
        <h1 className=" text-center mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-black border-b-4">CardCategory</h1>
        <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:grid xl:grid-cols-5'>
        {categories.map((categor)=>(
            <CardCategory
              key={categor.id}
              image={categor.image}
              name={categor.name}
            />
        ))}
        </div>
        <h1 className=" text-center mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-black border-b-4">User</h1>
        <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:grid xl:grid-cols-4'>
        {users.map((user)=>(
            <CardUser
              key={user.id}
              avatar={user.avatar}
              name={user.name}
              role={user.role}
            />
        ))}
        </div>
    </main>
  );
}
