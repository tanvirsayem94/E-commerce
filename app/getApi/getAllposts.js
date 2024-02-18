
import { revalidatePath } from "next/cache";



const getAllposts = async() => {
    const result =  await fetch("http://localhost:3000/api/application",{cache:"no-cache",cache:"no-store"})
    const data = await result.json()
    // revalidatePath("/dashboard/requestedseller");
    return data;
    

};

export default getAllposts;