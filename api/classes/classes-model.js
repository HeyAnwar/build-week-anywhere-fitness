const db = require('../data/db-config')

function getAll(){
    return db('classes as c')
    .leftJoin('users as u', 'u.user_id', 'c.class_id')
    .select(
        'c.class_name',
        'c.type',
        'c.time',
        'c.duration',
        'c.intensity',
        'c.location',
        'c.attendees',
        'c.size'
    )
}

async function getById(class_id){
    return db('classes as c')
    .leftJoin('users as u', 'u.user_id', 'c.class_id')
    .where('c.class_id', class_id)
    .select(
        'c.class_name',
        'c.type',
        'c.time',
        'c.duration',
        'c.intensity',
        'c.location',
        'c.attendees',
        'c.size'
    )
    .first()
}

function findBy(filter) {
    return db('classes as c')
    .select('c.class_id')
    .where(filter)
}

async function add(classes) {
    const [id] = await db('classes').insert(classes, 'class_id')
    return getById(id)
}

function update(class_id, classes) {
    return db('classes')
    .where({ class_id })
    .update(classes)
}

function remove(class_id) {
    return db('classes')
    .where('class_id', class_id)
    .del()
}

module.exports = {
    getAll,
    getById,
    findBy,
    add,
    update,
    remove
}
