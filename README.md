
# udacity-image-filtering

  
  

# Hostname: 
# http://udacity-image-filtering-dev.us-east-1.elasticbeanstalk.com/

1. Home page
http://udacity-image-filtering-dev.us-east-1.elasticbeanstalk.com/

2. Response 200
http://udacity-image-filtering-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg

3. Response 400: invalid url
http://udacity-image-filtering-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01

4. Response 500: something error
http://udacity-image-filtering-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://example.com/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n0.jpg