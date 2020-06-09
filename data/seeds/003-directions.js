
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('directions').del()
    .then(function () {
      // Inserts seed entries
      return knex('directions').insert([
        {
          direction_number: "1",
          instructions: "Place noodles in boiling water",
          recipe_id: 1
        },
        {
          direction_number: "2",
          instructions: "Drain half of the water and add seasoning packet",
          recipe_id: 1
        },
        {
          direction_number: "1",
          instructions: "Grill beef pattie",
          recipe_id: 2
        },
        {
          direction_number: "2",
          instructions: "Place grilled beef pattie on the bun with lettuce tomatoes and cheese!",
          recipe_id: 2
        },
      ]);
    });
};
