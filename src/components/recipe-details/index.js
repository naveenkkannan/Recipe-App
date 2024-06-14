

import Link from "next/link";


export default function RecipeDetailsItem({ getRecipeDetails }) {
  return (
    <div className="mt-12 pl-10 pr-5 mb-12">
      
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-0.5 ">
          <div className="w-full lg:sticky top-0 sm:flex gap-2 mb-10 ">
            <img
              src={getRecipeDetails?.image}
              name={getRecipeDetails?.name}
              className="w-11/12   rounded-2xl object-cover "
            />
          </div>
          <div className="mt-4">
            <h2 className="text-4xl font-extrabold text-gray-950 font-serif">
              {getRecipeDetails?.name}
            </h2>
            <div className="gap-4 mt-5">
              <p className="text-2xl text-gray-700 font-serif">
                {getRecipeDetails?.mealType[0]}
              </p>
            </div>
            <div className="mt-5">
              <p className="text-xl text-gray-800 font-serif">
                {getRecipeDetails?.cuisine}
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-2xl font-bold text-gray-700 font-serif">Ingredients</h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                {getRecipeDetails?.ingredients.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
            
          </div>
         
        </div>
        <div className="mt-2">
        <h3 className="text-2xl font-bold text-gray-700 mt-8 mb-1 font-serif ">Instructions</h3>
              <p className="text-l text-gray-800 mt-3 font-serif">
                {getRecipeDetails?.instructions}
              </p>
            </div>
      </div> 

      
    </div>
  );
}
