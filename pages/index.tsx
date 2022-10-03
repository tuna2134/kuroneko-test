import axios from 'axios'


interface Props {
    name: string;
    id: number;
}


export default function Home({ name, id }: Props) {
    return (
        <>
            <p>{`${name}(${id})`}</p>
        </>
    )
}

export async function getServerSideProps() {
    const res = await axios.get('http://localhost:3000/api/data')
    return {
        props: res.data
    }
}