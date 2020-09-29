
json.extract! spot, :id, :description, :title, :lng, :lat, :price, :moon, :planet, :host_id
json.photoUrls spot.photos.map { |file| url_for(file) }
