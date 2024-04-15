import Header from "../../components/header";


export default function Home() {
    return (
        <>
            <Header />
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl font-bold">React Tailwind</h1>
          <p className="text-lg">Welcome to React Tailwind</p>
        </div>
      </>
    );
  }