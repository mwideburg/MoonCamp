# == Schema Information
#
# Table name: spots
#
#  id          :bigint           not null, primary key
#  host_id     :integer          not null
#  price       :integer          not null
#  title       :string           not null
#  moon        :string           not null
#  planet      :string           not null
#  description :string           not null
#  lng         :float            not null
#  lat         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Spot < ApplicationRecord
    has_one_attached :photo
end
