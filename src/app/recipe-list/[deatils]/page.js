

import Footer from "@/components/footer";
import Headerr from "@/components/header";
import RecipeDetailsItem from "@/components/recipe-details";



async function fetchRecipeDetails(currentRecipeId){
    try{
        const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`);
        const data = await apiResponse.json();
        console.log(data);
        console.log(currentRecipeId);
        return data;
       

    }catch(error){
        throw new Error(error)
    }
}

export default async function RecipeDetails({params}) {

    const getRecipeDetails = await fetchRecipeDetails(params?.deatils);

    return (
        <div>
    < Headerr />
    < RecipeDetailsItem getRecipeDetails={getRecipeDetails}  />
     < Footer />
     </div>
)
}
