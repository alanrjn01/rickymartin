import axios from "axios";

export const getOneCharacter = async(setCharacter) =>{
    const request = await axios.get(`https://rickandmortyapi.com/api/character/${[...Array(184).keys()]}`)
    setCharacter(request.data)
}