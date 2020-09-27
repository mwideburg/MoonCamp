# debugger
@spots.each do |spot|
# debugger
if @spots.length == 0
    return
end
# debugger
  json.set! spot do
    json.partial! 'spot', spot: spot
    
  end
  
end
