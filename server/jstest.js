const resultsData = [
  { query:'Banana', id: 1, path: 'https://en.wikipedia.org › wiki › Banana', title: 'Banana - Wikipedia', date: '09 September 2020', description: 'A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some …', link: 'https://en.wikipedia.org/wiki/Banana' },
  { query:'Banana', id: 2, path: 'https://www.livescience.com › 45005-banana-nutrition-…', title: 'Banana nutrition facts & health benefits | Live Science', date: '25 October 2017', description: 'Other banana facts ... Bananas may have been the world\'s first cultivated fruit. Archaeologists have found evidence of banana cultivation in New …', link: 'https://www.livescience.com/45005-banana-nutrition-facts.html' },
  { query:'Banana', id: 3, path: 'https://www.hsph.harvard.edu › ... › Food Features"', title: 'Bananas | The Nutrition Source | Harvard T.H. Chan School of …', date: 'by L Finger', description: 'The scientific name for banana is Musa, from the Musaceae family of flowering tropical plants, which distinctively showcases the banana fruit clustered at the top of ...', link: 'https://www.hsph.harvard.edu/nutritionsource/food-features/bananas/' },
  { query:'Banana', id: 4, path: 'https://www.bananalink.org.uk › all-about-bananas', title: 'All About Bananas | Producers, Where They\'re Grown & Why …', date: '02 December 2019', description: 'How Bananas Are Grown ... Banana plants are often mistaken for trees or palms – they are actually herbs. The banana is a perennial plant that replaces itself.', link: 'https://www.bananalink.org.uk/all-about-bananas/' },
  { query:'Banana', id: 5, path: 'https://www.webmd.com › ingredientmono-1595 › ban…', title: 'BANANA: Overview, Uses, Side Effects, Precautions ... - WebMD', date: '03 December 2018', description: 'Learn more about BANANA uses, effectiveness, possible side effects, interactions, dosage, user ratings and products that contain BANANA.', link: 'https://www.webmd.com/vitamins/ai/ingredientmono-1595/banana' },
  { query:'Banana', id: 6, path: 'https://www.everydayhealth.com › diet-nutrition › diet', title: 'Banana - BBC Good Food', date: '04 December 2018', description: 'All bananas are extremely nutritious; rich in potassium, riboflavin, niacin and fibre, and the rapid energy boost given by their high sugar levels means that they\'re a ...', link: 'https://www.everydayhealth.com/diet-nutrition/diet/bananas-nutrition-facts-health-benefits-recipes-risks/' },
  { query:'Banana', id: 7, path: 'https://www.verywellfit.com › ... › Fruit and Vegetables', title: 'Banana Nutrition Facts and Health Benefits - Verywell Fit', date: '25 October 2017', description: 'Bananas are a popular snack with lots of nutritional benefits. For 105 calories, a medium banana offers a little more than 3 grams of fiber and a healthy dose of ...', link: 'https://www.verywellfit.com/are-bananas-bad-for-weight-loss-3495634' },
  { query:'Banana', id: 8, path: 'https://www.webmd.com › ingredientmono-1595 › ban...', title: 'BANANA: Overview, Uses, Side Effects, Precautions ... - WebMD', date: '02 December 2019', description: 'Learn more about BANANA uses, effectiveness, possible side effects, interactions, dosage, user ratings and products that contain BANANA.', link: 'https://www.webmd.com/vitamins/ai/ingredientmono-1595/banana' },
  { query:'Banana', id: 9, path: 'https://www.webmd.com › Food & Recipes › Reference', title: 'Bananas: A Nutritional Powerhouse - WebMD', date: '17 July 2020', description: 'What Are Bananas? · Bananas are a tasty and convenient source of some important nutrients. People have grown this tropical fruit since ancient ...', link: 'https://www.webmd.com/food-recipes/health-benefits-bananas' },
  { query:'Banana', id: 10, path: 'https://www.simplyrecipes.com › Baking › Easy Baking', title: 'Banana Bread Recipe [with video] - Simply Recipes', date: '27 May 2021', description: 'Moist and delicious banana bread recipe. Easy to make, no need for a mixer! Ripe bananas, butter, sugar, egg, vanilla, baking soda, and flour.', link: 'https://www.simplyrecipes.com/recipes/banana_bread/' },
  { query:'Fish', id: 1, path: 'https://en.wikipedia.org › wiki › Fish', title: 'Fish - Wikipedia', date: '02 December 2019', description: 'Fish are aquatic, craniate, gill-bearing animals that lack limbs with digits. They form a sister group to the tunicates, together forming the olfactores. Included in ...', link: 'https://en.wikipedia.org/wiki/Fish' },
  { query:'Fish', id: 2, path: 'https://www.nationalgeographic.com › animals › fish', title: 'Fish Pictures & Facts - National Geographic', date: '02 December 2019', description: 'Fish Pictures & Facts ... All fish share two traits: they live in water and they have a backbone—they are vertebrates. Apart from these similarities, however, many of ...', link: 'https://www.nationalgeographic.com/animals/fish' },
  { query:'Fish', id: 3, path: 'https://fishmusic.scot', title: 'Fish - The Official Site of the Singer, Songwriter, Actor, Author', date: '17 July 2020', description: 'Official site of singer/songwriter Fish, on tour in 2017/2018 celebrating the 30th anniversary of the classic Marillion album \'Clutching at Straws', link: 'https://fishmusic.scot/' },
  { query:'Fish', id: 4, path: 'https://www.fishboroughmarket.com', title: 'fish! Borough Market', date: '27 May 2021', description: 'Established in 1999, fish! was the first restaurant of its kind in London. Our concept is simple: providing our customers with the best quality fish, cooked in front of ...', link: 'https://www.fishboroughmarket.com/' },
  { query:'Fish', id: 5, path: 'https://www.britannica.com › ... › Fish', title: 'fish | Definition, Species, Classification, & Facts | Britannica', date: '04 June 2021', description: ' Fish, any of approximately 34000 species of vertebrate animals (phylum Chordata) found in the fresh and salt waters of the world.', link: 'https://www.britannica.com/animal/fish' },
  { query:'Fish', id: 6, path: 'https://www.nhs.uk › Live Well › Eat well', title: 'Fish and shellfish - NHS', date: '02 December 2019', description: 'Oily fish – such as salmon and sardines – is also particularly high in long-chain omega-3 fatty acids, which can help to keep your heart healthy. Most of us should ...', link: 'https://www.nhs.uk/live-well/eat-well/fish-and-shellfish-nutrition/' },
  { query:'Fish', id: 7, path: 'https://www.mcsuk.org › goodfishguide', title: 'Home | Good Fish Guide', date: '02 December 2019', description: 'Good Fish Guide. Every purchase matters. Our seafood ratings help you make the most sustainable choices. Browse all seafood. + Refine your results.', link: 'https://www.mcsuk.org/goodfishguide/' },
  { query:'Fish', id: 8, path: 'https://www.jamieoliver.com › recipes › fish-recipes', title: 'Fish recipes | Jamie Oliver', date: '17 July 2020', description: 'A beautiful selection of the best fish dishes. How about a Fantastic fish tikka curry, or Summer salmon salad? Find your new favourite fish dish here.', link: 'https://www.jamieoliver.com/recipes/fish-recipes/' },
  { query:'Fish', id: 9, path: 'https://www.healthline.com › health › food-nutrition', title: 'Best Fish to Eat: 12 Healthiest Options - Healthline', date: '04 December 2018', description: 'Fish are undeniably a healthy food, but they can have high levels of contaminants, too. Save this list of some of the safest fish with the best nutrition profiles.', link: 'https://www.healthline.com/health/food-nutrition/11-best-fish-to-eat' },
  { query:'Fish', id: 10, path: 'https://www.healthline.com › nutrition › 11-health-bene...', title: '11 Evidence-Based Health Benefits of Eating Fish - Healthline', date: '11 June 2019', description: 'This is a detailed article about the health benefits of fish. Fish is high in omega-3 fatty acids, and can help protect against many diseases.', link: 'https://www.healthline.com/nutrition/11-health-benefits-of-fish' },
  { query:'Couscous ', id: 1, path: 'www.onceuponachef.com', title: 'Perfect Couscous - Once Upon a Chef', date: '30 March 2019', description: 'couscous. Tested & Perfected Recipes. Couscous is a North African dish ... Though we think of it and cook it as a grain, couscous is actually a type of pasta.', link: 'https://www.onceuponachef.com/recipes/couscous.html' },
  { query:'Couscous ', id: 2, path: 'www.errenskitchen.com', title: 'Moroccan Spiced Vegetable Couscous - Erren\'s Kitchen', date: '27 May 2021', description: 'This easy one pot, recipe for Moroccan Spiced Vegetable Couscous is delicious on its own or makes a flavorful vegetarian side dish.', link: 'https://www.errenskitchen.com/moroccan-spiced-vegetable-couscous/' },
  { query:'Couscous ', id: 3, path: 'www.themediterraneandish.com', title: '20-Minute Spicy Couscous Recipe with Shrimp and Chorizo | The ...', date: '02 December 2019', description: 'Going for a little Moroccan-Spanish fusion with this spicy couscous recipe with shrimp and Chorizo! Cooks in 20 minutes! Be sure to check out the suggested ...', link: 'https://www.themediterraneandish.com/20-minute-spicy-couscous-recipe-shrimp-chorizo/' },
  { query:'Couscous ', id: 4, path: 'www.foodnetwork.com', title: 'Couscous with Scallions Recipe | Food Network', date: '02 December 2019', description: 'Get Couscous with Scallions Recipe from Food Network.', link: 'https://www.foodnetwork.com/recipes/couscous-with-scallions-recipe-1912251' },
  { query:'Couscous ', id: 5, path: 'www.myrecipes.com', title: 'Quick Parmesan Couscous Recipe | MyRecipes', date: '17 July 2020', description: 'Couscous is a quick alternative to rice, and this recipe couldn\'t be easier. Parmesan cheese and lemon juice add just the right flavor to this.', link: 'https://www.myrecipes.com/recipe/quick-parmesan-couscous' },
  { query:'Couscous ', id: 6, path: 'www.allrecipes.com', title: 'Couscous Recipes - Allrecipes.com', date: '27 May 2021', description: 'Looking for couscous recipes? Allrecipes has more than 160 trusted couscous recipes complete with ratings, reviews and cooking tips.', link: 'https://www.allrecipes.com/recipes/540/pasta-and-noodles/pasta-by-shape/couscous/' },
  { query:'Couscous ', id: 7, path: 'www.bonappetit.com', title: 'Couscous with Fresh Cilantro and Lemon Juice Recipe | Bon Appetit', date: '04 June 2021', description: 'Say it with us: simple ingredients, cooked perfectly, will always win. This dish, made with fine couscous, is no exception.', link: 'https://www.bonappetit.com/recipe/couscous-with-fresh-cilantro-and-lemon-juice' },
  { query:'Couscous ', id: 8, path: 'www.allrecipes.com', title: 'Company Couscous Recipe - Allrecipes.com', date: '02 December 2019', description: 'Savory couscous flavored with garlic, red bell pepper, scallions, tomatoes and basil, and topped with parmesan cheese.', link: 'https://www.allrecipes.com/recipe/18897/company-couscous/' },
  { query:'Couscous ', id: 9, path: 'www.thekitchn.com', title: '10 Flavorful Couscous Recipes to Make for Dinner | Kitchn', date: '02 December 2019', description: 'Keep a stash of couscous in your pantry and you\'ve got the start of a nearly endless stream of incredibly quick meals right at your fingertips.', link: 'https://www.thekitchn.com/10-flavorful-couscous-recipes-96007' },
  { query:'Couscous ', id: 10, path: 'www.bettycrocker.com', title: 'Mediterranean Couscous Recipe - BettyCrocker.com', date: '17 July 2020', description: 'Fresh herbs and colorful veggies make this quick-to-fix dish a winner!', link: 'https://www.bettycrocker.com/recipes/mediterranean-couscous/e3f01d79-3444-4877-ab97-a88c434ffd68' },
  { query:'Rice', id: 1, path: 'www.thespruceeats.com', title: 'How to Make Basic White Rice (Recipe)', date: '04 December 2018', description: 'This basic white recipe is so easy and it makes perfect rice every time if you follow the instructions. Recipe links to variations are offered.', link: 'https://www.thespruceeats.com/how-to-make-basic-white-rice-2355883' },
  { query:'Rice', id: 2, path: 'www.spendwithpennies.com', title: 'Garlic Butter Rice - Spend With Pennies', date: '11 June 2019', description: 'Garlic Butter Rice - Buttery, garlicky rice “ an easy side dish to ... taste, but I\'d suggest trying the base recipe first then adjusting it to your taste.', link: 'https://www.spendwithpennies.com/garlic-butter-rice/' },
  { query:'Rice', id: 3, path: 'www.themediterraneandish.com', title: 'Greek Lemon Rice Recipe | The Mediterranean Dish', date: '30 March 2019', description: 'Best Greek lemon rice recipe! Loads of flavor from onions, garlic, lemon juice and fresh herbs. Grab our secret tips and suggestions for what to ...', link: 'https://www.themediterraneandish.com/greek-lemon-rice-recipe/' },
  { query:'Rice', id: 4, path: 'sweetpeasandsaffron.com', title: '7 Easy Rice Recipes (Stove Top & Rice Cooker) | Sweet Peas and ...', date: '02 December 2019', description: 'No more boring white rice...these SEVEN easy rice recipes are changing the game! With just a few simple ingredients, you can transform your ...', link: 'https://sweetpeasandsaffron.com/rice-recipes/' },
  { query:'Rice', id: 5, path: 'www.foodnetwork.com', title: 'Perfect Rice Recipe | The Neelys | Food Network', date: '02 December 2019', description: 'Melt butter in a 2-quart saucepan over medium heat. Add shallot and saute until tender. Add the rice and stir until the rice is glossy and coated with the butter.', link: 'https://www.foodnetwork.com/recipes/patrick-and-gina-neely/perfect-rice-recipe-1938571' },
  { query:'Rice', id: 6, path: 'www.allrecipes.com', title: 'Rice Side Dish Recipes - Allrecipes.com', date: '17 July 2020', description: 'Easy rice recipes with few ingredients to complement your meal. Fried rice, brown rice, Spanish rice, Mexican rice, and more!', link: 'https://www.allrecipes.com/recipes/224/side-dish/rice/' },
  { query:'Rice', id: 7, path: 'spicysouthernkitchen.com', title: 'Parmesan Rice - Spicy Southern Kitchen', date: '04 December 2018', description: 'Creamy Parmesan Rice with lots of cheese and garlic flavor. ... But Creamy Parmesan Rice is a whole different story. ... Never miss a recipe.', link: 'https://spicysouthernkitchen.com/parmesan-rice/' },
  { query:'Rice', id: 8, path: 'www.recipetineats.com', title: 'Curried Rice | RecipeTin Eats', date: '11 June 2019', description: 'A really great Curried Rice that won\'t disappoint! This basmati rice recipe is flavoured with curry powder plus extra spices to to give it great ...', link: 'https://www.recipetineats.com/curried-rice-basmati-rice-recipe/' },
  { query:'Rice', id: 9, path: 'www.tasteofhome.com', title: '65 Best Rice Recipes for Dinner | Taste of Home', date: '30/03/2019', description: 'Looking for an easy rice recipe? We\'ve got it. Whether you\'re looking for Spanish rice, rice pilaf or a cozy rice soup, we\'ve rounded up dozens of recipes that put ...', link: 'https://www.tasteofhome.com/collection/rice-recipes/' },
  { query:'Rice', id: 10, path: 'www.foodiecrush.com', title: 'Easy Lemon Rice Recipe | foodiecrush', date: '30/03/2019', description: 'This easy lemon rice is a side dish staple and with just 5 ingredients, it\'s a super simple way to jazz up plain old white rice any day of the week.', link: 'https://www.foodiecrush.com/easy-lemon-rice-recipe/' },
  { query:'Steak', id: 1, path: 'www.tasteofhome.com', title: 'Garlic-Butter Steak Recipe | Taste of Home', date: '27 May 2021', description: 'This quick-and-easy skillet entree is definitely restaurant-quality and sure to become a staple at your house, too! Lily Julow, Lawrenceville, Georgia.', link: 'https://www.tasteofhome.com/recipes/garlic-butter-steak/' },
  { query:'Steak', id: 2, path: 'therecipecritic.com', title: 'Skillet Garlic Butter Herb Steak and Potatoes | The Recipe Critic', date: '02 December 2019', description: 'Pan seared and cooked to perfection and topped with a garlic herb butter compound. This is the best steak that I have ever had!!', link: 'https://therecipecritic.com/skillet-garlic-butter-herb-steak-and-potatoes/' },
  { query:'Steak', id: 3, path: 'cooking.nytimes.com', title: 'Seared Steak Recipe - NYT Cooking', date: '02 December 2019', description: 'For grilling a steak indoors, a cast iron pan really can\'t be beat Cast iron ... Unlock New York Times recipes and your personal recipe box with a free account.', link: 'https://cooking.nytimes.com/recipes/1891-seared-steak' },
  { query:'Steak', id: 4, path: 'www.allrecipes.com', title: 'Beef Steak Recipes - Allrecipes.com', date: '17 July 2020', description: 'Grilled, broiled, pan-fried, or slow-cooked. Plus marinades, sauces, gravies, and rubs to amp up the flavor.', link: 'https://www.allrecipes.com/recipes/475/meat-and-poultry/beef/steaks/' },
  { query:'Steak', id: 5, path: 'www.dinneratthezoo.com', title: 'Steak Bites with Garlic Butter - Dinner at the Zoo', date: 'May 31, 2018 ', description: 'These seared steak bites are cubes of sirloin steak cooked to perfection in a garlic butter ... This recipe uses sirloin steak cut into small pieces.', link: 'https://www.dinneratthezoo.com/steak-bites-with-garlic-butter/' },
  { query:'Steak', id: 6, path: 'www.myrecipes.com', title: 'Pan-Seared Strip Steak Recipe | MyRecipes', date: '17 July 2020', description: 'This fantastic strip steak is the perfect dinner for date night or any special occasion that deserves something extra delicious on the table. A little butter adds …', link: 'https://www.myrecipes.com/recipe/pan-seared-strip-steak' },
  { query:'Steak', id: 7, path: 'tasty.co', title: 'Garlic Butter Steak Recipe by Tasty', date: '04 December 2018', description: 'Here\'s what you need: ribeye steak, salt, pepper, canola oil, butter, garlic, fresh rosemary, fresh thyme.', link: 'https://tasty.co/recipe/garlic-butter-steak' },
  { query:'Steak', id: 8, path: 'www.afamilyfeast.com', title: 'Perfect Pan-Seared Steak - A Family Feast®', date: 'Oct 23, 2013', description: 'So here is our recipe for the Perfect Pan-Seared Steak! I\'ll admit “ I usually leave the cooking of steak or other cuts of beef to my husband Jack.', link: 'https://www.afamilyfeast.com/perfect-pan-seared-steak/' },
  { query:'Steak', id: 9, path: 'www.jocooks.com', title: 'Garlic Butter Steak Bites - Jo Cooks', date: 'Oct 2, 2018 ', description: 'Jump to Recipe Jump to Video Print Recipe. Last updated on November 4th, 2018 at 02:39 pm. These seared Garlic Butter Steak Bites pack so ...', link: 'https://www.jocooks.com/recipes/garlic-butter-steak-bites/' },
  { query:'Steak', id: 10, path: 'cafedelites.com', title: 'Garlic Butter Grilled Steak & Shrimp - Cafe Delites', date: 'Jun 10, 2018', description: 'Grilled Steak \& Shrimp slathered in garlic butter is an easy steak recipe that tastes like something out of a restaurant! Ready in less than 15 ...', link: 'https://cafedelites.com/garlic-butter-grilled-steak-shrimp/' },
  { query:'Pasta', id: 1, path: 'selfproclaimedfoodie.com', title: 'How to Make Homemade Pasta - Recipe & Tips | Self Proclaimed ...', date: 'Feb 24, 2018', description: 'Homemade Pasta is not only fun and easy recipe to make in your own kitchen, but nothing compares to the taste and texture of fresh ...', link: 'https://selfproclaimedfoodie.com/homemade-pasta/' },
  { query:'Pasta', id: 2, path: 'www.allrecipes.com', title: 'Pasta and Noodle Recipes - Allrecipes.com', date: '02 December 2019', description: 'Find recipes for all your favorite pasta dishes including lasagna, baked ziti, pasta salad, macaroni and cheese, and pesto.', link: 'https://www.allrecipes.com/recipes/95/pasta-and-noodles/' },
  { query:'Pasta', id: 3, path: 'cooking.nytimes.com', title: 'Basic Dough for Fresh Egg Pasta Recipe - NYT Cooking', date: '17 July 2020', description: 'Fresh pasta isn\'t something you can master in one go There\'s a learning ... Unlock New York Times recipes and your personal recipe box with a free account.', link: 'https://cooking.nytimes.com/recipes/1014586-basic-dough-for-fresh-egg-pasta' },
  { query:'Pasta', id: 4, path: 'shewearsmanyhats.com', title: 'Mushroom Florentine Pasta Recipe | She Wears Many Hats', date: '04 December 2018', description: 'This creamy Mushroom Florentine Pasta Recipe may seem like a fancy dish, but it\'s oh so quick and easy to make. The recipe is easy enough for a weeknight ...', link: 'https://shewearsmanyhats.com/mushroom-florentine-pasta-recipe/' },
  { query:'Pasta', id: 5, path: 'www.tasteofhome.com', title: '75 of Our Best Pasta Recipes, Ever | Taste of Home', date: '11 June 2019', description: 'We\'ve gathered up our best pasta recipes in one place. From cheesy to fresh, these dinners showcase just how versatile noodles can be.', link: 'https://www.tasteofhome.com/collection/incredible-5-star-pasta-recipes/' },
  { query:'Pasta', id: 6, path: 'www.hellofresh.com', title: 'Cheesy Tomato Sauce Pasta Recipe | HelloFresh', date: '30/03/2019', description: 'Pasta in tomato sauce can be a fantastic feastit just needs a few accents to take it beyond basic. Luckily, we\'ve got some good ones. This penne in marinara ...', link: 'https://www.hellofresh.com/recipes/pasta-parmesan-5ac78a9e30006c7d4b19dfe2' },
  { query:'Pasta', id: 7, path: 'www.bonappetit.com', title: 'Fresh Pasta Dough Recipe | Bon Appetit', date: '04 December 2018', description: 'This pasta dough is easy, texturally resilient, and versatile enough to form into any shape.', link: 'https://www.bonappetit.com/recipe/fresh-pasta-dough' },
  { query:'Pasta', id: 8, path: 'www.foodnetwork.com', title: 'Pasta Recipes : Food Network | Food Network', date: '11 June 2019', description: 'Find pasta recipes, videos, and ideas from Food Network.', link: 'https://www.foodnetwork.com/topics/pasta' },
  { query:'Pasta', id: 9, path: 'www.thechunkychef.com', title: 'One Pot Chicken Parmesan Pasta - The Chunky Chef', date: 'Aug 30, 2017', description: 'I opted to omit the breading here¦ to save calories, recipe steps, and to ... You can make this one pot chicken parmesan pasta in any large ...', link: 'https://www.thechunkychef.com/one-pot-chicken-parmesan-pasta/' },
  { query:'Pasta', id: 10, path: 'damndelicious.net', title: 'One Pot Garlic Parmesan Pasta - Damn Delicious', date: 'Oct 11, 2014', description: 'One Pot Garlic Parmesan Pasta - The easiest and creamiest pasta made in a single pot - even the pasta gets ... Did you Make This Recipe?', link: 'https://damndelicious.net/2014/10/11/one-pot-garlic-parmesan-pasta/' },
  { query:'Fufu', id: 1, path: 'www.thespruceeats.com', title: 'African Fufu Recipe', date: 'Nov 19, 2018', description: 'Fufu is a traditional food from West Africa and the Caribbean, similar to a dumpling. Make this African fufu recipe using a food processor.', link: 'https://www.thespruceeats.com/yam-fufu-2138088' },
  { query:'Fufu', id: 2, path: 'www.allrecipes.com', title: 'Fufu Recipe - Allrecipes.com', date: '11 June 2019', description: 'Fufu. Rated as 4.83 out of 5 Stars. 18 made it | 5 reviews | 2 photos. 0. Recipe by: SUGARBABYRAVAEOVE. "This is a very good dish. It is Ghanaian, and it ...', link: 'https://www.allrecipes.com/recipe/60516/fufu/' },
  { query:'Fufu', id: 3, path: 'www.youtube.com', title: 'Fufu Recipe- African food Recipe - YouTube', date: 'Jun 14, 2011', description: 'Printable recipe: http://www.kadiafricanrecipes.com To or toh is a popular staple in west Africa. It is usually served with an okra soup and taste ...', link: 'https://www.youtube.com/watch?v=6oOFXlK4ioY' },
  { query:'Fufu', id: 4, path: 'www.foodnetwork.com', title: 'Fufu Recipe | Food Network', date: '17 July 2020', description: 'Get Fufu Recipe from Food Network. ... Fufu. Getting reviews... Save Recipe. Level: Intermediate. Total: 1 hr 30 min; Active: 30 min. Yield: 12 to 14 servings.', link: 'https://www.foodnetwork.com/recipes/fufu-5510059' },
  { query:'Fufu', id: 5, path: 'www.allnigerianrecipes.com', title: 'Nigerian Fufu Recipes | All Nigerian Food Recipes', date: '04 December 2018', description: 'Fufu recipes are eaten with the various Nigerian soup recipes. Fufu is derived by mashing starchy foods or mixing the processed starchy foods in hot water.', link: 'https://www.allnigerianrecipes.com/fufu-recipes/' },
  { query:'Fufu', id: 6, path: 'www.sbs.com.au', title: 'Fufu recipe : SBS Food', date: '11 June 2019', description: 'Fufu is a staple across West Africa. Resourceful African expats have been known to use instant potato or semolina as a substitute, but the yam flour used for the ...', link: 'https://www.sbs.com.au/food/recipes/fufu' },
  { query:'Fufu', id: 7, path: 'www.preciouscore.com', title: 'HOW TO MAKE WATER FUFU FROM SCRATCH - CASSAVA FUFU ...', date: 'Jul 14, 2017', description: ' Best recipe for how to make water fufu or cassava fufu from scratch. Enjoy with any soup of choice. Fufu and eru is so delicious!', link: 'https://www.preciouscore.com/water-fufu-cassava-fufu/' },
  { query:'Fufu', id: 8, path: 'www.africanbites.com', title: 'Ugali (Corn Fufu) - Immaculate Bites', date: '04 December 2018', description: 'Jan 14, 2015 ... Jump to Recipe Print Recipe. Ugali (Corn Fufu). Easy to prep, soft, very delightful and filling side dish. A perfect cornmeal side dish for greens ...', link: 'https://www.africanbites.com/ugali-corn-fufu/' },
  { query:'Fufu', id: 9, path: 'www.pbs.org', title: 'Pounded Yam (Fufu) Recipe | Side Dish Recipes | PBS Food', date: 'Oct 23, 2013', description: '"Pounded Yam (Fufu). Recipe courtesy of The Meaning of Food. fu_fu. Pounded Yam is a popular African dish similar to mashed potatoes but heavier. Pounded ..."', link: 'http://www.pbs.org/food/recipes/pounded-yam-fufu/' },
  { query:'Fufu', id: 10, path: 'buzzghana.com', title: 'African Fufu: 10 Delicious Ways to Eat this Recipe', date: 'Oct 2, 2018 ', description: '"Fufu, foufou, foofoo or foutou is a staple starchy dish for African countries, ... Read more about this African food, fufu recipe, pounded yam fufu, favorite soup or ..."', link: 'https://buzzghana.com/african-fufu/' },
  { query:'Hamburger', id: 1, path: 'www.iheartnaptime.net', title: 'The BEST EVER Hamburger Recipe - I Heart Naptime', date: 'Jun 25, 2018', description: 'The BEST hamburger recipe that\'s super simple and tastes absolutely delicious! Perfect for Summer BBQ\'s or get-togethers. Makes the most ...', link: 'https://www.iheartnaptime.net/hamburger-recipe/' },
  { query:'Hamburger', id: 2, path: 'www.allrecipes.com', title: 'Juiciest Hamburgers Ever Recipe - Allrecipes.com', date: 'Oct 23, 2013', description: 'Juicy, flavorful burgers - just what you need for a perfect summer evening in the back yard!', link: 'https://www.allrecipes.com/recipe/49404/juiciest-hamburgers-ever/' },
  { query:'Hamburger', id: 3, path: 'www.myrecipes.com', title: 'The Classic Burger Recipe | MyRecipes', date: 'Oct 2, 2018 ', description: 'Sink your teeth into a delicious restaurant-style, hamburger recipe made from lean beef. Skip the prepackaged patties and take the extra time to craft up your ...', link: 'https://www.myrecipes.com/recipe/classic-burger' },
  { query:'Hamburger', id: 4, path: 'www.allrecipes.com', title: 'Hamburger Recipes - Allrecipes.com', date: 'Jun 10, 2018', description: 'Best burgers for your BBQ. Click for more than 220 hamburger recipes, with cooking tips from home grillers.', link: 'https://www.allrecipes.com/recipes/473/main-dish/burgers/hamburgers/' },
  { query:'Hamburger', id: 5, path: 'www.recipetineats.com', title: 'Big, Juicy Hamburgers | RecipeTin Eats', date: 'May 25, 2018', description: 'If you\'ve been adding breadrumbs, egg and flavourings into your hamburger patties, this hamburger recipe is going to be a revelation. Because ...', link: 'https://www.recipetineats.com/hamburger-recipe/' },
  { query:'Hamburger', id: 6, path: 'www.tasteofhome.com', title: 'All-American Hamburgers Recipe | Taste of Home', date: '02 December 2019', description: 'We do a lot of camping and outdoor cooking. This all-American, homemade hamburger recipe is on our menu more than any other food. Diane Hixon ...', link: 'https://www.tasteofhome.com/recipes/all-american-hamburgers/' },
  { query:'Hamburger', id: 7, path: 'thesaltymarshmallow.com', title: 'One Pot Homemade Hamburger Helper - The Salty Marshmallow', date: 'Jul 11, 2018', description: 'I love a good one pot recipe too. One pot meals like my Homemade Hamburger Helper and this One Pot Creamy Parmesan Chicken and Rice ...', link: 'https://thesaltymarshmallow.com/one-pot-homemade-hamburger-helper/' },
  { query:'Hamburger', id: 8, path: 'www.aforkstale.com', title: 'Easy Salisbury Hamburger Recipe', date: 'Sep 23, 2018', description: 'If you love Salisbury steak, then you will love this making this easy Salisbury Hamburger Recipe. Serve it with a side of creamy mashed ...', link: 'https://www.aforkstale.com/easy-salisbury-hamburger-recipe/' },
  { query:'Hamburger', id: 9, path: 'www.tastesoflizzyt.com', title: 'Butter Burger Recipe {Low Carb Keto Hamburger Recipe for ...', date: 'Jun 20, 2018', description: 'The juiciest burger you\'ve ever had! This keto butter burger recipe had a simple, yet amazing flavor. Grill or pan fry for the best burger recipe ...', link: 'https://www.tastesoflizzyt.com/butter-burger-recipe/' },
  { query:'Hamburger', id: 10, path: 'cooking.nytimes.com', title: 'Hamburgers (Tavern Style) Recipe - NYT Cooking', date: '30/03/2019', description: 'Here is the hamburger you get in better taverns and bars, plump and juicy, ... ', link: 'https://cooking.nytimes.com/recipes/1016596-hamburgers-tavern-style' },
  { query:'Shawarma', id: 1, path: 'www.themediterraneandish.com', title: 'Easy Chicken Shawarma Recipe (Video) | The Mediterranean Dish', date: '04 December 2018', description: 'Easy, healthy, homemade chicken shawarma recipe! Serve it in pita pockets with tahini sauce and this lazy salad, and call it dinner! Be sure to check out the ...', link: 'https://www.themediterraneandish.com/chicken-shawarma-recipe/' },
  { query:'Shawarma', id: 2, path: 'cooking.nytimes.com', title: 'Oven-Roasted Chicken Shawarma Recipe - NYT Cooking', date: '11 June 2019', description: 'Here is a recipe for an oven-roasted version of the classic street-side flavor bomb usually ... Featured in: Chicken Shawarma Deluxe, No Rotisserie Required.', link: 'https://cooking.nytimes.com/recipes/1017161-oven-roasted-chicken-shawarma' },
  { query:'Shawarma', id: 3, path: 'toriavey.com', title: 'Chicken Shawarma Recipe - How to Make Shawarma at Home', date: 'Aug 15, 2012 ', description: 'Recipe and Video - How to make homemade chicken shawarma in the oven or on the grill. Simple spice marinade and recipe. Middle Eastern.', link: 'https://toriavey.com/toris-kitchen/chicken-shawarma/' },
  { query:'Shawarma', id: 4, path: 'www.recipetineats.com', title: 'Chicken Shawarma (Middle Eastern) | RecipeTin Eats', date: 'Jan 23, 2017', description: 'This Chicken Shawarma recipe is going to knock your socks off! Just a handful of every day spices makes an incredible Chicken Shawarma ...', link: 'https://www.recipetineats.com/chicken-sharwama-middle-eastern/' },
  { query:'Shawarma', id: 5, path: 'www.delish.com', title: 'Best Chicken Shawarma Recipe - How To Make Chicken Shawarma', date: 'Feb 6, 2019', description: 'Chicken Shawarma from Delish.com is served with a delightful garlic yogurt sauce.', link: 'https://www.delish.com/cooking/recipe-ideas/a26092675/best-chicken-shawarma-recipe/' },
  { query:'Shawarma', id: 6, path: 'www.jocooks.com', title: 'Oven Roasted Chicken Shawarma - Jo Cooks', date: 'Nov 28, 2018', description: 'Jump to Recipe Print Recipe. Learn how to make this super Easy Oven Roasted Chicken Shawarma, plus an out of this world garlic sauce and ...', link: 'https://www.jocooks.com/recipes/oven-roasted-chicken-shawarma/' },
  { query:'Shawarma', id: 7, path: 'www.foxandbriar.com', title: 'Easy Chicken Shawarma - Fox and Briar', date: 'Aug 7, 2018', description: 'This Easy Chicken Shawarma recipe is oven roasted and packed with flavor for an easy weeknight dinner!', link: 'https://www.foxandbriar.com/easy-chicken-shawarma/' },
  { query:'Shawarma', id: 8, path: 'feelgoodfoodie.net', title: 'Beef Shawarma Wrap | FeelGoodFoodie', date: 'May 17, 2018', description: 'Shawarma is one of the most popular street foods, and especially so in the Middle East. My beef shawarma recipe is an easy one you can ...', link: 'https://feelgoodfoodie.net/recipe/beef-shawarma/' },
  { query:'Shawarma', id: 9, path: 'www.myrecipes.com', title: 'Chicken Shawarma Recipe | MyRecipes', date: '17 July 2020', description: 'Shawarma is a Middle Eastern dish of garlicky meat or poultry served on pitas. This quick and easy chicken recipe is one the whole family will love. It adds ...', link: 'https://www.myrecipes.com/recipe/chicken-shawarma' },
  { query:'Shawarma', id: 10, path: 'tastesbetterfromscratch.com', title: 'Chicken Shawarma Bowls - Tastes Better from Scratch', date: '04 December 2018', description: 'This middle eastern inspired Chicken shawarma recipe is easy to make from home, it\'s healthy and packed with awesome flavor.', link: 'https://tastesbetterfromscratch.com/chicken-shawarma-bowls/' },
  { query:'Kimchi', id: 1, path: 'www.thekitchn.com', title: 'How To Make Easy Kimchi at Home | Kitchn', date: 'May 15, 2013', description: 'I still have a lot to learn from Mom when it comes to kimchi-making (there are over a hundred different kinds!) but the recipe for mak kimchi, ...', link: 'https://www.thekitchn.com/how-to-make-easy-kimchi-at-home-189390' },
  { query:'Kimchi', id: 2, path: 'cooking.nytimes.com', title: 'Kimchi Recipe - NYT Cooking', date: 'Nov 19, 2018', description: 'You don\'t need stoneware crocks or special jars to make kimchi You do ... Unlock New York Times recipes and your personal recipe box with a free account.', link: 'https://cooking.nytimes.com/recipes/1016209-kimchi' },
  { query:'Kimchi', id: 3, path: 'www.epicurious.com', title: 'Traditional Napa Cabbage Kimchi recipe | Epicurious.com', date: '11 June 2019', description: 'When Koreans say "kimchi," this is the kind that comes to everyone\'s minds. Editor\'s note: The recipe and introductory text below are excerpted from Eating ...', link: 'https://www.epicurious.com/recipes/food/views/traditional-napa-cabbage-kimchi-233839' },
  { query:'Kimchi', id: 4, path: 'norecipes.com', title: 'Kimchi Recipe', date: 'Jun 14, 2011', description: 'Recipe. While most people picture a vermilion hue and fiery heat when the word Kimchi is thrown out, did you know that kimchi used to be white before chili ...', link: 'https://norecipes.com/kimchi/' },
  { query:'Kimchi', id: 5, path: 'www.platingsandpairings.com', title: 'Kimchi (Kimchee) | Platings + Pairings', date: 'Jan 7, 2015', description: 'This easy Kimchi recipe will teach you to make authentic Kimchi (Kimchee) at home. It\'s easy to do with these simple steps!', link: 'https://www.platingsandpairings.com/kimchi-kimchee/' },
  { query:'Kimchi', id: 6, path: 'www.myrecipes.com', title: 'Easy Kimchi Recipe | MyRecipes', date: 'May 15, 2013', description: 'Learn how to make this traditional Korean side like a pro.', link: 'https://www.myrecipes.com/recipe/easy-kimchi' },
  { query:'Kimchi', id: 7, path: 'www.youtube.com', title: 'Traditional kimchi recipe (Tongbaechu-kimchi: í†µë°°ì¶”ê¹ì¹˜) - YouTube', date: 'Jun 22, 2014', description: 'This is the classic, spicy, traditional napa cabbage kimchi called tongbaechu-kimchi, aka baechu-kimchi, or pogi-kimchi. But this dish is so ...', link: 'https://www.youtube.com/watch?v=eTucCw1w6Ak' },
  { query:'Kimchi', id: 8, path: 'www.allrecipes.com', title: 'Spicy Cabbage Kimchi Recipe - Allrecipes.com', date: 'Nov 28, 2018', description: '"Kimchi, a popular Korean dish, is best described as a spicy, slightly sweet, pickled or fermented cabbage. I spent a year in South Korea and fell in LOVE with ...', link: 'https://www.allrecipes.com/recipe/105179/spicy-cabbage-kimchi/' },
  { query:'Kimchi', id: 9, path: 'minimalistbaker.com', title: 'Easy Vegan Kimchi | Minimalist Baker Recipes', date: 'Aug 7, 2018', description: 'If you like kimchi, you have to try this vegan version that really is quite easy to master even though it takes longer than most (read: all) of my recipes.', link: 'https://minimalistbaker.com/easy-vegan-kimchi/' },
  { query:'Kimchi', id: 10, path: 'www.foodiewithfamily.com', title: 'Kimchi Recipe, Easy, Fast, Mak Kimchi - Foodie with Family', date: 'Jun 25, 2018', description: 'This fragrant, simple, authentic, healthy Easy, Fast Kimchi Mak Kimchi recipe can be made in any kitchen. This tutorial takes the mystery out of ...', link: 'https://www.foodiewithfamily.com/easy-fast-kimchi-mak-kimchi-recipe/' },
   


]
console.log((resultsData[Math.floor(Math.random()*resultsData.length)]).path);

function filterSearch(query){
const resultsFiltered = resultsData.filter((Rslt) => Rslt.query.toLowerCase() === query.toLowerCase())
console.log(resultsFiltered)
}

filterSearch('rice')

