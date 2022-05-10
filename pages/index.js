const Pokemon = ({ pokemon }) => {
    return <li>{pokemon.name}</li>
}

export default function Pokemones({ pokemones }) {
    console.log(pokemones)
    return (
        <div>
            <p>pokemones</p>
            <ul>
                {pokemones.map((pokemon) => (
                    <Pokemon pokemon={pokemon} />
                ))}
            </ul>
        </div>
    )
}

export const getStaticProps = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const data = await response.json()
    return {
        props: { pokemones: data.results },
    }
}
