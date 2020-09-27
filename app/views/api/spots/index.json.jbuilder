
@spots.each do |spot|

if @spots.length == 0
    return
end

  json.set! spot do
    json.partial! 'spot', spot: spot
    
  end
  
end
