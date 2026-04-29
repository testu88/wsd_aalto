import postgres from "postgres";

// create instance of database client
const sql = postgres();

const createBook = async (book) => {
    const result = await sql`INSERT INTO books (title, description, published_at, page_count) VALUES (
    ${book.title}, ${book.description}, ${book.published_at}, ${book.page_count}) RETURNING *;`;
    return result[0];
};

const readBooks = async () => {
    return await sql `SELECT * FROM books`;
};

const readBook = async (id) => {
    return await sql`SELECT * FROM books WHERE id = ${id}`;
}
 
const update = async (id, book) => {
    const result = await sql `UPDATE books SET title=${book.title}, description=${book.description}, published_at=${book.published_at}, page_count=${book.page_count} WHERE id = ${id} RETURNING *;`;
    return result[0];
};

const deleteOne = async (id) =>{
    const result = await sql`DELETE FROM books WHERE id = ${id} RETURNING *;`;
    return result[0];
};

export { createBook, readBooks, readBook, update, deleteOne };