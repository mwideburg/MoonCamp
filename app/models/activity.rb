# == Schema Information
#
# Table name: activities
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :text
#  icon        :string
#
class Activity < ApplicationRecord
    has_one_attached :photo
   has_many :spot_activities,
        class_name: :SpotActivity,
        foreign_key: :activity_id
    
    
    has_many :spots,
        through: :spot_activities,
        source: :spot
end
