class Activity < ApplicationRecord
    has_many :spots,
        class_name: :Spot,
        foreign_key: :spot_id
    
end
