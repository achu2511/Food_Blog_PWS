const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

/**
 * App Routes 
*/
router.get('/', recipeController.homepage);
router.get('/recipe/:id', recipeController.exploreRecipe );
router.get('/categories', recipeController.exploreCategories);
router.get('/categories/:id', recipeController.exploreCategoriesById);
router.post('/search', recipeController.searchRecipe);
router.get('/explore-latest', recipeController.exploreLatest);
router.get('/explore-random', recipeController.exploreRandom);
router.get('/submit-recipe', recipeController.submitRecipe);
router.post('/submit-recipe', recipeController.submitRecipeOnPost);
router.get('/signup',recipeController.submitSignup);
router.post('/signup',recipeController.submitSignupOnPost);
router.get('/login',recipeController.submitLogin);
router.post('/login',recipeController.submitLoginOnPost);
router.get('/logout',recipeController.submitLogout);
router.get('/ipost/:image',recipeController.submitInsta);
router.post('/ipost',recipeController.submitInstaPost);

module.exports = router; 