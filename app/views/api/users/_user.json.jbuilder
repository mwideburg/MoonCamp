json.extract! user, :id, :firstname, :zipcode, :lastname
if user.photo.attached?
json.photoUrl url_for(user.photo)
end
