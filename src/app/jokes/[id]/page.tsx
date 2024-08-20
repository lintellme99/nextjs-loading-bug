import {sleep} from "@/utils";

const Page = async () => {
    await sleep(3000)

    return <h1>I am a joke!</h1>
}

export default Page