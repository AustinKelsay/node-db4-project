
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: "Top ramen"},
        {name: "hamburger buns"},
        {name: "Beef patties"},
        {name: "American cheese"},
        {name: "Lettuce"},
        {name: "Tomatos"}
      ]);
    });
};
