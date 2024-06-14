// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import Link from "next/link";

// export default function ReceipeList({ recipeList }) {
//   console.log(recipeList);
//   return (
//    <div>
//       <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm-max-w-full">
//             <h2 className="text-4xl font-bold text-gray-800 mb-12"> Recipes </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"></div>
//             { recipeList && recipeList.length > 0
//             ? recipeList.map((recipe)=> (
//                <Link href={`/recipe-list/${recipe.id}`}>
//                  <Card>
//                    <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all ">
//                      <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
//                          <img
//                            src={recipe.image}
//                            alt={recipe.name}
//                             className="h-full w-full object-cover object-top"
//                           />
//                       </div>
//                    </CardContent>
//                  </Card>
//                 </Link>
//               ))
//             : null}
//         </div>
//       </div>
//    </div>
//   );
// }

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function RecipeList({ recipeList }) {
  console.log(recipeList);
  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-14 mt-14 mb-14">
          {recipeList && recipeList.length > 0
            ? recipeList.map((recipe) => (
                <Link key={recipe.id} href={`/recipe-list/${recipe.id}`}>
                  <Card className="h-full flex flex-col">
                    <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all flex flex-col flex-grow">
                      <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                        <img
                          src={recipe.image}
                          alt={recipe.name}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-lg text-gray-900 text-center">
                          {recipe.name}
                        </h3>
                        <div className="mt-10 flex items-center justify-center flex-wrap gap-2">
                          <p className="text-lg text-gray-600">
                            Rating: {recipe.rating}
                          </p>
                          <div className="ml-auto">
                            <p className="text-lg font-bold text-gray-600">
                              {recipe.cuisine}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
