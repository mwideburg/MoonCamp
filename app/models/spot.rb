# == Schema Information
#
# Table name: spots
#
#  id          :bigint           not null, primary key
#  host_id     :integer          not null
#  price       :integer          not null
#  title       :string           not null
#  moon        :string           not null
#  planet      :string           not null
#  description :string           not null
#  lng         :float            not null
#  lat         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Spot < ApplicationRecord
    validates :host_id, presence: true
    validates :price, presence: true
    validates :title, presence: true
    validates :description, presence: true
    validates :moon, presence: true
    validates :planet, presence: true
    validates :lng, presence: true
    validates :lat, presence: true
    has_many_attached :photos

    belongs_to :host,
        class_name: :User,
        foreign_key: :host_id
    
    # has_many :booking_requests,
    #     class_name: :booking,
    #     foreign_key: :host_id
    
     def in_bounds(bounds)
         # google map bounds will be in the following format:
  # {
  #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
  #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
  # }   
        lat = bounds['lat']
        lng = bounds['lng']
        # debugger
        if( self.lat.to_f > lat[0].to_f || self.lat.to_f < lat[1].to_f) && ( self.lng.to_f < lng[0].to_f || self.lng.to_f > lng[1].to_f)
            # debugger
            return false
        end
        return true
        
    end
    
end
