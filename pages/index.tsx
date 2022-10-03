import axios from 'axios'


interface Props {
    name: string;
    id: number;
}


export default function Home({ name, id }: Props) {
    return <p>{`${name}(${id})`}</p>
}

export async function getServerSideProps() {
    const user = await (await axios.get('/api/data')).data
    return {
        props: user
    }
}