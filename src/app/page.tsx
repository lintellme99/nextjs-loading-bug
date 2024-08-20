import {FC} from "react";
import Link from "next/link";


const Home: FC = async () => {
  return (
    <main>
        I am main!
        <Link href={'/jokes'}>Jokes list</Link>
    </main>
  );
}

export default Home