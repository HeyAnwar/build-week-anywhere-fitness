exports.seed = function(knex) {
    return knex('classes').insert([
    {
        class_id: '1',
        class_name: 'Bobs class',
        type: 'Aerobics',
        time: '5',
        duration: '2',
        intensity: 'easy',
        location: 'Los Angeles',
        attendees: '39',
        size: '50'
    },
    {
        class_id: '2',
        class_name: 'Sues class',
        type: 'Insanity',
        time: '11',
        duration: '1',
        intensity: 'insane',
        location: 'Orange county',
        attendees: '25',
        size: '50'
    }
    ])
}