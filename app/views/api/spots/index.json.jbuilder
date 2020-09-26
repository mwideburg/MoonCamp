
@spots.each do |spot|
# debugger

# debugger
  json.set! spot do
    json.partial! 'spot', spot: spot
  end
  
end
