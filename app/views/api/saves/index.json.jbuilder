json.save do
  json.partial! '/api/saves/save', save: @save
end

json.spot do
  json.partial! '/api/spots/spot', spot: @like.spot
end
