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
require 'test_helper'

class AmenityTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
