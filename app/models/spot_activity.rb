# == Schema Information
#
# Table name: spot_activities
#
#  id          :bigint           not null, primary key
#  spot_id     :integer
#  activity_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class SpotActivity < ApplicationRecord
    belongs_to :spot,
        class_name: :Spot,
        foreign_key: :spot_id
    belongs_to :activity,
        class_name: :Activity,
        foreign_key: :activity_id
    

end
