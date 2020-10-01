class SpotActivity < ApplicationRecord
    belongs_to :spot,
        class_name: :Spot,
        foreign_key: :spot_id
    belongs_to :activity,
        class_name: :Activity,
        foreign_key: :activity_id
    

end
