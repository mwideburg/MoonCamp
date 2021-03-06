# == Schema Information
#
# Table name: spot_amenities
#
#  id         :bigint           not null, primary key
#  amenity_id :integer
#  spot_id    :integer
#
class SpotAmenity < ApplicationRecord
    belongs_to :spot,
        class_name: :Spot,
        foreign_key: :spot_id
    belongs_to :amenity,
        class_name: :Amenity,
        foreign_key: :amenity_id
    

end
