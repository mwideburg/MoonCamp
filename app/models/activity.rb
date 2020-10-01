class Activity < ApplicationRecord
    has_one_attached :photo
   has_many :spot_activities,
        class_name: :SpotActivity,
        foreign_key: :activity_id
    
    
    has_many :spots,
        through: :spot_activities,
        source: :spot
end
