class Amenity < ApplicationRecord

    has_one_attached :photo
    has_many :spot_amenities,
        class_name: :SpotAmenity,
        foreign_key: :spot_id
    
    
    has_many :spots,
        through: :spot_activities,
        source: :spot

end
