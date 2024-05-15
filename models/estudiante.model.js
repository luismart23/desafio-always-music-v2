
import { pool } from "../database/estudiante.connection.js";

const findAll = async () => {
    const query = {
        text: 'SELECT * FROM ESTUDIANTES',
        // rowMode: "array"
    }
    const { rows } = await pool.query(query)
    return rows
}

const findOneById = async (id) => {
    const query = {
        // name: 'findOneById',
        text: `
            SELECT * FROM ESTUDIANTES WHERE id = $1
        `,
        values: [id]
    }

    const { rows } = await pool.query(query)
    return rows[0]
}

const create = async ({ id, nombre, curso, nivel }) => {

    const query = {
        text: `
            INSERT INTO ESTUDIANTES (ID, NOMBRE, CURSO, NIVEL)
            VALUES ($1, $2, $3, $4)
            RETURNING *
        `,
        values: [id, nombre, curso, nivel]
    }

    const { rows } = await pool.query(query)
    return rows[0]
}

const remove = async (id) => {
    const query = {
        text: `
            DELETE FROM ESTUDIANTES WHERE id = $1
            RETURNING *
        `,
        values: [id]
    }

    const { rows } = await pool.query(query)
    return rows[0]
}

const update = async ({ id, nombre, curso, nivel }) => {

    const query = {
        text: `
            UPDATE ESTUDIANTES
            SET NOMBRE = $1,
            CURSO = $2,
            NIVEL = $3
            WHERE ID = $4
            RETURNING *
        `,
        values: [nombre, curso, nivel, id]
    }

    const { rows } = await pool.query(query)
    return rows[0]
}

export const Estudiante = {
    findAll,
    create,
    findOneById,
    remove,
    update
}