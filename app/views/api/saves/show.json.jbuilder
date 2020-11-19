


json.photoUrls @save.spot.photos.map { |file| url_for(file) }
json.extract! @save.spot, :id, :title, :description, :price, :planet, :rating, :num_reviews
json.extract! @save, :id, :spot_id, :user_id
