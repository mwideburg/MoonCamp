# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  spot_id    :integer          not null
#  user_id    :integer          not null
#  content    :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord
    validates :user_id, presence: true
    validates :spot_id, presence: true
    validates :content, presence: true

    belongs_to :user,
        class_name: :User
    belongs_to :spot,
        class_name: :Spot


end
