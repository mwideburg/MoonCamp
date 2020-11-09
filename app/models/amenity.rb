# == Schema Information
#
# Table name: amenities
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :string
#
class Amenity < ApplicationRecord

    has_one_attached :photo

    has_many :spot_amenities,
        class_name: :SpotAmenity,
        foreign_key: :amenity_id
    
    
    has_many :spots,
        through: :spot_amenities,
        source: :spot

end
