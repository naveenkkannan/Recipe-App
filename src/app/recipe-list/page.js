
import Footer from "@/components/footer";
import Headerr from "@/components/header";
import ReceipeList from "@/components/recipe-list/page";

async function fetchListofRecipies(){
    try{
        const apiResponse = await fetch('https://dummyjson.com/recipes');
        const data = await apiResponse.json();

        return data?.recipes;

    }catch(e){
        throw new Error(e)
    }
}


export default async function Recipes() {

    const recipeList = await fetchListofRecipies();

  return (
      <div>

       < Headerr />
      <ReceipeList recipeList={recipeList} />

      < Footer />

      </div>
    
  );
}
