
class Save < ApplicationRecord
    validates :user_id, presence: true
    validates :spot_id, presence: true

    belongs_to :user,
        class_name: :User
    belongs_to :spot,
        class_name: :Spot


end
