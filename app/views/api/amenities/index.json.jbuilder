

@amenities.each do |amenity|
if @amenities.length == 0
    return
end
json.set! amenity.id do
    json.extract! amenity, :id, :name, :description
end
  
end