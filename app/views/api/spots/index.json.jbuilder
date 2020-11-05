# debugger
@spots.each do |spot|
# debugger
if @spots.length == 0
    return
end

  json.set! spot.id do
    json.partial! 'spot', spot: spot
    
  end
  
end
# json.array! @spots do |spot|
#   json.extract! spot, :id, :title, :description, :planet, :moon, :price, :lng, :lat
#   json.photoUrl url_for(spot.photo)
# end
