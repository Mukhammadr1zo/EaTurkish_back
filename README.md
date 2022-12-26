# Routes
Categories
  /categories => get
  /category => post => (category_name)
  /category/:category_id => delete
  
Foods
  /foods => get
  /food/:food_id => get by id 
  /popularfoods => get popular foods 
  /food => post food => (food_img, food_name, food_price, food_category)
  /food/:food_id => put food by id (img, food_name, food_price, food_category)
  /food/:food_id => delete food by id

News
   /news => get news
   /news/:news_id => get news by id
   /news => post news => (img, news_title, news_desc)
   /news/:news_id => delete news by id
   

   
   



