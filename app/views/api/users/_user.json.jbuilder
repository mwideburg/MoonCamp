json.extract! user, :id, :firstname, :zipcode, :lastname
json.photoUrl url_for(user.photo)