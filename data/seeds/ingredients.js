
exports.seed = function(knex, Promise) {
  return knex('ingredients').del()
    .then(function () {
      return knex('ingredients').insert([
        { name: 'unsalted butter'},
        { name: 'milk'},
        { name: 'favorite cereal'},
        { name: 'sugar'},
        { name: 'large eggs'},
        { name: 'flour'},
        { name: 'roma tomatoes'},
        { name: 'ground beef, sirloin'},
        { name: 'romaine lettuce'},
        { name: 'vegetable or coconut oil'},
        { name: 'tortillas'}
      ]);
    });
};
