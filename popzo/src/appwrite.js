const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;





export const updateSearchCount = async (searchTerm, movie) => {



    // 1. Use Appwrite SDK to check if the search term exists in the database
    // 2. if it does, update the count
    // 3. if it doesn't create a new document with the search term and count as 1
}